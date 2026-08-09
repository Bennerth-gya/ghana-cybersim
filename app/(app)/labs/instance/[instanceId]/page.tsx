import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ instanceId: string }>;
};

export default async function LegacyLabInstancePage({ params }: Props) {
  const { instanceId } = await params;
  redirect(`/labs/instances/${instanceId}`);
}
