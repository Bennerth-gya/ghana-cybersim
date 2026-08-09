import { NextRequest, NextResponse } from "next/server";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { LabServiceError, startLabForUser } from "@/lib/lab-service";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ labId: string }> },
) {
  try {
    const hexUser = await hexclaveServerApp.getUser({ or: "return-null" });
    if (!hexUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await getOrCreateDbUser(hexUser);
    const { labId } = await params;
    const instance = await startLabForUser(labId, dbUser.id);

    return NextResponse.json(instance);
  } catch (error) {
    const status = error instanceof LabServiceError ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "Failed to start lab";
    console.error("Error starting lab:", error);
    return NextResponse.json({ error: message }, { status });
  }
}
