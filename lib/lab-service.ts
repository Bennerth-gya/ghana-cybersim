import crypto from "node:crypto";

import { destroyLabInstance, provisionLabInstance } from "@/lib/lab-manager";
import { prisma } from "@/lib/prisma";

export class LabServiceError extends Error {
  constructor(message: string, public statusCode = 500) {
    super(message);
  }
}

function sha256(value: string) {
  return crypto.createHash("sha256").update(value.trim()).digest("hex");
}

function safeHashEquals(leftHex: string, rightHex: string) {
  const left = Buffer.from(leftHex, "hex");
  const right = Buffer.from(rightHex, "hex");
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

export async function startLabForUser(labIdentifier: string, userId: string) {
  const lab = await prisma.lab.findFirst({
    where: {
      OR: [{ id: labIdentifier }, { slug: labIdentifier }],
    },
  });

  if (!lab) {
    throw new LabServiceError("Lab not found", 404);
  }

  const placeholderExpiresAt = new Date(Date.now() + lab.maxDurationMin * 60_000);
  const instance = await prisma.labInstance.create({
    data: {
      labId: lab.id,
      userId,
      status: "PROVISIONING",
      expiresAt: placeholderExpiresAt,
      lastActivityAt: new Date(),
    },
  });

  try {
    const provisioned = await provisionLabInstance(lab.slug, userId);
    const runningInstance = await prisma.labInstance.update({
      where: { id: instance.id },
      data: {
        status: "ACTIVE",
        externalId: provisioned.instanceId,
        accessUrl: provisioned.accessUrl,
        expiresAt: new Date(provisioned.expiresAt),
        lastActivityAt: new Date(),
      },
    });

    return {
      instanceId: runningInstance.id,
      accessUrl: runningInstance.accessUrl,
      expiresAt: runningInstance.expiresAt,
    };
  } catch (error) {
    await prisma.labInstance.update({
      where: { id: instance.id },
      data: {
        status: "FAILED",
        destroyedAt: new Date(),
        lastActivityAt: new Date(),
      },
    });

    const message = error instanceof Error ? error.message : "Failed to provision lab";
    throw new LabServiceError(message, 502);
  }
}

export async function stopLabForUser(instanceId: string, userId: string) {
  const instance = await prisma.labInstance.findUnique({
    where: { id: instanceId },
  });

  if (!instance || instance.userId !== userId) {
    throw new LabServiceError("Lab instance not found", 404);
  }

  if (instance.externalId) {
    await destroyLabInstance(instance.externalId);
  }

  const stopped = await prisma.labInstance.update({
    where: { id: instance.id },
    data: {
      status: "STOPPED",
      destroyedAt: new Date(),
      lastActivityAt: new Date(),
    },
  });

  return stopped;
}

export async function submitFlagForUser(instanceId: string, userId: string, flag: string) {
  const submitted = flag.trim();
  if (!submitted) {
    throw new LabServiceError("Flag is required", 400);
  }

  const instance = await prisma.labInstance.findUnique({
    where: { id: instanceId },
    include: { lab: true },
  });

  if (!instance || instance.userId !== userId) {
    throw new LabServiceError("Lab instance not found", 404);
  }

  if (instance.status === "STOPPED" || instance.status === "EXPIRED") {
    throw new LabServiceError("Lab instance is not active", 409);
  }

  if (Date.now() > instance.expiresAt.getTime() && instance.status !== "COMPLETED") {
    await prisma.labInstance.update({
      where: { id: instance.id },
      data: { status: "EXPIRED", lastActivityAt: new Date() },
    });
    throw new LabServiceError("Lab instance has expired", 410);
  }

  const submittedHash = sha256(submitted);
  const correct = safeHashEquals(submittedHash, instance.lab.flagHash);

  return prisma.$transaction(async (tx) => {
    const existingCorrectForLab = await tx.flagSubmission.findFirst({
      where: {
        userId,
        isCorrect: true,
        labInstance: {
          labId: instance.labId,
        },
      },
    });

    const scoreAwarded = correct && !existingCorrectForLab ? instance.lab.points : 0;

    const submission = await tx.flagSubmission.create({
      data: {
        labInstanceId: instance.id,
        userId,
        submittedFlag: submittedHash,
        isCorrect: correct,
        scoreAwarded,
      },
    });

    if (correct) {
      await tx.labInstance.update({
        where: { id: instance.id },
        data: {
          ...(scoreAwarded > 0 ? { score: { increment: scoreAwarded } } : {}),
          status: "COMPLETED",
          lastActivityAt: new Date(),
        },
      });

      if (scoreAwarded > 0) {
        await tx.user.update({
          where: { id: userId },
          data: {
            totalScore: { increment: scoreAwarded },
          },
        });
      }
    } else {
      await tx.labInstance.update({
        where: { id: instance.id },
        data: { lastActivityAt: new Date() },
      });
    }

    return {
      submission,
      correct,
      points: scoreAwarded,
    };
  });
}
