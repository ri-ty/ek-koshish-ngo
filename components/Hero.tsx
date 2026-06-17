"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LOGO } from "@/lib/siteImages";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-primary/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO}
            alt="Ek Koshish Aisi Bhi"
            className="h-24 w-24 rounded-full border-4 border-gold/60 object-cover shadow-2xl shadow-gold/20 sm:h-28 sm:w-28"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gold/20 px-5 py-2 text-sm font-bold text-gold shadow-lg"
        >
          <span className="rounded bg-gold px-1.5 py-0.5 text-xs font-black text-foreground">80G</span>
          Registered NGO — Tax Mein 50% Exemption
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ek Koshish{" "}
          <span className="text-gold">Aisi Bhi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-ivory/85 sm:text-xl"
        >
          Every Day We Bring Hope To Millions Of Children
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/donate" className="btn-primary px-8 py-3.5 text-base">
            Donate Now
          </Link>
          <Link
            href="/works"
            className="rounded-md border-2 border-ivory/30 px-8 py-3.5 text-base font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Our Works
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ivory/40 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
