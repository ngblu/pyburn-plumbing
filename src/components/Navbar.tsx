"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-300.webp"
            alt="Pyburn Plumbing & Septic Services"
            className="h-10 w-auto sm:h-12 md:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-navy-900 transition-colors hover:text-primary uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Phone CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+19012512892"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-primary-dark hover:scale-105 shadow-md shadow-primary/25"
          >
            <Phone className="h-4 w-4" />
            (901) 251-2892
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+19012512892"
            className="flex items-center justify-center rounded-full bg-primary p-3 text-white hover:bg-primary-dark transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Call Now"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-3 text-navy-900 hover:bg-navy-900/5 transition-colors min-w-[44px] min-h-[44px] touch-manipulation select-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-900 hover:bg-red-50 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <a
                href="tel:+19012512892"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-base font-bold text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25"
              >
                <Phone className="h-5 w-5" />
                Call Now: (901) 251-2892
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
