import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import Gallery from "@/components/Gallery";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";

const stats = [
  { value: "10K+", label: "Lives Impacted" },
  { value: "50+", label: "Active Programs" },
  { value: "8", label: "Core Causes" },
  { value: "80G", label: "Tax Exemption" },
];

const causes = [
  { title: "Education", desc: "Quality learning for underprivileged children" },
  { title: "Orphanage & Children's Home", desc: "Safe shelter and care for vulnerable children" },
  { title: "Women Empowerment", desc: "Skills training and livelihood support" },
  { title: "Healthcare", desc: "Medical camps and health awareness drives" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-foreground py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-ivory/70">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <TaxExemptionBanner />
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-label">Our Mission</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                One Effort Can Change Everything
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                Ek Koshish Aisi Bhi is dedicated to uplifting communities across
                India through education, healthcare, women empowerment, environmental
                conservation, and holistic wellness. We believe that every small act
                of kindness creates a ripple of hope that reaches millions.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {causes.map((cause, i) => (
              <FadeIn key={cause.title} delay={i * 0.1}>
                <div className="group rounded-md border border-foreground/10 bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{cause.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{cause.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all our works
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Gallery />

      <section className="bg-gradient-to-r from-foreground to-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-ivory sm:text-4xl">
              Be Part of the Change
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/80">
              Jo bhi donate karega, unhe tax mein{" "}
              <span className="font-bold text-gold">50% exemption</span> milega.
              80G Registered NGO.
            </p>
            <Link href="/donate" className="btn-primary mt-8 inline-block px-8 py-3.5 text-base">
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
