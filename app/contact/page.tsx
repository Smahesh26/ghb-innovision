import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Innovision Security",
  description: "Get in touch with Innovision for security and workforce solutions - 55+ locations across India.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Contact Page */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]">
        <div className="absolute inset-0 bg-[url('/images/2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          
          {/* Breadcrumb */}
          <p className="text-sm text-white/60">
            Home / Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>

        </div>
      </section>

      {/* Main Content */}
      <Contact />
      <Footer />
    </>
  );
}
