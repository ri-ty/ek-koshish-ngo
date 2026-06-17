import FadeIn from "@/components/FadeIn";
import { PRESIDENT } from "@/lib/siteImages";

export default function President() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-md bg-gradient-to-br from-gold/30 to-primary/30 blur-sm" />
              <div className="relative overflow-hidden rounded-md border-4 border-ivory shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PRESIDENT}
                  alt="President of Ek Koshish Aisi Bhi"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <span className="section-label">Leadership</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Our President
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                Guided by visionary leadership, Ek Koshish Aisi Bhi continues to
                expand its reach across education, healthcare, women empowerment,
                and environmental causes. Our president&apos;s dedication inspires
                every volunteer and donor to be part of this mission.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/70">
                With a hands-on approach and deep commitment to community service,
                the leadership team ensures that every koshish (effort) translates
                into real, lasting change for those who need it most.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-foreground">
                <span className="text-gold">✦</span>
                Leading with compassion since day one
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
