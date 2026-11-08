import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/tools/pqc-readiness-tool" },
  title: "PQC Migration Readiness Tool",
  description:
    "Explore the PQC migration readiness self-assessment, cryptographic inventory fields, risk indicators, and planning outputs.",
};

export default function ReadinessToolLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
