import { HexclaveHandler } from "@hexclave/next";
import type { ComponentProps } from "react";

type HandlerPageProps = Omit<ComponentProps<typeof HexclaveHandler>, "fullPage">;

export default function HandlerPage(props: HandlerPageProps) {
  return <HexclaveHandler fullPage {...props} />;
}
