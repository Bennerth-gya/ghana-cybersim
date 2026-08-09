"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Coins, Database, Globe, ShieldCheck } from "lucide-react";

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

const DIFFICULTY_STYLE: Record<string, { bg: string; color: string }> = {
  EASY: { bg: "rgba(34, 199, 169, 0.14)", color: "var(--accent-teal)" },
  MEDIUM: { bg: "rgba(240, 163, 58, 0.16)", color: "var(--accent-amber)" },
  HARD: { bg: "rgba(255, 87, 87, 0.16)", color: "var(--accent-red)" },
};

export default function LabsPage() {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLabs() {
      try {
        setLoading(true);
        const res = await fetch("/api/labs");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Unable to load labs");
        }

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

  const filteredLabs = activeCategory === "All Categories"
    ? labs
    : labs.filter((lab) => lab.category === activeCategory);

  const selectedLab = filteredLabs[0] ?? labs[0];

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div>
        <p className="section-title">Labs</p>
        <h1 className="mt-2 text-3xl font-bold">Hands-on Offensive Labs</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Launch isolated vulnerable targets and submit flags to prove your exploit path.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[260px_1fr_360px]">
        <aside className="panel p-4">
          <p className="mb-3 text-sm font-bold">Categories</p>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-[rgba(109,93,252,0.24)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="panel p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold">Available Labs</p>
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]">
              {filteredLabs.length} labs
            </span>
          </div>

          {loading ? (
            <div className="py-10 text-center text-sm text-[var(--text-secondary)]">Loading labs...</div>
          ) : error ? (
            <div className="py-10 text-center text-sm text-red-400">{error}</div>
          ) : filteredLabs.length === 0 ? (
            <p className="py-8 text-center text-sm text-[var(--text-secondary)]">
              No labs are available for this category yet.
            </p>
          ) : (
            <div className="grid gap-3 lg:grid-cols-2">
              {filteredLabs.map((lab) => (
                <Link
                  key={lab.id}
                  href={`/labs/${lab.slug}`}
                  className="panel-soft group flex min-h-56 flex-col justify-between gap-4 p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-[rgba(109,93,252,0.55)] hover:bg-[rgba(109,93,252,0.06)] hover:shadow-lg hover:shadow-[var(--accent-violet)]/10"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.14)] text-[var(--accent-violet)]">
                      <Database size={20} />
                    </span>
                    <span
                      className="status-pill"
                      style={{
                        background: DIFFICULTY_STYLE[lab.difficulty]?.bg ?? "rgba(109,93,252,0.18)",
                        color: DIFFICULTY_STYLE[lab.difficulty]?.color ?? "var(--accent-violet)",
                      }}
                    >
                      {lab.difficulty.charAt(0) + lab.difficulty.slice(1).toLowerCase()}
                    </span>
                  </span>

                  <span className="block">
                    <span className="block font-semibold">{lab.title}</span>
                    <span className="mt-2 block text-xs leading-5 text-[var(--text-secondary)]">{lab.description}</span>
                  </span>

                  <span className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} />
                      {lab.maxDurationMin} min
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Coins size={14} />
                      {lab.points} pts
                    </span>
                    <ArrowRight size={16} className="ml-auto transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-violet)]" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <aside className="panel flex flex-col justify-between p-5">
          <div>
            <p className="text-sm font-bold">Lab details</p>
            {selectedLab ? (
              <div className="mt-4 space-y-4">
                <h2 className="text-xl font-bold">{selectedLab.title}</h2>
                <p className="text-sm leading-6 text-[var(--text-secondary)]">{selectedLab.description}</p>
                <div className="grid gap-3 text-xs">
                  <div className="panel-soft p-3">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <ShieldCheck size={14} />
                      <span>Access type</span>
                    </div>
                    <p className="mt-2 font-semibold text-[var(--text-primary)]">{selectedLab.accessType}</p>
                  </div>
                  <div className="panel-soft p-3">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Globe size={14} />
                      <span>Category</span>
                    </div>
                    <p className="mt-2 font-semibold text-[var(--text-primary)]">{selectedLab.category}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-10 text-center text-sm text-[var(--text-secondary)]">
                Select a lab to view details.
              </div>
            )}
          </div>

          {selectedLab && (
            <Link href={`/labs/${selectedLab.slug}`} className="cyber-button-primary mt-6 inline-flex items-center justify-between">
              View lab
              <ArrowRight size={16} />
            </Link>
          )}
        </aside>
      </div>
    </section>
  );
}
