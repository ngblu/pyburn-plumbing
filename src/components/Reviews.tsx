"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Scott was extremely helpful during a potential septic emergency. Great customer service and super affordable. Highly recommend Pyburn to anyone looking for a quality plumber! Thank you!", author: "Cookeville Homeowner" },
  { text: "Scott came out the day after I called him about a few non-emergency plumbing leaks. He fixed the issues and gave some good suggestions for future modifications. He was courteous, professional, and I would highly recommend to others!", author: "Putnam County Resident" },
  { text: "They came out right away when our septic tank needed pumping and installed new baffles. They charged a very reasonable price, considering that they had to dig up our driveway and sidewalk to find our tank.", author: "Cookeville Family" },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-gray-500">Consistently 5-star rated across Upper Cumberland</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
              <p className="text-gray-600 mb-6 leading-relaxed">{r.text}</p>
              <p className="font-semibold text-sm text-gray-900">, {r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
