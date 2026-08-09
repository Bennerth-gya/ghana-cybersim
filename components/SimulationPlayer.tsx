"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Circle,
  FileText,
  KeyRound,
  LockKeyhole,
  Mail,
  PauseCircle,
  Play,
  Search,
  Send,
  ShieldAlert,
  Target,
  X,
} from "lucide-react";


type AttackStep = {
  stepNumber: number;
  title: string;
  description?: string;
  narrative: string;
  attackerGoal: string;
  options: string[];
  correctOption: number;
};

const STEP_ICONS = [Search, ShieldAlert, Send, KeyRound, Target];
const TABS = ["Attack Flow", "Details", "Logs", "Actions"] as const;
type Tab = (typeof TABS)[number];

export default function SimulationPlayer({
  simulationId,
  scenarioTitle,
  difficulty,
  steps,
}: {
  simulationId: string;
  scenarioTitle: string;
  difficulty: string;
  steps: AttackStep[];
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);
  const [reportId, setReportId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("Attack Flow");
  const [paused, setPaused] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;
  const answeredEntries = Object.entries(answers);
  const correctAnswers = answeredEntries.filter(([index, answer]) => steps[Number(index)]?.correctOption === answer).length;
  const progress = Math.round((answeredEntries.length / steps.length) * 100);
  const riskReduced = Math.min(95, Math.round(progress * 0.72 + correctAnswers * 5));

  function selectOption(index: number) {
    if (completed || paused || submitting) return;
    setSelectedOption(index);
  }

  async function next() {
    if (selectedOption === null || paused || submitting) return;

    setSubmitting(true);

    try {
      const startTime = Date.now();
      try {
        const response = await fetch(`/api/simulations/${simulationId}/steps`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stepNumber: currentStep + 1,
            selectedOption,
            timeTakenSec: Math.floor((Date.now() - startTime) / 1000),
          }),
        });

        if (!response.ok) {
          console.error('Failed to save step');
        }
      } catch (error) {
        console.error('Error saving step:', error);
      }

      setAnswers((prev) => ({ ...prev, [currentStep]: selectedOption }));

      if (isLast) {
        // Complete the simulation
        try {
          const response = await fetch(`/api/simulations/${simulationId}/complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ finalAnswers: answers }),
          });

          if (response.ok) {
            const data = await response.json();
            setReportId(data.report?.id ?? null);
            setCompleted(true);
          } else {
            setCompleted(true);
          }
        } catch (error) {
          console.error('Error completing simulation:', error);
          setCompleted(true);
        }
        return;
      }

      setCurrentStep((value) => value + 1);
      setSelectedOption(null);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      {/* Pause modal */}
      {paused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.72)] backdrop-blur-sm">
          <div className="panel w-full max-w-sm p-7 text-center">
            <PauseCircle size={44} className="mx-auto text-[var(--accent-amber)]" />
            <h2 className="mt-4 text-xl font-bold">Simulation Paused</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Your progress is saved. Resume when you&apos;re ready.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => setPaused(false)}
                className="cyber-button-primary w-full"
              >
                <Play size={15} /> Resume
              </button>
              <Link href="/simulate" className="cyber-button-secondary w-full">
                <X size={15} /> Exit to My Simulations
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs text-[var(--text-muted)]">My Simulations / {scenarioTitle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold">{scenarioTitle}</h1>
            <span className="status-pill bg-[rgba(34,199,169,0.14)] text-[var(--accent-teal)]">
              {completed ? "Completed" : "In Progress"}
            </span>
            <span className="status-pill bg-[rgba(109,93,252,0.14)] text-[var(--accent-violet)]">
              {difficulty}
            </span>
          </div>
        </div>
        <button
          onClick={() => setPaused(true)}
          className="cyber-button-secondary self-start sm:self-auto"
          disabled={completed}
        >
          <PauseCircle size={15} />
          Pause
        </button>
      </div>

      {/* Tabs */}
      <div className="panel p-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[rgba(109,93,252,0.22)] text-white"
                  : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Attack Flow tab */}
      {activeTab === "Attack Flow" && (
        <div className="panel p-5">
          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-5">
            <div className="flow-line absolute left-[10%] right-[10%] top-[22px] hidden h-px md:block" />
            {steps.map((item, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length];
              const done = index < currentStep || completed;
              const active = index === currentStep && !completed;

              return (
                <div key={item.title} className="relative flex flex-col items-center text-center">
                  <span
                    className={`z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border ${
                      done
                        ? "border-[rgba(34,199,169,0.42)] bg-[rgba(34,199,169,0.18)] text-[var(--accent-teal)]"
                        : active
                        ? "border-[rgba(109,93,252,0.68)] bg-[var(--accent-purple)] text-white"
                        : "border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {done ? <CheckCircle2 size={18} /> : <Icon size={17} />}
                  </span>
                  <p className="mt-3 text-xs font-bold text-white">{item.stepNumber}</p>
                  <p className="mt-1 text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 max-w-32 text-[11px] leading-4 text-[var(--text-secondary)]">{item.description ?? item.narrative}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Details tab */}
      {activeTab === "Details" && (
        <div className="panel p-5">
          <p className="section-title">Scenario Details</p>
          <h2 className="mt-3 text-xl font-bold">{scenarioTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
            This simulation walks you through each phase of a real attack, from initial reconnaissance to the attacker&apos;s final objective.
            You must choose the correct defensive response at each step to minimize risk and protect the target environment.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Total Steps", value: steps.length },
              { label: "Difficulty", value: difficulty },
              { label: "Completed", value: `${answeredEntries.length}/${steps.length}` },
              { label: "Correct", value: correctAnswers },
            ].map(({ label, value }) => (
              <div key={label} className="panel-soft p-4">
                <p className="text-[11px] text-[var(--text-muted)]">{label}</p>
                <p className="mt-1 text-xl font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Logs tab */}
      {activeTab === "Logs" && (
        <div className="panel p-5">
          <p className="section-title">Signal Log</p>
          <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
            {answeredEntries.length === 0 ? (
              <p className="text-[var(--text-muted)]">No actions recorded yet. Begin the simulation to see your response log.</p>
            ) : (
              answeredEntries.map(([stepIndex, choice]) => {
                const s = steps[Number(stepIndex)];
                const correct = s?.correctOption === choice;
                return (
                  <div key={stepIndex} className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] p-3">
                    {correct
                      ? <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent-teal)]" />
                      : <AlertTriangle size={16} className="mt-0.5 shrink-0 text-[var(--accent-amber)]" />}
                    <div>
                      <p className="font-semibold text-white">Step {Number(stepIndex) + 1}: {s?.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                        You chose: &ldquo;{s?.options[choice]}&rdquo;
                      </p>
                      <p className={`mt-0.5 text-xs font-semibold ${correct ? "text-[var(--accent-teal)]" : "text-[var(--accent-amber)]"}`}>
                        {correct ? "Correct response" : `Correct: "${s?.options[s?.correctOption]}"`}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Actions tab */}
      {activeTab === "Actions" && (
        <div className="panel p-5">
          <p className="section-title">Quick Actions</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => setActiveTab("Attack Flow")}
              className="cyber-button-secondary justify-start"
            >
              <Target size={16} /> View Attack Flow
            </button>
            <button
              onClick={() => { setCurrentStep(0); setSelectedOption(null); setAnswers({}); setCompleted(false); }}
              className="cyber-button-secondary justify-start"
              disabled={answeredEntries.length === 0}
            >
              <Search size={16} /> Restart Simulation
            </button>
            {completed && (
              <Link href={reportId ? `/reports/${reportId}` : '/reports'} className="cyber-button-primary sm:col-span-2">
                <FileText size={16} /> View Full Report
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="panel p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="section-title">Current Step: {step.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.narrative}</p>
            </div>
            <span className="hidden rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)] sm:inline-flex">
              {currentStep + 1} / {steps.length}
            </span>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-secondary)]">Choose response</p>
          <div className="grid gap-3">
            {step.options.map((option, index) => {
              const selected = selectedOption === index;
              return (
                <button
                  key={option}
                  onClick={() => selectOption(index)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition-colors ${
                    selected
                      ? "border-[rgba(109,93,252,0.72)] bg-[rgba(109,93,252,0.18)] text-white"
                      : "border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] text-[var(--text-secondary)] hover:border-[rgba(109,93,252,0.48)] hover:text-white"
                  }`}
                >
                  {selected ? <CheckCircle2 size={17} className="text-[var(--accent-teal)]" /> : <Circle size={17} />}
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={next}
              disabled={selectedOption === null || completed || paused || submitting}
              className="cyber-button-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLast ? "Finish Simulation" : "Next Step"}
              <ArrowRight size={16} />
            </button>
            {completed && (
              <Link href={reportId ? `/reports/${reportId}` : '/reports'} className="cyber-button-secondary">
                <FileText size={16} />
                View Report
              </Link>
            )}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="panel p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,87,87,0.14)] text-[var(--accent-red)]">
                <LockKeyhole size={18} />
              </span>
              <p className="font-bold">Attacker Goal</p>
            </div>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">{step.attackerGoal}</p>
          </div>

          <div className="panel p-5">
            <p className="mb-4 font-bold">Live Performance</p>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-xs text-[var(--text-secondary)]">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-[rgba(255,255,255,0.07)]">
                  <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-purple))]" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="panel-soft p-3">
                  <p className="text-[11px] text-[var(--text-muted)]">Correct</p>
                  <p className="mt-1 text-xl font-black">{correctAnswers}</p>
                </div>
                <div className="panel-soft p-3">
                  <p className="text-[11px] text-[var(--text-muted)]">Risk Reduced</p>
                  <p className="mt-1 text-xl font-black">{riskReduced}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel p-5">
            <p className="mb-3 font-bold">Signal Log</p>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--accent-blue)]" />
                Email metadata inspected
              </p>
              <p className="flex items-center gap-2">
                <ShieldAlert size={14} className="text-[var(--accent-amber)]" />
                Suspicious urgency detected
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[var(--accent-teal)]" />
                Response path ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
