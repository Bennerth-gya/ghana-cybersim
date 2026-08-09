"use client";

import { useEffect } from "react";
import { ShieldAlert, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    toast.error("An unexpected error occurred. We've logged the issue.");
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-[rgba(255,87,87,0.32)] bg-[rgba(255,87,87,0.08)] text-[var(--accent-red)] shadow-[0_0_40px_rgba(255,87,87,0.12)]">
        <ShieldAlert size={36} />
      </div>
      <h2 className="mb-2 text-2xl font-bold">System Error</h2>
      <p className="mb-8 max-w-md text-sm text-[var(--text-secondary)]">
        {error.message || "Something went wrong while processing your request. Please try again or return to the dashboard."}
      </p>
      <button
        onClick={reset}
        className="cyber-button-primary flex items-center gap-2"
      >
        <RefreshCw size={16} />
        Recover Session
      </button>
    </div>
  );
}
