"use client";

import { Phone, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-3 max-w-lg mx-auto px-3 pt-3">
        <a
          href="tel:+19012512892"
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 font-bold py-3.5 rounded-xl text-sm hover:bg-red-50 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}
