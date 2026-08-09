import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    // In a real implementation, you'd get the userId from the session
    // For now, we'll use a placeholder or get it from headers
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID required' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        simulations: {
          include: {
            scenario: true,
          },
          orderBy: { startedAt: 'desc' },
          take: 5,
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Calculate dashboard metrics
    const completedSimulations = user.simulations.filter((simulation) => simulation.status === 'COMPLETED');
    const simulationsCompleted = completedSimulations.length;
    const scenariosExplored = user.simulations.length;
    const totalScore = user.totalScore;
    
    // Calculate rank (simplified - in production you'd cache this)
    const rank = await prisma.user.count({
      where: {
        totalScore: {
          gt: user.totalScore,
        },
      },
    }) + 1;

    const metrics = {
      simulationsCompleted,
      scenariosExplored,
      totalScore,
      rank: `Top ${Math.round((rank / 100) * 100)}%`,
    };

    return NextResponse.json({ user, metrics });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}
