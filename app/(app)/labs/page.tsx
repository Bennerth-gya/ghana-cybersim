"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock,
  Coins,
  Database,
  Globe,
  Shield,
  ShieldAlert,
  Terminal,
  Wifi,
  Lock,
  Zap,
  ChevronRight,
  BookOpen,
  Target,
  Activity,
} from "lucide-react";

type Lab = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  timeEstimate: number;
  skills: string[];
  accessType: string;
  maxDurationMin: number;
  points: number;
};

const DIFFICULTY_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  EASY: { bg: "rgba(34, 199, 169, 0.14)", color: "var(--accent-teal)", label: "Easy" },
  MEDIUM: { bg: "rgba(240, 163, 58, 0.16)", color: "var(--accent-amber)", label: "Medium" },
  HARD: { bg: "rgba(255, 87, 87, 0.16)", color: "var(--accent-red)", label: "Hard" },
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "All Categories": <Activity size={15} />,
  WEB_ATTACKS: <Globe size={15} />,
  NETWORK_ATTACKS: <Wifi size={15} />,
  APPLICATION_ATTACKS: <Terminal size={15} />,
  PRIVILEGE_ESCALATION: <Lock size={15} />,
  GHANA_FOCUS: <Shield size={15} />,
  OTHER: <Database size={15} />,
};

const CATEGORY_LABELS: Record<string, string> = {
  "All Categories": "All Labs",
  WEB_ATTACKS: "Web Attacks",
  NETWORK_ATTACKS: "Network Attacks",
  APPLICATION_ATTACKS: "App Attacks",
  PRIVILEGE_ESCALATION: "Privilege Escalation",
  GHANA_FOCUS: "Ghana Focus",
  OTHER: "Other",
};

function LabCardIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    WEB_ATTACKS: <Globe size={20} />,
    NETWORK_ATTACKS: <Wifi size={20} />,
    APPLICATION_ATTACKS: <Terminal size={20} />,
    PRIVILEGE_ESCALATION: <Lock size={20} />,
    GHANA_FOCUS: <Shield size={20} />,
  };
  return <>{icons[category] ?? <Database size={20} />}</>;
}

function SkeletonCard() {
  return (
    <div className="panel-soft min-h-56 p-4 animate-pulse">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="h-11 w-11 rounded-xl skeleton" />
        <div className="h-6 w-16 rounded-full skeleton" />
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 w-3/4 rounded skeleton" />
        <div className="h-3 w-full rounded skeleton" />
        <div className="h-3 w-5/6 rounded skeleton" />
      </div>
      <div className="flex gap-4">
        <div className="h-3 w-16 rounded skeleton" />
        <div className="h-3 w-16 rounded skeleton" />
      </div>
    </div>
  );
}

