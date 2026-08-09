"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { FileText, Loader2, Search, ShieldAlert, X } from "lucide-react";

interface ScenarioResult {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
}

interface ReportResult {
  reportId: string;
  simulationId: string;
  title: string;
  score: number;
  category: string;
}

const DIFF_COLOR: Record<string, string> = {
  EASY: "var(--accent-teal)",
  MEDIUM: "var(--accent-amber)",
  HARD: "var(--accent-red)",
};

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scenarios, setScenarios] = useState<ScenarioResult[]>([]);
  const [reports, setReports] = useState<ReportResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setScenarios([]);
      setReports([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    setOpen(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setScenarios(data.scenarios ?? []);
      setReports(data.reports ?? []);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(val), 300);
  };

  const clear = () => {
    setQuery("");
    setScenarios([]);
    setReports([]);
    setOpen(false);
    inputRef.current?.focus();
  };

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const hasResults = scenarios.length > 0 || reports.length > 0;

  return (
    <div className="relative hidden max-w-sm sm:flex">
      <div className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-muted)] w-72 transition-all focus-within:border-[var(--accent-purple)]">
        {loading ? (
          <Loader2 size={15} className="animate-spin shrink-0 text-[var(--accent-purple)]" />
        ) : (
          <Search size={15} className="shrink-0" />
        )}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query.length >= 2 && setOpen(true)}
          placeholder="Search scenarios, reports..."
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
        />
        {query && (
          <button onClick={clear} className="shrink-0 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X size={14} />
          </button>
        )}
      </div>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-panel-strong)] shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {loading && (
            <div className="flex items-center justify-center gap-2 p-4 text-sm text-[var(--text-secondary)]">
              <Loader2 size={16} className="animate-spin" />
              Searching...
            </div>
          )}

          {!loading && !hasResults && (
            <div className="p-4 text-center text-sm text-[var(--text-muted)]">
              No results for &ldquo;<strong className="text-[var(--text-primary)]">{query}</strong>&rdquo;
            </div>
          )}

          {!loading && scenarios.length > 0 && (
            <div>
              <p className="border-b border-[var(--border-subtle)] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Scenarios
              </p>
              {scenarios.map((s) => (
                <Link
                  key={s.id}
                  href={`/simulate/${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-[rgba(109,93,252,0.08)] transition-colors"
                >
                  <ShieldAlert size={16} className="mt-0.5 shrink-0 text-[var(--accent-violet)]" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[var(--text-primary)]">{s.title}</p>
                    <p className="mt-0.5 truncate text-xs text-[var(--text-secondary)]">{s.description}</p>
                  </div>
                  <span
                    className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ color: DIFF_COLOR[s.difficulty], background: `${DIFF_COLOR[s.difficulty]}22` }}
                  >
                    {s.difficulty}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {!loading && reports.length > 0 && (
            <div className="border-t border-[var(--border-subtle)]">
              <p className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Reports
              </p>
              {reports.map((r) => (
                <Link
                  key={r.reportId}
                  href={`/reports/${r.reportId}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[rgba(109,93,252,0.08)] transition-colors"
                >
                  <FileText size={16} className="shrink-0 text-[var(--accent-blue)]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[var(--text-primary)]">{r.title}</p>
                    <p className="text-xs text-[var(--text-muted)]">Score: {r.score}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
