import Header from "../components/Header";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
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
      <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)`
          }} />
        </div>
        
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center">
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
          <div className="mb-2 mt-10 grid grid-cols-3 gap-8 sm:mt-12">
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

      <section className="bg-white py-20 text-gray-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Navigating Opportunities Across Multiple Sectors
            </h2>
            <p className="mt-3 text-lg font-medium text-[#EF2B2D]">
              A Resilient Portfolio that Unlocks Various Avenues for Growth
            </p>

            <p className="mt-8 text-base leading-relaxed text-gray-700">
              At Innovision, we pride ourselves on our diversified industry presence, which embodies our commitment to comprehensive
              solutions across various domains, ensuring resilience and continual expansion.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Diversified Portfolio:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Innovision boasts a robust presence across various sectors, including Healthcare, Government, Power, Logistics, and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Adaptability in Action:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  The company&apos;s ability to cater to unique demands in Healthcare, Government, Power, Warehousing, and Logistics showcases
                  its adaptability and expertise.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Stability Amplified:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Significant footprint in Government, PSUs, Private, and Global sectors enhances stability and reinforces the foundation for growth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Versatility Unleashed:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Stronghold in BFSI, Retail, Manufacturing, Warehousing, Corporates, Utility, Healthcare, and other segments positions Innovision
                  as a versatile partner catering to diverse industry needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Risk Mitigation:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Cross-sectoral resilience minimizes risks associated with single-sector dependence, fostering sustained growth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Unlocking Opportunities:</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Agile expansion and industry-spanning expertise position Innovision as a preferred choice for businesses seeking tailored solutions.
                </p>
              </div>
            </div>

            <p className="mt-8 text-base leading-relaxed text-gray-700">
              Our local roots and nationwide presence, woven expertise across diverse markets, and the essence of our commitment to comprehensive
              solutions across domains ensure resilience and continual expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <Clients />
      <Reviews />
      <Footer />
    </>
  );
}
