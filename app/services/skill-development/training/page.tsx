"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";

export default function SkillDevelopmentTrainingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="absolute h-px w-full bg-white"
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Skill Development / Skill Training</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            SKILL DEVELOPMENT
            <span className="mt-2 block text-[#EF2B2D]">TRAINING</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Empowering India&apos;s Workforce
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Introduction with Image */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border-4 border-gray-900 shadow-2xl"
            >
              <div className="relative h-[500px] w-full bg-gray-100">
                <img
                  src="/images/skill-training1.png"
                  alt="Skill Development"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative border-4 border-gray-900 bg-gradient-to-br from-white to-gray-50 p-12 shadow-2xl"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
              
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Innovision: Empowering <span className="text-[#EF2B2D]">India&apos;s Workforce</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Skills and knowledge are the driving forces of economic growth and social development for every country. At Innovision, our employment-oriented skill training programs have been developed in line with the current skill sets demanded by the industry. Our proven team of skilled professionals, known for their competence and integrity, impart comprehensive training and share their vast and rich experience in the classroom.
              </p>
            </motion.div>
          </div>

          {/* Training Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Training <span className="text-[#EF2B2D]">Approach</span>
            </h2>
            <p className="mb-12 text-center text-xl text-gray-700">
              The training process at Innovision involves the following steps:
            </p>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {[
                { num: "01", label: "MOBILIZATION" },
                { num: "02", label: "COUNSELLING" },
                { num: "03", label: "TRAINING" },
                { num: "04", label: "ASSESSMENT" },
                { num: "05", label: "ON THE JOB TRAINING" },
                { num: "06", label: "PLACEMENTS" },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative border-4 border-gray-900 bg-white p-6 text-center shadow-xl"
                >
                  <div className="mb-4 text-5xl font-bold text-[#EF2B2D]">{step.num}</div>
                  <div className="text-sm font-bold text-gray-900">{step.label}</div>
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 border-4 border-[#EF2B2D]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-20 overflow-hidden border-4 border-[#EF2B2D] bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl"
          >
            <div className="absolute -left-8 -top-8 h-32 w-32 border-8 border-white/10" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 border-8 border-white/10" />
            
            <p className="text-2xl font-light leading-relaxed">
              Ready to secure your business and people? Contact <span className="font-bold text-[#EF2B2D]">Innovision Limited</span> today and let us tailor a comprehensive security solution that meets your unique needs.
            </p>
          </motion.div>

          {/* State-of-the-Art Facilities */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative border-4 border-gray-900 bg-white p-12 shadow-2xl"
            >
              <div className="absolute -left-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
              
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                State-of-the-Art <span className="text-[#EF2B2D]">Training Facilities</span>
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                At Innovision, we believe in providing the best learning environment for our students. Our training centers are equipped with:
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Smart classrooms and advanced teaching methodologies</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Highly competitive trainers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Fully equipped labs</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Five-star infrastructure</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Hostel and food facilities for residential centers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                  <span>Prime locations for easy access</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border-4 border-gray-900 shadow-2xl"
            >
              <div className="relative h-full min-h-[500px] bg-gray-100">
                <img
                  src="/images/skill-training2.jpg"
                  alt="Training Facilities"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Comprehensive Training Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-20 border-4 border-gray-900 bg-gradient-to-br from-gray-50 to-white p-12 shadow-2xl"
          >
            <div className="absolute -right-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
            
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Comprehensive Training <span className="text-[#EF2B2D]">Delivery</span>
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Industry visits",
                "Guest lectures",
                "Personality development, interview skills, and motivational sessions",
                "Curriculum covering theory, practical, IT, and soft skills",
                "Textbooks and faculty guides",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 border-4 border-gray-900 bg-white p-6 shadow-lg"
                >
                  <span className="text-3xl text-[#EF2B2D]">✓</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Rigorous Assessment */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border-4 border-gray-900 shadow-2xl"
            >
              <div className="relative h-[500px] w-full bg-gray-100">
                <img
                  src="/images/skill-training3.jpeg"
                  alt="Certification"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative border-4 border-[#EF2B2D] bg-white p-12 shadow-2xl"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 border-8 border-gray-900" />
              
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Rigorous Assessment and <span className="text-[#EF2B2D]">Certification</span>
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                We follow a robust assessment process to ensure the quality of our training:
              </p>
              
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="flex h-2 w-2 shrink-0 bg-[#EF2B2D] mt-3" />
                  <span><strong>Internal assessments:</strong> Two fortnightly tests after 15 and 45 days, and two monthly tests after 30 and 60 days of training</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-2 w-2 shrink-0 bg-[#EF2B2D] mt-3" />
                  <span><strong>On-the-Job Training (OJT)</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-2 w-2 shrink-0 bg-[#EF2B2D] mt-3" />
                  <span><strong>Certification</strong> upon successful completion of the program</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* The Innovision Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative border-4 border-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl"
          >
            <div className="absolute -left-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
            <div className="absolute -right-4 -bottom-4 h-20 w-20 border-8 border-[#EF2B2D]" />
            
            <h2 className="mb-8 text-4xl font-bold">
              The Innovision <span className="text-[#EF2B2D]">Advantage</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Innovision began its journey with the mission to provide skilled training to the Indian youth. Apart from the training, we facilitate the placement of our students in leading organizations, helping them shape their careers and contribute to the growth of the nation.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Our highly educated team of skilled professionals impart meaningful training with industry-driven skill sets, ensuring the grooming of our students.
            </p>
            <p className="text-lg leading-relaxed">
              By the end of the course, our students are ready and capable of joining respectable positions in any firm, ready to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
