import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "insights/pqc-migration-system-map" },
  title: "PQC Migration in Practice: A System Map",
  description:
    "A technical guide to PQC migration covering cryptographic inventory, hybrid TLS negotiation, silent classical fallback, certificate migration, and wire-level measurement.",
};

export default function ArticleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
