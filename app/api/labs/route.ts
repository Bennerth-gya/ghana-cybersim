import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const labs = await prisma.lab.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        category: true,
        difficulty: true,
        timeEstimate: true,
        skills: true,
        risk: true,
        accessType: true,
        maxDurationMin: true,
        points: true,
      },
    });
    const categories = Array.from(new Set(labs.map((lab) => lab.category)));
    return NextResponse.json({ labs, categories });
  } catch (error) {
    console.error('Error fetching labs:', error);
    return NextResponse.json({ error: 'Failed to fetch labs' }, { status: 500 });
  }
}
