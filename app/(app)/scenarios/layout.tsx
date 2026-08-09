import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scenarios",
  description: "Choose an attack scenario to start a guided simulation.",
};

export default function ScenariosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
