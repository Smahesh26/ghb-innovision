import Header from "../components/Header";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Innovision Security",
  description: "Integrated security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone training across India - 2,000+ sites, 20,000+ personnel.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Services Page */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>What We Do</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Integrated security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone training designed for operational excellence and compliance
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <Services />
      <Technology />
      <Industries />
      <WhyChooseUs />
      <Stats />
      <Clients />
      <CTA />
      <Footer />
    </>
  );
}
