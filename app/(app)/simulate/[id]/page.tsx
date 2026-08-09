"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SimulationPlayer from "@/components/SimulationPlayer";
import { ShieldAlert } from "lucide-react";

type AttackStep = {
  stepNumber: number;
  title: string;
  narrative: string;
  attackerGoal: string;
  options: string[];
  correctOption: number;
};

type Scenario = {
  id: string;
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
};

export default function SimulatePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [scenarioId, setScenarioId] = useState<string | null>(null);
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [simulationId, setSimulationId] = useState<string | null>(null);
  const [steps, setSteps] = useState<AttackStep[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Resolve params
  useEffect(() => {
    params.then(({ id }) => setScenarioId(id));
  }, [params]);

  // Start simulation when scenarioId is ready
  useEffect(() => {
    if (!scenarioId) return;

    async function startSimulation() {
      try {
        setLoading(true);

        // 1. Fetch the scenario details
        const scenarioRes = await fetch(`/api/scenarios/${scenarioId}`);
        if (!scenarioRes.ok) throw new Error("Scenario not found");
        const { scenario: scenarioData } = await scenarioRes.json();
        setScenario(scenarioData);

        // 2. Start a new simulation — creates DB row + step records
        const startRes = await fetch("/api/simulations/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scenarioId }),
        });

        if (!startRes.ok) {
          const err = await startRes.json();
          if (startRes.status === 401) {
            router.push("/login");
            return;
          }
          throw new Error(err.error ?? "Failed to start simulation");
        }

        const { simulationId: simId } = await startRes.json();
        setSimulationId(simId);

        // 3. Fetch the simulation steps just created
        const stepsRes = await fetch(`/api/simulations/${simId}/steps`);
        if (!stepsRes.ok) throw new Error("Failed to load steps");
        const { steps: stepData } = await stepsRes.json();
        setSteps(stepData);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to load simulation";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    startSimulation();
  }, [scenarioId, router]);

  if (loading) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-4 py-20">
        <div className="inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-[rgba(109,93,252,0.16)] text-[var(--accent-violet)]">
          <ShieldAlert size={28} />
        </div>
        <p className="text-sm text-[var(--text-secondary)]">Initializing simulation environment…</p>
      </section>
    );
  }

  if (error || !scenario || !simulationId || steps.length === 0) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-5 py-24 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-[rgba(255,87,87,0.32)] bg-[rgba(255,87,87,0.08)] text-[var(--accent-red)] shadow-[0_0_40px_rgba(255,87,87,0.12)]">
          <ShieldAlert size={36} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Simulation Load Failed</h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            {error ?? "Could not load this simulation environment. The scenario might be unavailable or restricted."}
          </p>
        </div>
        <div className="pt-4 flex items-center gap-4">
          <button onClick={() => window.location.reload()} className="cyber-button-primary">
            Retry Connection
          </button>
          <button onClick={() => router.push("/scenarios")} className="cyber-button-secondary">
            Back to Library
          </button>
        </div>
      </section>
    );
  }

  return (
    <SimulationPlayer
      simulationId={simulationId}
      scenarioTitle={scenario.title}
      difficulty={scenario.difficulty}
      steps={steps}
    />
  );
}
