"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Result = {
  correct: boolean;
  points?: number;
};

export default function FlagSubmitForm({ instanceId }: { instanceId: string }) {
  const [flag, setFlag] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/labs/instances/${instanceId}/submit-flag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag }),
      });
      const data = await response.json();
      setResult({
        correct: Boolean(data.correct),
        points: data.points,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <input
        value={flag}
        onChange={(event) => setFlag(event.target.value)}
        placeholder="FLAG{...}"
        className="min-h-11 flex-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-purple)]"
      />
      <button
        type="submit"
        disabled={loading}
        className="cyber-button-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={15} />
        {loading ? "Checking..." : "Submit Flag"}
      </button>
      {result && (
        <p className={`text-sm font-semibold ${result.correct ? "text-[var(--accent-teal)]" : "text-red-400"}`}>
          {result.correct ? `Correct! +${result.points ?? 0} pts` : "Incorrect, try again"}
        </p>
      )}
    </form>
  );
}
