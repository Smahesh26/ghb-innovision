import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import InnovisionJourney from "@/app/components/InnovisionJourney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey - Innovision Limited Timeline & Growth",
  description: "Discover Innovision Limited's growth journey from 2007 to present. From 10 guards to 20,000+ workforce, explore our timeline of achievements and milestones.",
  keywords: ['innovision journey', 'company timeline', 'growth milestones', '2007 to 2024', 'expansion history'],
};

export default function JourneyPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]">
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Timeline & Growth</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Our Journey
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            From 10 guards in 2007 to 20,000+ workforce today. Discover our growth story and key milestones
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <InnovisionJourney />

      <Footer />
    </>
  );
}
