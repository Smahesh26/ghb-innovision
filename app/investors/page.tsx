"use client";

import Header from "../components/Header";
import InvestorsTabs from "../components/InvestorsTabs";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function InvestorsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner for Investors Page */}
      <section className="relative min-h-[68vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]" aria-label="Investors Hero">
        <div className="pointer-events-none absolute -top-16 right-1/4 h-72 w-72 rounded-full bg-[#EF2B2D]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.18),transparent_45%)]" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 pb-14 text-center text-white sm:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm mb-6"
          >
            <svg className="h-4 w-4 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              IPO Ready
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            Investor Relations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-3xl text-lg text-white/80"
          >
            Scalable, recurring revenue model with institutional-grade governance and 19+ years of proven operational excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              { value: "19+", label: "Years Track Record" },
              { value: "IPO", label: "Growth Phase" },
              { value: "Strong", label: "Governance Focus" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <p className="text-xl font-semibold text-[#EF2B2D]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <InvestorsTabs />

      {/* Grievance Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-neutral-100 py-24 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#EF2B2D]/8 blur-3xl opacity-35" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl opacity-25" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[#202228] bg-[#111216] p-10 shadow-[0_24px_64px_rgba(15,15,18,0.35)] sm:p-14"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-[#EF2B2D]/12 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                Support & Resolution
              </p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Grievance Procedure
              </h2>
              <div className="mt-6 h-1 w-16 bg-[#EF2B2D]" />
            </div>

            {/* Description */}
            <p className="relative mb-10 text-base leading-relaxed text-white/78 sm:text-lg">
              A grievance, typically related to unfair treatment, workplace conditions, or policy violations, is a formal complaint seeking resolution. Our structured process ensures that your concerns are handled with care and resolved effectively.
            </p>

            {/* Contact Details */}
            <div className="relative grid gap-6 sm:grid-cols-2">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-[#191b21] p-6 transition hover:border-[#EF2B2D]/50 hover:bg-[#1d2027]"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EF2B2D]/20 text-[#EF2B2D]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition group-hover:text-white/80">
                  Email
                </p>
                <a
                  href="mailto:cs@innovision.co.in"
                  className="mt-2 block text-lg font-bold text-white transition group-hover:text-[#EF2B2D]"
                >
                  cs@innovision.co.in
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-[#191b21] p-6 transition hover:border-[#EF2B2D]/50 hover:bg-[#1d2027]"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EF2B2D]/20 text-[#EF2B2D]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition group-hover:text-white/80">
                  Contact Us
                </p>
                <a
                  href="tel:01242341602"
                  className="mt-2 block text-lg font-bold text-white transition group-hover:text-[#EF2B2D]"
                >
                  0124-2341602
                </a>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="relative mt-10 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                We are committed to addressing all grievances promptly and fairly. Please reach out to us via the contact details above to register your concern.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
