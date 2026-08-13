"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Power,
  Send,
  TimerReset,
  CheckCircle2,
  XCircle,
  Flag,
  Loader2,
  ShieldAlert,
} from "lucide-react";

type Props = {
  instanceId: string;
  labSlug: string;
  expiresAt: string;
  initialStatus: string;
};

type SubmitResult = {
  correct: boolean;
  points?: number;
  error?: string;
};

function formatRemaining(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getTimerColor(remaining: number, total: number) {
  const pct = remaining / total;
  if (pct > 0.5) return "var(--accent-teal)";
  if (pct > 0.2) return "var(--accent-amber)";
  return "var(--accent-red)";
}

export default function LabInstanceControls({
  instanceId,
  labSlug,
  expiresAt,
  initialStatus,
}: Props) {
  const router = useRouter();
  const expiryMs = useMemo(() => new Date(expiresAt).getTime(), [expiresAt]);
  const totalSeconds = useMemo(
    () => Math.ceil((expiryMs - Date.now()) / 1000) + Math.ceil((Date.now() - expiryMs) / 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [remaining, setRemaining] = useState(() =>
    Math.ceil((expiryMs - Date.now()) / 1000)
  );
  const [flag, setFlag] = useState("");
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [ending, setEnding] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(Math.ceil((expiryMs - Date.now()) / 1000));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [expiryMs]);

  async function submitFlag(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const response = await fetch(`/api/labs/instances/${instanceId}/submit-flag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Flag submission failed");
      }

      setResult({
        correct: Boolean(data.correct),
        points: data.points,
      });

      if (data.correct) setFlag("");
    } catch (error) {
      setResult({
        correct: false,
        error: error instanceof Error ? error.message : "Flag submission failed",
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function endLab() {
    setEnding(true);
    try {
      await fetch(`/api/labs/instances/${instanceId}/stop`, {
        method: "POST",
      });
      router.push(`/labs/${labSlug}`);
      router.refresh();
    } finally {
      setEnding(false);
    }
  }

  const timerColor = getTimerColor(remaining, Math.max(totalSeconds, 1));
  const expired = remaining <= 0;
  const progressPct = Math.max(0, Math.min(100, (remaining / Math.max(totalSeconds, 1)) * 100));

  return (
    <div className="space-y-4">
      {/* ── Timer Panel ─────────────────────────────── */}
      <div className="panel overflow-hidden p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{
                background: `color-mix(in srgb, ${timerColor} 15%, transparent)`,
                color: timerColor,
              }}
            >
              <TimerReset size={14} />
            </div>
            Time Remaining
          </div>
          <span
            className="status-pill text-[10px]"
            style={{
              background: `color-mix(in srgb, ${timerColor} 15%, transparent)`,
              color: timerColor,
            }}
          >
            {initialStatus}
          </span>
        </div>

        {/* Big clock */}
        <p
          className="font-mono text-5xl font-bold tabular-nums tracking-tight"
          style={{ color: timerColor }}
        >
          {expired ? "00:00" : formatRemaining(remaining)}
        </p>

        {/* Progress bar */}
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, ${timerColor}, color-mix(in srgb, ${timerColor} 70%, transparent))`,
              boxShadow: `0 0 8px ${timerColor}60`,
            }}
          />
        </div>

        {expired && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--accent-red)]">
            <ShieldAlert size={13} />
            This instance has expired.
          </p>
        )}
      </div>

      {/* ── Flag Submission ─────────────────────────── */}
      <div className="panel p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(109,93,252,0.12)] text-[var(--accent-violet)]">
            <Flag size={14} />
          </div>
          Submit Flag
        </div>

        <form onSubmit={submitFlag} className="flex flex-col gap-3">
          <div className="relative">
            <input
              id="flag-input"
              value={flag}
              onChange={(event) => setFlag(event.target.value)}
              placeholder="CYBERSIM{...}"
              disabled={expired}
              className="w-full min-h-11 rounded-xl border border-[var(--border-subtle)] bg-[rgba(5,9,20,0.6)] px-3 pr-10 text-sm font-mono text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--accent-violet)] focus:shadow-[0_0_0_3px_rgba(109,93,252,0.15)] disabled:opacity-50"
            />
            <Flag
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || expired || !flag.trim()}
            className="cyber-button-primary inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Verifying…
              </>
            ) : (
              <>
                <Send size={15} />
                Submit Flag
              </>
            )}
          </button>

          {/* Result feedback */}
          {result && (
            <div
              className={`flex items-start gap-2.5 rounded-xl p-3 text-sm ${
                result.correct
                  ? "border border-[rgba(34,199,169,0.3)] bg-[rgba(34,199,169,0.08)] text-[var(--accent-teal)]"
                  : "border border-[rgba(255,87,87,0.3)] bg-[rgba(255,87,87,0.08)] text-red-300"
              }`}
            >
              {result.correct ? (
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              ) : (
                <XCircle size={16} className="mt-0.5 shrink-0" />
              )}
              <p className="font-semibold">
                {result.correct
                  ? `Correct! You earned +${result.points ?? 0} points.`
                  : result.error ?? "Incorrect flag. Try again!"}
              </p>
            </div>
          )}
        </form>
      </div>

      {/* ── End Lab ─────────────────────────────────── */}
      <button
        type="button"
        onClick={endLab}
        disabled={ending}
        className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(255,87,87,0.3)] bg-[rgba(255,87,87,0.06)] px-4 py-2.5 text-sm font-bold text-red-300 transition-all hover:border-[rgba(255,87,87,0.55)] hover:bg-[rgba(255,87,87,0.12)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {ending ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Shutting down…
          </>
        ) : (
          <>
            <Power size={15} className="transition-transform group-hover:rotate-12" />
            End Lab &amp; Destroy Container
          </>
        )}
      </button>
    </div>
  );
}
