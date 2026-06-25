"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5"
          : "bg-white"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://pyburnplumbing.com/wp-content/uploads/2025/10/Pyburn-Plumbing-Logo-300.webp"
            alt="Pyburn Plumbing & Septic Services"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-navy-900 transition-colors hover:text-blue-500 uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Phone CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+19312612898"
            className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-500/90 hover:scale-105 shadow-md shadow-blue-500/25"
          >
            <Phone className="h-4 w-4" />
            (931) 261-2898
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+19312612898"
            className="flex items-center gap-1.5 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-500/90 transition-colors"
            aria-label="Call Now"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-navy-900 hover:bg-navy-900/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white border-t border-gray-100 lg:hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-900 hover:bg-blue-50 hover:text-blue-500 transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4"
              >
                <a
                  href="tel:+19312612898"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-base font-bold text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: (931) 261-2898
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
