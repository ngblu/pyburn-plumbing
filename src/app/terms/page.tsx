import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pyburn Plumbing & Septic Services",
  description: "Terms of service for Pyburn Plumbing & Septic Services, Cookeville, TN.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p><strong>Last Updated:</strong> {new Date().getFullYear()}</p>
        
        <h2 className="text-xl font-bold text-navy-900 mt-8">1. Services</h2>
        <p>Pyburn Plumbing & Septic Services provides residential and commercial plumbing, septic, drain cleaning, and related services in the Upper Cumberland region of Tennessee. All work is performed by licensed and insured professionals.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. Estimates & Pricing</h2>
        <p>Free estimates are provided for most services. Final pricing depends on the scope of work, materials required, and site conditions. We provide upfront pricing before any work begins. Emergency and after-hours service may incur additional charges.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. Warranties</h2>
        <p>We stand behind our workmanship. Specific warranty terms vary by service type and will be provided in writing with your estimate. Manufacturer warranties apply to installed parts and fixtures.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. Payment</h2>
        <p>Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, check, and major credit cards.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. Liability</h2>
        <p>Pyburn Plumbing & Septic Services is fully licensed and insured. We carry general liability and workers' compensation insurance as required by Tennessee law.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. Contact</h2>
        <p>For questions about these terms, call (931) 537-2898 or email pyburnplumbing@gmail.com.</p>
      </div>
    </main>
  );
}
