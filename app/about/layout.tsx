import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "about" },
  alternates: { canonical: "about" },
  title: "About | Ajay Salunkhe",
  description:
    "Learn about Ajay Salunkhe's independent work in post-quantum cryptography migration, cryptographic risk, and secure system architecture.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
