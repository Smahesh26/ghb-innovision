"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TollPlazaManagementPage() {
  const projects = [
    { name: "Dumbarwadi", location: "Maharashtra" },
    { name: "Sabli", location: "Bareilly" },
    { name: "Tarwa Dewa 2", location: "Aligarh" },
    { name: "Newadakanthi", location: "Kannauj" },
    { name: "Pashim Madati", location: "Siliguri" },
    { name: "Sarawa", location: "Roorkee" },
    { name: "Dhareri Jattan", location: "Mohali" },
    { name: "Lathi", location: "Jaisalmer" },
    { name: "Simliya - Fatehpur", location: "Kota" },
    { name: "Aihar", location: "Raebareli" },
    { name: "Milk Majra 2", location: "Panchkula" },
    { name: "Ramnagar Gansiyari", location: "Allahabad" },
    { name: "Asroga 1", location: "Lucknow" },
    { name: "Sayeed Mazera", location: "Roorkee" },
    { name: "Asroga 2", location: "Lucknow" },
    { name: "Mashora 1", location: "Dhamtari" },
    { name: "Mashora 2", location: "Dhamtari" },
    { name: "Diengpashosh", location: "Shillong" },
    { name: "Mashora 3", location: "Dhamtari" },
    { name: "Saini Majra", location: "Ambala" },
    { name: "Ramnagar Gansiyari -2", location: "Allahabad" },
    { name: "Tarwa Dewa 1", location: "Aligarh" },
    { name: "Lachhiwala", location: "Dehradun" },
    { name: "Nazirakhat", location: "Guwahati" },
    { name: "Sarawa", location: "Roorkee" },
    { name: "Pashim Madati", location: "Siliguri" },
    { name: "Newadakanthi", location: "Kannauj" },
    { name: "Tarwa Dewa 2", location: "Aligarh" },
    { name: "Sabli", location: "Bareilly" },
    { name: "Dumbarwadi", location: "Maharashtra" },
  ];

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
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="font-semibold text-[#EF2B2D]">Projects</span>
            </h2>
            <p className="text-lg text-gray-600">Strategic locations across India</p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm sm:p-8">
            <div className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[#EF2B2D]/8 blur-3xl" />

            <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={`${project.name}-${project.location}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#EF2B2D]/40 hover:shadow-md"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#EF2B2D]/25 bg-[#EF2B2D]/10 text-xs font-bold text-[#EF2B2D]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">{project.name}</h3>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.08em] text-gray-500">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#EF2B2D]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em]">Site</span>
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
