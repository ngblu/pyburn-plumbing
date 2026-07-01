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
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  description:
    "Pyburn Plumbing & Septic Services, Cookeville, TN's trusted 3rd-generation plumber since 1996. Emergency plumbing, septic repair, drain cleaning, water heater service. Serving the Upper Cumberland. Call (931) 537-2898.",
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
      "Cookeville's trusted 3rd-generation plumber since 1996. Emergency service available. Call (931) 537-2898.",
    url: "https://pyburn-plumbing.vercel.app",
    siteName: "Pyburn Plumbing & Septic Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Pyburn Plumbing & Septic Services",
  "description": "Cookeville's trusted 3rd-generation plumber since 1996. Emergency plumbing, septic repair, drain cleaning, water heater service.",
  "telephone": "(931) 537-2898",
  "email": "pyburnplumbing@gmail.com",
  "url": "https://pyburn-plumbing.vercel.app",
  "areaServed": ["Cookeville", "Algood", "Baxter", "Monterey", "Sparta", "Livingston", "Crossville", "Upper Cumberland"],
  "foundingDate": "1996",
  "priceRange": "$$",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "17:00" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EmergencyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
