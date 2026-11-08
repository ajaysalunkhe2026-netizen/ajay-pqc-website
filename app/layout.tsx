import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  metadataBase: new URL("https://www.ajaysalunkhe.com"),
  title: {
    default: "Ajay Salunkhe | System Architect · Post-Quantum Cryptography",
    template: "%s | Ajay Salunkhe",
  },
  description:
    "System Architect focused on practical post-quantum cryptography migration, cryptographic risk, and secure system design aligned with NIST FIPS 203 and 204.",
  verification: {
    google: "YwQXvGHVnX7G9E0ip1sQ7GS8ZxV64dXfjicSIXlRO5o",
  },
  openGraph: {
    title: "Ajay Salunkhe | Post-Quantum Cryptography Migration",
    description:
      "Practical system design, cryptographic risk assessment, and NIST FIPS 203/204 migration research.",
    url: "https://www.ajaysalunkhe.com",
    siteName: "Ajay Salunkhe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Salunkhe | PQC Migration Architecture",
    description:
      "Independent engineering notes on post-quantum migration and secure system design.",
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
