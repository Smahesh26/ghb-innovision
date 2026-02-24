import Header from "../components/Header";
import News from "../components/News";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Innovision Security",
  description: "Join Innovision's 20,000+ strong workforce and build a rewarding career in security and integrated services.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Careers Page */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]">
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Build Your Future</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Careers at Innovision
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Join India's leading integrated services platform and be part of a team transforming workforce management
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="bg-[#EF2B2D] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[#d62426]"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              Why Innovision
            </p>
            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Building Careers, Empowering Lives
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Growth Opportunities",
                description: "Clear career progression paths with structured training and skill development programs",
                icon: "📈"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive compensation packages including health insurance and performance incentives",
                icon: "💼"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules and supportive work environment across 55+ locations",
                icon: "⚖️"
              },
              {
                title: "Training & Certification",
                description: "Regular skill upgrades and industry-recognized certifications for career advancement",
                icon: "🎓"
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:border-[#EF2B2D]/40 hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="relative bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Current Openings
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Explore opportunities across multiple locations and service verticals
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                title: "Security Supervisor",
                location: "Mumbai, Delhi, Bangalore",
                type: "Full-time",
                department: "Operations"
              },
              {
                title: "Facility Manager",
                location: "Pan India",
                type: "Full-time",
                department: "Facility Management"
              },
              {
                title: "HR Operations Executive",
                location: "Gurgaon",
                type: "Full-time",
                department: "Human Resources"
              },
              {
                title: "Toll Operations Manager",
                location: "Multiple Locations",
                type: "Full-time",
                department: "Toll Management"
              },
              {
                title: "Training & Development Officer",
                location: "Delhi NCR",
                type: "Full-time",
                department: "Training"
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group flex items-center justify-between gap-6 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#EF2B2D]/40 hover:shadow-lg"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.department}</span>
                  </div>
                </div>
                <button className="shrink-0 rounded-lg border-2 border-[#EF2B2D] bg-[#EF2B2D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#EF2B2D]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a suitable position? Send us your resume at{" "}
              <a href="mailto:careers@innovision.co.in" className="font-semibold text-[#EF2B2D] hover:underline">
                careers@innovision.co.in
              </a>
            </p>
          </div>
        </div>
      </section>

      <News />
      <CTA />
      <Footer />
    </>
  );
}
