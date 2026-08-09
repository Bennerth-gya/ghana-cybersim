import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const simulation = await prisma.simulation.findUnique({
      where: { id },
      include: {
        scenario: true,
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
      },
    });

    if (!simulation) {
      return NextResponse.json(
        { error: 'Simulation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ simulation });
  } catch (error) {
    console.error('Error fetching simulation:', error);
    return NextResponse.json(
      { error: 'Failed to fetch simulation' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, currentStep, score, timeTakenSec, riskReduced } = body;

    const simulation = await prisma.simulation.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(currentStep !== undefined && { currentStep }),
        ...(score !== undefined && { score }),
        ...(timeTakenSec !== undefined && { timeTakenSec }),
        ...(riskReduced !== undefined && { riskReduced }),
        ...(status === 'COMPLETED' && { completedAt: new Date() }),
      },
      include: {
        scenario: true,
      },
    });

    return NextResponse.json({ simulation });
  } catch (error) {
    console.error('Error updating simulation:', error);
    return NextResponse.json(
      { error: 'Failed to update simulation' },
      { status: 500 }
    );
  }
}
