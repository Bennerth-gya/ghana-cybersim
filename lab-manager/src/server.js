import crypto from "node:crypto";
import http from "node:http";
import { URL } from "node:url";

import Docker from "dockerode";
import express from "express";

const PORT = Number(process.env.PORT ?? "4010");
const DOCKER_SOCKET_PATH = process.env.DOCKER_SOCKET_PATH ?? "/var/run/docker.sock";
const DEFAULT_TTL_MINUTES = Number(process.env.DEFAULT_TTL_MINUTES ?? "60");
const INSTANCE_MEMORY_MB = Number(process.env.INSTANCE_MEMORY_MB ?? "256");
const INSTANCE_NANO_CPUS = Number(process.env.INSTANCE_NANO_CPUS ?? "500000000");
const TARGET_CONTAINER_PORT = Number(process.env.TARGET_CONTAINER_PORT ?? "8000");
const PROXY_PUBLIC_BASE_URL = process.env.PROXY_PUBLIC_BASE_URL ?? `http://localhost:${PORT}`;
const PROXY_TOKEN_SECRET = process.env.PROXY_TOKEN_SECRET ?? "replace-this-secret";
const LAB_MANAGER_API_KEY = process.env.LAB_MANAGER_API_KEY ?? "";
const REAPER_INTERVAL_MS = 60_000;
const READY_TIMEOUT_MS = Number(process.env.READY_TIMEOUT_MS ?? "30000");

const docker = new Docker({ socketPath: DOCKER_SOCKET_PATH });
const app = express();
const instances = new Map();

app.use(express.json({ limit: "32kb" }));

function parseAllowedImages() {
  const raw = process.env.ALLOWED_LAB_IMAGES ?? "sqli-momo=ghana-cybersim/sqli-momo:latest";
  const pairs = raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  const allowed = new Map();
  for (const pair of pairs) {
    const [labId, image] = pair.split("=").map((part) => part.trim());
    if (labId && image) {
      allowed.set(labId, image);
    }
  }
  return allowed;
}

const allowedImages = parseAllowedImages();

function requireManagerKey(req, res, next) {
  if (!LAB_MANAGER_API_KEY) {
    return next();
  }

  if (req.get("x-lab-manager-key") !== LAB_MANAGER_API_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }

  return next();
}

function createInstanceId() {
  return `lab_${crypto.randomUUID().replaceAll("-", "")}`;
}

function createToken(instanceId, expiresAt) {
  const expiresAtMs = new Date(expiresAt).getTime();
  const signature = crypto
    .createHmac("sha256", PROXY_TOKEN_SECRET)
    .update(`${instanceId}.${expiresAtMs}`)
    .digest("base64url");

  return `${expiresAtMs}.${signature}`;
}

function verifyToken(instance, token) {
  if (!token || Date.now() >= new Date(instance.expiresAt).getTime()) {
    return false;
  }

  const expected = createToken(instance.id, instance.expiresAt);
  const expectedBuffer = Buffer.from(expected);
  const tokenBuffer = Buffer.from(token);
  return (
    expectedBuffer.length === tokenBuffer.length &&
    crypto.timingSafeEqual(expectedBuffer, tokenBuffer)
  );
}

function buildAccessUrl(instance) {
  const token = createToken(instance.id, instance.expiresAt);
  return `${PROXY_PUBLIC_BASE_URL.replace(/\/$/, "")}/lab-proxy/${instance.id}/${token}/`;
}

function labelsFor(instanceId, labId, userId, expiresAt, networkName) {
  return {
    "ghana-cybersim.managed": "true",
    "ghana-cybersim.instance-id": instanceId,
    "ghana-cybersim.lab-id": labId,
    "ghana-cybersim.user-id": userId,
    "ghana-cybersim.expires-at": expiresAt,
    "ghana-cybersim.network": networkName,
  };
}

async function waitForHealth(host, port) {
  const deadline = Date.now() + READY_TIMEOUT_MS;
  let lastError = null;

  while (Date.now() < deadline) {
    try {
      await requestHealth(host, port);
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  throw lastError ?? new Error("container did not become healthy");
}

function requestHealth(host, port) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        host,
        port,
        path: "/health",
        timeout: 2000,
      },
      (res) => {
        res.resume();
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve();
        } else {
          reject(new Error(`health returned ${res.statusCode}`));
        }
      },
    );

    req.on("timeout", () => {
      req.destroy(new Error("health request timed out"));
    });
    req.on("error", reject);
  });
}

