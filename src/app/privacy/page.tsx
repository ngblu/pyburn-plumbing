import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pyburn Plumbing & Septic Services",
  description: "Privacy policy for Pyburn Plumbing & Septic Services, Cookeville, TN.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p><strong>Last Updated:</strong> {new Date().getFullYear()}</p>
        
        <h2 className="text-xl font-bold text-navy-900 mt-8">1. Information We Collect</h2>
        <p>When you contact Pyburn Plumbing & Septic Services via phone, our website contact form, or email, we may collect your name, phone number, email address, and details about your plumbing or septic service needs.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. How We Use Your Information</h2>
        <p>We use your information solely to respond to your inquiries, provide estimates, schedule service, and communicate about your project. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. Data Storage</h2>
        <p>Contact form submissions may be stored on secure servers for customer service and record-keeping purposes. Phone calls are not recorded.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. Cookies</h2>
        <p>This website does not use tracking cookies or third-party analytics. Any essential cookies are used only for site functionality.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. Your Rights</h2>
        <p>You may request that we delete your contact information at any time by calling (931) 537-2898 or emailing pyburnplumbing@gmail.com.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. Contact</h2>
        <p>For questions about this privacy policy, call (931) 537-2898 or email pyburnplumbing@gmail.com.</p>
      </div>
    </main>
  );
}
