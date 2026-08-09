import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  ShieldAlert,
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { hexclaveServerApp } from "@/lib/hexclave/server";

const STATUS_STYLE = {
  COMPLETED: { bg: "rgba(34, 199, 169, 0.14)", text: "var(--accent-teal)" },
  IN_PROGRESS: { bg: "rgba(240, 163, 58, 0.16)", text: "var(--accent-amber)" },
  NOT_STARTED: { bg: "rgba(154, 168, 189, 0.12)", text: "var(--text-secondary)" },
};

const CATEGORY_COLORS: Record<string, string> = {
  SOCIAL_ENGINEERING: "var(--accent-purple)",
  MALWARE: "var(--accent-teal)",
  WEB_ATTACKS: "#ff735b",
  NETWORK_ATTACKS: "var(--accent-amber)",
  APPLICATION_ATTACKS: "var(--accent-blue)",
  WIRELESS_ATTACKS: "#9d4edd",
  OTHER: "#66739b",
};

const CATEGORY_LABELS: Record<string, string> = {
  SOCIAL_ENGINEERING: "Social Engineering",
  MALWARE: "Malware",
  WEB_ATTACKS: "Web Attacks",
  NETWORK_ATTACKS: "Network Attacks",
  APPLICATION_ATTACKS: "App Attacks",
  WIRELESS_ATTACKS: "Wireless Attacks",
  OTHER: "Other",
};

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your CyberSimm command center. View your active simulations, global rank, and attack category breakdown.",
};