function getContainerIp(inspectInfo, networkName) {
  return inspectInfo.NetworkSettings?.Networks?.[networkName]?.IPAddress;
}

async function removeContainer(containerId) {
  if (!containerId) return;

  try {
    const container = docker.getContainer(containerId);
    await container.stop({ t: 0 }).catch(() => undefined);
    await container.remove({ force: true }).catch(() => undefined);
  } catch {
    // Best-effort cleanup: the reaper should continue even if Docker already removed it.
  }
}

async function removeNetwork(networkName) {
  if (!networkName) return;

  try {
    await docker.getNetwork(networkName).remove();
  } catch {
    // Network may already be gone; cleanup stays idempotent.
  }
}

async function destroyInstance(instance, status = "DESTROYED") {
  await removeContainer(instance.containerId);
  await removeNetwork(instance.networkName);

  const updated = {
    ...instance,
    status,
    destroyedAt: new Date().toISOString(),
  };
  instances.set(instance.id, updated);
  return updated;
}

async function loadManagedContainers() {
  const containers = await docker.listContainers({
    all: true,
    filters: {
      label: ["ghana-cybersim.managed=true"],
    },
  });

  for (const summary of containers) {
    const labels = summary.Labels ?? {};
    const instanceId = labels["ghana-cybersim.instance-id"];
    const networkName = labels["ghana-cybersim.network"];
    const expiresAt = labels["ghana-cybersim.expires-at"];
    const labId = labels["ghana-cybersim.lab-id"];
    const userId = labels["ghana-cybersim.user-id"];

    if (!instanceId || !networkName || !expiresAt || !labId || !userId) {
      continue;
    }

    const inspectInfo = await docker.getContainer(summary.Id).inspect().catch(() => null);
    const host = inspectInfo ? getContainerIp(inspectInfo, networkName) : "";
    const status = summary.State === "running" ? "RUNNING" : "EXPIRED";
    const instance = {
      id: instanceId,
      labId,
      userId,
      status,
      containerId: summary.Id,
      networkName,
      targetHost: host,
      targetPort: TARGET_CONTAINER_PORT,
      expiresAt,
      createdAt: new Date(summary.Created * 1000).toISOString(),
      accessUrl: "",
    };
    instance.accessUrl = buildAccessUrl(instance);
    instances.set(instanceId, instance);
  }
}

async function createLabInstance({ labId, userId }) {
  const image = allowedImages.get(labId);
  if (!image) {
    const allowedLabIds = [...allowedImages.keys()];
    const error = new Error("lab image is not allowed");
    error.statusCode = 400;
    error.details = { allowedLabIds };
    throw error;
  }

  const instanceId = createInstanceId();
  const networkName = `gcs_${instanceId}`;
  const expiresAt = new Date(Date.now() + DEFAULT_TTL_MINUTES * 60_000).toISOString();
  const labels = labelsFor(instanceId, labId, userId, expiresAt, networkName);

  // Critical isolation: every instance gets a private internal Docker network.
  // Docker's Internal flag disables external routing, so compromised lab
  // containers cannot use the instance network for internet egress.
  const network = await docker.createNetwork({
    Name: networkName,
    Driver: "bridge",
    Internal: true,
    Labels: labels,
  });

  let container;
  try {
    container = await docker.createContainer({
      Image: image,
      Labels: labels,
      ExposedPorts: {
        [`${TARGET_CONTAINER_PORT}/tcp`]: {},
      },
      HostConfig: {
        NetworkMode: networkName,
        Memory: INSTANCE_MEMORY_MB * 1024 * 1024,
        NanoCpus: INSTANCE_NANO_CPUS,
        PidsLimit: 128,
        CapDrop: ["ALL"],
        SecurityOpt: ["no-new-privileges:true"],
      },
    });

    await container.start();
    const inspectInfo = await container.inspect();
    const targetHost = getContainerIp(inspectInfo, networkName);
    if (!targetHost) {
      throw new Error("container started without an instance network IP");
    }

    await waitForHealth(targetHost, TARGET_CONTAINER_PORT);

    const instance = {
      id: instanceId,
      labId,
      userId,
      status: "RUNNING",
      containerId: container.id,
      networkName,
      targetHost,
      targetPort: TARGET_CONTAINER_PORT,
      expiresAt,
      createdAt: new Date().toISOString(),
      accessUrl: "",
    };
    instance.accessUrl = buildAccessUrl(instance);
    instances.set(instanceId, instance);

    return instance;
  } catch (error) {
    if (container) {
      await removeContainer(container.id);
    }
    await network.remove().catch(() => undefined);
    throw error;
  }
}

