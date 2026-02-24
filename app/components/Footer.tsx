"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTA from "@/app/components/CTA";

export default function Footer() {
  const pathname = usePathname();

  const pagesWithInlineCTA = new Set([
    "/clients",
    "/careers",
    "/services",
    "/services/security/manned-private-security",
    "/services/skill-development",
    "/services/skill-development/placement",
    "/services/skill-development/project",
    "/services/skill-development/training",
  ]);

  const showGlobalCTA = pathname !== "/" && !pagesWithInlineCTA.has(pathname);

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/innovision.co.in",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/innovisionlimited/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Innovision_Ltd",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://in.linkedin.com/company/innovision-limited",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@InnovisionLimited_",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {showGlobalCTA && <CTA />}
      <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b0b0d] via-[#111113] to-black text-white">

      {/* 3D Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(239,43,45,0.08),transparent_60%)]" />
        
        {/* Grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Top 3D Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF2B2D] to-transparent shadow-[0_0_20px_rgba(239,43,45,0.5)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* TOP GRID */}
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-12">

          {/* COMPANY INFO */}
          <div className="lg:col-span-4">
            <div className="relative mb-8 h-16 w-56 max-w-full">
              <Image
                src="/images/logo.png"
                alt="Innovision Security"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              Established in 2007, Innovision has evolved into one of India’s
              prominent toll management and infrastructure operations companies,
              delivering nationwide manpower solutions and skilled workforce
              services through structured systems and disciplined execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#EF2B2D] to-red-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 shadow-[0_10px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#EF2B2D]/50 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(239,43,45,0.35)] group-hover:-translate-y-0.5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 border-l-4 border-[#EF2B2D] pl-3 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3 transition hover:text-white">
                <span className="text-[#EF2B2D] text-lg">📞</span>
                <a href="tel:01242341602" className="break-words">0124-2341602</a>
              </li>
              <li className="flex items-start gap-3 transition hover:text-white">
                <span className="text-[#EF2B2D] text-lg">📧</span>
                <a href="mailto:contact@innovision.co.in" className="whitespace-nowrap text-xs sm:text-sm">contact@innovision.co.in</a>
              </li>
              <li className="flex items-start gap-3 transition hover:text-white">
                <span className="text-[#EF2B2D] text-lg">📍</span>
                <span>
                  First Floor, 1/209, Sadar Bazaar, Delhi Cantonment,
                  New Delhi 110010
                </span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 border-l-4 border-[#EF2B2D] pl-3 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/quick-links" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Quick Links Page</Link>
              </li>
              <li>
                <Link href="/services/toll-plaza-management" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Toll Plaza Management</Link>
              </li>
              <li>
                <Link href="/services/security/manned-private-security" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Manned Private Security Services</Link>
              </li>
              <li>
                <Link href="/services/facility-management" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Integrated Facility Management</Link>
              </li>
              <li>
                <Link href="/services/skill-development" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Skill Development</Link>
              </li>
              <li>
                <Link href="/services/manpower-sourcing" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Manpower Sourcing & Payroll</Link>
              </li>
              <li>
                <Link href="/services/overseas-recruitment" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Overseas Recruitment</Link>
              </li>
            </ul>
          </div>

          {/* INVESTOR RELATIONS */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 border-l-4 border-[#EF2B2D] pl-3 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
              Investor Relations
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/investors" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Financial Statements</Link>
              </li>
              <li>
                <Link href="/investors" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Annual Report</Link>
              </li>
              <li>
                <Link href="/investors" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ IPO Information</Link>
              </li>
              <li>
                <Link href="/investors/ipo-disclaimer/confirm" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Corporate Video</Link>
              </li>
            </ul>
          </div>

          {/* CORPORATE */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 border-l-4 border-[#EF2B2D] pl-3 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
              Corporate
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/insights/certificates" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Compliance</Link>
              </li>
              <li>
                <Link href="/insights/awards" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Awards & Recognition</Link>
              </li>
              <li>
                <Link href="/insights/blogs" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Blogs</Link>
              </li>
              <li>
                <Link href="/services/drone-training" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Aerodrone Robotics</Link>
              </li>
              <li>
                <Link href="/careers" className="block w-full pl-4 -indent-4 leading-relaxed transition hover:text-white hover:translate-x-1">→ Careers</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR - Enhanced 3D */}
      <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-px" />
        
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <span className="text-center sm:text-left">© 2024 Innovision Limited. All rights reserved.</span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-6">
            <Link href="/quick-links" className="cursor-pointer transition hover:text-white">
              Quick Links
            </Link>
            <span className="cursor-pointer transition hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition hover:text-white">
              Terms & Conditions
            </span>
            <span className="cursor-pointer transition hover:text-white">
              Sitemap
            </span>
          </div>
        </div>
      </div>

      </footer>
    </>
  );
}
