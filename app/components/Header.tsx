"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Company Overview", href: "/about" },
      { label: "Our Journey", href: "/journey" },
      { label: "Leadership", href: "/leadership" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Toll Plaza Management", href: "/services/toll-plaza-management" },
      {
        label: "Manned Private Security Services",
        href: "/services/security/manned-private-security",
        hasSubmenu: true,
        children: [
          { label: "Manned Private Security", href: "/services/security/manned-private-security" },
          { label: "Training", href: "/services/security/training" },
          // { label: "Electronic Security", href: "/services/security/electronic-security" },
          // { label: "Security Consulting", href: "/services/security/consulting" },
        ],
      },
      { label: "Integrated Facility Management", href: "/services/facility-management" },
      {
        label: "Skill Development",
        href: "/services/skill-development",
        hasSubmenu: true,
        children: [
          { label: "Project", href: "/services/skill-development/project" },
          { label: "Training", href: "/services/skill-development/training" },
          { label: "Placement", href: "/services/skill-development/placement" },
        ],
      },
      { label: "Manpower Sourcing & Payroll", href: "/services/manpower-sourcing" },
      { label: "Overseas Recruitment", href: "/services/overseas-recruitment" },
      { label: "Drone Flying Training", href: "/services/drone-training" },
    ],
  },
  { label: "Investors", href: "/investors" },
  {
    label: "Insights",
    children: [
      { label: "News & Press Releases", href: "/insights/news" },
      { label: "Awards & Accolades", href: "/insights/awards" },
      { label: "Certificates", href: "/insights/certificates" },
      { label: "Blogs", href: "/insights/blogs" },
      { label: "Gallery", href: "/insights/gallery" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
];

const ipoMarqueeItems = [
  "Innovision Limited IPO – Closing Date Extended! | Apply 13–17 March 2026 | Price Band ₹494–₹519 | Lot Size 27 Shares | Minimum Investment ₹13,338 | Listed on NSE & BSE",
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileParent, setMobileParent] = useState<NavItem | null>(null);
  const [mobileChild, setMobileChild] = useState<NavItem | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState("");
  const [brochureStatusMessage, setBrochureStatusMessage] = useState("");
  const [isBrochureSubmitting, setIsBrochureSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBrochureModal = () => {
    setBrochureStatusMessage("");
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    if (isBrochureSubmitting) return;
    setIsBrochureModalOpen(false);
    setBrochureEmail("");
    setBrochureStatusMessage("");
  };

  const handleBrochureSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = brochureEmail.trim();
    if (!email) {
      setBrochureStatusMessage("Please enter your email address.");
      return;
    }

    setIsBrochureSubmitting(true);
    setBrochureStatusMessage("");

    try {
      // Send notification to admin via FormSubmit
      const FORMSUBMIT_TARGET_EMAIL = "contact@innovision.co.in";
      const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_TARGET_EMAIL}`;

      const formData = new FormData();
      formData.append("email", email);
      formData.append("type", "Brochure Download Request");
      formData.append("_subject", "New Brochure Download Request - Innovision");
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      // Trigger PDF download
      const link = document.createElement("a");
      link.href = "/all-banners/Innovision.pdf";
      link.download = "Innovision-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setBrochureStatusMessage("Download started! Thank you for your interest.");
      setBrochureEmail("");
      setTimeout(() => {
        setIsBrochureModalOpen(false);
        setBrochureStatusMessage("");
      }, 1500);
    } catch {
      setBrochureStatusMessage("Unable to process request. Please try again.");
    } finally {
      setIsBrochureSubmitting(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileParent(null);
    setMobileChild(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((previous) => {
      const next = !previous;
      if (!next) {
        setMobileParent(null);
        setMobileChild(null);
      }
      return next;
    });
  };

  const mobileLevel = mobileChild ? 2 : mobileParent ? 1 : 0;
  const mobileCurrentItems = mobileChild?.children ?? mobileParent?.children ?? navItems;
  const mobileTitle = mobileChild?.label ?? mobileParent?.label ?? "Menu";

  const shouldUseHardNavigation = (href?: string) => {
    if (!href) return false;
    return href.startsWith("/investors") || href.startsWith("/leadership");
  };

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "top-0 bg-white shadow-[0_10px_30px_rgba(15,15,18,0.08)]" : "top-2 bg-transparent md:top-3"}`}>
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative z-40 mt-0 flex h-20 items-center justify-between px-8">

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
          <nav className={`hidden items-center gap-8 text-sm font-semibold tracking-[0.12em] lg:flex ${isScrolled ? "text-neutral-900" : "text-white"}`}>

            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubmenu(null);
                  }}
                >
                  <button className={`relative flex items-center gap-1 transition ${isScrolled ? "hover:text-[#EF2B2D]" : "hover:text-white"}`}>
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
                        className="absolute left-0 top-full z-[70] mt-6 w-72 rounded-xl border border-white/10 bg-[#0b0b0d]/95 backdrop-blur-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                      >
                        <ul className="space-y-4 text-xs text-white/80">
                          {item.children.map((child) => (
                            <li key={child.label} className="relative">
                              {child.hasSubmenu ? (
                                <div
                                  onMouseEnter={() => setActiveSubmenu(child.label)}
                                  onMouseLeave={() => setActiveSubmenu(null)}
                                  className="relative"
                                >
                                  <Link
                                    href={child.href || "#"}
                                    className="flex w-full items-center justify-between transition hover:text-white"
                                  >
                                    <span>{child.label}</span>
                                    <span className="text-xs">&#9656;</span>
                                  </Link>

                                  <AnimatePresence>
                                    {activeSubmenu === child.label && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 z-[80] ml-2 w-64 rounded-xl border border-white/10 bg-[#0b0b0d]/95 backdrop-blur-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                                      >
                                        <ul className="space-y-3 text-xs text-white/80">
                                          {child.children?.map((subChild) => (
                                            <li key={subChild.href ?? subChild.label}>
                                              <Link
                                                href={(subChild.href ?? "#") as string}
                                                className="block transition hover:text-white"
                                              >
                                                {subChild.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                shouldUseHardNavigation(child.href) ? (
                                  <a href={child.href || "#"} className="block transition hover:text-white">
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    href={child.href || "#"}
                                    className="block transition hover:text-white"
                                  >
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                shouldUseHardNavigation(item.href) ? (
                  <a
                    key={item.href ?? item.label}
                    href={(item.href ?? "#") as string}
                    className={`relative transition ${isScrolled ? "hover:text-[#EF2B2D]" : "hover:text-white"}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href ?? item.label}
                    href={(item.href ?? "#") as string}
                    className={`relative transition ${isScrolled ? "hover:text-[#EF2B2D]" : "hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                )
              )
            )}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-2 rounded-md border border-[#EF2B2D]/60 bg-[#EF2B2D]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#EF2B2D]/25"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={openBrochureModal}
              className="ml-4 rounded-md bg-[#EF2B2D] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426] hover:shadow-[0_0_20px_rgba(239,43,45,0.6)]"
            >
              Brochure
            </button>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`lg:hidden ${isScrolled ? "text-neutral-900" : "text-white"}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`mt-2 border-b ${isScrolled ? "border-neutral-200" : "border-white/35"}`} />

        <div
          className={`relative z-10 left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-x-0 ${
            isScrolled
              ? "border-neutral-200 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950"
              : "border-white/35 bg-gradient-to-r from-black/85 via-black/75 to-black/85"
          }`}
        >
          <div className="ipo-marquee-track flex w-max items-center gap-8 py-2 pl-6 pr-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            {[...ipoMarqueeItems, ...ipoMarqueeItems].map((message, index) => (
              <div key={`${message}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="rounded-full border border-[#EF2B2D]/60 bg-[#EF2B2D]/20 px-2 py-0.5 text-[10px] tracking-[0.2em] text-[#ffd2d2]">
                  IPO OPEN
                </span>
                <span>{message}</span>
              </div>
            ))}
          </div>
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
              <div className="mb-5 flex items-center gap-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="rounded-md border border-[#EF2B2D]/60 bg-[#EF2B2D]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                >
                  Contact
                </Link>
                <button
                  type="button"
                  onClick={openBrochureModal}
                  className="rounded-md bg-[#EF2B2D] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                >
                  Brochure
                </button>
              </div>

              <div className="mb-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {mobileLevel === 0 ? "Navigation" : `Menu / ${mobileTitle}`}
                </div>
                {mobileLevel > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (mobileLevel === 2) {
                        setMobileChild(null);
                        return;
                      }
                      setMobileParent(null);
                    }}
                    className="rounded-md border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80"
                  >
                    Back
                  </button>
                ) : null}
              </div>

              <div className="space-y-2">
                {mobileCurrentItems.map((item) => {
                  if (item.children?.length) {
                    return (
                      <div
                        key={`${mobileLevel}-${item.label}`}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                      >
                        {item.href ? (
                          shouldUseHardNavigation(item.href) ? (
                            <a
                              href={item.href ?? "#"}
                              onClick={closeMobileMenu}
                              className="text-sm font-semibold text-white/90"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              href={item.href ?? "#"}
                              onClick={closeMobileMenu}
                              className="text-sm font-semibold text-white/90"
                            >
                              {item.label}
                            </Link>
                          )
                        ) : (
                          <span className="text-sm font-semibold text-white/90">{item.label}</span>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            if (mobileLevel === 0) {
                              setMobileParent(item);
                            } else {
                              setMobileChild(item);
                            }
                          }}
                          className="rounded-md border border-white/20 px-2 py-1 text-xs text-white/80 transition hover:border-[#EF2B2D]/70 hover:text-white"
                          aria-label={`Open ${item.label}`}
                        >
                          View
                        </button>
                      </div>
                    );
                  }

                  return shouldUseHardNavigation(item.href) ? (
                    <a
                      key={`${mobileLevel}-${item.href || item.label}`}
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="block rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/90 transition hover:border-[#EF2B2D]/60 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={`${mobileLevel}-${item.href || item.label}`}
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="block rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/90 transition hover:border-[#EF2B2D]/60 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isBrochureModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md rounded-xl border border-white/10 bg-[#0b0b0d] p-6 text-white shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Download Brochure</h3>
                    <p className="mt-1 text-sm text-white/70">Enter your email to download our company brochure.</p>
                  </div>
                  <button
                    type="button"
                    onClick={closeBrochureModal}
                    className="text-white/70 transition hover:text-white"
                    aria-label="Close brochure popup"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleBrochureSubmit} className="mt-5 space-y-4">
                  <input
                    type="email"
                    value={brochureEmail}
                    onChange={(event) => setBrochureEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-[#EF2B2D]"
                    required
                  />

                  {brochureStatusMessage ? (
                    <p className="text-xs text-white/80">{brochureStatusMessage}</p>
                  ) : null}

                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeBrochureModal}
                      className="rounded-md border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10"
                      disabled={isBrochureSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-[#EF2B2D] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d62426] disabled:cursor-not-allowed disabled:opacity-70"
                      disabled={isBrochureSubmitting}
                    >
                      {isBrochureSubmitting ? "Starting..." : "Download"}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .ipo-marquee-track {
            animation: ipo-marquee-scroll 48s linear infinite;
            will-change: transform;
          }

          @keyframes ipo-marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </div>
    </header>
  );
}