export default async function DashboardPage() {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });
  const firstName = (user.displayName ?? user.primaryEmail ?? "Learner").split(/[\s@]/)[0];

  // Fetch real user data from database
  const [dbUser, allScenarios] = await Promise.all([
    user.primaryEmail
      ? prisma.user.findUnique({
        where: { email: user.primaryEmail },
        include: {
          simulations: {
            include: {
              scenario: true,
            },
            orderBy: { startedAt: "desc" },
          },
        },
      })
      : null,
    prisma.scenario.findMany({ select: { category: true } }),
  ]);

  const simulations = dbUser?.simulations || [];
  const completedSimulations = simulations.filter((s) => s.status === "COMPLETED");
  const completedCount = completedSimulations.length;
  const totalScore = dbUser?.totalScore || 0;

  // Calculate rank
  const higherScoringUsers = await prisma.user.count({
    where: {
      totalScore: {
        gt: totalScore,
      },
    },
  });
  const rank = higherScoringUsers + 1;
  const totalUsers = Math.max(await prisma.user.count(), 1);
  const percentile = Math.max(1, Math.round((rank / totalUsers) * 100));

  const metrics = [
    { icon: Shield, label: "Simulations Completed", value: completedCount, color: "var(--accent-blue)" },
    { icon: CheckCircle2, label: "Scenarios Explored", value: simulations.length, color: "var(--accent-teal)" },
    { icon: Trophy, label: "Total Score", value: totalScore.toLocaleString(), color: "var(--accent-amber)" },
    { icon: TrendingUp, label: "Global Rank", value: `#${rank} (Top ${percentile}%)`, color: "var(--accent-purple)" },
  ];

  // Compute category breakdown from completed simulations (or overall scenarios as fallback)
  const categoryCounts: Record<string, number> = {};
  const dataSource = completedSimulations.length > 0 ? completedSimulations.map((s) => s.scenario.category) : allScenarios.map((s) => s.category);
  const totalItems = dataSource.length || 1;

  for (const cat of dataSource) {
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  }

  const categoryBreakdown = Object.entries(categoryCounts).map(([cat, count]) => ({
    key: cat,
    label: CATEGORY_LABELS[cat] || cat,
    count,
    percentage: Math.round((count / totalItems) * 100),
    color: CATEGORY_COLORS[cat] || "var(--accent-purple)",
  }));

  // Build SVG path data for Performance Line Chart (scores over chronological completed runs)
  const chronologicalCompleted = [...completedSimulations].reverse();
  const chartPoints = chronologicalCompleted.map((sim, index) => {
    const x = Math.round((index / Math.max(chronologicalCompleted.length - 1, 1)) * 400 + 10);
    // Score range 0 to 1000 maps to y 130 to 40
    const scoreVal = sim.score ?? 0;
    const y = Math.round(130 - (scoreVal / 1000) * 90);
    return { x, y, score: scoreVal, title: sim.scenario.title };
  });

  const pathD = chartPoints.length > 1
    ? chartPoints.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`, "")
    : "M 10 130 L 410 130";

  const areaD = chartPoints.length > 1
    ? `${pathD} L ${chartPoints[chartPoints.length - 1].x} 150 L ${chartPoints[0].x} 150 Z`
    : "M 10 130 L 410 130 L 410 150 L 10 150 Z";

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">Command center</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Welcome back, {firstName}. Ready to simulate and learn today?
          </p>
        </div>
        <Link href="/scenarios" className="cyber-button-primary self-start sm:self-auto">
          Start new simulation
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="metric-card p-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg" style={{ "--metric-color": color } as CSSProperties}>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.08)]" style={{ color }}>
                <Icon size={22} />
              </span>
              <ShieldAlert size={18} className="text-[rgba(255,255,255,0.18)]" />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">{label}</p>
            <p className="mt-1 text-3xl font-black">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.45fr_1fr]">
        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold">Recent Simulations</p>
            <Link href="/simulate" className="flex items-center gap-1 text-xs font-semibold text-[var(--accent-violet)]">
              View all
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {simulations.length === 0 ? (
            <div className="py-10 text-center text-sm text-[var(--text-muted)]">
              No simulations started yet. Pick a scenario to start practicing!
            </div>
          ) : (
            <div className="divide-y divide-[var(--border-subtle)]">
              {simulations.slice(0, 5).map((simulation) => {
                const status = STATUS_STYLE[simulation.status as keyof typeof STATUS_STYLE] || STATUS_STYLE.NOT_STARTED;
                const title = simulation.scenario?.title || "Unknown Scenario";
                const date = new Date(simulation.startedAt).toLocaleDateString();
                return (
                  <div key={simulation.id} className="grid gap-3 py-4 text-sm sm:grid-cols-[1fr_auto_auto] sm:items-center">
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-xs text-[var(--text-muted)]">{date}</p>
                    </div>
                    <span className="status-pill w-fit" style={{ background: status.bg, color: status.text }}>
                      {simulation.status.replace("_", " ")}
                    </span>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Score: <span className="font-bold text-[var(--text-primary)]">{simulation.score ?? "--"}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid gap-5">
          {/* Category breakdown */}
          <div className="panel p-5">
            <p className="mb-4 text-sm font-bold">Attack Categories</p>
            <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr] xl:grid-cols-1 2xl:grid-cols-[auto_1fr]">
              <div className="relative flex h-28 w-28 items-center justify-center mx-auto">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[rgba(255,255,255,0.06)]"
                    strokeWidth="3.8"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {categoryBreakdown.map((cat, i) => {
                    const prevPercentage = categoryBreakdown.slice(0, i).reduce((sum, c) => sum + c.percentage, 0);
                    return (
                      <path
                        key={cat.key}
                        strokeWidth="3.8"
                        strokeDasharray={`${cat.percentage}, 100`}
                        strokeDashoffset={`-${prevPercentage}`}
                        stroke={cat.color}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    );
                  })}
                </svg>
                <span className="absolute text-xs font-bold text-[var(--text-secondary)]">
                  {completedCount} runs
                </span>
              </div>
              <div className="space-y-3">
                {categoryBreakdown.map((category) => (
                  <div key={category.key} className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <span className="h-2 w-2 rounded-full" style={{ background: category.color }} />
                      {category.label}
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">{category.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real Performance Over Time Chart */}
          <div className="panel p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Performance Progression</p>
                <p className="text-xs text-[var(--text-muted)]">Score history across completed runs</p>
              </div>
              <Target size={16} className="text-[var(--accent-violet)]" />
            </div>
            <div className="overflow-hidden">
              <svg viewBox="0 20 420 140" className="h-40 w-full">
                <defs>
                  <linearGradient id="performance-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[50, 75, 100, 125].map((line) => (
                  <line key={line} x1="0" x2="420" y1={line} y2={line} stroke="rgba(154,168,189,0.12)" />
                ))}
                <path d={areaD} fill="url(#performance-fill)" />
                <path d={pathD} fill="none" stroke="var(--accent-purple)" strokeLinecap="round" strokeWidth="3" />
                {chartPoints.map((pt, idx) => (
                  <g key={idx}>
                    <circle cx={pt.x} cy={pt.y} r="4" fill="var(--accent-teal)" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
