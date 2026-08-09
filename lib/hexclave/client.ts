import { HexclaveClientApp } from "@hexclave/next";

const projectId = process.env.NEXT_PUBLIC_HEXCLAVE_PROJECT_ID;
const apiUrl = process.env.NEXT_PUBLIC_HEXCLAVE_API_URL;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_HEXCLAVE_PROJECT_ID");
}

if (!apiUrl) {
  throw new Error("Missing NEXT_PUBLIC_HEXCLAVE_API_URL");
}

export const hexclaveClientApp = new HexclaveClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    handler: "/handler",
    signIn: "/login",
    default: {
      type: "handler-component",
    },
    afterSignIn: "/dashboard",
    afterSignUp: "/dashboard",
    afterSignOut: "/login",
  },
  projectId,
  baseUrl: apiUrl,
});
