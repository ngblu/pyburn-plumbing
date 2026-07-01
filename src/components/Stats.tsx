"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "28+", label: "Years Experience" },
  { icon: Clock, value: "1,000+", label: "Jobs Completed" },
  { icon: Shield, value: "Licensed", label: "& Insured" },
  { icon: Star, value: "5-Star", label: "Rated on Google" },
];

export function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-white/70 text-sm uppercase tracking-wider mb-12 font-semibold">Why Cookeville Trusts Pyburn</motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <s.icon className="w-10 h-10 text-primary-light mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
