import { NextRequest, NextResponse } from "next/server";

import { getOrCreateDbUser } from "@/lib/get-or-create-user";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { LabServiceError, submitFlagForUser } from "@/lib/lab-service";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> },
) {
  try {
    const hexUser = await hexclaveServerApp.getUser({ or: "return-null" });
    if (!hexUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const submitted = body.flag ?? body.submittedFlag;
    if (!submitted || typeof submitted !== "string") {
      return NextResponse.json({ error: "Flag is required" }, { status: 400 });
    }

    const dbUser = await getOrCreateDbUser(hexUser);
    const { instanceId } = await params;
    const result = await submitFlagForUser(instanceId, dbUser.id, submitted);

    return NextResponse.json({
      correct: result.correct,
      points: result.points,
      submissionId: result.submission.id,
    });
  } catch (error) {
    const status = error instanceof LabServiceError ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "Failed to submit flag";
    console.error("Error submitting flag:", error);
    return NextResponse.json({ error: message }, { status });
  }
}
