"use client";

import Link from "next/link";
import Certificates from "@/components/Certificates";
import FadeIn from "@/components/FadeIn";
import Gallery from "@/components/Gallery";
import President from "@/components/President";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-foreground to-primary py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold sm:text-5xl">{t.about.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-ivory/80">{t.about.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <span className="section-label">{t.about.whoLabel}</span>
                <h2 className="mt-3 text-3xl font-bold">{t.about.whoTitle}</h2>
                <p className="mt-6 leading-relaxed text-foreground/70">{t.about.whoDesc1}</p>
                <p className="mt-4 leading-relaxed text-foreground/70">{t.about.whoDesc2}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-md bg-surface p-8">
                <h3 className="text-xl font-bold text-foreground">{t.about.vision}</h3>
                <p className="mt-4 text-foreground/70">{t.about.visionDesc}</p>
                <h3 className="mt-8 text-xl font-bold text-foreground">{t.about.mission}</h3>
                <p className="mt-4 text-foreground/70">{t.about.missionDesc}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <President />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="section-label">{t.about.valuesLabel}</span>
              <h2 className="mt-3 text-3xl font-bold">{t.about.valuesTitle}</h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="rounded-md bg-ivory p-6 shadow-sm">
                  <div className="mb-4 h-1 w-10 rounded-full bg-gold" />
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <TaxExemptionBanner />
          </FadeIn>
        </div>
      </section>

      <Certificates />
      <Gallery />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">{t.about.joinTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">{t.about.joinDesc}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/donate" className="btn-primary">{t.common.donateNow}</Link>
              <Link href="/contact" className="btn-secondary">{t.common.getInTouch}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
