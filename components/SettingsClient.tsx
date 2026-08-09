"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, LockKeyhole, LogOut, Monitor, ShieldCheck, Sun, Moon, User, Check, Loader2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface SettingsClientProps {
  displayName: string;
  email: string;
  role: string;
  joinedAt: string;
  initialNotificationsEnabled: boolean;
}

export default function SettingsClient({
  displayName,
  email,
  role,
  joinedAt,
  initialNotificationsEnabled,
}: SettingsClientProps) {
  const { theme, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(initialNotificationsEnabled);
  const [savingNotifs, setSavingNotifs] = useState(false);

  const toggleNotifications = async () => {
    const nextState = !notificationsEnabled;
    setNotificationsEnabled(nextState);
    setSavingNotifs(true);
    try {
      await fetch("/api/user/notifications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: nextState }),
      });
    } catch (err) {
      console.error("Failed to save notification preference:", err);
      setNotificationsEnabled(!nextState); // rollback on error
    } finally {
      setSavingNotifs(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl space-y-5">
      <div>
        <p className="section-title">Settings</p>
        <h1 className="mt-2 text-3xl font-bold">Account Preferences</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Manage your training profile and simulation workspace.
        </p>
      </div>

      {/* Profile Card */}
      <div className="panel p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(240,163,58,0.44)] bg-[linear-gradient(135deg,rgba(240,163,58,0.4),rgba(109,93,252,0.24))] text-lg font-bold text-[var(--text-primary)]">
            {displayName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-bold">{displayName}</p>
            <p className="text-sm text-[var(--text-secondary)]">{email}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {role} · Joined {joinedAt}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Appearance / Theme */}
        <div className="panel p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
              <Monitor size={20} />
            </span>
            <div>
              <h2 className="font-bold">Appearance</h2>
              <p className="text-xs text-[var(--text-secondary)]">Interface theme</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
            Switch between dark analyst mode and a clean light interface.
          </p>
          <button
            onClick={toggleTheme}
            type="button"
            className="mt-4 flex w-full items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm font-semibold transition-all hover:border-[var(--accent-purple)]"
          >
            <span className="flex items-center gap-2">
              {theme === "dark" ? <Moon size={16} className="text-[var(--accent-violet)]" /> : <Sun size={16} className="text-amber-400" />}
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <span className="rounded-full bg-[rgba(109,93,252,0.2)] px-3 py-1 text-xs text-[var(--accent-violet)]">
              Click to toggle
            </span>
          </button>
        </div>

        {/* Security */}
        <div className="panel p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(34,199,169,0.16)] text-[var(--accent-teal)]">
              <LockKeyhole size={20} />
            </span>
            <div>
              <h2 className="font-bold">Security</h2>
              <p className="text-xs text-[var(--text-secondary)]">Account protection</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
            Multi-factor authentication is recommended for every learner account to prevent unauthorized access.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-[rgba(34,199,169,0.1)] px-4 py-2 text-sm text-[var(--accent-teal)]">
            <ShieldCheck size={15} />
            Account secured via Hexclave Auth
          </div>
        </div>

        {/* Notifications */}
        <div className="panel p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(47,134,255,0.16)] text-[var(--accent-blue)]">
              <Bell size={20} />
            </span>
            <div>
              <h2 className="font-bold">Notifications</h2>
              <p className="text-xs text-[var(--text-secondary)]">Alerts & reminders</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
            Receive scenario reminders, report summaries, and leaderboard nudges.
          </p>
          <button
            onClick={toggleNotifications}
            disabled={savingNotifs}
            type="button"
            className="mt-4 flex w-full items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm font-semibold transition-all hover:border-[var(--accent-blue)]"
          >
            <span className="flex items-center gap-2">
              <Bell size={16} className={notificationsEnabled ? "text-[var(--accent-blue)]" : "text-[var(--text-muted)]"} />
              {notificationsEnabled ? "Email Alerts Enabled" : "Alerts Muted"}
            </span>
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs transition-colors ${
                notificationsEnabled
                  ? "bg-[rgba(47,134,255,0.2)] text-[var(--accent-blue)]"
                  : "bg-[rgba(255,255,255,0.08)] text-[var(--text-muted)]"
              }`}
            >
              {savingNotifs ? <Loader2 size={12} className="animate-spin" /> : notificationsEnabled ? <Check size={12} /> : null}
              {notificationsEnabled ? "Active" : "Disabled"}
            </span>
          </button>
        </div>

        {/* Profile settings */}
        <div className="panel p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(240,163,58,0.16)] text-[var(--accent-amber)]">
              <User size={20} />
            </span>
            <div>
              <h2 className="font-bold">Profile</h2>
              <p className="text-xs text-[var(--text-secondary)]">Identity & cohort</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
            You are enrolled as a <span className="font-semibold text-[var(--text-primary)]">{role}</span> in the Ghana cyber readiness cohort.
          </p>
        </div>
      </div>

      <div className="panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck size={20} className="text-[var(--accent-teal)]" />
          <div>
            <p className="font-bold">Security posture is healthy</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Your workspace is ready for scenario practice, reporting, and leaderboard tracking.
            </p>
          </div>
        </div>
        <Link
          href="/handler/sign-out"
          className="flex shrink-0 items-center gap-2 rounded-xl border border-[rgba(255,87,87,0.32)] bg-[rgba(255,87,87,0.08)] px-4 py-2 text-sm font-semibold text-[var(--accent-red)] transition-all hover:bg-[rgba(255,87,87,0.18)]"
        >
          <LogOut size={15} />
          Sign Out
        </Link>
      </div>
    </section>
  );
}
