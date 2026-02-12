"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Our Journey", href: "/about#journey" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Security Services", href: "/services#security" },
      { label: "Facility Management", href: "/services#facility" },
      { label: "Manpower & Payroll", href: "/services#manpower" },
      { label: "Toll Plaza Management", href: "/services#toll" },
      { label: "Skill Development", href: "/services#skill" },
      { label: "Overseas Recruitment", href: "/services#overseas" },
      { label: "Drone Training", href: "/services#drone" },
    ],
  },
  { label: "Investors", href: "/investors" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className={`mt-4 flex items-center justify-between rounded-xl border border-white/10 px-8 transition-all duration-500
          ${isScrolled ? "bg-black/80 backdrop-blur-xl shadow-2xl" : "bg-black/40 backdrop-blur-md"}
          h-20`}
        >

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Innovision Security"
              width={300}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-[0.12em] text-white lg:flex">

            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="relative flex items-center gap-1 hover:text-white">
                    {item.label}
                    <span className="text-xs">&#9662;</span>

                    {/* Hover underline */}
                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#EF2B2D] transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 top-full mt-6 w-72 rounded-xl border border-white/10 bg-[#0b0b0d]/95 backdrop-blur-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                      >
                        <ul className="space-y-4 text-xs text-white/80">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block transition hover:text-white"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative transition hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* CTA */}
            <a
              href="/brochure.pdf"
              download
              className="ml-4 rounded-md bg-[#EF2B2D] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426] hover:shadow-[0_0_20px_rgba(239,43,45,0.6)]"
            >
              Brochure
            </a>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-xl border border-white/10 bg-[#0b0b0d]/95 p-6 backdrop-blur-xl text-white lg:hidden"
            >
              <div className="space-y-4">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <p className="font-semibold uppercase tracking-[0.15em] text-white/80">
                        {item.label}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-white/60">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-semibold"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
