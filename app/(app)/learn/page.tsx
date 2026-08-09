import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";

const icons = [ShieldCheck, Sparkles, BookOpen, GraduationCap];

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  CORE: { bg: "rgba(47, 134, 255, 0.16)", text: "var(--accent-blue)" },
  TECHNICAL: { bg: "rgba(109, 93, 252, 0.16)", text: "var(--accent-violet)" },
  ADVANCED: { bg: "rgba(255, 87, 87, 0.14)", text: "var(--accent-red)" },
  GHANA_FOCUS: { bg: "rgba(34, 199, 169, 0.14)", text: "var(--accent-teal)" },
};

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Build defensive instincts with cyber readiness lessons paired with hands-on simulations.",
};

export default async function LearnPage() {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });

  const [topics, dbUser] = await Promise.all([
    prisma.learningTopic.findMany({ orderBy: { createdAt: "asc" } }),
    user.primaryEmail
      ? prisma.user.findUnique({
          where: { email: user.primaryEmail },
          include: {
            simulations: {
              where: { status: "COMPLETED" },
            },
            progress: true,
          },
        })
      : null,
  ]);

  const completedSimCount = dbUser?.simulations.length ?? 0;
  // Topics started = min of completed sims and topic count (one sim per topic roughly)
  const topicsStarted = Math.min(completedSimCount, topics.length);

  const topicCount = topics.length;

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel overflow-hidden p-6">
          <p className="section-title">Learning hub</p>
          <h1 className="mt-3 text-3xl font-bold">
            Build defensive instincts before the attack lands.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
            Pair short lessons with simulations so you learn the signal, practice the response, and understand the attacker goal behind each phase.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              [`${topicCount}`, "Learning tracks"],
              [`${topicsStarted}/${topicCount}`, "Tracks started"],
              [
                topicCount > 0
                  ? `${Math.round((topicsStarted / topicCount) * 100)}%`
                  : "0%",
                "Completion rate",
              ],
            ].map(([value, label]) => (
              <div key={label} className="panel-soft p-4">
                <p className="text-2xl font-black text-[var(--accent-violet)]">{value}</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="section-title">Recommended learning path</p>
          <div className="mt-5 space-y-4">
            {[
              { step: "Identify", desc: "Recognize malicious indicators and attacker intent." },
              { step: "Contain", desc: "Take the right defensive action without increasing risk." },
              { step: "Recover", desc: "Preserve evidence and restore trusted operations." },
            ].map(({ step, desc }, i) => (
              <div key={step} className="flex gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(109,93,252,0.2)] text-sm font-bold text-[var(--accent-violet)]">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{step}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-secondary)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic, index) => {
          const Icon = icons[index % icons.length];
          const levelStyle = LEVEL_COLORS[topic.level] ?? LEVEL_COLORS.CORE;
          const isStarted = index < topicsStarted;

          return (
            <article key={topic.id} className="panel flex flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
                  <Icon size={20} />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{ background: levelStyle.bg, color: levelStyle.text }}
                >
                  {topic.level.replace("_", " ")}
                </span>
              </div>
              <h2 className="mt-5 text-lg font-bold">{topic.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
                {topic.description}
              </p>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>{topic.lessons} lessons</span>
                  {isStarted ? (
                    <span className="flex items-center gap-1 text-[var(--accent-teal)]">
                      <CheckCircle2 size={12} /> Started
                    </span>
                  ) : (
                    <span>0%</span>
                  )}
                </div>
                <div className="h-2 rounded-full bg-[rgba(255,255,255,0.07)]">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-purple),var(--accent-teal))] transition-all duration-700"
                    style={{ width: isStarted ? "100%" : "0%" }}
                  />
                </div>
              </div>
              <Link
                href="/scenarios"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--accent-violet)]"
              >
                {isStarted ? "Practice more" : "Start track"}
                <ArrowRight size={15} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="panel p-5">
        <p className="section-title">Readiness checklist</p>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            "Report suspicious messages to your IT team immediately",
            "Verify all payment requests through a secondary channel",
            "Use multi-factor authentication on every critical account",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.035)] p-3 text-sm"
            >
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--accent-teal)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
