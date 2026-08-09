import Sidebar, { MobileNav, MobileNavDrawer } from "@/components/Sidebar";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalSearch from "@/components/GlobalSearch";
import { Bell } from "lucide-react";
import PageTransition from "@/components/PageTransition";

function getInitials(name: string) {
  return (
    name
      .split(/[\s@._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "CS"
  );
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });
  // Provision DB user row on first login (no-op on subsequent visits)
  await getOrCreateDbUser(user);
  const displayName = user.displayName ?? user.primaryEmail ?? "CyberSim learner";
  const detail = user.primaryEmail ?? "Authenticated learner";
  const initials = getInitials(displayName);

  return (
    <div className="cyber-shell flex min-h-screen text-[var(--text-primary)]">
      {/* Desktop sidebar */}
      <Sidebar />

      <div className="min-w-0 flex-1 flex flex-col">
        <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-panel)] backdrop-blur-xl">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">
            {/* Left: Mobile hamburger + Global Search */}
            <div className="flex items-center gap-3">
              {/* Mobile hamburger — fully functional drawer */}
              <MobileNavDrawer />

              {/* Real-time Global Search bar */}
              <GlobalSearch />
            </div>

            {/* Right: Theme toggle + Notifications + User avatar */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                aria-label="Notifications"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:border-[var(--accent-purple)] hover:text-[var(--text-primary)] hover:scale-105 active:scale-95"
              >
                <Bell size={16} />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(240,163,58,0.44)] bg-[linear-gradient(135deg,rgba(240,163,58,0.4),rgba(109,93,252,0.24))] text-xs font-bold text-[var(--text-primary)] transition-transform hover:scale-110 cursor-pointer">
                  {initials}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold leading-none">{displayName}</p>
                  <p className="mt-1 text-[11px] text-[var(--text-muted)]">{detail}</p>
                </div>
              </div>
            </div>
          </div>
          <MobileNav />
        </header>

        <main className="px-4 py-5 sm:px-6 lg:px-7 flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
