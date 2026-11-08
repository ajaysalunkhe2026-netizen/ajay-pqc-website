import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ajay Salunkhe",
  description:
    "Contact Ajay Salunkhe to discuss post-quantum cryptography migration, cryptographic risk, and secure system design.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
