"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const trustBadges = [
  { label: "Licensed", icon: ClipboardCheck },
  { label: "Insured", icon: ClipboardCheck },
  { label: "3rd Generation", icon: Wrench },
  { label: "Since 1996", icon: null, value: "1996" },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {trustBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 md:px-5 md:py-2.5"
        >
          {badge.icon && <badge.icon className="h-4 w-4 text-blue-400" />}
          <span className="text-sm font-semibold text-white/90 md:text-base">
            {badge.label}
            {badge.value && (
              <span className="ml-1 text-blue-400 font-bold">{badge.value}</span>
            )}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-navy-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0EA5E9 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-blue-400"
        >
          Cookeville&apos;s Trusted Plumber
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Won&apos;t Flush?
          <br />
          Don&apos;t Fuss.
          <br />
          <span className="text-blue-400">Call Us!</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-gray-300 md:text-xl"
        >
          Pyburn Plumbing &amp; Septic Services
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <TrustBadges />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="tel:+19312612898"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:scale-105 shadow-xl shadow-red-600/30 sm:w-auto"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:animate-bounce" />
            Call Now: (931) 261-2898
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 sm:w-auto"
          >
            Get Free Estimate
          </a>
        </motion.div>

        {/* Secondary phone */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-sm text-gray-400"
        >
          Or call our second line:{" "}
          <a
            href="tel:+19315372898"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            (931) 537-2898
          </a>
        </motion.p>
      </div>
    </section>
  );
}
