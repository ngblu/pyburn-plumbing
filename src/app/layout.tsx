import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pyburn Plumbing & Septic Services | Cookeville, TN",
  description:
    "Pyburn Plumbing & Septic Services — Cookeville, TN's trusted 3rd-generation plumber since 1996. 24/7 emergency plumbing, septic repair, drain cleaning, water heater service. Serving the Upper Cumberland. Call (931) 261-2898.",
  keywords: [
    "plumber Cookeville TN",
    "plumbing services Cookeville",
    "septic services Cookeville",
    "emergency plumber Cookeville",
    "water heater repair Cookeville",
    "drain cleaning Cookeville",
    "Pyburn Plumbing",
    "Upper Cumberland plumber",
  ],
  authors: [{ name: "Pyburn Plumbing & Septic Services" }],
  openGraph: {
    title: "Pyburn Plumbing & Septic Services | Cookeville, TN",
    description:
      "Cookeville's trusted 3rd-generation plumber since 1996. 24/7 emergency service. Call (931) 261-2898.",
    url: "https://pyburnplumbing.com",
    siteName: "Pyburn Plumbing & Septic Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <EmergencyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
