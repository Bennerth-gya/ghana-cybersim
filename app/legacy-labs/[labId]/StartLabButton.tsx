"use client";

import Link from "next/link";

export default function StartLabButton({ labId }: { labId: string }) {
  return (
    <Link
      href={`/labs/${labId}`}
      className="cyber-button-primary inline-flex items-center gap-3"
    >
      Start Lab
    </Link>
  );
}
