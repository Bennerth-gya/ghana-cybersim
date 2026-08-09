"use client";

import { Toaster as Sonner } from "sonner";
import { useTheme } from "@/components/ThemeProvider";

export function Toaster() {
  const { theme = "dark" } = useTheme();

  return (
    <Sonner
      theme={theme as "dark" | "light" | "system"}
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--bg-panel)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--border-subtle)] group-[.toaster]:shadow-[var(--shadow-panel)] group-[.toaster]:rounded-xl group-[.toaster]:backdrop-blur-xl group-[.toaster]:border",
          description: "group-[.toast]:text-[var(--text-secondary)]",
          actionButton:
            "group-[.toast]:bg-[var(--accent-purple)] group-[.toast]:text-white group-[.toast]:border-none group-[.toast]:rounded-lg",
          cancelButton:
            "group-[.toast]:bg-transparent group-[.toast]:text-[var(--text-secondary)] group-[.toast]:border-[var(--border-subtle)] group-[.toast]:rounded-lg group-[.toast]:border",
          error:
            "group-[.toaster]:!bg-[rgba(30,10,14,0.9)] group-[.toaster]:!border-[rgba(255,87,87,0.3)] group-[.toaster]:!text-[#ff8a8a]",
          success:
            "group-[.toaster]:!bg-[rgba(10,25,20,0.9)] group-[.toaster]:!border-[rgba(34,199,169,0.3)] group-[.toaster]:!text-[#a0f0df]",
          warning:
            "group-[.toaster]:!bg-[rgba(30,20,5,0.9)] group-[.toaster]:!border-[rgba(240,163,58,0.3)] group-[.toaster]:!text-[#f0d0a0]",
        },
      }}
    />
  );
}
