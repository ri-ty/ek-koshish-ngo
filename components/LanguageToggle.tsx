"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/i18n/types";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const btn = (code: Language, label: string) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
        lang === code
          ? "bg-primary text-white"
          : "text-foreground/60 hover:bg-surface hover:text-foreground"
      }`}
      aria-pressed={lang === code}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center rounded-md border border-foreground/15 bg-ivory p-0.5">
      {btn("en", "EN")}
      {btn("hi", "हिं")}
    </div>
  );
}
