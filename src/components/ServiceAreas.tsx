"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Cookeville", "Algood", "Baxter", "Monterey", "Sparta", "Livingston", "Crossville"
];

export function ServiceAreas() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">Service Areas</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">Proudly Serving Upper Cumberland</h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">From Cookeville to Crossville , we come to you. Same-day service throughout the region.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <motion.div key={area} initial={{ opacity: 1, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-2 bg-white rounded-full px-5 py-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-light/30 transition-all">
              <MapPin className="w-4 h-4 text-primary-light" />
              <span className="font-medium text-gray-700">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
