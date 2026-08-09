"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Target,
  Play,
  BookOpen,
  FileText,
  Trophy,
  Settings,
  LogOut,
  ShieldCheck,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/scenarios", label: "Scenarios", icon: Target },
  { href: "/labs", label: "Labs", icon: ShieldCheck },
  { href: "/simulate", label: "My Simulations", icon: Play },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

function isActivePath(pathname: string | null, href: string) {
  return pathname === href || pathname?.startsWith(`${href}/`);
}

function NavLinks({ pathname, onNavigate }: { pathname: string | null; onNavigate?: () => void }) {
  return (
    <>
      <nav className="flex-1 flex flex-col gap-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }, i) => {
          const active = isActivePath(pathname, href);
          return (
            <motion.div
              key={href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
            >
              <Link
                href={href}
                onClick={onNavigate}
                className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 overflow-hidden group ${
                  active
                    ? "nav-link-active"
                    : "text-[var(--text-secondary)] hover:bg-[rgba(109,93,252,0.08)] hover:text-[var(--text-primary)]"
                }`}
              >
                {/* Active glow indicator */}
                {active && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r-full bg-[var(--accent-violet)]"
                    style={{ boxShadow: "0 0 8px var(--accent-violet)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover shimmer */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-transparent via-[rgba(109,93,252,0.04)] to-transparent" />

                <motion.span
                  whileHover={{ scale: 1.15, rotate: active ? 0 : 5 }}
                  transition={{ duration: 0.2 }}
                  className={active ? "text-[var(--accent-violet)]" : ""}
                >
                  <Icon size={16} />
                </motion.span>
                {label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="flex flex-col gap-1 pt-2 border-t border-[var(--border-subtle)]">
        <Link
          href="/settings"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[rgba(109,93,252,0.08)] hover:text-[var(--text-primary)] transition-all duration-200 group"
        >
          <motion.span whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
            <Settings size={16} />
          </motion.span>
          Settings
        </Link>
        <Link
          href="/handler/sign-out"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--accent-red)] hover:bg-[rgba(255,87,87,0.08)] transition-all duration-200"
        >
          <LogOut size={16} />
          Sign Out
        </Link>
      </div>
    </>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="hidden lg:flex w-[244px] shrink-0 border-r border-[var(--border-subtle)] bg-[var(--bg-panel)] backdrop-blur-xl flex-col h-screen sticky top-0 px-4 py-5"
    >
      <div className="flex items-center gap-3 px-1 pb-5 mb-4 border-b border-[var(--border-subtle)]">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="brand-mark"
        >
          <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
        </motion.div>
        <div>
          <span className="block text-sm font-semibold text-[var(--text-primary)]">CyberSim AI</span>
          <span className="text-[11px] text-[var(--text-muted)]">Ghana cyber range</span>
        </div>
      </div>

      <NavLinks pathname={pathname} />
    </motion.aside>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

export function MobileMenuButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      aria-label="Open navigation"
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:border-[var(--accent-purple)] hover:text-[var(--text-primary)] lg:hidden"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="2" y1="5" x2="16" y2="5" />
        <line x1="2" y1="9" x2="16" y2="9" />
        <line x1="2" y1="13" x2="16" y2="13" />
      </svg>
    </button>
  );
}

export function MobileNavDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] lg:hidden transition-all hover:border-[var(--accent-purple)] hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="2" y1="5" x2="16" y2="5" />
          <line x1="2" y1="9" x2="16" y2="9" />
          <line x1="2" y1="13" x2="16" y2="13" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[var(--border-subtle)] bg-[var(--bg-panel-strong)] px-4 py-5 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="brand-mark">
                    <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">CyberSim AI</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X size={18} />
                </motion.button>
              </div>

              <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden flex gap-2 overflow-x-auto border-t border-[var(--border-subtle)] px-4 py-3">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = isActivePath(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-200 ${
              active
                ? "border-[rgba(109,93,252,0.54)] bg-[rgba(109,93,252,0.2)] text-white shadow-[0_0_12px_rgba(109,93,252,0.2)]"
                : "border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(109,93,252,0.3)]"
            }`}
          >
            <Icon size={14} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
