"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "We had an emergency with our septic backing up into our house for 3 weeks. We had called everyone in town trying to get someone to help us. No one would call back. My brother referred us to Pyburn and within 1 hour he was at our house and within 3 hours had fixed our problem. He was very professional and reasonable. Our receipt detailed everything he had done. I am overjoyed with the service I received from Pyburn. Scott is a lifesaver.",
    author: "Sabrina P.",
    source: "Google Review",
  },
  {
    text: "They came out right away when our septic tank needed pumping and installed new baffles. They charged a very reasonable price, considering that they had to dig up our driveway and sidewalk to find our tank, which was under our sidewalk.",
    author: "Alicia B.",
    source: "Google Review",
  },
  {
    text: "Scott came out the day after I called him about a few non-emergency plumbing leaks. He fixed the issues and gave some good suggestions for future modifications. He was courteous, professional, and I would highly recommend to others!",
    author: "Danielle J.",
    source: "Google Review",
  },
  {
    text: "Scott was extremely helpful during a potential septic emergency. Great customer service and super affordable. Highly recommend Pyburn to anyone looking for a quality plumber! Thank you!",
    author: "Caitlin W.",
    source: "Google Review",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Reviews</h2>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 mb-4">What Cookeville Says</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-gray-500">Rated 5 stars on Google</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{r.text}</p>
              <div>
                <p className="font-semibold text-sm text-navy-900">{r.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">{r.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
