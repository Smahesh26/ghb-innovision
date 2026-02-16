"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MannedPrivateSecurityPage() {
  const services = [
    {
      title: "Unarmed Security Services",
      description: "We offer highly trained security guards, supervisors, and officers, ensuring frontline safety for your assets and personnel. Our security guards are proficient in security protocols and emergency response, while supervisors manage day-to-day operations, ensuring coordination...",
      image: "/images/services/unarmed.jpg",
    },
    {
      title: "Armed Security Services",
      description: "Innovision Limited delivers top-tier armed security services with skilled, licensed personnel. Our trained gunmen are prepared to protect high-value assets and respond swiftly to critical situations, ensuring optimal safety through precision, expertise, and unwavering dedication.",
      image: "/images/services/armed forces.jpg",
    },
    {
      title: "Event Security",
      description: "We provide specialized event security through trained personnel and bouncers who excel in conflict de-escalation and physical protection. Our team ensures a safe, secure environment for all guests, maintaining order and preventing disruptions during events,...",
      image: "/images/services/eventsecurity.jpg",
    },
    {
      title: "Executive Protection",
      description: "Innovision Limited offers highly trained, licensed Personal Security Officers (PSOs) for executive protection. Our armed PSOs are equipped to handle high-risk environments, ensuring the safety of high-profile individuals and key assets, delivering personalized protection in...",
      image: "/images/services/executive prtotection.jpg",
    },
    {
      title: "Fire and Safety Services",
      description: "Our certified fire safety experts offer comprehensive risk assessments, implement prevention strategies, and provide emergency response training. Focused on safeguarding people and property, we help clients maintain compliance with safety regulations while minimizing fire risks...",
      image: "/images/services/firesafety.jpg",
    },
    {
      title: "Command & Control Center",
      description: "Innovision Limited's advanced Command & Control Center supports specialized security operations with skilled personnel and cutting-edge surveillance technology. Our team monitors live video feeds from connected CCTV systems, providing real-time situational awareness and quick response...",
      image: "/images/services/command control center.jpg",
    },
  ];

  const industries = [
    {
      name: "Logistics & E-Commerce",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      name: "Healthcare & Hospitals",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h6M9 13h6M9 17h6" />
        </svg>
      ),
    },
    {
      name: "Government & PSU'S",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M4 18h16M4 18V8M20 18V8M12 3l8 5H4l8-5zM7 18v-7h3v7M14 18v-7h3v7" />
        </svg>
      ),
    },
    {
      name: "Educational Institute",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2.21 2.686 4 6 4s6-1.79 6-4v-5" />
        </svg>
      ),
    },
    {
      name: "Retail",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
    },
    {
      name: "Banking & Finance",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 3h1a2 2 0 0 1 2 2v2M8 3H7a2 2 0 0 0-2 2v2M12 12h.01M8 12h.01M16 12h.01" />
        </svg>
      ),
    },
    {
      name: "Power & Energy",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      name: "RWA & Residential",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: "Manufacturing",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v3m0 0l-3 3m3-3l3 3M3 12h3m0 0l3-3m-3 3l3 3m9-3h3m0 0l-3-3m3 3l-3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "Travel & Tourism",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
    {
      name: "IT/ ITeS",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      name: "Telecom",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v4M16 2v4M4 9h16M4 9a2 2 0 01 2-2h12a2 2 0 012 2M4 9v10a2 2 0 002 2h12a2 2 0 002-2V9M9 16l1.5 1.5L15 13" />
        </svg>
      ),
    },
  ];

  const whyChoosePoints = [
    {
      title: "Unmatched Expertise and Experience",
      description: "With more than 18 years of expertise in the security industry, Innovision Limited has built a strong reputation for excellence. Our team consists of certified and highly trained professionals, specializing in risk evaluation, threat management, and protection strategies, ensuring comprehensive security for our clients.",
    },
    {
      title: "Commitment to Excellence and Reliability",
      description: "Excellence and reliability are the cornerstones of Innovision Limited. Our rigorous selection and training processes ensure that our security personnel rank among the best in the field. We uphold strict standards and protocols to deliver consistent, dependable services you can count on for safeguarding your business.",
    },
    {
      title: "Advanced Technology and Innovation",
      description: "Innovision Limited stays ahead of the game by integrating the most advanced security technologies into our services. Our offerings include high-definition CCTV, access control systems, and automated threat detection tools. By blending technology with our security services, we ensure greater efficiency and comprehensive coverage for all your security needs.",
    },
    {
      title: "Customized Security Plans",
      description: "We understand that each client has distinct security needs. At Innovision Limited, we collaborate with you to design tailored security plans that meet your specific objectives. Our customized approach ensures that you receive the most efficient and effective security solutions to safeguard your assets.",
    },
    {
      title: "Comprehensive Security Solutions",
      description: "At Innovision Limited, we provide diverse security services to protect your business from various threats. Our manned guarding offers 24/7 protection tailored to your needs. We also provide discreet escort guarding for sensitive situations and executive protection with personal security, secure transport, and risk assessments for top management.",
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
            <span>Home / Security</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            MANNED PRIVATE SECURITY SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-3xl text-lg text-white/80"
          >
            India&apos;s Most Preferred Security Services
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">
              Innovision Limited: India&apos;s Most Preferred Security Services
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Welcome to Innovision Limited, your trusted partner in providing top-notch security services. With years of experience and a team of highly trained professionals, we are dedicated to safeguarding your people, assets, and premises. We understand that security is paramount for the safety and success of your business. With increasing risks and evolving threats, having a reliable and professional security service is crucial. Innovision Limited offers top-tier security services tailored to meet your specific needs, ensuring peace of mind and protection for your assets, personnel, and property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">Our Services</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#EF2B2D]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <button className="mt-4 text-sm font-semibold text-[#EF2B2D] hover:underline">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">
              Why Choose Innovision Limited for Your Security Needs?
            </h2>
          </motion.div>

          <div className="space-y-12">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-[#EF2B2D] pl-6"
              >
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Cater */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">
              Businesses That We Cater
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:border-[#EF2B2D] hover:shadow-lg"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex flex-col items-center gap-3">
                  <div className="rounded-lg bg-[#EF2B2D]/10 p-3 text-[#EF2B2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EF2B2D] group-hover:text-white">
                    {industry.icon}
                  </div>
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-[#EF2B2D]">{industry.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PSARA License */}
      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Holding PSARA Licenses
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              As a licensed private security agency under the Private Security Agencies (Regulation) Act, 2005 (PSARA), we ensure compliance with the highest standards of professionalism and accountability. Our PSARA license is a testament to our commitment to providing exceptional security services and maintaining a strong reputation in the industry.
            </p>

            {/* Certifications Grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { src: "/images/certifications/CMMI Maturity level.jpg", alt: "CMMI Maturity Level", badge: "Level 3" },
                { src: "/images/certifications/ISO 9001.2015.jpg", alt: "ISO 9001:2015", badge: "Quality" },
                { src: "/images/certifications/ISO 10667.2011.jpg", alt: "ISO 10667:2011", badge: "Assessment" },
                { src: "/images/certifications/ISO 14001.2015.jpg", alt: "ISO 14001:2015", badge: "Environment" },
                { src: "/images/certifications/ISO 18788.2015.jpg", alt: "ISO 18788:2015", badge: "Security Ops" },
                { src: "/images/certifications/ISO 21001-2018.jpg", alt: "ISO 21001:2018", badge: "Education" },
                { src: "/images/certifications/ISO 27001.2022.jpg", alt: "ISO 27001:2022", badge: "InfoSec" },
                { src: "/images/certifications/ISO 28000-2007.png", alt: "ISO 28000:2007", badge: "Supply Chain" },
                { src: "/images/certifications/ISO 30409.2016.jpg", alt: "ISO 30409:2016", badge: "HR" },
                { src: "/images/certifications/ISO 45001.2018.jpg", alt: "ISO 45001:2018", badge: "OH&S" },
                { src: "/images/certifications/SA 8000.2014.jpg", alt: "SA 8000:2014", badge: "Social" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.alt}
                  initial={{ opacity: 0, y: 40, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative flex flex-col"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#EF2B2D]/40 via-[#EF2B2D]/10 to-transparent opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
                  
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#EF2B2D]/30 group-hover:shadow-[0_20px_60px_rgba(239,43,45,0.15)]">
                    
                    {/* Badge */}
                    <div className="absolute right-4 top-4 z-10">
                      <span className="rounded-full bg-gradient-to-r from-[#EF2B2D] to-[#d41f21] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        {cert.badge}
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                    
                    {/* Image Container */}
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        fill
                        className="object-contain p-2 drop-shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Title with Icon */}
                    <div className="relative mt-4 flex items-center justify-center gap-2 border-t border-gray-200/50 pt-4">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#EF2B2D]" />
                      <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-700 transition-colors group-hover:text-[#EF2B2D]">
                        {cert.alt}
                      </p>
                      <div className="h-1.5 w-1.5 rounded-full bg-[#EF2B2D]" />
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[#EF2B2D]/0 transition-all duration-500 group-hover:border-[#EF2B2D]/20" />
                    <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[#EF2B2D]/0 transition-all duration-500 group-hover:border-[#EF2B2D]/20" />
                  </div>

                  {/* Verified Badge */}
                  <div className="mt-3 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#EF2B2D]" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Certified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-white/80">
              We are ready to secure your business and people. Contact Innovision Limited today and let us tailor a comprehensive security solution that meets your unique needs.
            </p>
            <p className="text-lg text-white/60">
              Innovision Limited has a proven track record of providing exceptional security services to a diverse range of clients, from multinational corporations to government agencies. Our commitment to excellence and customer satisfaction has earned us the trust of industry leaders across various sectors.
            </p>
          </motion.div>

          {/* Client Logos Marquee */}
          <div className="relative mt-16 overflow-hidden">
            {/* Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#1a1a1d] via-[#1a1a1d]/80 to-transparent" />

            <div className="clients-marquee">
              {[
                { name: "DLF Building India", logo: "/images/clients-services/dlfbuildingindia.png" },
                { name: "DPS", logo: "/images/clients-services/dps.png" },
                { name: "Emaar", logo: "/images/clients-services/emaar.png" },
                { name: "Goenka", logo: "/images/clients-services/goenka.png" },
                { name: "Gracure", logo: "/images/clients-services/gracure.png" },
                { name: "Haryana Skill Development Mission", logo: "/images/clients-services/haryanaskilldevmission.png" },
                { name: "IIT Madras", logo: "/images/clients-services/iitmadras.png" },
                { name: "Maersk", logo: "/images/clients-services/maersk.png" },
                { name: "Nuvoco", logo: "/images/clients-services/nuvoco.png" },
                { name: "Orient Cement", logo: "/images/clients-services/orientcement.png" },
                { name: "Shree Cement", logo: "/images/clients-services/shreecement.png" },
                { name: "Synergy Steels", logo: "/images/clients-services/synergysteels.png" },
                { name: "TASEC", logo: "/images/clients-services/tasec.png" },
                { name: "36 Toyota", logo: "/images/clients-services/thirtysixtoyota.png" },
                { name: "Tower", logo: "/images/clients-services/tower.png" },
                { name: "Transworld", logo: "/images/clients-services/transworld.png" },
                { name: "UFlex", logo: "/images/clients-services/uflex.png" },
                { name: "Videocon", logo: "/images/clients-services/videocon.png" },
                { name: "Vista", logo: "/images/clients-services/vista.png" },
                { name: "Y-Axis", logo: "/images/clients-services/yaxis.png" },
              ].concat([
                { name: "DLF Building India", logo: "/images/clients-services/dlfbuildingindia.png" },
                { name: "DPS", logo: "/images/clients-services/dps.png" },
                { name: "Emaar", logo: "/images/clients-services/emaar.png" },
                { name: "Goenka", logo: "/images/clients-services/goenka.png" },
                { name: "Gracure", logo: "/images/clients-services/gracure.png" },
                { name: "Haryana Skill Development Mission", logo: "/images/clients-services/haryanaskilldevmission.png" },
                { name: "IIT Madras", logo: "/images/clients-services/iitmadras.png" },
                { name: "Maersk", logo: "/images/clients-services/maersk.png" },
                { name: "Nuvoco", logo: "/images/clients-services/nuvoco.png" },
                { name: "Orient Cement", logo: "/images/clients-services/orientcement.png" },
                { name: "Shree Cement", logo: "/images/clients-services/shreecement.png" },
                { name: "Synergy Steels", logo: "/images/clients-services/synergysteels.png" },
                { name: "TASEC", logo: "/images/clients-services/tasec.png" },
                { name: "36 Toyota", logo: "/images/clients-services/thirtysixtoyota.png" },
                { name: "Tower", logo: "/images/clients-services/tower.png" },
                { name: "Transworld", logo: "/images/clients-services/transworld.png" },
                { name: "UFlex", logo: "/images/clients-services/uflex.png" },
                { name: "Videocon", logo: "/images/clients-services/videocon.png" },
                { name: "Vista", logo: "/images/clients-services/vista.png" },
                { name: "Y-Axis", logo: "/images/clients-services/yaxis.png" },
              ]).map((client, index) => (
                <div key={`${client.name}-${index}`} className="client-logo-card">
                  <div className="relative h-32 w-64">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                      style={{ filter: 'brightness(0) saturate(100%) invert(1) brightness(1.2)' }}
                      sizes="256px"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .clients-marquee {
            display: flex;
            gap: 60px;
            width: max-content;
            animation: marquee-scroll 60s linear infinite;
          }

          section:hover .clients-marquee {
            animation-play-state: paused;
          }

          .client-logo-card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            transition: all 0.5s ease;
          }

          .client-logo-card:hover {
            background: rgba(255, 255, 255, 0.04);
            transform: translateY(-4px);
          }

          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
