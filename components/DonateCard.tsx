"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bankDetails = [
  { label: "Account Name", value: "Ek Koshish Aisi Bhi" },
  { label: "Account Number", value: "05158870001221" },
  { label: "IFSC", value: "YESB0000515" },
  { label: "Bank", value: "YES Bank (Current Account)" },
];

export default function DonateCard() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("05158870001221");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-lg overflow-hidden rounded-md border border-foreground/10 bg-surface shadow-xl"
    >
      <div className="bg-gradient-to-r from-foreground to-primary px-6 py-5">
        <h2 className="text-xl font-bold text-ivory">Bank Transfer Details</h2>
        <p className="mt-1 text-sm text-ivory/70">
          Transfer directly to our official account
        </p>
      </div>

      <div className="divide-y divide-foreground/10 px-6">
        {bankDetails.map((detail) => (
          <div key={detail.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-foreground/60">{detail.label}</span>
            <span className="text-sm font-semibold text-foreground sm:text-right">
              {detail.value}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4 px-6 pb-6">
        <button
          type="button"
          onClick={copyAccountNumber}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {copied ? (
            <>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy Account Number
            </>
          )}
        </button>

        <div className="rounded-md border-2 border-gold bg-gradient-to-br from-gold/25 to-gold/5 p-4">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-gold px-2.5 py-1 text-xs font-black text-foreground">
              80G
            </span>
            <p className="text-sm font-bold text-foreground">Registered NGO</p>
          </div>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
            Jo bhi donate karega, unhe{" "}
            <span className="text-primary underline decoration-gold decoration-2 underline-offset-2">
              tax mein 50% exemption
            </span>{" "}
            milega.
          </p>
          <p className="mt-1 text-xs text-foreground/60">
            50% tax deduction on eligible donations under Section 80G
          </p>
        </div>
      </div>
    </motion.div>
  );
}
