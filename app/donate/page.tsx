import Certificates from "@/components/Certificates";
import DonateCard from "@/components/DonateCard";
import FadeIn from "@/components/FadeIn";
import TaxExemptionBanner from "@/components/TaxExemptionBanner";

export const metadata = {
  title: "Donate | Ek Koshish Aisi Bhi",
  description: "Support Ek Koshish Aisi Bhi through bank transfer. 80G registered — donors get 50% tax exemption.",
};

export default function DonatePage() {
  return (
    <>
      <section className="min-h-[80vh] bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="section-label">Support Our Cause</span>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Make a Donation
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-foreground/70">
                Transfer your donation directly to our bank account. Every
                contribution brings hope to those who need it most.
              </p>
            </div>
          </FadeIn>

          <TaxExemptionBanner className="mb-10" />
          <DonateCard />
        </div>
      </section>

      <Certificates />
    </>
  );
}
