import "./globals.css";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "CyberSim AI",
  title: {
    default: "CyberSim AI - Ghana Cyberattack Simulation",
    template: "%s | CyberSim AI",
  },
  description:
    "A Ghana-focused cyber range for practicing realistic attack response decisions, reviewing performance, and improving cyber readiness.",
  keywords: [
    "Ghana cybersecurity",
    "cyber range",
    "cyberattack simulation",
    "security training",
    "phishing simulation",
  ],
  authors: [{ name: "CyberSim AI" }],
  creator: "CyberSim AI",
  publisher: "CyberSim AI",
  openGraph: {
    title: "CyberSim AI - Ghana Cyberattack Simulation",
    description:
      "Practice responding to realistic cyber incidents with guided simulations and performance reports.",
    url: "/",
    siteName: "CyberSim AI",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CyberSim AI - Ghana Cyberattack Simulation",
    description:
      "Practice responding to realistic cyber incidents with guided simulations and performance reports.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { HexclaveProvider, HexclaveTheme } from "@hexclave/next";
import { hexclaveServerApp } from "@/lib/hexclave/server";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/Toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <HexclaveProvider app={hexclaveServerApp}>
            <HexclaveTheme>
              {children}
              <Toaster />
            </HexclaveTheme>
          </HexclaveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
