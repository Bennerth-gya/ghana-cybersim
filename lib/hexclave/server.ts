import { HexclaveServerApp } from "@hexclave/next";
import { hexclaveClientApp } from "./client";

const secretServerKey = process.env.HEXCLAVE_SECRET_SERVER_KEY;

if (!secretServerKey) {
  throw new Error("Missing HEXCLAVE_SECRET_SERVER_KEY");
}

export const hexclaveServerApp = new HexclaveServerApp({
  inheritsFrom: hexclaveClientApp,
  secretServerKey,
});
