import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ajay Salunkhe | System Architect · Post-Quantum Cryptography",
  description:
    "System Architect focused on practical Post-Quantum Cryptography migration, risk assessment, and secure system design.",
  metadataBase: new URL("https://www.ajaysalunkhe.com"),
  verification: {
    google: "YwQXvGHVnX7G9E0ip1sQ7GS8ZxV64dXfjicSIXlRO5o",
  },
  openGraph: {
    title: "Ajay Salunkhe | Post-Quantum Cryptography Migration Hub",
    description: "Practical system design, risk assessment, and NIST FIPS 203/204 migration strategies.",
    url: "https://www.ajaysalunkhe.com",
    siteName: "Ajay Salunkhe",
    images: [
      {
        url: "/pqc-social-card.png",
        width: 1200,
        height: 630,
        alt: "Ajay Salunkhe - PQC Migration Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Salunkhe | PQC Migration Architecture",
    description: "Independent architecture review for post-quantum migration and NIST compliance.",
    images: ["/pqc-social-card.png"],
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
