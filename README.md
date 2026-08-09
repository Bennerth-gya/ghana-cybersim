# Ghana CyberSim SQL Injection Lab

This project now includes a complete HackTheBox-style SQL injection lab:

- `labs/sqli-momo/` — vulnerable Flask + SQLite target app
- `lab-manager/` — Dockerode-based provisioning and signed reverse proxy service
- `app/(app)/labs/` and `app/api/labs/` — Next.js lab UI and authenticated API integration

## Build the Vulnerable Target

```bash
docker build -t ghana-cybersim/sqli-momo:latest labs/sqli-momo
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

Then apply the Prisma schema and seed the lab:

```bash
npm run db:generate
npx prisma db push
npx tsx prisma/seed-labs.ts
```

## Student Flow

1. Visit `/labs`
2. Open `PesaLink Mobile Money SQL Injection`
3. Click `Start Lab`
4. Exploit the transaction lookup in the embedded target
5. Submit the recovered `CYBERSIM{...}` flag
6. Click `End Lab` when finished

Instructor solution details are in `labs/sqli-momo/README.md`.
