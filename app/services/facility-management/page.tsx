"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function FacilityManagementPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabServices = [
    {
      title: "Integrated Facility Management",
      services: [
        {
          title: "INFRASTRUCTURE MANAGEMENT",
          description: "Complete management of your facility infrastructure including asset management, space planning, and strategic planning for long-term sustainability.",
          icon: "🏗️",
        },
        {
          title: "MAINTENANCE OF FACILITY",
          description: "Comprehensive maintenance programs ensuring your facility operates at peak efficiency with minimal downtime and optimal performance.",
          icon: "🔧",
        },
      ],
    },
    {
      title: "Maintenance and Repair",
      services: [
        {
          title: "PREVENTIVE MAINTENANCE",
          description: "Schedule regular maintenance to prevent equipment failures and reduce downtime.",
          icon: "📋",
        },
        {
          title: "EMERGENCY RESPONSE",
          description: "Rapidly respond to unexpected issues, minimizing disruptions and ensuring business continuity.",
          icon: "🚨",
        },
      ],
    },
    {
      title: "Specialized Services",
      services: [
        {
          title: "EVENT MAINTENANCE",
          description: "Coordinate and execute events, conferences, and meetings with precision and flair.",
          icon: "🎯",
        },
        {
          title: "PROJECT MANAGEMENT",
          description: "Oversee large-scale projects, ensuring timely completion and within budget.",
          icon: "📊",
        },
      ],
    },
  ];
  const services = [
    {
      title: "SOFT SERVICES",
      description: "Housekeeping, Janitorial Services, Landscaping, Pest Control, and Waste Management",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      ),
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "HARD SERVICES",
      description: "HVAC, Electrical, Plumbing, Fire Safety Systems, and Building Automation",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      color: "from-orange-600 to-red-600",
    },
    {
      title: "BUSINESS SUPPORT SERVICES",
      description: "Reception, Mail Management, Logistics Support, and Administrative Services",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "SPECIALIZED SERVICES",
      description: "Technical Support, Energy Management, and Sustainability Solutions",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: "from-green-600 to-emerald-600",
    },
  ];

  const coreServices = [
    {
      title: "Integrated Facility Management",
      description: "Comprehensive end-to-end facility management solutions tailored to your needs",
      image: "/images/services/facility-integrated.jpg",
    },
    {
      title: "Maintenance and Repair",
      description: "Preventive and corrective maintenance ensuring optimal facility performance",
      image: "/images/services/facility-maintenance.jpg",
    },
    {
      title: "Specialized Services",
      description: "Expert solutions for unique facility requirements and challenges",
      image: "/images/services/facility-specialized.jpg",
    },
  ];

  const benefits = [
    {
      title: "PREVENTIVE MAINTENANCE",
      description: "Our team of experienced professionals has the knowledge and skills to manage all aspects of your facility.",
      icon: "🛠️",
    },
    {
      title: "CUSTOMIZED SOLUTIONS",
      description: "At Innovision Limited, we offer a wide range of services designed to safeguard your business from various threats.",
      icon: "⚙️",
    },
    {
      title: "COST EFFECTIVE",
      description: "Our services are designed to save you money by reducing maintenance costs and increasing energy efficiency",
      icon: "💰",
    },
    {
      title: "RELIABILITY",
      description: "We are committed to providing reliable and efficient services, ensuring that your facility is always well-maintained and operational.",
      icon: "✅",
    },
    {
      title: "SUSTAINABILITY",
      description: "We prioritize sustainability in all our practices, helping you reduce your environmental impact and save money in the long run.",
      icon: "🌱",
    },
    {
      title: "IMPROVED EFFICIENCY",
      description: "By outsourcing your facility management recruitment to us, you can focus on your core business while we find the right candidate to do the job for you.",
      icon: "📈",
    },
  ];

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 80px;
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Facility Management</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl"
          >
            Integrated Facility
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Management Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-xl text-white/90"
          >
            Transforming Spaces, Enhancing Experiences
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl">
              Transforming Spaces,
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Enhancing Experiences</span>
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              Are you tired of dealing with the hassle and stress of managing your facility? Look no further than{" "}
              <span className="font-semibold text-[#EF2B2D]">Innovision Limited</span>, your one-stop solution for all your facility management needs. 
              With our comprehensive services and expert team, we ensure that your facility runs smoothly and efficiently, 
              allowing you to focus on your core business.
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-lg bg-white max-w-4xl w-full">
              <Image
                src="/images/clients-services/facilitymanagement1.png"
                alt="Professional Facility Management Solutions"
                width={280}
                height={226}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Single-Window Solution */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Simplify Facility Management with a
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Single-Window Solution</span>
            </h2>
          </motion.div>

          {/* Content with Images */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-lg border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <p className="mb-6 text-lg leading-relaxed text-white/90">
                  More vendors mean more contracts, multipartite coordination, and increased hassle. To bypass that, 
                  Innovision Limited offers a single-window solution, making facility management a fret-free task.
                </p>
                <p className="text-lg leading-relaxed text-white/90">
                  We are committed to providing integrated infrastructural and facility management services to corporates, 
                  industrial houses, and top-of-the-line brands. Our bespoke services are designed to suit your geography, 
                  business profile, and working culture, creating an ecosystem with the highest standards of operation at 
                  the best possible price.
                </p>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-center"
            >
              <div className="overflow-hidden rounded-lg border border-white/10 shadow-xl bg-black/50">
                <Image
                  src="/images/clients-services/facilitymanagement2.png"
                  alt="Single Window Integrated Solution"
                  width={280}
                  height={226}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Key Features Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[              { icon: "🎯", title: "Single Contract", desc: "One vendor, one contract for all services" },
              { icon: "⚙️", title: "Customized Solutions", desc: "Tailored to your business needs" },
              { icon: "✓", title: "Hassle-Free", desc: "Simplified coordination and management" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="font-semibold text-[#EF2B2D]">Facility Management Services</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              At Innovision Limited, we offer a wide range of facility management services tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                
                <div className="relative">
                  <div className={`mb-6 inline-flex rounded-lg bg-gradient-to-br ${service.color} p-4 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services with Tabs */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="font-semibold text-[#EF2B2D]">Core Services</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Comprehensive facility management solutions designed for excellence
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            {tabServices.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(index)}
                className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#EF2B2D] text-white shadow-md"
                    : "bg-white text-gray-700 shadow-sm hover:bg-gray-50"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-2"
          >
            {tabServices[activeTab].services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                className="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#EF2B2D] hover:shadow-md"
              >
                <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-[#EF2B2D]">{service.title}</h3>
                <p className="text-base leading-relaxed text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Why Choose <span className="font-semibold text-[#EF2B2D]">Innovision Limited</span>
              <span className="mt-2 block font-light">for Facility Management?</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">{benefit.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-[#EF2B2D]">{benefit.title}</h3>
                <p className="leading-relaxed text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EF2B2D] to-red-700 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Ready to <span className="font-semibold">Transform Your Facility?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Let us handle your facility management needs while you focus on growing your business
            </p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 inline-block rounded-lg bg-white px-12 py-4 text-lg font-semibold text-[#EF2B2D] shadow-xl transition-all hover:scale-105 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </>
  );
}
