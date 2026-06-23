"use client";

import FadeIn from "@/components/FadeIn";
import { PRESIDENT } from "@/lib/siteImages";
import { useLanguage } from "@/context/LanguageContext";

export default function President() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-md bg-gradient-to-br from-gold/30 to-primary/30 blur-sm" />
              <div className="relative overflow-hidden rounded-md border-4 border-ivory shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PRESIDENT}
                  alt={t.president.alt}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <span className="section-label">{t.president.label}</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.president.title}</h2>
              <p className="mt-6 leading-relaxed text-foreground/70">{t.president.desc1}</p>
              <p className="mt-4 leading-relaxed text-foreground/70">{t.president.desc2}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-foreground">
                <span className="text-gold">✦</span>
                {t.common.leadingCompassion}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
