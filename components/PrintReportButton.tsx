"use client";

import { Download } from "lucide-react";

export default function PrintReportButton() {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      className="cyber-button-secondary self-start sm:self-auto"
    >
      <Download size={16} />
      Download Report PDF
    </button>
  );
}
