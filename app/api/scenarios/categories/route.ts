import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.scenario.findMany({
      select: { category: true },
      distinct: ['category'],
    });

    const categoryNames = categories.map(c => c.category);
    
    return NextResponse.json({ categories: ['All Categories', ...categoryNames] });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
