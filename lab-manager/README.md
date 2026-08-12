# Ghana CyberSim Lab Manager

Standalone Node service that provisions isolated Docker lab instances and proxies signed access URLs to them.

## Build the Target Image

From the project root:

```bash
docker build -t ghana-cybersim/sqli-momo:latest labs/sqli-momo
docker build -t ghana-cybersim/cmdi-netcheck:latest labs/cmdi-netcheck
```

## Run on an Ubuntu VPS

Assumptions: Docker is already installed and the service user can access `/var/run/docker.sock`.

```bash
cd lab-manager
cp .env.example .env
npm install
npm start
```

The default service listens on `http://localhost:4010`.

For production, expose the manager through HTTPS and set `PROXY_PUBLIC_BASE_URL`
to that public origin. The Next.js app should use the same origin for
`LAB_MANAGER_URL`, unless the Next.js server is running on the same VPS and can
reach the manager through a private address.

```bash
PROXY_PUBLIC_BASE_URL=https://labs.example.com
LAB_MANAGER_API_KEY=<same-secret-used-by-next>
PROXY_TOKEN_SECRET=<long-random-secret>
```

For a containerized manager, run it with host networking so it can reach containers on per-instance internal Docker networks:

```bash
docker build -t ghana-cybersim/lab-manager:latest lab-manager
docker run --rm --network host \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --env-file lab-manager/.env \
  ghana-cybersim/lab-manager:latest
```

## API

Create an instance:

```bash
curl -X POST http://localhost:4010/instances \
  -H "Content-Type: application/json" \
  -H "x-lab-manager-key: replace-with-a-shared-secret" \
  -d '{"labId":"sqli-momo","userId":"demo-user"}'
```

Stop an instance:

```bash
curl -X DELETE http://localhost:4010/instances/<instanceId> \
  -H "x-lab-manager-key: replace-with-a-shared-secret"
```

Check status:

```bash
curl http://localhost:4010/instances/<instanceId>/status \
  -H "x-lab-manager-key: replace-with-a-shared-secret"
```

## Isolation Notes

Each lab instance gets its own Docker bridge network with `Internal: true`. That prevents outbound internet egress from the target container and keeps student instances off shared networks. Containers are also started without published ports; students only reach them through `/lab-proxy/{instanceId}/{token}`.

The manager enforces resource controls through Docker host config:

- `Memory`: default 256 MB
- `NanoCpus`: default 0.5 CPU
- `PidsLimit`: 128
- `CapDrop`: all Linux capabilities dropped
- `no-new-privileges`: enabled

The in-process reaper runs every minute and force-removes expired containers and their per-instance networks.
