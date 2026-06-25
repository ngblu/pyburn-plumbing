"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6">Your Neighbors Since 1996</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Owner Scott Pyburn is a third-generation plumber — continuing the work his father began — built on straight talk, clean workmanship, and neighbors-first service.</p>
            <p className="text-gray-600 leading-relaxed mb-4">We're licensed and insured, and we stand behind our work with clear warranties. You'll always get options, upfront pricing, and a clean workspace when we're done.</p>
            <p className="text-gray-600 leading-relaxed mb-6">From everyday leaks to full septic system installs, Pyburn Plumbing delivers clean, professional work you can trust throughout the Upper Cumberland.</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline">Read our full story →</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary rounded-3xl p-10 text-center text-white">
            <div className="text-6xl font-black text-primary-light mb-2">1996</div>
            <div className="text-xl font-bold mb-1">Family Owned</div>
            <div className="text-white/60 text-sm mb-6">3 generations of plumbing excellence</div>
            <div className="border-t border-white/20 pt-6 space-y-2 text-sm text-white/70">
              <p>✓ Licensed & Insured</p>
              <p>✓ Serving Upper Cumberland</p>
              <p>✓ Thousands of 5-Star Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
