"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 1, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6">Your Neighbors Since 1996</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Owner Scott Pyburn is a third-generation plumber , continuing the work his father began , built on straight talk, clean workmanship, and neighbors-first service.</p>
            <p className="text-gray-600 leading-relaxed mb-4">We're licensed and insured, and we stand behind our work with clear warranties. You'll always get options, upfront pricing, and a clean workspace when we're done.</p>
            <p className="text-gray-600 leading-relaxed mb-6">From everyday leaks to full septic system installs, Pyburn Plumbing delivers clean, professional work you can trust throughout the Upper Cumberland.</p>
            <Link href="/#about" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">Read our full story →</Link>
          </motion.div>
          <motion.div initial={{ opacity: 1, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/van-hires.webp"
              alt="Pyburn Plumbing service van"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="text-white font-bold text-lg">Pyburn Plumbing</div>
              <div className="text-white/80 text-sm">Serving the Upper Cumberland</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
