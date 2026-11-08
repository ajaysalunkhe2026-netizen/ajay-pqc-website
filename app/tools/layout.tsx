import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "tools" },
  title: "PQC Migration Tools | Ajay Salunkhe",
  description:
    "Practical post-quantum cryptography migration tools for readiness assessment, cryptographic inventory, and migration planning.",
};

export default function ToolsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
