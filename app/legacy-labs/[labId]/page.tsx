import { prisma } from "@/lib/prisma"; // ADJUST: point at your actual Prisma client singleton
import { notFound } from "next/navigation";
import StartLabButton from "./StartLabButton";

export default async function LabOverviewPage({
  params,
}: {
  params: Promise<{ labId: string }>;
}) {
  const { labId } = await params;
  const lab = await prisma.lab.findUnique({ where: { id: labId } });
  if (!lab) notFound();

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-violet-300 mb-2">{lab.title}</h1>
      <p className="text-violet-100 mb-4">{lab.description}</p>
      <p className="text-sm text-violet-400 mb-6">
        <strong>Risk:</strong> {lab.risk}
      </p>
      <StartLabButton labId={lab.id} />
    </div>
  );
}
