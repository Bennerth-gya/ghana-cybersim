import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulate",
  description: "Active CyberSim simulation environment.",
};

export default function SimulateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
