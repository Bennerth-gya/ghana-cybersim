import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ScenarioCategory, ScenarioDifficulty, type Prisma } from '@/lib/generated/prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');

    const where: Prisma.ScenarioWhereInput = {};
    
    if (category && category !== 'All Categories') {
      where.category = category.toUpperCase() as ScenarioCategory;
    }
    
    if (difficulty) {
      where.difficulty = difficulty.toUpperCase() as ScenarioDifficulty;
    }

    const scenarios = await prisma.scenario.findMany({
      where,
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({ scenarios });
  } catch (error) {
    console.error('Error fetching scenarios:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scenarios' },
      { status: 500 }
    );
  }
}
