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
      title: "Strategic Expansion",
      description: "Leveraging opportunities in toll management through PPPs",
      icon: "🎯",
    },
    {
      title: "Operational Expertise",
      description: "Delivering seamless operations and high customer satisfaction",
      icon: "⚙️",
    },
    {
      title: "Adaptive Solutions",
      description: "Navigating dynamic industry landscapes with flexibility",
      icon: "🔄",
    },
    {
      title: "Value Delivery",
      description: "Consistently delivering value to clients across all projects",
      icon: "💎",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/all-banners/Banner ServicesTollPlazaManagement.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 sm:pt-32 lg:pt-28 pb-10 sm:pb-8 lg:pb-0 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
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
              Toll Management through
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Public-Private Partnerships</span>
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
                      Opportunity
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-gray-600">
                      Government policies are creating exciting opportunities for private players to engage in toll 
                      management through public-private partnerships (PPPs). Innovision Limited is at the forefront 
                      of this transformation, leveraging strategic expansions and operational expertise to emerge as 
                      a leader in toll plaza management.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/clients-services/tollmanagement.jpg"
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
                    src="/images/clients-services/tollroad.jpg"
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
                      Industry
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-gray-600">
                      A toll road is a public or private roadway where users pay a fee for passage, implemented to 
                      recuperate the cost of construction and maintenance. Since 1992, various state governments have 
                      enacted legislation allowing the levy of toll fees on state highways and other roads constructed 
                      by the public sector or under PPP arrangements.
                    </p>
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
                      Journey
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-gray-600">
                      Innovision's journey in toll plaza management showcases strategic expansions and operational prowess. 
                      The company has navigated the dynamic industry landscape, adapting to market conditions and consistently 
                      delivering value to clients.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/clients-services/tollplazamanagement.jpg"
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
                    src="/images/clients-services/operationalexcellence.jpg"
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
                  
                  <div className="relative border-l-2 border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D]/5 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Excellence
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-gray-600">
                      Innovision exemplifies adaptability and operational excellence. The company has consistently adapted 
                      to new challenges and opportunities, ensuring seamless operations and high customer satisfaction. 
                      Our toll plaza management segment reflects adaptive spirit, operational excellence, and ability to 
                      deliver value in a dynamic industry landscape.
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
            className="mt-8 mb-16 text-center"
          >
            <h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-light tracking-[-0.015em] text-white sm:text-5xl">
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

          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d0d10] via-[#0a0a0d] to-[#050507] p-6 pt-20 shadow-[0_28px_70px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 sm:pt-24">
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

            <div className="relative z-20 mt-20 mb-8 flex flex-wrap items-center justify-center gap-3 border border-white/12 bg-white/5 p-3 backdrop-blur-md sm:mt-24 lg:mt-28">
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
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="group relative flex items-center justify-between gap-4 border border-white/14 bg-transparent p-4 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#EF2B2D]/45 hover:shadow-[0_22px_55px_rgba(0,0,0,0.4),0_0_18px_rgba(239,43,45,0.12)]"
              >
                <span className="absolute left-0 top-0 h-full w-[2px] bg-[#EF2B2D]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#EF2B2D]/40 bg-[#EF2B2D]/14 text-xs font-bold text-[#ff7b7c] shadow-[0_0_18px_rgba(239,43,45,0.22)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 truncate text-sm font-semibold tracking-[0.01em] text-white sm:text-base">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#EF2B2D]" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                        <path d="M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4Z" />
                      </svg>
                      <span className="truncate">{project.name}</span>
                    </h3>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-white/55">{project.location}</p>
                    {project.note && <p className="mt-1 text-xs leading-relaxed text-white/50">{project.note}</p>}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${
                      project.status === "Upcoming"
                        ? "border-amber-500/55 bg-amber-500/10 text-amber-300"
                        : project.status === "Ongoing"
                          ? "border-emerald-500/55 bg-emerald-500/10 text-emerald-300"
                          : "border-white/25 bg-white/[0.06] text-white/75"
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="flex items-center gap-1 text-[#ff6b6d]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/75">Site</span>
                  </div>
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
