import { notFound } from "next/navigation";
import {
  Clock,
  Database,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Flag,
  ChevronRight,
  Wifi,
  Globe,
  Lock,
  Shield,
  Target,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";
import LabInstanceControls from "./LabInstanceControls";

type Props = {
  params: Promise<{ instanceId: string }>;
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  WEB_ATTACKS: <Globe size={14} />,
  NETWORK_ATTACKS: <Wifi size={14} />,
  APPLICATION_ATTACKS: <Terminal size={14} />,
  PRIVILEGE_ESCALATION: <Lock size={14} />,
  GHANA_FOCUS: <Shield size={14} />,
  OTHER: <Database size={14} />,
};

const STATUS_STYLE: Record<string, { bg: string; color: string; dot: string }> = {
  READY: { bg: "rgba(34,199,169,0.14)", color: "var(--accent-teal)", dot: "#22c7a9" },
  ACTIVE: { bg: "rgba(34,199,169,0.14)", color: "var(--accent-teal)", dot: "#22c7a9" },
  PROVISIONING: { bg: "rgba(240,163,58,0.14)", color: "var(--accent-amber)", dot: "#f0a33a" },
  PENDING: { bg: "rgba(240,163,58,0.14)", color: "var(--accent-amber)", dot: "#f0a33a" },
  FAILED: { bg: "rgba(255,87,87,0.14)", color: "var(--accent-red)", dot: "#ff5757" },
  EXPIRED: { bg: "rgba(100,113,136,0.2)", color: "var(--text-muted)", dot: "#647188" },
  STOPPED: { bg: "rgba(100,113,136,0.2)", color: "var(--text-muted)", dot: "#647188" },
  COMPLETED: { bg: "rgba(49,213,119,0.14)", color: "var(--accent-green)", dot: "#31d577" },
};

export default async function LabInstancePage({ params }: Props) {
  const { instanceId } = await params;
  const hexUser = await hexclaveServerApp.getUser({ or: "redirect" });
  const dbUser = await getOrCreateDbUser(hexUser);

  const instance = await prisma.labInstance.findUnique({
    where: { id: instanceId },
    include: { lab: true },
  });

  if (!instance || instance.userId !== dbUser.id) {
    notFound();
  }

  const statusStyle = STATUS_STYLE[instance.status] ?? STATUS_STYLE.ACTIVE;
  const isProvisioning = ["PROVISIONING", "PENDING"].includes(instance.status);

  return (
    <section className="mx-auto max-w-7xl space-y-5 animate-fade-in-up">
      {/* ── Breadcrumb ─────────────────────────────── */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <Link href="/labs" className="hover:text-[var(--text-secondary)] transition-colors">
          Labs
        </Link>
        <ChevronRight size={12} />
        <Link
          href={`/labs/${instance.lab.slug}`}
          className="hover:text-[var(--text-secondary)] transition-colors"
        >
          {instance.lab.title}
        </Link>
        <ChevronRight size={12} />
        <span className="text-[var(--text-secondary)]">Active Instance</span>
      </nav>

      {/* ── Header ─────────────────────────────────── */}
      <div className="panel relative overflow-hidden p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,199,169,0.07),transparent_55%)]" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="section-title">Active Lab</span>
              <span
                className="status-pill"
                style={{ background: statusStyle.bg, color: statusStyle.color }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: statusStyle.dot,
                    boxShadow: `0 0 6px ${statusStyle.dot}`,
                    animation: isProvisioning ? "threat-ping 1.5s ease-out infinite" : undefined,
                  }}
                />
                {instance.status}
              </span>
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl">{instance.lab.title}</h1>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              {instance.lab.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] px-3 py-1.5">
              {CATEGORY_ICONS[instance.lab.category] ?? <Database size={13} />}
              <span className="text-[var(--text-secondary)]">{instance.lab.category}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(240,163,58,0.3)] bg-[rgba(240,163,58,0.08)] px-3 py-1.5 text-[var(--accent-amber)]">
              <Flag size={13} />
              {instance.lab.points} pts
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Grid ──────────────────────────────── */}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* Left: Embedded target */}
        <div className="panel overflow-hidden">
          {/* Frame toolbar */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,95,87,0.7)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(254,188,46,0.7)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(40,200,64,0.7)]" />
              </div>
              <span className="ml-2 font-mono text-[10px] text-[var(--text-muted)]">
                {instance.accessUrl ?? "provisioning…"}
              </span>
            </div>
            {instance.accessUrl && (
              <a
                href={instance.accessUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)] transition-all hover:border-[rgba(109,93,252,0.4)] hover:text-white"
              >
                <ExternalLink size={11} />
                Open in tab
              </a>
            )}
          </div>

          {/* iframe or provisioning state */}
          {instance.accessUrl ? (
            <iframe
              src={instance.accessUrl}
              className="h-[620px] w-full border-0"
              title={`${instance.lab.title} target`}
              referrerPolicy="no-referrer"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          ) : (
            <div className="flex h-[620px] flex-col items-center justify-center gap-4 text-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(240,163,58,0.3)] bg-[rgba(240,163,58,0.08)]">
                <AlertCircle size={28} className="text-[var(--accent-amber)]" />
                <span
                  className="absolute inset-0 rounded-full border border-[rgba(240,163,58,0.4)]"
                  style={{ animation: "threat-ping 2s ease-out infinite" }}
                />
              </div>
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  Container provisioning…
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Your isolated lab environment is being set up. This usually takes 15–30 seconds.
                </p>
              </div>
              <p className="text-xs text-[var(--text-muted)]">Refresh the page once the status shows READY.</p>
            </div>
          )}
        </div>

        {/* Right: Controls sidebar */}
        <aside className="space-y-5">
          {/* Target info */}
          {instance.accessUrl && (
            <div className="panel p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(47,134,255,0.12)] text-[var(--accent-blue)]">
                  <Database size={14} />
                </div>
                Target Access
              </div>
              <p className="mb-4 text-xs leading-5 text-[var(--text-secondary)]">
                Use the embedded browser or open the target in a new tab to use external tools.
              </p>
              <div className="mb-3 rounded-lg border border-[rgba(47,134,255,0.2)] bg-[rgba(5,9,20,0.6)] px-3 py-2">
                <p className="font-mono text-[10px] text-[var(--text-muted)] break-all">
                  {instance.accessUrl}
                </p>
              </div>
              <a
                href={instance.accessUrl}
                target="_blank"
                rel="noreferrer"
                className="cyber-button-secondary w-full inline-flex items-center justify-center gap-2"
              >
                Open in New Tab
                <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* Timer + flag submit + end */}
          <LabInstanceControls
            instanceId={instance.id}
            labSlug={instance.lab.slug}
            expiresAt={instance.expiresAt.toISOString()}
            initialStatus={instance.status}
          />

          {/* Hints panel */}
          <div className="panel p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(109,93,252,0.12)] text-[var(--accent-violet)]">
                <BookOpen size={14} />
              </div>
              Quick Tips
            </div>
            <ul className="space-y-2">
              {[
                "Try all input fields for injection points",
                "Check HTTP response headers for clues",
                "Use the browser dev tools to inspect requests",
                "Flag format: CYBERSIM{...}",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--accent-violet)]">
                    <Target size={11} />
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Lab info footer */}
          <div className="panel p-4">
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <ShieldCheck size={13} className="text-[var(--accent-teal)]" />
              <span>
                Isolated Docker container · private network · auto-destroys after{" "}
                {instance.lab.maxDurationMin} min
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
