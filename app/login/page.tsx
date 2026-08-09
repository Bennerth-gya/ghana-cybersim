import { SignIn } from "@hexclave/next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your CyberSim AI learner account to continue your Ghana cyber readiness training.",
};

export default function LoginPage() {
  return (
    <main className="cyber-shell flex min-h-screen items-center justify-center px-4 py-10 text-[var(--text-primary)]">
      <section className="grid w-full max-w-5xl gap-5 lg:grid-cols-[1fr_420px]">
        {/* Left branding panel — desktop only */}
        <div className="panel hidden p-7 lg:flex lg:flex-col">
          <Link href="/" className="flex items-center gap-3">
            <span className="brand-mark">
              <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
            </span>
            <span className="font-bold">CyberSim AI</span>
          </Link>
          <h1 className="mt-16 max-w-lg text-4xl font-black leading-tight">
            Enter the cyber range and continue your defense training.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
            Resume simulations, review reports, and keep your Ghana cyber readiness score moving.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-4 pt-10">
            {[
              { value: "25+", label: "Attack Scenarios" },
              { value: "10+", label: "Attack Categories" },
              { value: "500+", label: "Learners" },
              { value: "95%", label: "Learning Effectiveness" },
            ].map(({ value, label }) => (
              <div key={label} className="panel-soft p-4">
                <p className="text-2xl font-black text-[var(--accent-violet)]">{value}</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right auth panel */}
        <div className="panel flex flex-col p-6">
          {/* Mobile brand */}
          <div className="mb-7 flex items-center gap-3 lg:hidden">
            <span className="brand-mark">
              <ShieldCheck size={18} className="text-[var(--accent-violet)]" />
            </span>
            <span className="font-bold">CyberSim AI</span>
          </div>

          <div className="mb-6">
            <p className="section-title">Secure login</p>
            <h2 className="mt-3 text-2xl font-bold">Welcome back</h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">Use your learner account to continue.</p>
          </div>

          <SignIn />
        </div>
      </section>
    </main>
  );
}
