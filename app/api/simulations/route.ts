import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SimulationStatus, type Prisma } from '@/lib/generated/prisma/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, scenarioId } = body;

    if (!userId || !scenarioId) {
      return NextResponse.json(
        { error: 'userId and scenarioId are required' },
        { status: 400 }
      );
    }

    // Check if scenario exists
    const scenario = await prisma.scenario.findUnique({
      where: { id: scenarioId },
    });

    if (!scenario) {
      return NextResponse.json(
        { error: 'Scenario not found' },
        { status: 404 }
      );
    }

    // Create simulation
    const simulation = await prisma.simulation.create({
      data: {
        userId,
        scenarioId,
        status: 'NOT_STARTED',
        currentStep: 0,
      },
      include: {
        scenario: true,
      },
    });

    return NextResponse.json({ simulation });
  } catch (error) {
    console.error('Error creating simulation:', error);
    return NextResponse.json(
      { error: 'Failed to create simulation' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    const limit = searchParams.get('limit');

    const where: Prisma.SimulationWhereInput = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (status) {
      where.status = status.toUpperCase() as SimulationStatus;
    }

    const simulations = await prisma.simulation.findMany({
      where,
      include: {
        scenario: true,
      },
      orderBy: { startedAt: 'desc' },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json({ simulations });
  } catch (error) {
    console.error('Error fetching simulations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch simulations' },
      { status: 500 }
    );
  }
}
