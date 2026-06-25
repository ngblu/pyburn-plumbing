"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Emergency Plumbing", "Drain Cleaning", "Water Heaters", "Re-Piping (PEX)",
  "Bathroom & Kitchen Fixtures", "Sewer & Septic", "New Construction & Remodels", "Leak Detection & Repair"
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">Ready for Reliable Plumbing?</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">Call us or fill out the form for a free estimate. We respond within 2 hours — guaranteed.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700"><Phone className="w-5 h-5 text-primary-light" /><span className="font-semibold">(931) 261-2898</span></div>
              <div className="flex items-center gap-3 text-gray-700"><Phone className="w-5 h-5 text-primary-light" /><span>(931) 537-2898</span></div>
              <div className="flex items-center gap-3 text-gray-700"><Mail className="w-5 h-5 text-primary-light" /><span>pyburnplumbing@gmail.com</span></div>
              <div className="flex items-center gap-3 text-gray-700"><MapPin className="w-5 h-5 text-primary-light" /><span>Cookeville, TN — Upper Cumberland</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <AnimatePresence>
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 rounded-2xl p-10 text-center border border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks for reaching out!</h3>
                  <p className="text-gray-500">Scott or a team member will call you back within 2 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all" />
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all" />
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-gray-500">
                    <option value="">What service do you need?</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea placeholder="Tell us what's going on..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all h-28" />
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Get Free Estimate
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
