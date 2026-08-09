import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Target, Waypoints } from "lucide-react";

const pillars = [
  { icon: BrainCircuit, title: "Adaptive Scenarios", description: "AI-guided exercises shaped around realistic attack decisions." },
  { icon: Waypoints, title: "Attack Flow Training", description: "Each simulation follows the stages analysts see during response." },
  { icon: Target, title: "Measurable Readiness", description: "Scores, risk reduction, and reports show where learners improve." },
];

export default function AboutPage() {
  return (
    <main className="cyber-shell min-h-screen text-[var(--text-primary)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="brand-mark">
            <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
          </span>
          <span className="font-bold">CyberSim AI</span>
        </Link>
        <Link href="/dashboard" className="cyber-button-primary min-h-10">
          Dashboard
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="panel p-7">
          <p className="section-title">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight">
            A cyber range for practical, Ghana-focused security training.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
            CyberSim AI helps learners practice real attack scenarios, understand attacker goals, and turn defensive choices into measurable progress.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article key={title} className="panel p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
                <Icon size={20} />
              </span>
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </article>
          ))}
        </div>

        <Link href="/scenarios" className="cyber-button-primary mt-6">
          Explore scenarios
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
