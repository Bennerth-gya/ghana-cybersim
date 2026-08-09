import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim() ?? '';

  if (q.length < 2) {
    return NextResponse.json({ scenarios: [], reports: [] });
  }

  const [scenarios, simulations] = await Promise.all([
    prisma.scenario.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
          { risk: { contains: q, mode: 'insensitive' } },
        ],
      },
      select: { id: true, title: true, description: true, difficulty: true, category: true },
      take: 5,
    }),
    prisma.simulation.findMany({
      where: {
        status: 'COMPLETED',
        scenario: {
          title: { contains: q, mode: 'insensitive' },
        },
      },
      include: {
        scenario: { select: { title: true, category: true } },
        report: { select: { id: true, score: true } },
      },
      take: 4,
    }),
  ]);

  const reports = simulations
    .filter((s) => s.report)
    .map((s) => ({
      reportId: s.report!.id,
      simulationId: s.id,
      title: s.scenario.title,
      score: s.report!.score,
      category: s.scenario.category,
    }));

  return NextResponse.json({ scenarios, reports });
}
