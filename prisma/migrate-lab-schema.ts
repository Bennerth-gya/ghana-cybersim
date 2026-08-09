/**
 * Manual migration: add new Lab columns that `prisma db push` cannot add
 * non-destructively because there are existing rows.
 *
 * Run once with: npx tsx prisma/migrate-lab-schema.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });
config();

import pg from "pg";

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
if (!connectionString) throw new Error("Missing DIRECT_URL or DATABASE_URL");

const client = new pg.Client({ connectionString });

const steps = [
  // ── Lab table ────────────────────────────────────────────────────────────
  // 1. Drop the old category column (it was an enum-cast mismatch) and recreate as TEXT
  `ALTER TABLE "Lab" DROP COLUMN IF EXISTS "category"`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "category" TEXT NOT NULL DEFAULT 'SQL Injection'`,

  // 2. Add new required columns with safe temporary defaults so the ALTER succeeds
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "dockerImage" TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "flagHash"    TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "timeEstimate" INTEGER NOT NULL DEFAULT 35`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "skills"      TEXT[]  NOT NULL DEFAULT '{}'`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "risk"        TEXT    NOT NULL DEFAULT 'Unauthorized data access'`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "maxDurationMin" INTEGER NOT NULL DEFAULT 60`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "accessType"  TEXT    NOT NULL DEFAULT 'HTTP'`,
  `ALTER TABLE "Lab" ADD COLUMN IF NOT EXISTS "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT now()`,

  // ── LabInstance table ─────────────────────────────────────────────────────
  `ALTER TABLE "LabInstance" ADD COLUMN IF NOT EXISTS "score"          INTEGER NOT NULL DEFAULT 0`,
  `ALTER TABLE "LabInstance" ADD COLUMN IF NOT EXISTS "lastActivityAt" TIMESTAMP(3)`,
  `ALTER TABLE "LabInstance" ADD COLUMN IF NOT EXISTS "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT now()`,
  `ALTER TABLE "LabInstance" ADD COLUMN IF NOT EXISTS "updatedAt"      TIMESTAMP(3) NOT NULL DEFAULT now()`,

  // ── FlagSubmission table ─────────────────────────────────────────────────
  `ALTER TABLE "FlagSubmission" ADD COLUMN IF NOT EXISTS "scoreAwarded" INTEGER NOT NULL DEFAULT 0`,

  // ── Enums (create if missing) ─────────────────────────────────────────────
  `DO $$ BEGIN
     CREATE TYPE "LabAccessType" AS ENUM ('WEB_TERMINAL','SSH','HTTP','GUI');
   EXCEPTION WHEN duplicate_object THEN NULL;
   END $$`,

  `DO $$ BEGIN
     CREATE TYPE "LabInstanceStatus" AS ENUM ('PROVISIONING','COMPLETED','RUNNING','FAILED','EXPIRED','DESTROYED');
   EXCEPTION WHEN duplicate_object THEN NULL;
   END $$`,

  `DO $$ BEGIN
     CREATE TYPE "LabCategory" AS ENUM ('WEB_ATTACKS','NETWORK_ATTACKS','APPLICATION_ATTACKS','PRIVILEGE_ESCALATION','GHANA_FOCUS','OTHER');
   EXCEPTION WHEN duplicate_object THEN NULL;
   END $$`,

  // ── Indexes ───────────────────────────────────────────────────────────────
  `CREATE INDEX IF NOT EXISTS "Lab_category_idx"        ON "Lab"("category")`,
  `CREATE INDEX IF NOT EXISTS "Lab_difficulty_idx"      ON "Lab"("difficulty")`,
  `CREATE INDEX IF NOT EXISTS "LabInstance_score_idx"   ON "LabInstance"("score")`,
  `CREATE INDEX IF NOT EXISTS "LabInstance_expiresAt_idx" ON "LabInstance"("expiresAt")`,

  // ── Wipe stale Lab rows so seed can insert the correct record ─────────────
  // Only deletes rows where dockerImage is still the empty placeholder.
  `DELETE FROM "Lab" WHERE "dockerImage" = ''`,
];

async function main() {
  await client.connect();
  console.log("Connected to database. Running migration steps...\n");

  for (const sql of steps) {
    const preview = sql.trim().slice(0, 80).replace(/\s+/g, " ");
    try {
      await client.query(sql);
      console.log(`  ✓  ${preview}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      // Non-fatal: report and continue (IF NOT EXISTS guards most of these).
      console.warn(`  ⚠  ${preview}\n     → ${msg}`);
    }
  }

  console.log("\nMigration complete. Lab seed data is included in `npm run db:seed`.");
  await client.end();
}

main().catch(async (err) => {
  console.error("Migration failed:", err);
  await client.end();
  process.exit(1);
});
