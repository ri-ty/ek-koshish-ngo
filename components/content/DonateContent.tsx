"use client";

import Certificates from "@/components/Certificates";
import DonateCard from "@/components/DonateCard";
import FadeIn from "@/components/FadeIn";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";
import { useLanguage } from "@/context/LanguageContext";

const RAZORPAY_URL = "https://razorpay.me/@ekkoshishaisibhi2207";
const PAYU_URL = "https://payu.in/pay/37FDB9F91CA3621862A5454E13EC5956";

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

          <FadeIn delay={0.1}>
            <div className="mx-auto mb-12 max-w-2xl rounded-md border border-foreground/10 bg-ivory p-8 shadow-lg sm:p-10">
              <h2 className="text-center text-2xl font-bold">{t.donate.onlineTitle}</h2>
              <p className="mt-3 text-center text-sm text-foreground/70">{t.donate.onlineDesc}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto"
                >
                  {t.donate.razorpay}
                </a>
                <a
                  href={PAYU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto"
                >
                  {t.donate.payu}
                </a>
              </div>
            </div>
          </FadeIn>

          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-foreground/50">
            {t.donate.orBankTransfer}
          </p>

          <DonateCard />
        </div>
      </section>

      <Certificates />
    </>
  );
}
