import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs",
  description: "Hands-on Offensive Labs to launch isolated vulnerable targets and submit flags.",
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
