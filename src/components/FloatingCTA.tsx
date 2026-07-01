"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="md:hidden fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 p-3 pb-safe bg-white/90 backdrop-blur border-t border-gray-200">
          <div className="flex gap-3 max-w-lg mx-auto">
            <a href="tel:9012512892" className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors">
              <Phone className="w-4 h-4 animate-pulse" /> Call Now
            </a>
            <a href="#contact" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-xl text-sm hover:bg-primary/90 transition-colors">
              <FileText className="w-4 h-4" /> Free Estimate
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
