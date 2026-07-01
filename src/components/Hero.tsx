"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background photo strip */}
      <div className="absolute inset-0 z-0">
        <img
          src="/job-install.webp"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTA */}
          <motion.div
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mascot + tagline */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-hires.webp"
                alt="Pyburn Plumbing"
                className="h-12 sm:h-16 w-auto"
              />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-navy-900">
              Cookeville&rsquo;s{" "}
              <span className="text-primary">3rd-Generation</span>{" "}
              Plumber
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Scott Pyburn has been keeping the Upper Cumberland&rsquo;s pipes
              flowing since 1996. Licensed, insured, and neighbors-first.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Award, label: "Since 1996" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-primary"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19012512892"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary-dark hover:scale-105 shadow-lg shadow-red-600/25"
              >
                <Phone className="h-5 w-5" />
                Call (901) 251-2892
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-red-50"
              >
                Get Free Estimate
              </a>
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.app.goo.gl/bzVLPhz7Lw3Wwi9E8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 14 8 14s8-8.6 8-14a8 8 0 0 0-8-8z"/></svg>
              Find us on Google Maps →
            </a>
          </motion.div>

          {/* Right: Van photo */}
          <motion.div
            initial={{ opacity: 1, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/van-hires.webp"
                alt="Pyburn Plumbing service van"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-lg">PYBURN</p>
                <p className="text-white/80 text-sm">
                  Plumbing &amp; Septic Services
                </p>
              </div>
            </div>
            {/* Floating mascot accent */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg">
              <img
                src="/logo-hires.webp"
                alt="Pyburn"
                className="h-10 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
