"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingPage() {
  const trainingTypes = [
    {
      title: "Drill, PT, Weapon training",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
    },
    {
      title: "Physical security management",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
        </svg>
      ),
    },
    {
      title: "General Awareness",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
    {
      title: "Disaster management",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Basic computer skills",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      title: "Fire fighting & First aid",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM12 14l-3 3h6l-3-3z" />
        </svg>
      ),
    },
    {
      title: "Legal aspects of security",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
    {
      title: "Security Operations and equipment",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
    },
    {
      title: "Bombs and improvised explosive devices",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
    },
    {
      title: "Soft skills and English speaking",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
        </svg>
      ),
    },
  ];

  const trainingMethods = [
    {
      title: "Presentation Method",
      description: "Structured classroom-style presentations with expert instructors delivering comprehensive security concepts and protocols.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      title: "Audio-Visual Training",
      description: "Interactive multimedia content including videos, animations, and simulations for enhanced learning engagement.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 7l-7 5 7 5V7zM14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
    },
    {
      title: "Hands-on-Training",
      description: "Practical field exercises and real-world scenario training to build muscle memory and operational confidence.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
    {
      title: "Blended Training",
      description: "Combination of online modules and in-person sessions for flexible, comprehensive skill development.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7l8-3 8 3-8 3-8-3zM4 7v10l8 3M20 7v10l-8 3" />
        </svg>
      ),
    },
    {
      title: "Action Learning",
      description: "Learning through live problem-solving exercises and group discussions based on actual security challenges.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  const professionalTraining = [
    {
      title: "Fire Prevention and Fire Fighting",
      description: "Our training program educates security personnel on the causes of fire, types of fire, and operation of various fire extinguishers and equipment. By the end of the session, trainees are equipped to handle fire emergencies, understand their duties in a firefighting party, and take precautions to prevent fires.",
    },
    {
      title: "First Aid and Evacuation Procedure",
      description: "We provide elementary knowledge of serious accidents and illnesses, and train personnel to give first aid in cases of burn injuries, gas victims, dehydration, cardiac attacks, and electric shock. Trainees learn to evacuate victims for specialized treatment and understand the contents and usage of first aid boxes.",
    },
    {
      title: "Access and Traffic Control",
      description: "Our training prepares security personnel to handle visitors, government personnel, contractors, employees, and others on the premises. They learn to control and account for keys, control incoming and outgoing materials, and maintain records.",
    },
    {
      title: "Handling Threat of Bomb/Explosive",
      description: "We provide special training to take precautionary steps in case of a bomb threat, reduce damage, obtain assistance from government agencies, lead employees to safety, and assist the police bomb disposal squad.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scroll-margin-top: 80px;
        }
      `}</style>
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/all-banners/Banner Services(Training) 1919X848.jpg')" }}
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
            <span>Home / Security Services / Training</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl"
          >
            Security
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Training</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 max-w-3xl text-lg text-white/90"
          >
            Professional Security Manpower Grooming and Training
          </motion.p>
        </div>
      </section>

      {/* Training Rationale */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 text-gray-900 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Training <span className="font-semibold text-[#EF2B2D]">Rationale</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              Innovision has standardized the recruitment and training criteria for their personnel in order to maintain high quality and consistency in the services and experience they provide to their customers. There are strict guidelines that must be adhered to in order to ensure the training of the best candidates.
            </motion.p>
          </motion.div>

          {/* Benefits Diagram */}
          <div className="mt-20">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Primary Benefits - Solid Circles */}
              {[
                {
                  title: "Enhances Skills, Knowledge & Competency",
                  icon: "📚",
                },
                {
                  title: "Provides confident & challenge ready employees",
                  icon: "💪",
                },
                {
                  title: "Prepares employees for new thresholds",
                  icon: "🎯",
                },
                {
                  title: "Planned & systematic activity",
                  icon: "📋",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group flex flex-col items-center"
                >
                  <div className="relative flex h-56 w-56 items-center justify-center">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EF2B2D]/20 to-[#EF2B2D]/10 blur-xl transition-all duration-500 group-hover:scale-110 group-hover:from-[#EF2B2D]/30 group-hover:to-[#EF2B2D]/20" />
                    
                    {/* Main circle */}
                    <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[5px] border-[#EF2B2D] bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_rgba(239,43,45,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(239,43,45,0.35)]">
                      {/* Inner gradient overlay */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#EF2B2D]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-3 px-8 text-center">
                        <span className="text-4xl transition-transform duration-500 group-hover:scale-125">{benefit.icon}</span>
                        <p className="text-sm font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#EF2B2D]">
                          {benefit.title}
                        </p>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#EF2B2D] shadow-lg transition-all duration-300 group-hover:scale-150" />
                      <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-[#EF2B2D] shadow-lg transition-all duration-300 group-hover:scale-150" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Secondary Benefits - Dashed Circles */}
            <div className="mt-16 flex justify-center">
              <div className="grid gap-12 md:grid-cols-3">
                {[
                  {
                    title: "Improved level of client satisfaction",
                    icon: "⭐",
                  },
                  {
                    title: "Closes gap between current and future performance",
                    icon: "📈",
                  },
                  {
                    title: "Systematic modification of behaviour",
                    icon: "🔄",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.5 + index * 0.1,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative flex h-56 w-56 items-center justify-center">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EF2B2D]/10 to-[#EF2B2D]/5 blur-lg transition-all duration-500 group-hover:scale-110 group-hover:from-[#EF2B2D]/20 group-hover:to-[#EF2B2D]/10" />
                      
                      {/* Main dashed circle */}
                      <div 
                        className="relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_rgba(239,43,45,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(239,43,45,0.25)]"
                        style={{
                          border: '4px dashed #EF2B2D',
                          borderSpacing: '8px',
                        }}
                      >
                        {/* Inner gradient overlay */}
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#EF2B2D]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center gap-3 px-8 text-center">
                          <span className="text-4xl transition-transform duration-500 group-hover:scale-125">{benefit.icon}</span>
                          <p className="text-sm font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#EF2B2D]">
                            {benefit.title}
                          </p>
                        </div>

                        {/* Decorative corner accents */}
                        <div className="absolute -right-2 top-1/4 h-2 w-2 rounded-full bg-[#EF2B2D] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100" />
                        <div className="absolute -left-2 bottom-1/4 h-2 w-2 rounded-full bg-[#EF2B2D] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Various Training Conducted */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Various Training <span className="font-semibold text-[#EF2B2D]">Conducted</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {trainingTypes.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex flex-col items-center gap-4">
                  <div className="rounded-lg bg-[#EF2B2D]/10 p-4 text-[#EF2B2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EF2B2D] group-hover:text-white">
                    {training.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#EF2B2D]">
                    {training.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods */}
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
              Training <span className="font-semibold text-[#EF2B2D]">Methods</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              We employ diverse, proven methodologies to ensure comprehensive skill development
            </motion.p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trainingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-[#EF2B2D]/10 p-4 text-[#EF2B2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EF2B2D] group-hover:text-white">
                    {method.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#EF2B2D]">
                    {method.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovision Training Overview */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              Innovision Training for Manpower: <span className="font-semibold text-[#EF2B2D]">Elevate Your Security Standards</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80"
            >
              At Innovision Limited, we are dedicated to enhancing the standards of service in the security industry through comprehensive and innovative training programs for security personnel. Our training modules are designed to equip security guards and officers with world-class skills in threat detection, protection, combat, fire-fighting, materials control & accounting, and soft skills such as courtesy, positive attitude, and loyalty towards clients.
            </motion.p>
          </motion.div>

          {/* Training Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl backdrop-blur-sm"
          >
            <div className="relative h-[450px] w-full bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/images/clients-services/ser.JPG"
                alt="Security Training"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white drop-shadow-lg"
                >
                  Professional Security Training Excellence
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="mt-3 text-lg text-white/90 drop-shadow-md"
                >
                  World-class security training programs designed for excellence
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Training Programs */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Professional Training <span className="font-semibold text-[#EF2B2D]">Programs</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              Before being placed on assignment, all Innovision security personnel undergo a comprehensive training program
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {professionalTraining.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#EF2B2D]/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-2xl font-bold text-[#EF2B2D] transition-colors group-hover:bg-[#EF2B2D] group-hover:text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-[#EF2B2D]">
                      {program.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manpower Grooming and Training Section */}
      <section className="relative bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Manpower Grooming and Training
              <span className="mt-2 block text-3xl font-semibold text-[#EF2B2D]">Security Excellence</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300"
            >
              Comprehensive training programs designed to develop highly skilled and professional security personnel
            </motion.p>
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Circular Training Flow */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mx-auto flex h-[600px] w-full max-w-[600px] items-center justify-center"
              >
                {/* Center Circle */}
                <div className="absolute flex h-48 w-48 items-center justify-center rounded-full border-4 border-[#EF2B2D] bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white">Manpower</h3>
                    <h3 className="text-xl font-bold text-white">Grooming</h3>
                    <h3 className="text-xl font-bold text-[#EF2B2D]">& Training</h3>
                    <p className="mt-1 text-xs text-gray-400">: Security</p>
                  </div>
                </div>

                {/* Orbiting Training Types */}
                {[
                  {
                    title: "REFRESHER TRAINING",
                    details: "Gap analysis and Training, Mock Drills",
                    color: "from-purple-600 to-purple-800",
                    position: "top",
                    delay: 0.2,
                  },
                  {
                    title: "FIRST AID TRAINING",
                    details: "Approaching an emergency situation, Positions & Transport techniques, Reanimation, Severe injuries, Light injuries",
                    color: "from-green-600 to-green-800",
                    position: "top-right",
                    delay: 0.4,
                  },
                  {
                    title: "ON-THE-JOB TRAINING",
                    details: "Post Management, Job responsibilities, Code of Conduct & behavior, Visitor, Vendor and key control, Fire drills, Emergency procedures, Evacuation Bomb threats, Hoax calls, First aid, Hardwear movement",
                    color: "from-yellow-600 to-yellow-700",
                    position: "bottom-right",
                    delay: 0.6,
                  },
                  {
                    title: "FIRE EVACUATION & FIRE DRILLS",
                    details: "Identification of different types of fires in the workplace, Understanding of basics of fire prevention guidelines and Use of Fire extinguisher",
                    color: "from-pink-600 to-red-600",
                    position: "bottom",
                    delay: 0.8,
                  },
                  {
                    title: "PRE-DEPLOYMENT TRAINING",
                    details: "As per the training prescribed in PSARA Act (2005)",
                    color: "from-gray-600 to-gray-700",
                    position: "left",
                    delay: 1.0,
                  },
                ].map((training, index) => {
                  const positions = {
                    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-8",
                    "top-right": "top-8 right-0 translate-x-8",
                    "bottom-right": "bottom-16 right-0 translate-x-4",
                    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-8",
                    left: "top-1/2 left-0 -translate-y-1/2 -translate-x-8",
                  };

                  return (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: training.delay,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`group absolute ${positions[training.position as keyof typeof positions]} z-10`}
                >
                      <div className="relative w-44">
                        <div className={`rounded-xl border-2 border-white bg-gradient-to-br ${training.color} p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl`}>
                          <h4 className="mb-2 text-xs font-bold uppercase leading-tight">{training.title}</h4>
                          <p className="text-[10px] leading-relaxed text-white/90">{training.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting Lines/Arcs - Visual representation */}
                <svg className="absolute inset-0 h-full w-full" style={{ transform: "rotate(-90deg)" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle
                      key={i}
                      cx="50%"
                      cy="50%"
                      r="200"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${80 + i * 20} ${320 - i * 20}`}
                      strokeDashoffset={i * 72}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.15,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF2B2D" />
                      <stop offset="50%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>

            {/* Much More Section */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="mb-8 text-5xl font-bold text-[#EF2B2D]">MUCH MORE</h3>
                <div className="space-y-4">
                  {[
                    "Drill, PT, Weapon Training",
                    "Physical security management",
                    "General awareness",
                    "Disaster management",
                    "Fire fighting & First aid",
                    "Basic computer skills",
                    "Bombs & Improved explosive devices",
                    "Legal aspects of security",
                    "Security operations and equipment",
                    "Soft skills & english speaking",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.08,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                      viewport={{ once: true, margin: "-30px" }}
                      className="group flex items-center gap-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#EF2B2D]/50">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-200 transition-colors group-hover:text-white">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-base leading-relaxed text-gray-300">
                  Our comprehensive training program ensures that every security professional is equipped with the knowledge, 
                  skills, and competencies required to excel in their role. From basic security protocols to advanced tactical 
                  training, we prepare our personnel for any situation they may encounter.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact showFootprints={false} />
      </motion.div>

      <Footer />
    </>
  );
}
