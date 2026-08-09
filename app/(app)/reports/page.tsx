import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, FileText, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Performance Reports",
  description: "Review your cyberattack simulation performance, scores, and strategic recommendations.",
};

export default async function ReportsPage() {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });

  const dbUser = user.primaryEmail
    ? await prisma.user.findUnique({
        where: { email: user.primaryEmail },
        include: {
          reports: {
            include: {
              simulation: {
                include: {
                  scenario: true,
                },
              },
            },
            orderBy: { completedAt: "desc" },
          },
        },
      })
    : null;

  const reports = dbUser?.reports ?? [];
  const reportCount = reports.length;
  const avgRiskReduced =
    reportCount > 0
      ? Math.round(reports.reduce((acc, r) => acc + r.riskReduced, 0) / reportCount)
      : 0;
  const bestScore = reportCount > 0 ? Math.max(...reports.map((r) => r.score)) : 0;

  const reportMetrics = [
    { value: `${reportCount}`, label: "Reports generated", icon: FileText, color: "var(--accent-blue)" },
    { value: `${avgRiskReduced}%`, label: "Average risk reduction", icon: ShieldCheck, color: "var(--accent-teal)" },
    { value: bestScore.toLocaleString(), label: "Best score", icon: Trophy, color: "var(--accent-amber)" },
  ];

  return (
    <section className="mx-auto max-w-6xl space-y-5">
      <div>
        <p className="section-title">Reports</p>
        <h1 className="mt-2 text-3xl font-bold">Simulation Results</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Review scores, response quality, and recommended next actions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reportMetrics.map(({ value, label, icon: Icon, color }) => (
          <div key={label} className="metric-card p-5" style={{ "--metric-color": color } as CSSProperties}>
            <Icon size={22} style={{ color }} />
            <p className="mt-4 text-2xl font-black">{value}</p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">{label}</p>
          </div>
        ))}
      </div>

      <div className="panel overflow-hidden">
        <div className="border-b border-[var(--border-subtle)] px-5 py-4">
          <p className="font-bold">Recent Reports</p>
        </div>

        {reports.length === 0 ? (
          <div className="p-10 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
              <Sparkles size={24} />
            </div>
            <p className="text-sm font-semibold">No report cards generated yet</p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Complete a simulation run to view your incident response score and strategic recommendations.
            </p>
            <Link href="/scenarios" className="cyber-button-primary mt-5 inline-flex">
              Start a Simulation
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[var(--border-subtle)]">
            {reports.map((report) => (
              <Link
                key={report.id}
                href={`/reports/${report.id}`}
                className="grid gap-3 px-5 py-4 text-sm transition-colors hover:bg-[rgba(255,255,255,0.035)] md:grid-cols-[1fr_120px_120px_auto] md:items-center"
              >
                <span>
                  <span className="block font-semibold">{report.simulation.scenario.title}</span>
                  <span className="mt-1 block text-xs text-[var(--text-muted)]">
                    {new Date(report.completedAt).toLocaleDateString()}
                  </span>
                </span>
                <span>Score: {report.score}</span>
                <span className="text-[var(--text-secondary)]">{report.riskReduced}% reduced</span>
                <ArrowRight size={16} className="text-[var(--accent-violet)]" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
