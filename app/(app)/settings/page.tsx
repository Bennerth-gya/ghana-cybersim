import type { Metadata } from "next";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { prisma } from "@/lib/prisma";
import SettingsClient from "@/components/SettingsClient";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account, preferences, and notification settings.",
};

export default async function SettingsPage() {
  const user = await hexclaveServerApp.getUser({ or: "redirect" });

  const dbUser = user.primaryEmail
    ? await prisma.user.findUnique({
        where: { email: user.primaryEmail },
        select: { notificationsEnabled: true },
      })
    : null;

  const displayName = user.displayName ?? user.primaryEmail ?? "CyberSim Learner";
  const email = user.primaryEmail ?? "No email on file";
  const role = "Student";
  const joinedAt = new Date(user.signedUpAt).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <SettingsClient
      displayName={displayName}
      email={email}
      role={role}
      joinedAt={joinedAt}
      initialNotificationsEnabled={dbUser?.notificationsEnabled ?? true}
    />
  );
}
