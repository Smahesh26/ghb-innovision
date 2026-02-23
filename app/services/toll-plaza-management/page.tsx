"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TollPlazaManagementPage() {
  const projects = [
    { name: "Dumbarwadi", location: "Maharashtra", icon: "📍" },
    { name: "Sabli", location: "Bareilly", icon: "📍" },
    { name: "Tarwa Dewa 2", location: "Aligarh", icon: "📍" },
    { name: "Newadakanthi", location: "Kannauj", icon: "📍" },
    { name: "Pashim Madati", location: "Siliguri", icon: "📍" },
    { name: "Sarawa", location: "Roorkee", icon: "📍" },
    { name: "Dhareri Jattan", location: "Mohali", icon: "📍" },
    { name: "Lathi", location: "Jaisalmer", icon: "📍" },
    { name: "Simliya - Fatehpur", location: "Kota", icon: "📍" },
    { name: "Aihar", location: "Raebareli", icon: "📍" },
    { name: "Milk Majra 2", location: "Panchkula", icon: "📍" },
    { name: "Ramnagar Gansiyari", location: "Allahabad", icon: "📍" },
    { name: "Asroga 1", location: "Lucknow", icon: "📍" },
    { name: "Sayeed Mazera", location: "Roorkee", icon: "📍" },
    { name: "Asroga 2", location: "Lucknow", icon: "📍" },
    { name: "Mashora 1", location: "Dhamtari", icon: "📍" },
    { name: "Mashora 2", location: "Dhamtari", icon: "📍" },
    { name: "Diengpashosh", location: "Shillong", icon: "📍" },
    { name: "Mashora 3", location: "Dhamtari", icon: "📍" },
    { name: "Saini Majra", location: "Ambala", icon: "📍" },
    { name: "Ramnagar Gansiyari 2", location: "Allahabad", icon: "📍" },
    { name: "Tarwa Dewa 1", location: "Aligarh", icon: "📍" },
    { name: "Lachhiwala", location: "Dehradun", icon: "📍" },
    { name: "Nazirakhat", location: "Guwahati", icon: "📍" },
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
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
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

          {/* Project Cards - Location Pins Style */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-[#EF2B2D]/30 hover:shadow-md"
              >
                {/* Location Pin Top */}
                <div className="flex h-20 items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-4xl opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                    {project.icon}
                  </div>
                </div>

                {/* Project Info */}
                <div className="border-t-2 border-[#EF2B2D] bg-white p-5">
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{project.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm font-medium text-[#EF2B2D]">{project.location}</span>
                    <span className="h-px flex-1 bg-gray-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EF2B2D] to-[#d62628] py-20">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Partner with Us for <span className="font-semibold">Toll Plaza Excellence</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Experience seamless toll operations and management with India's leading toll plaza management company
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-block rounded-lg border-2 border-white bg-white px-10 py-4 text-base font-semibold text-[#EF2B2D] shadow-lg transition-all hover:bg-transparent hover:text-white"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
