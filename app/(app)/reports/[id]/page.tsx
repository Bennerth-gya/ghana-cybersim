import Link from "next/link";
import type { CSSProperties } from "react";
import { AlertTriangle, CheckCircle2, FileText, ShieldCheck, Timer, Trophy } from "lucide-react";
import PrintReportButton from "@/components/PrintReportButton";
import { prisma } from "@/lib/prisma";

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Fetch report from database
  const report = await prisma.report.findUnique({
    where: { id },
    include: {
      simulation: {
        include: {
          scenario: true,
        },
      },
    },
  });

  if (!report) {
    return (
      <section className="mx-auto max-w-6xl space-y-5">
        <div className="text-center py-12">
          <p className="text-sm text-[var(--text-secondary)]">Report not found</p>
        </div>
      </section>
    );
  }

  const simulation = report.simulation;
  const scenario = simulation.scenario;

  const stats = [
    { icon: Trophy, label: "Score", value: `${report.score} / 1000`, color: "var(--accent-teal)" },
    {
      icon: Timer,
      label: "Time Taken",
      value: `${Math.floor(report.timeTakenSec / 60)}:${String(report.timeTakenSec % 60).padStart(2, "0")}`,
      color: "var(--accent-blue)",
    },
    { icon: CheckCircle2, label: "Correct Actions", value: `${report.correctActions} / ${report.totalActions}`, color: "var(--accent-amber)" },
    { icon: ShieldCheck, label: "Risk Reduced", value: `${report.riskReduced}%`, color: "var(--accent-purple)" },
  ];

  return (
    <section className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs text-[var(--text-muted)]">My Simulations / {scenario?.title || "Unknown Scenario"} / Report</p>
          <h1 className="mt-3 text-3xl font-bold">Simulation Report</h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Completed on {new Date(report.completedAt).toLocaleDateString()}</p>
        </div>
        <PrintReportButton />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="metric-card p-5" style={{ "--metric-color": color } as CSSProperties}>
            <Icon size={22} style={{ color }} />
            <p className="mt-4 text-xs text-[var(--text-secondary)]">{label}</p>
            <p className="mt-1 text-2xl font-black">{value}</p>
          </div>
        ))}
      </div>

      <div className="panel p-5">
        <p className="section-title">Summary</p>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-[var(--text-secondary)]">{report.summary || "No summary available"}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="panel p-5">
          <p className="mb-4 font-bold">Strengths</p>
          <div className="space-y-3">
            {report.strengths.map((item: string) => (
              <div key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--accent-teal)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5">
          <p className="mb-4 font-bold">Areas to Improve</p>
          <div className="space-y-3">
            {report.areasToImprove.map((item: string) => (
              <div key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                <AlertTriangle size={17} className="mt-0.5 shrink-0 text-[var(--accent-amber)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel grid gap-5 overflow-hidden p-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="section-title">Recommendations</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {report.recommendations.map((item: string) => (
              <div key={item} className="panel-soft p-4 text-sm leading-6 text-[var(--text-secondary)]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-32 w-32 items-center justify-center rounded-3xl border border-[rgba(109,93,252,0.32)] bg-[rgba(109,93,252,0.12)] text-[var(--accent-violet)] lg:flex">
          <FileText size={56} />
        </div>
      </div>

      <Link href="/simulate" className="inline-flex text-sm font-semibold text-[var(--accent-violet)]">
        Back to simulations
      </Link>
    </section>
  );
}
