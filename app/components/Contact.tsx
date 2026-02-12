"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-32 text-white">

      {/* Background */}
      <Image
        src="/images/2.png"
        alt="Contact Innovision Security"
        fill
        className="object-cover scale-110"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#EF2B2D]/30 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#EF2B2D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              Contact Us
            </p>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl leading-tight">
              Request a Security
              <br />
              Consultation
            </h2>

            <p className="mt-6 text-base text-white/70 max-w-md">
              Share your requirements and our security specialists will connect
              with you promptly to design a customized manpower and risk
              management solution.
            </p>

            <div className="mt-10 space-y-4 text-sm text-white/70">
              <p>📞 +91 98765 43210</p>
              <p>📧 contact@innovisionsecurity.com</p>
              <p>📍 Nationwide Presence | 55+ Locations</p>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">

              <form className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 transition focus:border-[#EF2B2D] focus:ring-1 focus:ring-[#EF2B2D]/50 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 transition focus:border-[#EF2B2D] focus:ring-1 focus:ring-[#EF2B2D]/50 focus:outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 transition focus:border-[#EF2B2D] focus:ring-1 focus:ring-[#EF2B2D]/50 focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows={4}
                  className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 transition focus:border-[#EF2B2D] focus:ring-1 focus:ring-[#EF2B2D]/50 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#EF2B2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#d62426] hover:shadow-[0_0_25px_rgba(239,43,45,0.6)]"
                >
                  Send Request
                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
