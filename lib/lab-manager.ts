export type LabProvisionResult = {
  instanceId: string;
  accessUrl: string;
  expiresAt: string;
};

export type LabStatusResult = {
  status: "running" | "expired" | "destroyed" | "not-found" | "failed";
  expiresAt?: string;
};

function managerBaseUrl() {
  const baseUrl = process.env.LAB_MANAGER_URL;
  if (!baseUrl) {
    throw new Error(
      "Missing LAB_MANAGER_URL. In production, set it to the public HTTPS URL of the Docker lab manager service.",
    );
  }

  try {
    return new URL(baseUrl).href.replace(/\/$/, "");
  } catch {
    throw new Error("Invalid LAB_MANAGER_URL. Use an absolute URL such as https://labs.example.com.");
  }
}

function managerHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.LAB_MANAGER_API_KEY) {
    headers["x-lab-manager-key"] = process.env.LAB_MANAGER_API_KEY;
  }

  return headers;
}

async function parseManagerResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        "Lab manager rejected the request. Check that LAB_MANAGER_API_KEY matches in the hosted app and the lab-manager service.",
      );
    }

    const message =
      typeof data.error === "string"
        ? data.error
        : `Lab manager returned ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

function isLoopbackHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]"
  );
}

function labManagerNetworkError(baseUrl: string, cause: unknown) {
  let origin = baseUrl;
  let loopbackHint = "";

  try {
    const url = new URL(baseUrl);
    origin = url.origin;
    if (isLoopbackHost(url.hostname)) {
      loopbackHint =
        " LAB_MANAGER_URL is set to localhost, which only works when the Next.js server and lab manager run on the same machine.";
    }
  } catch {
    // managerBaseUrl validates the URL first, but keep the error helper resilient.
  }

  const causeMessage = cause instanceof Error && cause.message ? ` (${cause.message})` : "";
  return `Unable to reach the lab manager at ${origin}.${loopbackHint} In production, run lab-manager on a Docker-enabled VPS and set LAB_MANAGER_URL to its public HTTPS URL.${causeMessage}`;
}

async function fetchLabManager(path: string, init: RequestInit) {
  const baseUrl = managerBaseUrl();

  try {
    return await fetch(`${baseUrl}${path}`, {
      ...init,
      cache: "no-store",
    });
  } catch (error) {
    throw new Error(labManagerNetworkError(baseUrl, error));
  }
}

export async function provisionLabInstance(
  labSlug: string,
  userId: string,
): Promise<LabProvisionResult> {
  const response = await fetchLabManager("/instances", {
    method: "POST",
    headers: managerHeaders(),
    body: JSON.stringify({ labId: labSlug, userId }),
  });

  return parseManagerResponse<LabProvisionResult>(response);
}

export async function destroyLabInstance(instanceId: string) {
  const response = await fetchLabManager(`/instances/${instanceId}`, {
    method: "DELETE",
    headers: managerHeaders(),
  });

  if (response.status === 404) {
    return { status: "not-found" as const };
  }

  return parseManagerResponse<{ status: "destroyed"; instanceId: string }>(response);
}

export async function getLabInstanceStatus(instanceId: string): Promise<LabStatusResult> {
  const response = await fetchLabManager(`/instances/${instanceId}/status`, {
    method: "GET",
    headers: managerHeaders(),
  });

  if (response.status === 404) {
    return { status: "not-found" };
  }

  return parseManagerResponse<LabStatusResult>(response);
}
