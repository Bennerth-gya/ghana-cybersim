import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/leaderboard
 * Returns top 20 users by totalScore with rank, name, role, score, accuracy, trend.
 */
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { totalScore: 'desc' },
      take: 20,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        totalScore: true,
        accuracy: true,
        trend: true,
        skillLevel: true,
      },
    });

    const total = await prisma.user.count();

    const ranked = users.map((u, index) => ({
      id: u.id,
      name: u.name ?? u.email.split('@')[0],
      role: u.skillLevel,
      score: u.totalScore,
      accuracy: u.accuracy > 0 ? `${Math.round(u.accuracy)}%` : 'N/A',
      trend: u.trend ?? '+0%',
      rank: index + 1,
    }));

    return NextResponse.json({ users: ranked, total });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
