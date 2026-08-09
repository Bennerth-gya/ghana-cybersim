import Link from "next/link";
import { ArrowRight, Clock, FileText, Play, ShieldCheck, Sparkles } from "lucide-react";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  COMPLETED: { bg: "rgba(34, 199, 169, 0.14)", color: "var(--accent-teal)", label: "Completed" },
  IN_PROGRESS: { bg: "rgba(240, 163, 58, 0.16)", color: "var(--accent-amber)", label: "In Progress" },
  NOT_STARTED: { bg: "rgba(154, 168, 189, 0.12)", color: "var(--text-secondary)", label: "Not Started" },
};

export default async function MySimulationsPage() {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });

  const dbUser = user.primaryEmail
    ? await prisma.user.findUnique({
        where: { email: user.primaryEmail },
        include: {
          simulations: {
            include: {
              scenario: true,
              report: { select: { id: true } },
            },
            orderBy: { startedAt: "desc" },
          },
        },
      })
    : null;

  const simulations = dbUser?.simulations ?? ([] as NonNullable<typeof dbUser>['simulations']);

  return (
    <section className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">My simulations</p>
          <h1 className="mt-2 text-3xl font-bold">Training Runs</h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Resume active simulations or review completed outcomes.
          </p>
        </div>
        <Link href="/scenarios" className="cyber-button-primary self-start sm:self-auto">
          New Simulation
          <ArrowRight size={16} />
        </Link>
      </div>

      {simulations.length === 0 ? (
        <div className="panel p-10 text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
            <Sparkles size={28} />
          </div>
          <h2 className="text-xl font-bold">No simulation runs yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-secondary)]">
            Explore the scenario library to launch your first interactive cyber incident simulation.
          </p>
          <Link href="/scenarios" className="cyber-button-primary mt-6 inline-flex">
            Browse Scenarios
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {simulations.map((sim) => {
            const statusKey = sim.status in STATUS_STYLE ? sim.status : "IN_PROGRESS";
            const status = STATUS_STYLE[statusKey];
            const reportId = sim.report?.id;

            return (
              <article key={sim.id} className="panel grid gap-4 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
                    <ShieldCheck size={22} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-bold">{sim.scenario.title}</h2>
                      <span className="status-pill" style={{ background: status.bg, color: status.color }}>
                        {status.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {sim.scenario.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {Math.ceil(sim.timeTakenSec / 60)} min duration
                      </span>
                      <span>Score: {sim.score ?? "--"}</span>
                      <span>Risk reduced: {sim.riskReduced}%</span>
                      <span>Started: {new Date(sim.startedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <Link href={`/simulate/${sim.scenarioId}`} className="cyber-button-secondary min-h-10">
                    <Play size={15} />
                    {sim.status === "COMPLETED" ? "Replay" : "Continue"}
                  </Link>
                  {(sim.status === "COMPLETED" || reportId) && (
                    <Link
                      href={reportId ? `/reports/${reportId}` : "/reports"}
                      className="cyber-button-secondary min-h-10"
                    >
                      <FileText size={15} />
                      View Report
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
