import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/simulations/[id]/steps
 * Returns all SimulationStep rows for this simulation, ordered by stepNumber.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const steps = await prisma.simulationStep.findMany({
      where: { simulationId: id },
      orderBy: { stepNumber: 'asc' },
    });

    return NextResponse.json({ steps });
  } catch (error) {
    console.error('Error fetching steps:', error);
    return NextResponse.json({ error: 'Failed to fetch steps' }, { status: 500 });
  }
}

/**
 * POST /api/simulations/[id]/steps
 * Records a user's answer for a step and updates simulation progress.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { stepNumber, selectedOption, timeTakenSec } = body;

    if (stepNumber === undefined || selectedOption === undefined) {
      return NextResponse.json(
        { error: 'stepNumber and selectedOption are required' },
        { status: 400 }
      );
    }

    // Get the simulation
    const simulation = await prisma.simulation.findUnique({
      where: { id },
    });

    if (!simulation) {
      return NextResponse.json({ error: 'Simulation not found' }, { status: 404 });
    }

    // Find the existing step record (created at simulation start)
    const existingStep = await prisma.simulationStep.findUnique({
      where: { simulationId_stepNumber: { simulationId: id, stepNumber } },
    });

    if (!existingStep) {
      return NextResponse.json({ error: 'Step not found' }, { status: 404 });
    }

    const isCorrect = selectedOption === existingStep.correctOption;

    // Record the user's answer
    const simulationStep = await prisma.simulationStep.update({
      where: { simulationId_stepNumber: { simulationId: id, stepNumber } },
      data: { selectedOption, isCorrect, timeTakenSec },
    });

    // Recalculate metrics
    const allSteps = await prisma.simulationStep.findMany({ where: { simulationId: id } });
    const answeredSteps = allSteps.filter((s) => s.selectedOption !== null);
    const correctAnswers = answeredSteps.filter((s) => s.isCorrect).length;
    const totalSteps = allSteps.length;
    const progress = Math.round((answeredSteps.length / totalSteps) * 100);
    const riskReduced = Math.min(95, Math.round(progress * 0.72 + correctAnswers * 5));

    await prisma.simulation.update({
      where: { id },
      data: {
        currentStep: stepNumber,
        timeTakenSec: (simulation.timeTakenSec || 0) + (timeTakenSec || 0),
        riskReduced,
      },
    });

    return NextResponse.json({
      step: simulationStep,
      isCorrect,
      updatedMetrics: { correctAnswers, progress, riskReduced },
    });
  } catch (error) {
    console.error('Error saving simulation step:', error);
    return NextResponse.json({ error: 'Failed to save simulation step' }, { status: 500 });
  }
}
