"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StartLabButton({ labId }: { labId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startLab() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/labs/${encodeURIComponent(labId)}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          router.push("/login");
          return;
        }
        throw new Error(data.error ?? "Failed to start lab");
      }

      router.push(`/labs/instances/${data.instanceId}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to start lab";
      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2 sm:items-end">
      <button
        type="button"
        onClick={startLab}
        disabled={loading}
        className="cyber-button-primary inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Starting..." : "Start Lab"}
        <ArrowRight size={16} />
      </button>
      {error && <p className="max-w-64 text-sm text-red-400">{error}</p>}
    </div>
  );
}
