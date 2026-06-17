import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Our Works | Ek Koshish Aisi Bhi",
  description: "Explore the causes Ek Koshish Aisi Bhi works on — education, women empowerment, healthcare, environment, and more.",
};

const works = [
  {
    title: "Education",
    desc: "We provide scholarships, school supplies, and learning centers for underprivileged children, ensuring every child gets the education they deserve.",
    color: "bg-primary",
  },
  {
    title: "Women Empowerment",
    desc: "Through skill development programs, vocational training, and self-help groups, we empower women to become financially independent and confident leaders.",
    color: "bg-gold",
  },
  {
    title: "Healthcare",
    desc: "Free medical camps, health awareness drives, and access to essential medicines for communities that lack basic healthcare facilities.",
    color: "bg-primary",
  },
  {
    title: "Environment",
    desc: "Tree plantation drives, waste management awareness, and green initiatives to protect our planet for future generations.",
    color: "bg-gold",
  },
  {
    title: "Yoga & Meditation",
    desc: "Promoting mental and physical wellness through free yoga and meditation sessions in schools, communities, and rural areas.",
    color: "bg-primary",
  },
  {
    title: "Water Conservation",
    desc: "Rainwater harvesting projects, clean water access programs, and community education on sustainable water management practices.",
    color: "bg-gold",
  },
  {
    title: "Save Animal",
    desc: "Rescue and rehabilitation of stray animals, vaccination drives, and awareness campaigns for animal welfare and coexistence.",
    color: "bg-primary",
  },
];

export default function WorksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-foreground to-primary py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold sm:text-5xl">Our Works</h1>
            <p className="mt-4 max-w-2xl text-lg text-ivory/80">
              Seven pillars of change — each program designed to create lasting
              impact in communities across India.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work, i) => (
              <FadeIn key={work.title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-md border border-foreground/10 bg-surface shadow-sm transition-shadow hover:shadow-lg">
                  <div className={`h-2 ${work.color}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-foreground">{work.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                      {work.desc}
                    </p>
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
            <h2 className="text-3xl font-bold">
              Support Our Causes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              Your donation directly funds these programs. As an 80G registered NGO,
              you receive 50% tax exemption on eligible donations.
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
