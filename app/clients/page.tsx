import Header from "../components/Header";
import Clients from "../components/Clients";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import Industries from "../components/Industries";
import News from "../components/News";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Innovision Security",
  description: "Trusted by 1000+ leading organizations across corporate, government, and PSU sectors in India.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Clients Page */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)`
          }} />
        </div>
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-14 sm:pt-20 text-center">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Trusted Partnerships</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </div>

          <h1 className="mt-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Our Clients
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/75">
            Serving 1000+ leading organizations with excellence, reliability, and unwavering commitment
          </p>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 mb-10">
            <div>
              <div className="text-3xl font-bold text-[#EF2B2D] sm:text-4xl">1000+</div>
              <div className="mt-2 text-sm text-white/70">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#EF2B2D] sm:text-4xl">2,000+</div>
              <div className="mt-2 text-sm text-white/70">Sites Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#EF2B2D] sm:text-4xl">19+</div>
              <div className="mt-2 text-sm text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <Clients />
      <Industries />
      <Reviews />
      <Stats />
      <News />
      <CTA />
      <Footer />
    </>
  );
}
