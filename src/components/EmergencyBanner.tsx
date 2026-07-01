"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencyBanner() {
  return (
    <div className="relative z-30 w-full bg-red-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 text-center text-xs sm:text-sm md:text-base font-bold flex-wrap">
        <span className="hidden sm:inline">🔥</span>
        <span>🚨 Emergency Service · Call</span>
        <a
          href="tel:+19315372898"
          className="inline-flex items-center gap-1.5 font-extrabold underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all"
        >
          <Phone className="h-4 w-4" />
          (931) 537-2898
        </a>
      </div>
    </div>
  );
}
