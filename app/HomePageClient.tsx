"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const STATS = [
  { value: "25+", label: "Attack Scenarios" },
  { value: "10+", label: "Attack Categories" },
  { value: "500+", label: "Users" },
  { value: "95%", label: "Learning Effectiveness" },
];

const FEATURES = [
  { icon: BrainCircuit, label: "AI Generated Scenarios" },
  { icon: Waypoints, label: "Realistic Attack Flows" },
  { icon: ShieldCheck, label: "Defense Guidance" },
  { icon: Target, label: "Learn and Improve" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function HomePageClient() {
  return (
    <main className="cyber-shell min-h-screen text-[var(--text-primary)]">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <span className="brand-mark transition-transform duration-300 group-hover:scale-110">
            <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
          </span>
          <span className="text-base font-bold">CyberSim AI</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[var(--text-secondary)] md:flex">
          <Link href="/" className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[var(--accent-violet)]">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors duration-200">About</Link>
          <Link href="/login" className="hover:text-white transition-colors duration-200">Scenarios</Link>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link href="/login" className="cyber-button-primary min-h-10 px-5">
            Sign In
          </Link>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-8 pt-7 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        {/* Left: Copy */}
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(109,93,252,0.34)] bg-[rgba(109,93,252,0.12)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-violet)]"
          >
            <Sparkles size={14} className="animate-pulse" />
            Ghana cyber readiness lab
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="max-w-xl text-5xl font-black leading-[1.04] sm:text-6xl"
          >
            AI-Powered{" "}
            <span className="gradient-text">Cyberattack</span>{" "}
            Simulation
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg"
          >
            Simulate real-world cyberattacks, understand attacker strategies, and learn how to defend effectively using AI-generated scenarios.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/scenarios" className="cyber-button-primary">
                Start Simulation
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/scenarios" className="cyber-button-secondary">
                Explore Scenarios
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-10 grid grid-cols-2 gap-4 text-sm text-[var(--text-secondary)] sm:grid-cols-4"
          >
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                custom={4 + i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.06, y: -2 }}
                className="flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(109,93,252,0.28)] bg-[rgba(109,93,252,0.1)] text-[var(--accent-violet)] transition-all duration-300 hover:border-[rgba(109,93,252,0.6)] hover:bg-[rgba(109,93,252,0.2)] hover:shadow-[0_0_16px_rgba(109,93,252,0.3)]">
                  <Icon size={16} />
                </span>
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="hero-visual"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hero-alert left-[11%] top-[18%] px-4 py-3 text-xs font-bold tracking-wide"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--accent-red)] animate-pulse" />
            MALWARE DETECTED
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="hero-alert bottom-[35%] left-[9%] flex items-center gap-2 px-4 py-3 text-xs font-bold"
          >
            <Radar size={16} className="animate-spin" style={{ animationDuration: "3s" }} />
            THREAT SIGNAL
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="hero-alert right-[5%] top-[26%] flex items-center gap-3 px-4 py-3"
          >
            <LockKeyhole size={20} />
            <div className="space-y-1">
              <span className="block h-1.5 w-20 rounded-full bg-[rgba(255,87,87,0.68)]" />
              <span className="block h-1.5 w-14 rounded-full bg-[rgba(255,87,87,0.42)]" />
            </div>
          </motion.div>

          <div className="hero-operator" aria-hidden="true">
            <div className="body" />
            <div className="hood" />
            <div className="laptop">
              <div className="shield" />
            </div>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="panel grid grid-cols-2 gap-0 overflow-hidden p-0 sm:grid-cols-4 lg:col-span-2"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ backgroundColor: "rgba(109,93,252,0.06)" }}
              className="border-b border-r border-[var(--border-subtle)] px-5 py-5 text-center last:border-r-0 sm:border-b-0 transition-colors duration-300"
            >
              <p className="text-3xl font-black text-[var(--accent-violet)]">
                <AnimatedCounter value={value} />
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
