"use client";

import { useState } from "react";

export default function FlagSubmitForm({ instanceId }: { instanceId: string }) {
  const [flag, setFlag] = useState("");
  const [result, setResult] = useState<{ correct: boolean; points?: number } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/labs/instances/${instanceId}/submit-flag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag }),
      });
      const data = await res.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center">
      <input
        value={flag}
        onChange={(e) => setFlag(e.target.value)}
        placeholder="FLAG{...}"
        className="flex-1 rounded-md bg-violet-950 border border-violet-700 px-3 py-2 text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 font-medium disabled:opacity-50"
      >
        {loading ? "Checking..." : "Submit Flag"}
      </button>
      {result && (
        <span className={result.correct ? "text-green-400" : "text-red-400"}>
          {result.correct ? `Correct! +${result.points} pts` : "Incorrect, try again"}
        </span>
      )}
    </form>
  );
}
