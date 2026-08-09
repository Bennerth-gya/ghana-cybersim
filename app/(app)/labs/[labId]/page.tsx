import { prisma } from '@/lib/prisma';
import { ShieldCheck, Clock, KeyRound, Coins, TimerReset } from 'lucide-react';
import StartLabButton from './StartLabButton';

type Props = { params: Promise<{ labId: string }> };

export default async function LabPage({ params }: Props) {
  const { labId } = await params;
  const lab = await prisma.lab.findFirst({
    where: {
      OR: [{ slug: labId }, { id: labId }],
    },
  });

  if (!lab) {
    return (
      <section className="mx-auto max-w-6xl space-y-5">
        <div className="panel p-10 text-center">
          <p className="text-lg font-semibold">Lab not found.</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">Check the lab list and try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">Lab details</p>
          <h1 className="mt-2 text-3xl font-bold">{lab.title}</h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">{lab.description}</p>
        </div>
        <StartLabButton labId={lab.slug} />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="panel p-5">
          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="panel-soft p-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Clock size={16} />
                Time Estimate
              </div>
              <p className="mt-3 text-lg font-semibold">{lab.timeEstimate} minutes</p>
            </div>
            <div className="panel-soft p-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <KeyRound size={16} />
                Access
              </div>
              <p className="mt-3 text-lg font-semibold">{lab.accessType}</p>
            </div>
            <div className="panel-soft p-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <TimerReset size={16} />
                Instance TTL
              </div>
              <p className="mt-3 text-lg font-semibold">{lab.maxDurationMin} minutes</p>
            </div>
            <div className="panel-soft p-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Coins size={16} />
                Points
              </div>
              <p className="mt-3 text-lg font-semibold">{lab.points}</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="panel-soft p-4">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Objective</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Launch the isolated target, investigate the transaction lookup behavior, retrieve the hidden administrator flag, and submit it before the instance expires.
              </p>
            </div>
          </div>
        </div>

        <aside className="panel p-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
              <ShieldCheck size={16} />
              <span>Lab category</span>
            </div>
            <div className="rounded-3xl bg-[rgba(109,93,252,0.08)] p-4">
              <p className="text-sm font-semibold">{lab.category}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Every start request creates a fresh Docker target with a private network and automatic expiry.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
