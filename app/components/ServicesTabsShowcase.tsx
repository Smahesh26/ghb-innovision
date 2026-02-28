"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type ServiceTab = {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  href: string;
};

const serviceTabs: ServiceTab[] = [
  {
    id: "security",
    tabLabel: "Manned Security",
    title: "Manned Private Security Services",
    description:
      "PSARA-certified guarding operations with disciplined manpower, strict SOP adherence, and rapid on-ground response capability.",
    points: ["PSARA certified personnel", "Risk-based deployment planning", "24/7 command coordination"],
    image: "/images/services-home/mannedservice1.jpeg",
    href: "/services/security/manned-private-security",
  },
  {
    id: "facility",
    tabLabel: "Facility Management",
    title: "Integrated Facility Management",
    description:
      "Comprehensive soft-service operations designed to improve uptime, compliance, and workplace efficiency at scale.",
    points: ["Housekeeping and hygiene control", "SLA-backed service governance", "Compliance-first execution"],
    image: "/images/clients-services/facilitymanagement1.png",
    href: "/services/facility-management",
  },
  {
    id: "manpower",
    tabLabel: "Manpower & Payroll",
    title: "Manpower Sourcing & Payroll",
    description:
      "Unified recruitment-to-payroll lifecycle with transparent workforce administration and statutory compliance.",
    points: ["Recruitment and onboarding", "Payroll and statutory filings", "Attendance and workforce tracking"],
    image: "/images/services-home/ManpwerandSourcing.jpg",
    href: "/services/manpower-sourcing",
  },
  {
    id: "toll",
    tabLabel: "Toll Operations",
    title: "Toll Plaza Management",
    description:
      "TMS-enabled toll operations with lane optimization, incident response, and real-time operational supervision.",
    points: ["ATMS/TMS integrated workflows", "Revenue-assurance focused controls", "Round-the-clock incident management"],
    image: "/images/services-home/tollplazaservicehoma.jpg",
    href: "/services/toll-plaza-management",
  },
  {
    id: "skill",
    tabLabel: "Skill Development",
    title: "Skill Development Programs",
    description:
      "Industry-aligned learning tracks that build employable capabilities with certified training outcomes.",
    points: ["Demand-led curriculum design", "Assessment and certification support", "Placement-oriented ecosystem"],
    image: "/images/services-home/skilldevelopmentservicehome.jpg",
    href: "/services/skill-development",
  },
  {
    id: "overseas",
    tabLabel: "Overseas Recruitment",
    title: "Overseas Recruitment Solutions",
    description:
      "Global talent sourcing and deployment support with documentation, compliance, and onboarding precision.",
    points: ["International candidate pipeline", "Visa and document coordination", "Deployment-ready compliance workflows"],
    image: "/images/services-home/Overseas.jpg",
    href: "/services/overseas-recruitment",
  },
  {
    id: "drone",
    tabLabel: "Drone Training",
    title: "Drone Manufacturing & Training",
    description:
      "Advanced drone capability building for surveillance, inspection, and modern field operations.",
    points: ["DGCA-aligned operator training", "Simulation plus live-flight modules", "Mission-specific deployment readiness"],
    image: "/images/services-home/Drone.jpg",
    href: "/services#drone",
  },
];

export default function ServicesTabsShowcase() {
  const [activeTabId, setActiveTabId] = useState(serviceTabs[0].id);
  const activeService = serviceTabs.find((service) => service.id === activeTabId) ?? serviceTabs[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f8f9] via-[#fbfbfc] to-[#f3f4f6] py-24 text-[#101218]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, #111827 0px, #111827 1px, transparent 1px, transparent 42px), repeating-linear-gradient(90deg, #111827 0px, #111827 1px, transparent 1px, transparent 42px)",
      }} />
      <div className="pointer-events-none absolute -top-28 left-8 h-72 w-72 bg-[#EF2B2D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 bg-[#111827]/8 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#EF2B2D]">Service Model</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Premium Service Architecture for Modern Operations
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#4b5563]">
            Explore our integrated service stack through a premium interactive model built for clarity, scale, and operational trust.
          </p>
          {/* <div className="mt-6 inline-flex items-center gap-2 border border-[#EF2B2D]/30 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#991b1b] shadow-sm">
            07 Services • Premium Stack
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch"
        >
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative"
          >
            <div className="relative p-4 lg:h-[620px]">
              <p className="mb-3 border-b border-black/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                Select Service
              </p>
              {serviceTabs.map((service, index) => {
              const isActive = service.id === activeTabId;
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTabId(service.id)}
                  whileHover={{ x: 3, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`mb-3 flex w-full items-center justify-between border px-4 py-4 text-left text-[15px] font-semibold transition-all duration-300 last:mb-0 ${
                    isActive
                      ? "border-[#EF2B2D]/70 bg-gradient-to-r from-[#EF2B2D] to-[#d91f22] text-white shadow-[0_12px_24px_rgba(239,43,45,0.35)]"
                      : "border-black/10 bg-[#fbfbfc] text-[#1f2937] hover:border-[#EF2B2D]/30 hover:bg-white hover:translate-x-[2px] hover:shadow-[0_8px_20px_rgba(16,18,24,0.08)]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`inline-flex w-8 items-center justify-center border px-1 py-1 text-[10px] font-bold tracking-[0.15em] ${
                      isActive ? "border-white/60 text-white" : "border-[#EF2B2D]/35 text-[#EF2B2D]"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{service.tabLabel}</span>
                  </span>
                  <motion.span
                    animate={{ x: isActive ? 3 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`text-xl ${isActive ? "text-white" : "text-[#EF2B2D]"}`}
                  >
                    →
                  </motion.span>
                </motion.button>
              );
            })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.id}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="relative p-6 lg:h-[620px] lg:pt-20"
              >
                <div className="grid gap-8 xl:grid-cols-[1.15fr_1fr]">
                  <motion.div
                    key={activeService.image}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative min-h-[330px] overflow-hidden border border-black/10 bg-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 55vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white/15 to-transparent" />
                  </motion.div>

                  <div className="flex flex-col justify-center border-l border-black/10 pl-6 xl:overflow-y-auto">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 }}
                      className="text-3xl font-bold leading-tight text-[#101218] sm:text-[2.15rem]"
                    >
                      {activeService.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.14 }}
                      className="mt-4 text-[15px] leading-relaxed text-[#4b5563]"
                    >
                      {activeService.description}
                    </motion.p>

                    <ul className="mt-6 space-y-3">
                      {activeService.points.map((point, idx) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.2 + idx * 0.06 }}
                          className="flex items-center gap-3 text-[1.04rem] font-medium text-[#111827]"
                        >
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center border border-[#EF2B2D]/45 bg-[#EF2B2D]/5 text-[#EF2B2D]">✓</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.34 }}
                    >
                      <Link
                        href={activeService.href}
                        className="mt-8 inline-flex w-fit items-center gap-2 border border-[#111827] px-5 py-2 text-base font-semibold uppercase tracking-[0.1em] text-[#111827] transition hover:border-[#EF2B2D] hover:bg-[#EF2B2D] hover:text-white"
                      >
                        Read More
                        <span>→</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
