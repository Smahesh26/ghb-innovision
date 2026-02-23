"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import CTA from "../../components/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillDevelopmentPage() {
  const benefits = [
    {
      title: "PREVENTIVE MAINTENANCE",
      description: "Our team of experienced professionals has the knowledge and skills to manage all aspects of your facility.",
      icon: "🛡️",
    },
    {
      title: "CUSTOMIZED SOLUTIONS",
      description: "At Innovision Limited, we offer a wide range of services designed to safeguard your business from various threats. Our services include:",
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
      icon: "✓",
    },
    {
      title: "SUSTAINABILITY",
      description: "We prioritize sustainability in all our practices, helping you reduce your environmental impact and save money in the long run.",
      icon: "🌱",
    },
    {
      title: "IMPROVED EFFICIENCY",
      description: "By outsourcing your facility management recruitment to us, you can focus on your core business while we find the right candidate to do the job for you.",
      icon: "📊",
    },
  ];

  const stats = [
    { value: "1Lakh+", label: "Candidates Trained" },
    { value: "18K+", label: "Candidates Placed" },
    { value: "25+", label: "Government Projects Undertaken" },
    { value: "70+", label: "Training Centres" },
  ];

  const sectors = [
    { name: "Agriculture", icon: "🌾" },
    { name: "Apparel", icon: "👔" },
    { name: "Automotive", icon: "🚗" },
    { name: "Beauty Wellness", icon: "💆" },
    { name: "Construction", icon: "🏗️" },
    { name: "Domestic Worker", icon: "🏠" },
    { name: "IT/ITES", icon: "💻" },
    { name: "Logistics", icon: "📦" },
    { name: "Retail", icon: "🛒" },
    { name: "Security", icon: "🔒" },
    { name: "Tourism", icon: "✈️" },
    { name: "Telecom", icon: "📡" },
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
            <span>Home / Skill Development</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl"
          >
            Skill
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Seeding the power of knowledge
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              <span className="font-semibold text-[#EF2B2D]">Seeding the Power</span> of Knowledge
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-lg border border-gray-200 bg-gray-50 p-12 shadow-sm"
          >
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                At Innovision Limited, we excel in skill development as a pivotal partner for various Central and State Government schemes. As an established training partner with NSDC and multiple sector skill councils, we deliver comprehensive training programs across diverse sectors.
              </p>
              
              <p>
                Our network of 70+ training centers spans the length and breadth of India, allowing us to provide specialized training in media, telecommunications, electronics, healthcare, beauty & wellness, construction, and furniture & fittings. This extensive reach and our adaptability in tailoring training programs to meet regional needs highlight our strengths.
              </p>
              
              <p>
                In Haryana, we operate PMKVY centers focusing on media, telecommunications, and electronics. Under the Pradhan Mantri Vishwakarma Yojana, we run more than 35 centers offering training in trades such as construction, beauty & wellness, and furniture. In Maharashtra, our Pradhan Mantri Gramin Kaushal Vikas Kendra centers specialize in media & entertainment, healthcare, and electronics.
              </p>
              
              <p>
                Additionally, we are involved in training under other initiatives including the National Apprenticeship Promotion Scheme (N.A.P.S), Sankalp Project, and PM-DAKSH Yojana, DDU-GKY, DVET. Our partnerships extend to Haryana Skill Development Mission, Paschim Banga Society for Skill Development, Uttar Pradesh Skill Development Mission, Chhattisgarh Skill Development Mission, Rajasthan Skill Development Corporation, and Bihar State Skill Development Society.
              </p>
              
              <p className="font-semibold text-gray-900">
                Our extensive network and diverse program offerings underscore our commitment to advancing skills and supporting workforce development across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 text-5xl font-bold text-[#EF2B2D]">{stat.value}</div>
                  <div className="text-lg font-semibold text-white">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Slider Section */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="font-semibold text-[#EF2B2D]">Trusted Partners</span>
            </h2>
          </motion.div>

          {/* Infinite Scrolling Logos */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            <div className="flex gap-16 overflow-hidden">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex shrink-0 items-center gap-16"
              >
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex shrink-0 items-center gap-16">
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/nsdc.png"
                        alt="NSDC Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/msde.png"
                        alt="MSDE Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/pmkvy.png"
                        alt="PMKVY Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/skillindia.png"
                        alt="Skill India Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/pm.png"
                        alt="PM Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/pradhanmantrikaushalkendra.png"
                        alt="Pradhan Mantri Kaushal Kendra"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/ddu-gky.png"
                        alt="DDU-GKY Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/naps.png"
                        alt="NAPS Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/sankalp.png"
                        alt="Sankalp Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-32 w-48 grayscale transition-all hover:grayscale-0">
                      <Image
                        src="/images/Skill Development/pm daksha.png"
                        alt="PM Daksha Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Why Choose <span className="font-semibold text-[#EF2B2D]">Innovision Limited?</span>
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
                className="group rounded-lg border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all hover:border-[#EF2B2D] hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-[#EF2B2D]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Making Job Ready For <span className="font-semibold text-[#EF2B2D]">Various Sectors</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group rounded-lg border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/0 to-[#EF2B2D]/0 transition-all duration-500 group-hover:from-[#EF2B2D]/10 group-hover:to-[#EF2B2D]/5" />
                
                <div className="relative">
                  <div className="mb-4 text-6xl transition-transform duration-500 group-hover:scale-110">{sector.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{sector.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      
      <motion.div
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
