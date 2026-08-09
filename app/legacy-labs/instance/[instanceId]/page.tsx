import { redirect } from "next/navigation";

export default async function LegacyLabInstancePage({
  params,
}: {
  params: Promise<{ instanceId: string }>;
}) {
  const { instanceId } = await params;
  redirect(`/labs/instances/${instanceId}`);
}
