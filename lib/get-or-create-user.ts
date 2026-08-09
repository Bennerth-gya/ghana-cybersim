import { prisma } from '@/lib/prisma';

interface HexclaveUser {
  primaryEmail: string | null;
  displayName?: string | null;
}

/**
 * Ensures a User row exists in our DB for this Hexclave user.
 * Safe to call on every authenticated request — uses upsert.
 */
export async function getOrCreateDbUser(hexUser: HexclaveUser) {
  const email = hexUser.primaryEmail;
  if (!email) throw new Error('Authenticated user has no email');

  const name = hexUser.displayName ?? email.split('@')[0];

  return prisma.user.upsert({
    where: { email },
    create: { email, name, role: 'STUDENT' },
    update: {}, // don't overwrite anything on subsequent logins
  });
}
