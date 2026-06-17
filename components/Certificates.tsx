"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const certificates = [
  {
    image: "/images/certificates/certificate.jpg",
    pdf: "/pdfs/certificate.pdf",
    title: "Registration Certificate",
    alt: "Ek Koshish Aisi Bhi NGO Registration Certificate",
  },
  {
    image: "/images/certificates/lei-certificate.jpg",
    pdf: "/pdfs/LEI%20Certificate%20984500N4BD738D90CC64.pdf",
    title: "LEI Certificate",
    alt: "LEI Certificate 984500N4BD738D90CC64",
  },
  {
    image: "/images/certificates/csr-approval.jpg",
    pdf: "/pdfs/Approval%20Letter%20for%20form%20CSR1%20(8).PDF",
    title: "CSR Approval Letter",
    alt: "CSR1 Approval Letter",
  },
];

type Cert = (typeof certificates)[0];

export default function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="section-label">Verified & Registered</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Our Certificates
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
                Ek Koshish Aisi Bhi is a legally registered NGO. Click any
                certificate to view, or open the PDF directly.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <FadeIn key={cert.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-md border border-foreground/10 bg-ivory shadow-sm transition-shadow hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => setActive(cert)}
                    className="group relative block w-full"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/40 group-hover:opacity-100">
                        <span className="rounded-md bg-ivory px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
                          View Full Size
                        </span>
                      </div>
                    </div>
                  </button>
                  <div className="flex items-center justify-between gap-2 border-t border-foreground/10 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-white"
                    >
                      Open PDF
                    </a>
                  </div>
                </div>
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
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
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
              <p className="font-semibold text-foreground">{active.title}</p>
              <a
                href={active.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
              >
                Download PDF
              </a>
            </div>
            <div className="overflow-auto p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image}
                alt={active.alt}
                className="mx-auto h-auto w-full max-w-2xl rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
