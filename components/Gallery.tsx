"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { GALLERY_IMAGES } from "@/lib/siteImages";
import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="section-label">{t.gallery.label}</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.gallery.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/70">{t.gallery.desc}</p>
            </div>
          </FadeIn>

          <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:gap-6">
            {GALLERY_IMAGES.map((src, i) => (
              <FadeIn key={src} delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => setActive(src)}
                  className="group mb-4 block w-full overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${t.gallery.title} ${i + 1}`}
                    className="w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-ivory/20 text-ivory hover:bg-ivory/30"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] max-w-4xl overflow-auto rounded-md bg-ivory p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active} alt={t.gallery.title} className="h-auto max-h-[85vh] w-full rounded-md object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
