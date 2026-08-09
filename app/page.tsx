import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CyberSim AI. Simulate real-world cyberattacks and learn how to defend effectively.",
};

export default function HomePage() {
  return <HomePageClient />;
}
