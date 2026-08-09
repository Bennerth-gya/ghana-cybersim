import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hexclaveServerApp } from '@/lib/hexclave/server';
import { getOrCreateDbUser } from '@/lib/get-or-create-user';
import { SCENARIO_STEP_TEMPLATES } from '@/lib/scenario-steps';

/**
 * POST /api/simulations/start
 * Body: { scenarioId: string }
 *
 * Creates a Simulation row (plus its SimulationStep rows from templates),
 * returns { simulationId }.
 */
export async function POST(request: Request) {
  try {
    // 1. Authenticate
    const hexUser = await hexclaveServerApp.getUser({ or: 'return-null' });
    if (!hexUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { scenarioId } = await request.json();
    if (!scenarioId) {
      return NextResponse.json({ error: 'scenarioId is required' }, { status: 400 });
    }

    // 2. Ensure DB user exists
    const dbUser = await getOrCreateDbUser(hexUser);

    // 3. Fetch scenario
    const scenario = await prisma.scenario.findUnique({ where: { id: scenarioId } });
    if (!scenario) {
      return NextResponse.json({ error: 'Scenario not found' }, { status: 404 });
    }

    // 4. Create Simulation
    const simulation = await prisma.simulation.create({
      data: {
        userId: dbUser.id,
        scenarioId,
        status: 'IN_PROGRESS',
        currentStep: 0,
      },
    });

    // 5. Create SimulationStep rows from templates
    const templates = SCENARIO_STEP_TEMPLATES[scenario.title] ?? [];
    if (templates.length > 0) {
      await prisma.simulationStep.createMany({
        data: templates.map((t) => ({
          simulationId: simulation.id,
          stepNumber: t.stepNumber,
          title: t.title,
          narrative: t.narrative,
          attackerGoal: t.attackerGoal,
          options: t.options,
          correctOption: t.correctOption,
        })),
      });
    }

    return NextResponse.json({ simulationId: simulation.id });
  } catch (error) {
    console.error('Error starting simulation:', error);
    return NextResponse.json({ error: 'Failed to start simulation' }, { status: 500 });
  }
}
