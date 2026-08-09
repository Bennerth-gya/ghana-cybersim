"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Database,
  LockKeyhole,
  Mail,
  RadioTower,
  ShieldAlert,
  Smartphone,
  Target,
  Loader2,
} from "lucide-react";

type ScenarioDifficulty = "EASY" | "MEDIUM" | "HARD";

interface Scenario {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: ScenarioDifficulty;
  timeEstimate: number;
  skills: string[];
  risk: string;
  targetSector?: string;
}

const DIFFICULTY_STYLE: Record<ScenarioDifficulty, { bg: string; color: string }> = {
  EASY: { bg: "rgba(34, 199, 169, 0.14)", color: "var(--accent-teal)" },
  MEDIUM: { bg: "rgba(240, 163, 58, 0.16)", color: "var(--accent-amber)" },
  HARD: { bg: "rgba(255, 87, 87, 0.16)", color: "var(--accent-red)" },
};

const ICONS = [Mail, LockKeyhole, ShieldAlert, Database, Smartphone, RadioTower];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.2 } },
};

export default function ScenariosPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [selectedScenarioId, setSelectedScenarioId] = useState("");
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [categoriesRes, scenariosRes] = await Promise.all([
          fetch("/api/scenarios/categories"),
          fetch("/api/scenarios"),
        ]);
        const categoriesData = await categoriesRes.json();
        const scenariosData = await scenariosRes.json();
        setCategories(categoriesData.categories || []);
        setScenarios(scenariosData.scenarios || []);
        if (scenariosData.scenarios?.length > 0) {
          setSelectedScenarioId(scenariosData.scenarios[0].id);
        }
      } catch (err) {
        setError("Failed to load scenarios");
        console.error("Error fetching scenarios:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered =
    activeCategory === "All Categories"
      ? scenarios
      : scenarios.filter((s) => s.category === activeCategory);

  const selectedScenario = scenarios.find((s) => s.id === selectedScenarioId) ?? scenarios[0];

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl space-y-5">
        <div className="flex flex-col gap-2">
          <p className="section-title">Scenarios</p>
          <h1 className="mt-2 text-3xl font-bold">Choose Attack Scenario</h1>
        </div>
        <div className="flex items-center justify-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <Loader2 size={32} className="text-[var(--accent-violet)]" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl space-y-5">
        <div className="text-center py-12">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="section-title">Scenarios</p>
        <h1 className="mt-2 text-3xl font-bold">Choose Attack Scenario</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Select a category and scenario to start a guided simulation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[260px_1fr_360px]">
        {/* Categories Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="panel p-4"
        >
          <p className="mb-3 text-sm font-bold">Categories</p>
          <div className="flex flex-col gap-2">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.15, duration: 0.3 }}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 overflow-hidden ${
                  activeCategory === category
                    ? "bg-[rgba(109,93,252,0.24)] text-white shadow-[0_0_15px_rgba(109,93,252,0.15)]"
                    : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                }`}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="category-active"
                    className="absolute inset-0 rounded-xl bg-[rgba(109,93,252,0.24)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.aside>

        {/* Scenario List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="panel p-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold">Scenario Library</p>
            <motion.span
              key={filtered.length}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]"
            >
              {filtered.length} available
            </motion.span>
          </div>

          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-[var(--text-secondary)]">
              No scenarios in this category yet.
            </p>
          ) : (
            <motion.div className="grid gap-3" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((scenario, i) => {
                  const Icon = ICONS[scenarios.indexOf(scenario) % ICONS.length];
                  const difficulty = DIFFICULTY_STYLE[scenario.difficulty];
                  const isSelected = scenario.id === selectedScenarioId;

                  return (
                    <motion.button
                      key={scenario.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      layout
                      whileHover={{ scale: 1.012, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedScenarioId(scenario.id)}
                      className={`panel-soft group grid gap-3 p-4 text-left transition-all duration-300 sm:grid-cols-[auto_1fr_auto] sm:items-center ${
                        isSelected
                          ? "border-[rgba(109,93,252,0.55)] bg-[rgba(109,93,252,0.06)] shadow-[0_0_20px_rgba(109,93,252,0.1)]"
                          : "hover:border-[rgba(109,93,252,0.45)] hover:bg-[rgba(109,93,252,0.04)]"
                      }`}
                    >
                      <motion.span
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-[rgba(109,93,252,0.24)] text-[var(--accent-violet)] shadow-[0_0_16px_rgba(109,93,252,0.3)]"
                            : "bg-[rgba(109,93,252,0.14)] text-[var(--accent-violet)] group-hover:bg-[rgba(109,93,252,0.22)]"
                        }`}
                      >
                        <Icon size={20} />
                      </motion.span>
                      <span>
                        <span className="block font-semibold">{scenario.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-[var(--text-secondary)]">
                          {scenario.description}
                        </span>
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="status-pill" style={{ background: difficulty.bg, color: difficulty.color }}>
                          {scenario.difficulty.charAt(0) + scenario.difficulty.slice(1).toLowerCase()}
                        </span>
                        <motion.span
                          animate={{ x: isSelected ? 3 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight
                            size={16}
                            className={`transition-colors duration-200 ${
                              isSelected ? "text-[var(--accent-violet)]" : "text-[var(--text-muted)] group-hover:text-[var(--accent-violet)]"
                            }`}
                          />
                        </motion.span>
                      </span>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>

        {/* Detail Panel */}
        {selectedScenario && (
          <motion.aside
            key={selectedScenario.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="panel flex flex-col justify-between p-5"
          >
            <div>
              <p className="section-title">Scenario Details</p>
              <motion.h2
                key={selectedScenario.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-xl font-bold"
              >
                {selectedScenario.title}
              </motion.h2>
              <motion.p
                key={selectedScenario.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-3 text-sm leading-6 text-[var(--text-secondary)]"
              >
                {selectedScenario.description}
              </motion.p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="panel-soft p-3"
                >
                  <Clock size={16} className="mb-2 text-[var(--accent-blue)]" />
                  <p className="text-[11px] text-[var(--text-muted)]">Time</p>
                  <p className="text-sm font-semibold">{selectedScenario.timeEstimate} min</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="panel-soft p-3"
                >
                  <Target size={16} className="mb-2 text-[var(--accent-teal)]" />
                  <p className="text-[11px] text-[var(--text-muted)]">Risk</p>
                  <p className="text-sm font-semibold">{selectedScenario.risk}</p>
                </motion.div>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedScenario.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[rgba(109,93,252,0.3)] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8"
            >
              <Link href={`/simulate/${selectedScenario.id}`} className="cyber-button-primary w-full justify-center">
                Start Simulation
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.aside>
        )}
      </div>
    </section>
  );
}
