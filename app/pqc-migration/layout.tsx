import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "pqc-migration" },
  title: "PQC Migration Assessment & Network Risk Tool | Ajay Salunkhe",
  description:
    "Run a browser-based post-quantum cryptography assessment and explore key sizes, signature sizes, MTU constraints, and network risk scenarios.",
};

export default function PQCMigrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
