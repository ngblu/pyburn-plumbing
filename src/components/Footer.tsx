import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Droplets, Wrench } from "lucide-react";

const services = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Water Heater Repair",
  "Septic Services",
  "Pipe Repair & Replacement",
  "Fixture Installation",
  "Leak Detection",
  "Sewer Line Services",
];

const serviceAreas = [
  "Cookeville",
  "Algood",
  "Baxter",
  "Monterey",
  "Livingston",
  "Sparta",
  "Crossville",
  "Upper Cumberland Region",
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 pb-20 md:pb-0">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo-300.webp"
                alt="Pyburn Plumbing & Septic Services"
                className="h-16 w-auto brightness-0 invert"
                loading="lazy" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Pyburn Plumbing &amp; Septic Services has been serving Cookeville
              and the Upper Cumberland since 1996. Third-generation, licensed
              &amp; insured professionals you can trust.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/pyburnplumbing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-red-500/20 hover:text-primary"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#1877F2] text-white text-xs font-bold">f</span>
              Follow us on Facebook
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              <Wrench className="inline-block h-4 w-4 mr-2 text-primary" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              <Phone className="inline-block h-4 w-4 mr-2 text-primary" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19012512892"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  (901) 251-2892
                </a>
              </li>
              <li>
                <a
                  href="tel:+19315372898"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  (931) 537-2898
                </a>
              </li>
              <li>
                <a
                  href="mailto:pyburnplumbing@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  pyburnplumbing@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Cookeville, TN
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  Mon–Sat 7 AM–5 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              <MapPin className="inline-block h-4 w-4 mr-2 text-primary" />
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <Droplets className="h-3 w-3 text-primary/60 shrink-0" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-gray-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Pyburn Plumbing &amp; Septic
            Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          <p>
            Licensed &amp; Insured, Serving the Upper Cumberland Since
            1996
          </p>
        </div>
      </div>
    </footer>
  );
}
