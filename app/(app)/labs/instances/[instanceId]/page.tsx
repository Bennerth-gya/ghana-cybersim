import { notFound } from "next/navigation";
import { Clock, Database, ExternalLink, ShieldCheck } from "lucide-react";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";
import LabInstanceControls from "./LabInstanceControls";

type Props = {
  params: Promise<{ instanceId: string }>;
};

export default async function LabInstancePage({ params }: Props) {
  const { instanceId } = await params;
  const hexUser = await hexclaveServerApp.getUser({ or: "redirect" });
  const dbUser = await getOrCreateDbUser(hexUser);

  const instance = await prisma.labInstance.findUnique({
    where: { id: instanceId },
    include: { lab: true },
  });

  if (!instance || instance.userId !== dbUser.id) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">Active lab</p>
          <h1 className="mt-2 text-3xl font-bold">{instance.lab.title}</h1>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
            {instance.lab.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="status-pill bg-[rgba(34,199,169,0.14)] text-[var(--accent-teal)]">
            <ShieldCheck size={14} />
            {instance.status}
          </span>
          <span className="status-pill bg-[rgba(240,163,58,0.14)] text-[var(--accent-amber)]">
            <Clock size={14} />
            {instance.lab.points} pts
          </span>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="panel min-h-[680px] overflow-hidden">
          {instance.accessUrl ? (
            <iframe
              src={instance.accessUrl}
              className="h-[680px] w-full border-0"
              title={`${instance.lab.title} target`}
              referrerPolicy="no-referrer"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          ) : (
            <div className="flex h-[680px] items-center justify-center p-6 text-center text-sm text-[var(--text-secondary)]">
              Lab environment is still provisioning.
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="panel p-5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Database size={16} />
              Target access
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              Use the embedded browser or open the proxied target in a separate tab for curl, sqlmap, or Burp testing.
            </p>
            {instance.accessUrl && (
              <a
                href={instance.accessUrl}
                target="_blank"
                rel="noreferrer"
                className="cyber-button-secondary mt-4 inline-flex items-center gap-2"
              >
                Open target
                <ExternalLink size={15} />
              </a>
            )}
          </div>

          <LabInstanceControls
            instanceId={instance.id}
            labSlug={instance.lab.slug}
            expiresAt={instance.expiresAt.toISOString()}
            initialStatus={instance.status}
          />
        </aside>
      </div>
    </section>
  );
}
