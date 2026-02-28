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
  const benefits = [
    {
      title: "Growth Opportunities",
      description: "Clear progression paths with mentorship, leadership tracks, and structured learning journeys.",
      icon: "📈",
    },
    {
      title: "Competitive Benefits",
      description: "Robust compensation, recognition programs, and employee-first support for long-term careers.",
      icon: "💼",
    },
    {
      title: "Work-Life Balance",
      description: "Collaborative teams, balanced schedules, and regional opportunities across India.",
      icon: "⚖️",
    },
    {
      title: "Training & Certification",
      description: "Continuous upskilling through practical training modules and domain certifications.",
      icon: "🎓",
    },
  ];

  const openings = [
    {
      title: "Security Supervisor",
      location: "Mumbai, Delhi, Bangalore",
      type: "Full-time",
      department: "Operations",
    },
    {
      title: "Facility Manager",
      location: "Pan India",
      type: "Full-time",
      department: "Facility Management",
    },
    {
      title: "HR Operations Executive",
      location: "Gurgaon",
      type: "Full-time",
      department: "Human Resources",
    },
    {
      title: "Toll Operations Manager",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Toll Management",
    },
    {
      title: "Training & Development Officer",
      location: "Delhi NCR",
      type: "Full-time",
      department: "Training",
    },
  ];

  const cultureReels = [
    "https://www.instagram.com/p/DCyq93IycVm/",
    "https://www.instagram.com/p/C8mQFfGSzze/",
    "https://www.instagram.com/p/DUsrrCkkwuZ/",
    "https://www.instagram.com/p/DUVcJM3k4lI/",
    "https://www.instagram.com/p/DR7Az6tk8S4/",
    "https://www.instagram.com/p/DQZmTXak0J-/",
    "https://www.instagram.com/p/DQWnE5fEyQQ/",
    "https://www.instagram.com/p/DP6ayiKE10J/",
    "https://www.instagram.com/p/DNx4oMU5oLy/",
  ];

  return (
    <>
      <Header />
      
      {/* Hero Banner for Careers Page */}
      <section className="relative min-h-[84vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#18181c] to-[#0d0d0f]">
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.16),transparent_46%)]" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 pb-16 text-center text-white">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Build Your Future</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Careers at Innovision
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            Join India's leading integrated services platform and be part of a team transforming workforce management
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="rounded-full bg-[#EF2B2D] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[#d62426]"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="rounded-full border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative bg-gradient-to-b from-white via-[#f8f8f9] to-white py-28">
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
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF2B2D]/40 hover:shadow-[0_22px_48px_rgba(0,0,0,0.10)]"
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
      <section id="openings" className="relative bg-[#111113] py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.12),transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Careers</p>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Current Openings
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Explore opportunities across multiple locations and service verticals
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <div
                key={index}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EF2B2D]/40 hover:bg-white/[0.08] hover:shadow-[0_20px_48px_rgba(0,0,0,0.30)]"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
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
                <button className="shrink-0 rounded-full border-2 border-[#EF2B2D] bg-[#EF2B2D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#EF2B2D]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">
              Don't see a suitable position? Send us your resume at{" "}
              <a href="mailto:careers@innovision.co.in" className="font-semibold text-[#EF2B2D] hover:underline">
                careers@innovision.co.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="relative bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Life at Innovision</p>
            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">Culture in Motion</h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Explore our team culture, training energy, and workplace moments through Instagram Reels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cultureReels.map((reelUrl, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_42px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <iframe
                    src={`${reelUrl}embed`}
                    className="h-full w-full"
                    loading="lazy"
                    allowTransparency
                    title={`Instagram Reel ${index + 1}`}
                  />
                </div>

                <div className="p-6">
                  <a
                    href={reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]"
                  >
                    Watch on Instagram
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/innovisionlimited/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EF2B2D] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]"
            >
              View All Reels
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <News />
      <CTA />
      <Footer />
    </>
  );
}
