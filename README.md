# Ghana CyberSim Labs

This project includes HackTheBox-style offensive labs:

- `labs/sqli-momo/` — vulnerable Flask + SQLite target app
- `lab-manager/` — Dockerode-based provisioning and signed reverse proxy service
- `app/(app)/labs/` and `app/api/labs/` — Next.js lab UI and authenticated API integration

## Build the Vulnerable Target

```bash
docker build -t ghana-cybersim/sqli-momo:latest labs/sqli-momo
docker build -t ghana-cybersim/cmdi-netcheck:latest labs/cmdi-netcheck
```

The target exposes `/health`, `/lookup`, and `/api/lookup`. The vulnerable parameter is `phone`.

## Run the Lab Manager

```bash
cd lab-manager
cp .env.example .env
npm install
npm start
```

The manager creates a private internal Docker network per student instance, starts the target container with memory/CPU limits, and returns a signed `/lab-proxy/{instanceId}/{token}` URL.

## Configure Next.js

Add these to `.env.local`:

```bash
LAB_MANAGER_URL="http://localhost:4010"
LAB_MANAGER_API_KEY="replace-with-a-shared-secret"
```

For a hosted Next.js app, do not leave `LAB_MANAGER_URL` pointed at
`http://localhost:4010` unless the Next.js server and lab manager run on the
same machine. On Vercel or other serverless hosts, `localhost` is the hosted
function itself, so starting a lab will fail with a network error.

Production labs need a separate Docker-enabled VPS:

1. Build the lab images on the VPS.
2. Run `lab-manager/` on that VPS.
3. Put the lab manager behind HTTPS, for example `https://labs.example.com`.
4. Set the hosted Next.js app env vars:

```bash
LAB_MANAGER_URL="https://labs.example.com"
LAB_MANAGER_API_KEY="the-same-strong-secret-used-by-lab-manager"
```

5. In `lab-manager/.env`, set:

```bash
PROXY_PUBLIC_BASE_URL="https://labs.example.com"
LAB_MANAGER_API_KEY="the-same-strong-secret-used-by-next"
PROXY_TOKEN_SECRET="another-long-random-secret"
```

Then redeploy the Next.js app so the hosted environment receives the updated
server-side variables.

Then apply the Prisma schema and seed the lab:

```bash
npm run db:generate
npx prisma db push
npm run db:seed
```

## Student Flow

1. Visit `/labs`
2. Open `PesaLink Mobile Money SQL Injection`
3. Click `Start Lab`
4. Exploit the transaction lookup in the embedded target
5. Submit the recovered `CYBERSIM{...}` flag
6. Click `End Lab` when finished

Instructor solution details are in `labs/sqli-momo/README.md`.
# ghana-cybersim
