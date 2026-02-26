"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillDevelopmentTrainingPage() {
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
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        <motion.div
          className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#EF2B2D]/12 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-[#EF2B2D]/10 blur-3xl"
          animate={{ x: [0, -14, 0], y: [0, 10, 0] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 sm:pt-32 lg:pt-28 pb-10 sm:pb-8 lg:pb-0 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Skill Development / Skill Training</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 text-5xl font-light sm:text-6xl lg:text-7xl"
          >
            Skill Development
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Training</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Empowering India’s Workforce
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Introduction with Image */}
          <div className="mb-32 grid gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_14px_40px_rgba(17,24,39,0.10)]">
                <Image
                  src="/images/skill-training1.png"
                  alt="Skill Development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#EF2B2D]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-center lg:col-span-3"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">About Our Training</p>
              <h2 className="mb-8 text-4xl font-light leading-tight text-gray-900">
                Innovision: Empowering
                <span className="mt-2 block font-semibold text-[#EF2B2D]">India's Workforce</span>
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Skills and knowledge are the driving forces of economic growth and social development for every country. At Innovision, our employment-oriented skill training programs have been developed in line with the current skill sets demanded by the industry. Our proven team of skilled professionals, known for their competence and integrity, impart comprehensive training and share their vast and rich experience in the classroom.
              </p>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#EF2B2D] to-transparent" />
            </motion.div>
          </div>

          {/* Training Approach */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Process</p>
              <h2 className="text-4xl font-light text-gray-900 sm:text-5xl">
                Training <span className="font-semibold text-[#EF2B2D]">Approach</span>
              </h2>
              <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#EF2B2D] to-transparent" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-16 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-300 to-transparent lg:block" />
              
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { num: "01", label: "Mobilization" },
                  { num: "02", label: "Counselling" },
                  { num: "03", label: "Training" },
                  { num: "04", label: "Assessment" },
                  { num: "05", label: "On The Job Training" },
                  { num: "06", label: "Placements" },
                ].map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:border-[#EF2B2D]/50 hover:shadow-md"
                  >
                    <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 bg-white" />
                      <div className="relative text-2xl font-light text-[#EF2B2D] transition-all group-hover:scale-110">{step.num}</div>
                    </div>
                    <h3 className="text-sm font-light uppercase tracking-wider text-gray-900">{step.label}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32 bg-gradient-to-br from-gray-50 to-white py-16 text-center"
          >
            <div className="mx-auto max-w-3xl px-6">
              <p className="text-base leading-relaxed text-gray-900">
                Ready to secure your business and people? Contact <span className="font-semibold text-[#EF2B2D]">Innovision Limited</span> today and let us tailor a comprehensive security solution that meets your unique needs.
              </p>
            </div>
          </motion.div>

          {/* State-of-the-Art Facilities */}
          <div className="mb-32 grid gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-center lg:col-span-2"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Facilities</p>
              <h2 className="mb-8 text-3xl font-light text-gray-900">
                State-of-the-Art
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Training Centers</span>
              </h2>
              <p className="mb-8 text-base text-gray-600">
                At Innovision, we believe in providing the best learning environment for our students. Our training centers are equipped with:
              </p>
              <ul className="space-y-3">
                {[
                  "Smart classrooms and advanced teaching methodologies",
                  "Highly competitive trainers",
                  "Fully equipped labs",
                  "Five-star infrastructure",
                  "Hostel and food facilities for residential centers",
                  "Prime locations for easy access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-gray-600">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-3"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_14px_40px_rgba(17,24,39,0.10)]">
                <Image
                  src="/images/skill-training2.jpg"
                  alt="Training Facilities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 h-1 w-32 bg-[#EF2B2D]" />
              </div>
            </motion.div>
          </div>

          {/* Comprehensive Training Delivery */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">What We Offer</p>
              <h2 className="text-4xl font-light text-gray-900">
                Comprehensive Training <span className="font-semibold text-[#EF2B2D]">Delivery</span>
              </h2>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Industry visits",
                "Guest lectures",
                "Personality development, interview skills, and motivational sessions",
                "Curriculum covering theory, practical, IT, and soft skills",
                "Textbooks and faculty guides",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -3 }}
                  className="group space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#EF2B2D]/50 hover:shadow-md"
                >
                  <div className="text-6xl font-light text-gray-200 transition-all group-hover:text-[#EF2B2D]/20">0{index + 1}</div>
                  <p className="text-base text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Rigorous Assessment */}
          <div className="mb-32 grid gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_14px_40px_rgba(17,24,39,0.10)]">
                <Image
                  src="/images/skill-training3.jpeg"
                  alt="Certification"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#EF2B2D]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-center lg:col-span-3"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Quality Assurance</p>
              <h2 className="mb-8 text-3xl font-light text-gray-900">
                Rigorous Assessment and
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Certification</span>
              </h2>
              <p className="mb-8 text-base text-gray-600">
                We follow a robust assessment process to ensure the quality of our training:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-base text-gray-600">
                  <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                  <span><span className="font-semibold text-gray-900">Internal assessments:</span> Two fortnightly tests after 15 and 45 days, and two monthly tests after 30 and 60 days of training</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600">
                  <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                  <span><span className="font-semibold text-gray-900">On-the-Job Training</span> (OJT)</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600">
                  <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                  <span><span className="font-semibold text-gray-900">Certification</span> upon successful completion of the program</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* The Innovision Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20 text-center"
          >
            <div className="mx-auto max-w-4xl px-6">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Mission</p>
              <h2 className="mb-12 text-4xl font-light text-white">
                The Innovision <span className="font-semibold text-[#EF2B2D]">Advantage</span>
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-white/80">
                <p>
                  Innovision began its journey with the mission to provide skilled training to the Indian youth. Apart from the training, we facilitate the placement of our students in leading organizations, helping them shape their careers and contribute to the growth of the nation.
                </p>
                <p>
                  Our highly educated team of skilled professionals impart meaningful training with industry-driven skill sets, ensuring the grooming of our students.
                </p>
                <p>
                  By the end of the course, our students are ready and capable of joining respectable positions in any firm, ready to make a difference.
                </p>
              </div>
              <div className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact showFootprints={false} />
      </motion.div>
      <Footer />
    </>
  );
}
