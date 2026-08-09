import { NextResponse } from 'next/server';
import { hexclaveServerApp } from '@/lib/hexclave/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(request: Request) {
  try {
    const user = await hexclaveServerApp.getUser({ or: 'redirect' });
    if (!user.primaryEmail) {
      return NextResponse.json({ error: 'User email missing' }, { status: 400 });
    }

    const { enabled } = await request.json();

    const updatedUser = await prisma.user.update({
      where: { email: user.primaryEmail },
      data: { notificationsEnabled: Boolean(enabled) },
      select: { notificationsEnabled: true },
    });

    return NextResponse.json({ success: true, notificationsEnabled: updatedUser.notificationsEnabled });
  } catch (error) {
    console.error('Error updating notifications:', error);
    return NextResponse.json({ error: 'Failed to update notification preferences' }, { status: 500 });
  }
}
