import { NextRequest, NextResponse } from "next/server";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { LabServiceError, startLabForUser } from "@/lib/lab-service";

export async function POST(request: NextRequest) {
  try {
    const hexUser = await hexclaveServerApp.getUser({ or: "return-null" });
    if (!hexUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { labId } = await request.json();
    if (!labId || typeof labId !== "string") {
      return NextResponse.json({ error: "labId is required" }, { status: 400 });
    }

    const dbUser = await getOrCreateDbUser(hexUser);
    const instance = await startLabForUser(labId, dbUser.id);

    return NextResponse.json(instance);
  } catch (error) {
    const status = error instanceof LabServiceError ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "Failed to start lab";
    console.error("Error starting lab:", error);
    return NextResponse.json({ error: message }, { status });
  }
}
