"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0d] text-white">

      {/* Subtle Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-16 lg:grid-cols-4">

          {/* COMPANY INFO */}
          <div>
            <div className="relative h-14 w-48">
              <Image
                src="/images/logo.png"
                alt="Innovision Security"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Founded in 2007, Innovision has grown into one of India’s leading
              security and manpower solution providers with nationwide presence
              and disciplined service execution.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-4">
              {["LinkedIn", "Facebook", "Instagram", "YouTube"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/60 transition hover:border-[#EF2B2D]/50 hover:text-white hover:shadow-[0_0_20px_rgba(239,43,45,0.6)]"
                >
                  •
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Contact
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>📞 0124-2341602</li>
              <li>📧 contact@innovision.co.in</li>
              <li>
                📍 First Floor, 1/209, Sadar Bazaar, Delhi Cantonment,
                New Delhi 110010
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="hover:text-white transition">Security Services</li>
              <li className="hover:text-white transition">Facility Management</li>
              <li className="hover:text-white transition">Manpower Sourcing</li>
              <li className="hover:text-white transition">Skill Development</li>
              <li className="hover:text-white transition">Leadership</li>
              <li className="hover:text-white transition">Compliance</li>
            </ul>
          </div>

          {/* INVESTOR + SUBSIDIARIES */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Corporate
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="hover:text-white transition">Financial Statements</li>
              <li className="hover:text-white transition">Annual Return</li>
              <li className="hover:text-white transition">IPO Audio Visual</li>
              <li className="hover:text-white transition">Innovision International</li>
              <li className="hover:text-white transition">Aerodrone Robotics</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <span>© 2024 Innovision Limited. All rights reserved.</span>

          <div className="flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
