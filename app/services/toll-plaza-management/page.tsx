"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type ProjectStatus = "Upcoming" | "Ongoing" | "Closed";

export default function TollPlazaManagementPage() {
  const projects = [
    { name: "Vanagaram", location: "Chennai", status: "Upcoming" as ProjectStatus },
    { name: "152D", location: "Bhiwani", status: "Ongoing" as ProjectStatus },
    { name: "Mikirati Hawgaon", location: "Guwahati", status: "Ongoing" as ProjectStatus },
    { name: "Nekawala", location: "Jaipur", status: "Ongoing" as ProjectStatus },
    { name: "Nemili Sriperumpudur", location: "Kanchipuram", status: "Ongoing" as ProjectStatus },
    { name: "Tarwa Dewa", location: "Lucknow", status: "Ongoing" as ProjectStatus },
    { name: "Gulalpurva", location: "Lucknow", status: "Ongoing" as ProjectStatus },
    { name: "Badighati Bhutati", location: "Jaipur", status: "Ongoing" as ProjectStatus },
    { name: "Saini Majra 2", location: "Ambala", status: "Ongoing" as ProjectStatus },
    { name: "Puraini", location: "Nazibabad", status: "Closed" as ProjectStatus },
    { name: "Nazirakhat 2", location: "Guwahati", status: "Closed" as ProjectStatus },
    { name: "Katoghan", location: "Kanpur", status: "Closed" as ProjectStatus },
    { name: "Sosokhurd", location: "Dhanbad", status: "Closed" as ProjectStatus },
    { name: "Dumbarwadi", location: "Ahmednagar", status: "Closed" as ProjectStatus },
    { name: "Sabli", location: "Bareilly", status: "Closed" as ProjectStatus },
    { name: "Newadakanthi", location: "Kannauj", status: "Closed" as ProjectStatus },
    { name: "Pashim Madati", location: "Siliguri", status: "Closed" as ProjectStatus },
    { name: "Sarawa", location: "Roorkee", status: "Closed" as ProjectStatus },
    { name: "Nazirakhat", location: "Guwahati", status: "Closed" as ProjectStatus },
    { name: "Lachhiwala", location: "Dehradun", status: "Closed" as ProjectStatus },
    {
      name: "Ramnagar Gansiyari",
      location: "Allahabad",
      status: "Closed" as ProjectStatus,
      note: "Multiple Phases",
    },
    { name: "Saini Majra", location: "Ambala", status: "Closed" as ProjectStatus },
    {
      name: "Mashora",
      location: "Dhamtari",
      status: "Closed" as ProjectStatus,
      note: "Multiple Times",
    },
    { name: "Diengpashosh", location: "Shillong", status: "Closed" as ProjectStatus },
    {
      name: "Asroga",
      location: "Lucknow",
      status: "Closed" as ProjectStatus,
      note: "Multiple Phases",
    },
    {
      name: "Milk Majra",
      location: "Panchkula",
      status: "Closed" as ProjectStatus,
      note: "Multiple Phases",
    },
    { name: "Aihar", location: "Raebareli", status: "Closed" as ProjectStatus },
    { name: "Simliya", location: "Fatehpur – Kota", status: "Closed" as ProjectStatus },
    { name: "Lathi", location: "Jaisalmer", status: "Closed" as ProjectStatus },
    { name: "Dhareri Jattan", location: "Mohali", status: "Closed" as ProjectStatus },
  ];

  const statusFilters: Array<"All" | ProjectStatus> = ["All", "Ongoing", "Closed", "Upcoming"];
  const [selectedStatus, setSelectedStatus] = useState<"All" | ProjectStatus>("All");

  const filteredProjects = useMemo(
    () =>
      selectedStatus === "All"
        ? projects
        : projects.filter((project) => project.status === selectedStatus),
    [projects, selectedStatus]
  );

  const getFilterIcon = (status: "All" | ProjectStatus) => {
    if (status === "All") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    }

    if (status === "Ongoing") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    }

    if (status === "Upcoming") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m6 12 4 4 8-8" />
      </svg>
    );
  };

  const features = [
    {
      title: "Collection Accuracy",
      description: "Structured controls to ensure precise toll collection and reconciliation.",
      icon: "📊",
    },
    {
      title: "Lane Uptime",
      description: "Continuous supervision focused on throughput, uptime, and lane efficiency.",
      icon: "🛣️",
    },
    {
      title: "FASTag Reconciliation",
      description: "Transaction verification and discrepancy tracking through MIS workflows.",
      icon: "🏷️",
    },
    {
      title: "Manpower Productivity",
      description: "Trained operators and supervisory standards maintained with 24x7 oversight.",
      icon: "👥",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/InnovisinTollMgmt/1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 sm:pt-32 lg:pt-28 pb-10 sm:pb-8 lg:pb-0 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.28em] text-center leading-relaxed text-white/70 sm:gap-4 sm:text-xs sm:tracking-[0.4em]"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Toll Plaza Management</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl"
          >
            Toll Plaza
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Management</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-lg text-white/90"
          >
            Leading the Way in Toll Operations and Management
          </motion.p>
        </div>
      </section>

      {/* Introduction Section - Road Design */}
      <section className="relative overflow-hidden bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Toll Plaza
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Management</span>
            </h2>
          </motion.div>

          {/* Elegant Timeline Layout */}
          <div className="relative">
            {/* Elegant Center Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#EF2B2D]/20 via-gray-200 to-[#EF2B2D]/20 md:block" />

            <div className="relative space-y-12">
              {/* Section 1 - Text Left, Image Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                {/* Text Card */}
                <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-sm font-semibold text-[#EF2B2D]">
                    01
                  </div>
                  
                  <div className="relative border-l-2 border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D]/5 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Overview
                    </h3>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      Innovision delivers professional Toll Plaza Management services for the National Highways 
                      Authority of India (NHAI) and State Highway Authorities, ensuring efficient, compliant, and 
                      revenue-secure tolling operations.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      Operating within deployed infrastructure and approved technology ecosystems, Innovision focuses 
                      on disciplined execution, structured supervision, and measurable operational performance. Our 
                      approach is built on standardized operating procedures, trained manpower, and strong internal 
                      control systems to maintain uninterrupted toll collection and operational transparency.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      Beyond national highway assignments, this vertical is positioned to expand into State Highway 
                      toll operations, municipal user-fee collection systems, structured urban tolling, and organized 
                      parking management contracts.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/InnovisinTollMgmt/2.jpg"
                    alt="Toll Management Opportunities"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Section 2 - Image Left, Text Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md order-2 lg:order-1">
                  <Image
                    src="/images/InnovisinTollMgmt/3.jpg"
                    alt="Toll Road Industry"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Text Card */}
                <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg order-1 lg:order-2">
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-sm font-semibold text-[#EF2B2D]">
                    02
                  </div>
                  
                  <div className="relative border-l-2 border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D]/5 to-transparent p-6 pl-16">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Scope of Services
                    </h3>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                      <li>End-to-end toll plaza operations management across ETC and cash lanes</li>
                      <li>FASTag transaction processing and reconciliation</li>
                      <li>Revenue assurance mechanisms, audit controls, and MIS reporting</li>
                      <li>Deployment of trained toll operators and supervisory personnel with 24x7 oversight</li>
                      <li>Centralized command center monitoring for operational supervision</li>
                      <li>CCTV surveillance coordination and compliance management</li>
                      <li>Traffic regulation and incident response support at plaza level</li>
                      <li>SOP-driven operational execution aligned with NHAI and State Authority guidelines</li>
                      <li>Capability to manage municipal tolling and organized parking fee collection systems</li>
                      <li>Execution of corporate user-fee and access control collection contracts</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 - Text Left, Image Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                {/* Text Card */}
                <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-sm font-semibold text-[#EF2B2D]">
                    03
                  </div>
                  
                  <div className="relative border-l-2 border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D]/5 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Operational Framework
                    </h3>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                      <li>Complete plaza operations across ETC (FASTag), hybrid, and cash lanes</li>
                      <li>Structured shift deployment based on traffic volume and lane demand</li>
                      <li>Accurate vehicle classification and optimized lane throughput to minimize congestion</li>
                      <li>Daily revenue reconciliation and strict cash management protocols</li>
                      <li>Transaction verification and discrepancy monitoring through structured MIS reporting</li>
                      <li>CCTV coordination, incident documentation, and regulatory compliance reporting</li>
                      <li>Continuous 24x7 operational supervision with performance tracking</li>
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/InnovisinTollMgmt/4.jpg"
                    alt="Toll Plaza Management Journey"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Section 4 - Image Left, Text Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md order-2 lg:order-1">
                  <Image
                    src="/images/InnovisinTollMgmt/5.jpg"
                    alt="Operational Excellence"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Text Card */}
                <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg order-1 lg:order-2">
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-sm font-semibold text-[#EF2B2D]">
                    04
                  </div>
                  
                  <div className="relative border-l-2 border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D]/5 to-transparent p-6 pl-16">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Operational Excellence
                    </h3>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      With SOP-driven execution, trained personnel, centralized monitoring, and robust control 
                      mechanisms, Innovision ensures stable toll collections, regulatory adherence, and operational 
                      reliability across highway and urban tolling environments.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      The operational model is designed to scale across national highways, state highways, municipal 
                      tolling systems, and organized user-fee collection infrastructure, enabling authorities and 
                      concessionaires to maintain secure, transparent, and efficient revenue operations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-light tracking-tight text-gray-900 sm:text-5xl"
          >
            Our Core <span className="font-semibold text-[#EF2B2D]">Strengths</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#EF2B2D]/30 hover:shadow-md"
              >
                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 text-4xl opacity-80">{feature.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Map Style */}
      <section className="bg-[#070709] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 flex flex-col items-center justify-center gap-2 text-4xl font-light tracking-[-0.015em] text-white sm:flex-row sm:gap-3 sm:text-5xl">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#EF2B2D] sm:h-9 sm:w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 3v6m0 6v6M3 12h6m6 0h6" />
                <path d="M6 6l3 3m6 6 3 3M18 6l-3 3m-6 6-3 3" />
              </svg>
              <span>
                Latest <span className="font-semibold text-[#EF2B2D]">Projects Activity</span>
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              Chronological order (latest first) across strategic toll sites in India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative mb-10 h-52 overflow-hidden rounded-lg border border-white/15 sm:h-64"
          >
            <Image
              src="/images/InnovisinTollMgmt/6.jpg"
              alt="Toll plaza operations overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          </motion.div>

          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d0d10] via-[#0a0a0d] to-[#050507] p-6 pt-8 shadow-[0_28px_70px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 sm:pt-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.12),transparent_35%),radial-gradient(circle_at_80%_78%,rgba(239,43,45,0.08),transparent_42%)]" />
            <motion.div
              className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#EF2B2D]/70 to-transparent"
              animate={{ opacity: [0.25, 0.75, 0.25], scaleX: [0.98, 1, 0.98] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -top-24 -right-14 h-60 w-60 bg-[#EF2B2D]/16 blur-3xl"
              animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.18, 0.32, 0.18] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-28 -left-12 h-60 w-60 bg-[#EF2B2D]/14 blur-3xl"
              animate={{ x: [0, 14, 0], y: [0, -10, 0], opacity: [0.18, 0.3, 0.18] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-20 mb-8 flex flex-wrap items-center justify-center gap-3 border border-white/12 bg-white/5 p-3 backdrop-blur-md">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedStatus(status)}
                  className={`flex items-center gap-2 border px-4 py-2 text-xs font-medium uppercase tracking-[0.11em] transition duration-300 sm:text-sm ${
                    selectedStatus === status
                      ? "border-[#EF2B2D]/75 bg-[#EF2B2D]/15 text-[#ff6b6d] shadow-[0_0_0_1px_rgba(239,43,45,0.18),0_10px_30px_rgba(239,43,45,0.12)]"
                      : "border-white/15 bg-white/[0.03] text-white/70 hover:border-[#EF2B2D]/45 hover:text-[#ff8a8b] hover:-translate-y-0.5"
                  }`}
                >
                  <span aria-hidden="true">{getFilterIcon(status)}</span>
                  {status}
                </button>
              ))}
            </div>

            <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${project.location}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group relative border-l-2 border-l-[#EF2B2D]/40 bg-white/[0.02] p-4 transition-all duration-300 hover:border-l-[#EF2B2D] hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold text-[#EF2B2D]">#{String(index + 1).padStart(2, "0")}</span>
                      <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#EF2B2D]/60" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4Z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{project.location}</p>
                    {project.note && <p className="mt-2 text-xs leading-relaxed text-white/50">{project.note}</p>}
                  </div>

                  <span
                    className={`shrink-0 px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      project.status === "Upcoming"
                        ? "bg-amber-500/15 text-amber-300"
                        : project.status === "Ongoing"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-white/10 text-white/75"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div id="contact">
        <Contact showFootprints={false as boolean} />
      </div>

      <Footer />
    </>
  );
}
