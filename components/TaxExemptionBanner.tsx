"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TaxExemptionBanner({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-md border-2 border-gold bg-gradient-to-r from-gold/20 via-gold/10 to-primary/10 p-6 shadow-lg shadow-gold/10 sm:p-8 ${className}`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />

      <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gold text-2xl font-black text-foreground shadow-md">
          80G
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-foreground sm:text-xl">{t.taxBanner.title}</p>
          <p className="mt-2 text-base font-medium leading-relaxed text-foreground/80">
            {t.taxBanner.line1}{" "}
            <span className="rounded bg-gold/30 px-1.5 py-0.5 font-bold text-foreground">
              {t.taxBanner.registered}
            </span>
            . {t.taxBanner.line2}{" "}
            <span className="rounded bg-gold/30 px-1.5 py-0.5 font-bold text-foreground">
              {t.taxBanner.exemption}
            </span>{" "}
            {t.taxBanner.line3}
          </p>
          <p className="mt-2 text-sm text-foreground/60">{t.taxBanner.footnote}</p>
        </div>
      </div>
    </motion.div>
  );
}
