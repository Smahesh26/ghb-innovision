import Header from "../components/Header";
import InvestorsTabs from "../components/InvestorsTabs";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | Innovision Limited",
  description: "Investor Relations, Financial Information, Corporate Governance, Stock Information and key disclosures for Innovision Limited.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Investors Page */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)`
          }} />
        </div>
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm mb-6">
            <svg className="h-4 w-4 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              IPO Ready
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Investor Relations
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Scalable, recurring revenue model with institutional-grade governance and 19+ years of proven operational excellence
          </p>
        </div>
      </section>

      <InvestorsTabs />

      <Footer />
    </>
  );
}
