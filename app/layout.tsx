import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ajaysalunkhe.com"),
  title: "Ajay Salunkhe | System Architect · Post-Quantum Cryptography",
  description:
    "System Architect specialized in practical Post-Quantum Cryptography migration, enterprise risk assessment, and secure NIST FIPS 203/204 system design for modern scalable architectures.",
  verification: {
    google: "YwQXvGHVnX7G9E0ip1sQ7GS8ZxV64dXfjicSIXlRO5o",
  },
  openGraph: {
    title: "Ajay Salunkhe | Post-Quantum Cryptography Migration Hub",
    description: "Practical system design, risk assessment, and NIST FIPS 203/204 migration strategies for enterprise architecture.",
    url: "https://www.ajaysalunkhe.com",
    siteName: "Ajay Salunkhe",
    images: [
      {
        url: "https://www.ajaysalunkhe.com/pqc-social-card.png",
        secureUrl: "https://www.ajaysalunkhe.com/pqc-social-card.png",
        width: 1200,
        height: 630,
        alt: "Ajay Salunkhe - PQC Migration Architecture",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Salunkhe | PQC Migration Architecture",
    description: "Independent architecture review for post-quantum migration and NIST compliance.",
    images: ["https://www.ajaysalunkhe.com/pqc-social-card.png"],
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
