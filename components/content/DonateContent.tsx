"use client";

import Certificates from "@/components/Certificates";
import DonateCard from "@/components/DonateCard";
import FadeIn from "@/components/FadeIn";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";
import { useLanguage } from "@/context/LanguageContext";

export default function DonateContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="min-h-[80vh] bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="section-label">{t.donate.label}</span>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{t.donate.title}</h1>
              <p className="mx-auto mt-4 max-w-lg text-foreground/70">{t.donate.desc}</p>
            </div>
          </FadeIn>

          <TaxExemptionBanner className="mb-10" />
          <DonateCard />
        </div>
      </section>

      <Certificates />
    </>
  );
}
