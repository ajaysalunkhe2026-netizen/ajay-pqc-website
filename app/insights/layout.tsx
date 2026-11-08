import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "insights" },
  title: "PQC Migration Insights | Ajay Salunkhe",
  description:
    "Technical notes on post-quantum cryptography migration, hybrid TLS, cryptographic inventory, crypto agility, and practical system design.",
};

export default function InsightsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
