import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      const topics = await prisma.learningTopic.findMany({
        orderBy: { level: 'asc' },
      });

      return NextResponse.json({
        topics: topics.map((topic) => ({
          ...topic,
          progress: 0,
        })),
      });
    }

    const topics = await prisma.learningTopic.findMany({
      include: {
        progress: {
          where: { userId },
        },
      },
      orderBy: { level: 'asc' },
    });

    const topicsWithProgress = topics.map((topic) => ({
      ...topic,
      progress: topic.progress?.[0]?.progress || 0,
    }));

    return NextResponse.json({ topics: topicsWithProgress });
  } catch (error) {
    console.error('Error fetching learning topics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch learning topics' },
      { status: 500 }
    );
  }
}
