import Link from "next/link";
import { prisma } from "@/lib/prisma"; // ADJUST: point at your actual Prisma client singleton

export default async function LabsPage() {
  const labs = await prisma.lab.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-violet-300">Cyberattack Labs (legacy)</h1>
      <div className="grid gap-4">
        {labs.map((lab) => (
          <Link
            key={lab.id}
            href={`/labs/${lab.id}`}
            className="block rounded-lg border border-violet-800 bg-violet-950/40 p-4 hover:border-violet-500 transition"
          >
            <h2 className="text-xl font-semibold text-white">{lab.title}</h2>
            <p className="text-sm text-violet-300 mt-1">{lab.category.toUpperCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
