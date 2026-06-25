"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, Sparkles, Heart } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Upfront Pricing", desc: "No surprises, no hidden fees. You'll know the cost before we start any work." },
  { icon: Clock, title: "On-Time Guarantee", desc: "We show up when we say we will , or the service call is on us." },
  { icon: Sparkles, title: "Clean Workspace", desc: "Boot covers, drop cloths, and a full cleanup. We treat your home like ours." },
  { icon: Heart, title: "Local Family Business", desc: "Not a franchise. Scott and his team live here, work here, and care about getting it right." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">The Pyburn Difference</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Why Choose Us</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg hover:border-primary-light/20 transition-all group">
              <r.icon className="w-10 h-10 text-primary-light mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