app.post("/instances", requireManagerKey, async (req, res) => {
  const { labId, userId } = req.body ?? {};
  if (!labId || typeof labId !== "string" || !userId || typeof userId !== "string") {
    return res.status(400).json({ error: "labId and userId are required" });
  }

  try {
    const instance = await createLabInstance({ labId, userId });
    return res.status(201).json({
      instanceId: instance.id,
      accessUrl: instance.accessUrl,
      expiresAt: instance.expiresAt,
    });
  } catch (error) {
    console.error("Failed to create lab instance:", error);
    return res.status(error.statusCode ?? 500).json({
      error: error.message ?? "failed to create lab instance",
      details: error.details,
    });
  }
});

app.delete("/instances/:instanceId", requireManagerKey, async (req, res) => {
  const instance = instances.get(req.params.instanceId);
  if (!instance) {
    return res.status(404).json({ error: "not-found" });
  }

  const destroyed = await destroyInstance(instance, "DESTROYED");
  return res.json({ instanceId: destroyed.id, status: "destroyed" });
});

app.get("/instances/:instanceId/status", requireManagerKey, async (req, res) => {
  const instance = instances.get(req.params.instanceId);
  if (!instance) {
    return res.status(404).json({ status: "not-found" });
  }

  if (Date.now() >= new Date(instance.expiresAt).getTime()) {
    instance.status = "EXPIRED";
    return res.json({ status: "expired", expiresAt: instance.expiresAt });
  }

  return res.json({
    status: instance.status === "RUNNING" ? "running" : instance.status.toLowerCase(),
    expiresAt: instance.expiresAt,
  });
});

app.use("/lab-proxy/:instanceId/:token", (req, res) => {
  const instance = instances.get(req.params.instanceId);
  if (!instance || instance.status !== "RUNNING") {
    return res.status(404).send("Lab instance not found");
  }

  if (!verifyToken(instance, req.params.token)) {
    return res.status(403).send("Lab access link is invalid or expired");
  }

  const prefix = `/lab-proxy/${req.params.instanceId}/${req.params.token}`;
  const originalUrl = req.originalUrl.startsWith(prefix)
    ? req.originalUrl.slice(prefix.length)
    : "/";
  const proxyPath = originalUrl || "/";
  const targetUrl = new URL(`http://${instance.targetHost}:${instance.targetPort}${proxyPath}`);

  const proxyReq = http.request(
    {
      host: targetUrl.hostname,
      port: targetUrl.port,
      path: `${targetUrl.pathname}${targetUrl.search}`,
      method: req.method,
      headers: {
        ...req.headers,
        host: `${targetUrl.hostname}:${targetUrl.port}`,
      },
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode ?? 502, proxyRes.headers);
      proxyRes.pipe(res);
    },
  );

  proxyReq.on("error", (error) => {
    console.error("Proxy error:", error);
    if (!res.headersSent) {
      res.status(502).send("Lab target is unavailable");
    } else {
      res.end();
    }
  });

  req.pipe(proxyReq);
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, managedInstances: instances.size });
});

async function reapExpiredInstances() {
  const now = Date.now();
  for (const instance of instances.values()) {
    if (
      instance.status === "RUNNING" &&
      now >= new Date(instance.expiresAt).getTime()
    ) {
      console.log(`Reaping expired lab instance ${instance.id}`);
      await destroyInstance(instance, "EXPIRED");
    }
  }
}

setInterval(() => {
  reapExpiredInstances().catch((error) => {
    console.error("Reaper failed:", error);
  });
}, REAPER_INTERVAL_MS);

await loadManagedContainers();
await reapExpiredInstances();

app.listen(PORT, () => {
  console.log(`Ghana CyberSim lab manager listening on ${PORT}`);
  console.log(`Allowed lab IDs: ${[...allowedImages.keys()].join(", ") || "(none)"}`);
});
