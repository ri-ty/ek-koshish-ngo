import Certificates from "@/components/Certificates";
import FadeIn from "@/components/FadeIn";
import Gallery from "@/components/Gallery";
import President from "@/components/President";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";
import Link from "next/link";

export const metadata = {
  title: "About Us | Ek Koshish Aisi Bhi",
  description: "Learn about Ek Koshish Aisi Bhi — our mission, vision, and commitment to bringing hope to millions.",
};

const values = [
  {
    title: "Compassion",
    desc: "We lead with empathy, treating every individual with dignity and care.",
  },
  {
    title: "Transparency",
    desc: "We maintain open accountability in all our programs and finances.",
  },
  {
    title: "Impact",
    desc: "We focus on measurable, lasting change in the communities we serve.",
  },
  {
    title: "Inclusion",
    desc: "We work for everyone — children, women, animals, and the environment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-foreground to-primary py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-ivory/80">
              Ek Koshish Aisi Bhi — where one effort creates a lifetime of hope.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <span className="section-label">Who We Are</span>
                <h2 className="mt-3 text-3xl font-bold">
                  A Registered NGO Making Real Difference
                </h2>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  Ek Koshish Aisi Bhi is a registered non-governmental organization
                  committed to transforming lives across India. From educating
                  underprivileged children to empowering women, providing healthcare,
                  protecting the environment, and promoting wellness through yoga and
                  meditation — we work on multiple fronts to build a better tomorrow.
                </p>
                <p className="mt-4 leading-relaxed text-foreground/70">
                  Our tagline — &ldquo;Every Day We Bring Hope To Millions Of
                  Children&rdquo; — reflects our unwavering dedication to the
                  next generation and the communities that nurture them.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-md bg-surface p-8">
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-foreground/70">
                  A society where every child has access to education, every woman
                  is empowered, every community is healthy, and our planet is
                  protected for future generations.
                </p>
                <h3 className="mt-8 text-xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-4 text-foreground/70">
                  To create sustainable, community-driven programs that address
                  critical social, environmental, and health challenges — one
                  koshish (effort) at a time.
                </p>
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
              <span className="section-label">What Drives Us</span>
              <h2 className="mt-3 text-3xl font-bold">Our Values</h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
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
            <h2 className="text-3xl font-bold">Join Our Journey</h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              Whether you donate, volunteer, or spread the word — your support matters.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/donate" className="btn-primary">
                Donate Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
