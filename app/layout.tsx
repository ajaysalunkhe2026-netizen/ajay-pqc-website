import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ajay Salunkhe | System Architect",
  description:
    "System Architect focused on practical Post-Quantum Cryptography migration and secure system design.",
  verification: {
    google: "YwQXvGHVnX7G9E0ip1sQ7GS8ZxV64dXfjicSIXlRO5o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
