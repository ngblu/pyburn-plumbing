"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencyBanner() {
  return (
    <div
      className={cn(
        "relative z-50 w-full bg-red-600 text-white",
        "sticky top-0 lg:top-0"
      )}
      style={{ top: 0 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-bold md:text-base">
        <span className="hidden sm:inline">🔥</span>
        <span>24/7 Emergency Service &mdash; Call</span>
        <a
          href="tel:+19312612898"
          className="inline-flex items-center gap-1.5 font-extrabold underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all"
        >
          <Phone className="h-4 w-4" />
          (931) 261-2898
        </a>
      </div>
    </div>
  );
}
