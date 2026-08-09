import { NextRequest, NextResponse } from "next/server";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { LabServiceError, stopLabForUser } from "@/lib/lab-service";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> },
) {
  try {
    const hexUser = await hexclaveServerApp.getUser({ or: "return-null" });
    if (!hexUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await getOrCreateDbUser(hexUser);
    const { instanceId } = await params;
    const stopped = await stopLabForUser(instanceId, dbUser.id);

    return NextResponse.json({
      instanceId: stopped.id,
      status: stopped.status,
      destroyedAt: stopped.destroyedAt,
    });
  } catch (error) {
    const status = error instanceof LabServiceError ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "Failed to stop lab";
    console.error("Error stopping lab:", error);
    return NextResponse.json({ error: message }, { status });
  }
}
