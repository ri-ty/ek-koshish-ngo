"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

const WORK_COLORS = [
  "bg-primary", "bg-gold", "bg-gold", "bg-primary",
  "bg-gold", "bg-primary", "bg-gold", "bg-primary",
];

export default function WorksContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-foreground to-primary py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold sm:text-5xl">{t.works.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-ivory/80">{t.works.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.works.items.map((work, i) => (
              <FadeIn key={work.title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-md border border-foreground/10 bg-surface shadow-sm transition-shadow hover:shadow-lg">
                  <div className={`h-2 ${WORK_COLORS[i]}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-foreground">{work.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{work.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">{t.works.supportTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">{t.works.supportDesc}</p>
            <Link href="/donate" className="btn-primary mt-8 inline-block px-8 py-3.5 text-base">
              {t.common.donateNow}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
