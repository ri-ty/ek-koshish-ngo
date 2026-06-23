"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

const CERT_IMAGES = [
  "/images/certificates/certificate.jpg",
  "/images/certificates/lei-certificate.jpg",
  "/images/certificates/csr-approval.jpg",
];

const CERT_PDFS = [
  "/pdfs/certificate.pdf",
  "/pdfs/LEI%20Certificate%20984500N4BD738D90CC64.pdf",
  "/pdfs/Approval%20Letter%20for%20form%20CSR1%20(8).PDF",
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="section-label">{t.certificates.label}</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.certificates.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/70">{t.certificates.desc}</p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.certificates.items.map((cert, i) => (
              <FadeIn key={cert.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-md border border-foreground/10 bg-ivory shadow-sm transition-shadow hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="group relative block w-full"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={CERT_IMAGES[i]}
                        alt={cert.alt}
                        className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/40 group-hover:opacity-100">
                        <span className="rounded-md bg-ivory px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
                          {t.common.viewFullSize}
                        </span>
                      </div>
                    </div>
                  </button>
                  <div className="flex items-center justify-between gap-2 border-t border-foreground/10 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                    <a
                      href={CERT_PDFS[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-white"
                    >
                      {t.common.openPdf}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-ivory/20 text-ivory hover:bg-ivory/30"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-md bg-ivory shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
              <p className="font-semibold text-foreground">{t.certificates.items[activeIndex].title}</p>
              <a
                href={CERT_PDFS[activeIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
              >
                {t.common.downloadPdf}
              </a>
            </div>
            <div className="overflow-auto p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CERT_IMAGES[activeIndex]}
                alt={t.certificates.items[activeIndex].alt}
                className="mx-auto h-auto w-full max-w-2xl rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
