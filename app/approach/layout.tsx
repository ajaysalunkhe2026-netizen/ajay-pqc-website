import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "approach" },
  title: "PQC Migration Approach | Ajay Salunkhe",
  description:
    "A practical approach to post-quantum migration: understand current cryptographic use, prioritize risk, design coexistence, and validate before scale.",
};

export default function ApproachLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
