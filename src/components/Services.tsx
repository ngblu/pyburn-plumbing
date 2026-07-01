"use client";

import { useState } from "react";
import { Phone, Wrench, Droplets, ThermometerSun, Hammer, Home, Construction, Search, Shield, ChevronDown } from "lucide-react";

const services = [
  { icon: Shield, title: "Emergency Plumbing", desc: "Burst pipes, major leaks, sewer backups ,  we're on call. Fast response guaranteed.", features: ["Emergency availability", "60-min response", "No after-hours markup"], detail: "When you have water where it shouldn't be, every minute counts. We prioritize emergency calls and aim for a 60-minute response time during business hours. Our trucks carry common parts so most repairs are completed in one visit." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Clogged sinks, tubs, showers, and main lines cleared fast. No harsh chemicals, just results.", features: ["Hydro-jetting available", "Camera inspection", "Main line specialists"], detail: "From a slow-draining sink to a fully backed-up main line, we diagnose and clear it. We use camera inspections to find the root cause and hydro-jetting for tough blockages ,  all without damaging your pipes." },
  { icon: ThermometerSun, title: "Water Heaters", desc: "Tank and tankless install, repair, and replacement. Hot water when you need it.", features: ["Tankless experts", "All major brands", "Free estimates"], detail: "Whether you need a repair on your existing unit or want to switch to an energy-efficient tankless system, we handle it. We service all major brands and provide free estimates for replacements." },
  { icon: Hammer, title: "Re-Piping (PEX)", desc: "Whole-home repiping. Replace old galvanized with modern PEX, cleaner water, better pressure.", features: ["PEX certified", "Minimal drywall damage", "Lifetime warranty"], detail: "Old galvanized pipes cause low pressure, rust-colored water, and eventually leaks. We replace them with modern PEX tubing ,  cleaner water, better pressure, and a lifetime warranty on materials." },
  { icon: Home, title: "Bathroom & Kitchen Fixtures", desc: "Faucets, sinks, toilets, garbage disposals, installed right the first time.", features: ["All brands supported", "Clean installation", "Leak-free guarantee"], detail: "From a new kitchen faucet to a complete bathroom fixture upgrade, we install it clean and right. We work with all major brands and stand behind every install with a leak-free guarantee." },
  { icon: Search, title: "Sewer & Septic", desc: "Septic tank pumping, baffle installs, sewer line inspection, full system installs.", features: ["Licensed septic pros", "Camera inspection", "Emergency pumping"], detail: "Septic systems need regular maintenance and occasional repair. We handle everything from routine pumping to full system replacements. Camera inspections let us see exactly what's happening underground." },
  { icon: Construction, title: "New Construction & Remodels", desc: "New homes, additions, bathroom and kitchen remodels, plumbing done right.", features: ["Code-compliant", "Works with your GC", "On schedule"], detail: "Building new or remodeling? We work alongside your general contractor to ensure plumbing is done right ,  up to code, on schedule, and built to last. Rough-in, trim-out, and final hookups." },
  { icon: Wrench, title: "Leak Detection & Repair", desc: "Slab leaks, hidden leaks, preventative inspections. Find it before it floods.", features: ["Electronic detection", "Non-invasive", "Prevention plans"], detail: "Not all leaks are obvious. We use electronic leak detection to find hidden problems inside walls and under slabs ,  without tearing everything apart. Catch it early and save thousands in water damage." },
];

export function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</h2>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mb-4">Complete Plumbing & Septic Solutions</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">From emergency repairs to full system installs, Pyburn Plumbing handles it all with 28+ years of Upper Cumberland experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={svc.title}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`bg-gray-50 rounded-2xl p-6 border cursor-pointer transition-all group min-w-0 ${
                  isOpen
                    ? "border-primary/30 shadow-lg bg-white"
                    : "border-gray-100 hover:shadow-lg hover:border-primary/20"
                }`}
              >
                <svc.icon className={`w-10 h-10 mb-4 group-hover:scale-110 transition-transform ${isOpen ? "text-primary" : "text-primary"}`} />
                <h3 className="font-bold text-lg mb-2 text-navy-900 flex items-center justify-between">
                  {svc.title}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {svc.features.map(f => (
                    <li key={f} className="text-xs text-gray-400 flex items-center gap-1.5"><span className="w-1 h-1 bg-primary rounded-full" />{f}</li>
                  ))}
                </ul>

                {/* Expandable detail */}
                {isOpen && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{svc.detail}</p>
                    <a
                      href="tel:+19012512892"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call for Estimate
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
