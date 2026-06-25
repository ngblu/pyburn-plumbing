"use client";

import { motion } from "framer-motion";
import { Wrench, Droplets, ThermometerSun, Hammer, Home, Construction, Search, Shield } from "lucide-react";

const services = [
  { icon: Shield, title: "Emergency Plumbing", desc: "Burst pipes, major leaks, sewer backups — we're on call 24/7. Fast response guaranteed.", features: ["24/7 availability", "60-min response", "No after-hours markup"] },
  { icon: Droplets, title: "Drain Cleaning", desc: "Clogged sinks, tubs, showers, and main lines cleared fast. No harsh chemicals — just results.", features: ["Hydro-jetting available", "Camera inspection", "Main line specialists"] },
  { icon: ThermometerSun, title: "Water Heaters", desc: "Tank and tankless install, repair, and replacement. Hot water when you need it.", features: ["Tankless experts", "All major brands", "Free estimates"] },
  { icon: Hammer, title: "Re-Piping (PEX)", desc: "Whole-home repiping. Replace old galvanized with modern PEX — cleaner water, better pressure.", features: ["PEX certified", "Minimal drywall damage", "Lifetime warranty"] },
  { icon: Home, title: "Bathroom & Kitchen Fixtures", desc: "Faucets, sinks, toilets, garbage disposals — installed right the first time.", features: ["All brands supported", "Clean installation", "Leak-free guarantee"] },
  { icon: Search, title: "Sewer & Septic", desc: "Septic tank pumping, baffle installs, sewer line inspection, full system installs.", features: ["Licensed septic pros", "Camera inspection", "Emergency pumping"] },
  { icon: Construction, title: "New Construction & Remodels", desc: "New homes, additions, bathroom and kitchen remodels — plumbing done right.", features: ["Code-compliant", "Works with your GC", "On schedule"] },
  { icon: Wrench, title: "Leak Detection & Repair", desc: "Slab leaks, hidden leaks, preventative inspections. Find it before it floods.", features: ["Electronic detection", "Non-invasive", "Prevention plans"] },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">Complete Plumbing & Septic Solutions</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">From emergency repairs to full system installs — Pyburn Plumbing handles it all with 28+ years of Upper Cumberland experience.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-light/20 transition-all group">
              <svc.icon className="w-10 h-10 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
              <ul className="space-y-1.5">
                {svc.features.map(f => (
                  <li key={f} className="text-xs text-gray-400 flex items-center gap-1.5"><span className="w-1 h-1 bg-primary-light rounded-full" />{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