export default function LabsPage() {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredLab, setHoveredLab] = useState<Lab | null>(null);

  useEffect(() => {
    async function loadLabs() {
      try {
        setLoading(true);
        const res = await fetch("/api/labs");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Unable to load labs");
        setLabs(data.labs || []);
        setCategories(["All Categories", ...(data.categories || [])]);
      } catch (err) {
        console.error(err);
        setError("Failed to load labs.");
      } finally {
        setLoading(false);
      }
    }
    loadLabs();
  }, []);

  const filteredLabs =
    activeCategory === "All Categories"
      ? labs
      : labs.filter((lab) => lab.category === activeCategory);

  const previewLab = hoveredLab ?? filteredLabs[0] ?? labs[0];

  return (
    <section className="mx-auto max-w-7xl space-y-6 animate-fade-in-up">
      {/* ── Page Header ─────────────────────────────── */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">Offensive Security</p>
          <h1 className="mt-2 text-3xl font-bold">
            Hands-on{" "}
            <span className="gradient-text">Labs</span>
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Launch isolated vulnerable targets, exploit real vulnerabilities, and capture flags.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-xs">
            <Activity size={12} className="text-[var(--accent-teal)]" />
            {labs.length} lab{labs.length !== 1 ? "s" : ""} available
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[220px_1fr_340px]">
        {/* ── Category Sidebar ─────────────────────── */}
        <aside className="panel p-4">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            <Zap size={12} />
            Categories
          </p>
          <div className="flex flex-col gap-1">
            {categories.map((category, i) => {
              const isActive = activeCategory === category;
              const count =
                category === "All Categories"
                  ? labs.length
                  : labs.filter((l) => l.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[rgba(109,93,252,0.2)] text-white border border-[rgba(109,93,252,0.38)]"
                      : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-r bg-[var(--accent-violet)]"
                      style={{ boxShadow: "0 0 8px var(--accent-violet)" }}
                    />
                  )}
                  <span
                    className={`shrink-0 transition-colors ${
                      isActive ? "text-[var(--accent-violet)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {CATEGORY_ICONS[category] ?? <Database size={15} />}
                  </span>
                  <span className="flex-1 text-xs font-semibold">
                    {CATEGORY_LABELS[category] ?? category}
                  </span>
                  <span
                    className={`text-[10px] font-bold tabular-nums rounded-full px-1.5 py-0.5 transition-colors ${
                      isActive
                        ? "bg-[rgba(109,93,252,0.3)] text-[var(--accent-violet)]"
                        : "bg-[rgba(255,255,255,0.06)] text-[var(--text-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Lab stats footer */}
          <div className="mt-5 border-t border-[var(--border-subtle)] pt-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Quick stats
            </p>
            {[
              { label: "Easy", count: labs.filter((l) => l.difficulty === "EASY").length, color: "var(--accent-teal)" },
              { label: "Medium", count: labs.filter((l) => l.difficulty === "MEDIUM").length, color: "var(--accent-amber)" },
              { label: "Hard", count: labs.filter((l) => l.difficulty === "HARD").length, color: "var(--accent-red)" },
            ].map(({ label, count, color }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                  />
                  {label}
                </span>
                <span className="font-bold text-[var(--text-primary)]">{count}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ── Lab Cards Grid ────────────────────────── */}
        <div className="panel p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm font-bold">
              <Target size={14} className="text-[var(--accent-violet)]" />
              Available Labs
            </p>
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]">
              {filteredLabs.length} result{filteredLabs.length !== 1 ? "s" : ""}
            </span>
          </div>

          {loading ? (
            <div className="grid gap-3 lg:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <ShieldAlert size={32} className="text-[var(--accent-red)] opacity-60" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          ) : filteredLabs.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <BookOpen size={32} className="text-[var(--text-muted)] opacity-40" />
              <p className="text-sm text-[var(--text-secondary)]">
                No labs available for this category yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-3 lg:grid-cols-2">
              {filteredLabs.map((lab, i) => {
                const diff = DIFFICULTY_STYLE[lab.difficulty];
                return (
                  <Link
                    key={lab.id}
                    href={`/labs/${lab.slug}`}
                    onMouseEnter={() => setHoveredLab(lab)}
                    onMouseLeave={() => setHoveredLab(null)}
                    className="card-enter panel-soft group relative flex min-h-56 flex-col justify-between gap-4 overflow-hidden p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-[rgba(109,93,252,0.55)] hover:shadow-lg hover:shadow-[var(--accent-violet)]/10"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(ellipse_at_top_left,rgba(109,93,252,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative flex items-start justify-between gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.14)] text-[var(--accent-violet)] transition-transform duration-300 group-hover:scale-110">
                        <LabCardIcon category={lab.category} />
                      </span>
                      <span
                        className="status-pill"
                        style={{
                          background: diff?.bg ?? "rgba(109,93,252,0.18)",
                          color: diff?.color ?? "var(--accent-violet)",
                        }}
                      >
                        {diff?.label ?? lab.difficulty}
                      </span>
                    </span>

                    <span className="relative block">
                      <span className="block font-semibold leading-snug">{lab.title}</span>
                      <span className="mt-2 block text-xs leading-5 text-[var(--text-secondary)]">
                        {lab.description}
                      </span>
                    </span>

                    {/* Skills */}
                    {lab.skills?.length > 0 && (
                      <div className="relative flex flex-wrap gap-1">
                        {lab.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-[rgba(47,134,255,0.1)] px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-blue)]"
                          >
                            {skill}
                          </span>
                        ))}
                        {lab.skills.length > 3 && (
                          <span className="rounded-md bg-[rgba(255,255,255,0.05)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
                            +{lab.skills.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <span className="relative flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} />
                        {lab.maxDurationMin} min
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Coins size={13} />
                        {lab.points} pts
                      </span>
                      <ChevronRight
                        size={16}
                        className="ml-auto transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent-violet)]"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Lab Preview Panel ─────────────────────── */}
        <aside className="panel flex flex-col gap-4 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            <Shield size={12} />
            Lab Preview
          </p>

          {previewLab ? (
            <div className="flex flex-1 flex-col gap-4">
              {/* Title & diff */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-bold leading-snug">{previewLab.title}</h2>
                  <span
                    className="status-pill shrink-0"
                    style={{
                      background:
                        DIFFICULTY_STYLE[previewLab.difficulty]?.bg ??
                        "rgba(109,93,252,0.18)",
                      color:
                        DIFFICULTY_STYLE[previewLab.difficulty]?.color ??
                        "var(--accent-violet)",
                    }}
                  >
                    {DIFFICULTY_STYLE[previewLab.difficulty]?.label ?? previewLab.difficulty}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                  {previewLab.description}
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: <Clock size={13} />, label: "Duration", value: `${previewLab.maxDurationMin} min` },
                  { icon: <Coins size={13} />, label: "Points", value: `${previewLab.points} pts` },
                  { icon: <Globe size={13} />, label: "Category", value: CATEGORY_LABELS[previewLab.category] ?? previewLab.category },
                  { icon: <Terminal size={13} />, label: "Access", value: previewLab.accessType },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="panel-soft flex flex-col gap-1 p-3"
                  >
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      {icon}
                      <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
                    </div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">{value}</p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              {previewLab.skills?.length > 0 && (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    Skills Covered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {previewLab.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-[rgba(47,134,255,0.1)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent-blue)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Objective hint */}
              <div className="rounded-xl border border-[rgba(109,93,252,0.2)] bg-[rgba(109,93,252,0.06)] p-3">
                <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-violet)]">
                  <Target size={11} />
                  Objective
                </p>
                <p className="text-xs leading-5 text-[var(--text-secondary)]">
                  Launch the isolated Docker target, investigate the application, exploit the vulnerability, retrieve the hidden flag, and submit it before time expires.
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/labs/${previewLab.slug}`}
                className="cyber-button-primary mt-auto inline-flex items-center justify-between"
              >
                Launch Lab
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 py-10 text-center">
              <Target size={28} className="text-[var(--text-muted)] opacity-40" />
              <p className="text-sm text-[var(--text-secondary)]">
                Hover a lab to preview details.
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
