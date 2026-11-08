import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Ajay Salunkhe",
  description:
    "Explore post-quantum cryptography readiness, hybrid cryptography design, and cryptographic inventory work from Ajay Salunkhe.",
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
