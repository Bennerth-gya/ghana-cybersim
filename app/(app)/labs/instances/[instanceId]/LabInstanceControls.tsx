"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Power, Send, TimerReset } from "lucide-react";

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
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function LabInstanceControls({
  instanceId,
  labSlug,
  expiresAt,
  initialStatus,
}: Props) {
  const router = useRouter();
  const expiryMs = useMemo(() => new Date(expiresAt).getTime(), [expiresAt]);
  const [remaining, setRemaining] = useState(() => Math.ceil((expiryMs - Date.now()) / 1000));
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

  return (
    <div className="space-y-5">
      <div className="panel p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <TimerReset size={16} />
            Time remaining
          </div>
          <span className="status-pill bg-[rgba(109,93,252,0.18)] text-[var(--accent-violet)]">
            {initialStatus}
          </span>
        </div>
        <p className="mt-4 font-mono text-4xl font-bold text-[var(--text-primary)]">
          {formatRemaining(remaining)}
        </p>
      </div>

      <form onSubmit={submitFlag} className="panel flex flex-col gap-3 p-5">
        <label htmlFor="flag" className="text-sm font-semibold">
          Submit flag
        </label>
        <input
          id="flag"
          value={flag}
          onChange={(event) => setFlag(event.target.value)}
          placeholder="CYBERSIM{...}"
          className="min-h-11 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-purple)]"
        />
        <button
          type="submit"
          disabled={submitting}
          className="cyber-button-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={15} />
          {submitting ? "Checking..." : "Submit Flag"}
        </button>
        {result && (
          <p className={`text-sm font-semibold ${result.correct ? "text-[var(--accent-teal)]" : "text-red-400"}`}>
            {result.correct
              ? `Correct! +${result.points ?? 0} pts`
              : result.error
              ?? "Incorrect, try again"}
          </p>
        )}
      </form>

      <button
        type="button"
        onClick={endLab}
        disabled={ending}
        className="cyber-button-secondary w-full border-[rgba(255,87,87,0.38)] text-red-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Power size={15} />
        {ending ? "Ending..." : "End Lab"}
      </button>
    </div>
  );
}
