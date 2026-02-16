"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";

export default function SkillDevelopmentPlacementPage() {
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
            <span>Home / Skill Development / Placement</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            <span className="text-[#EF2B2D]">PLACEMENT</span>
            <span className="mt-2 block">PLAN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Connecting Skilled Talent with Opportunities
          </motion.p>
        </div>
      </section>

      {/* Placement Plan Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Comprehensive <span className="text-[#EF2B2D]">Placement Plan</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-32 bg-[#EF2B2D]" />
          </motion.div>

          {/* Placement Steps */}
          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Assessment and Evaluation:",
                points: [
                  "Initial assessment of skills, qualifications, work experience, interests, and career goals.",
                  "Identify barriers to employment and personal challenges.",
                ],
              },
              {
                title: "Resume Development and Job Search Tools:",
                points: [
                  "Assist in resume development and updating.",
                  "Provide guidance on cover letters, job applications, and online job search platforms.",
                ],
              },
              {
                title: "Skills Enhancement and Training:",
                points: [
                  "Identify skills gaps and offer training programs.",
                  "Enhance skills relevant to career goals and job market demands.",
                ],
              },
              {
                title: "Job Matching and Referral:",
                points: [
                  "Match skills with job opportunities.",
                  "Utilize networking, job boards, and referrals for placements.",
                ],
              },
              {
                title: "Interview Preparation:",
                points: [
                  "Offer guidance, practice interviews, and support.",
                  "Conduct mock interviews for confidence building.",
                ],
              },
              {
                title: "Follow-Up and Support:",
                points: [
                  "Maintain communication for ongoing support.",
                  "Provide feedback, emotional support, and assistance.",
                ],
              },
              {
                title: "Job Placement and Onboarding:",
                points: [
                  "Facilitate job placement and onboarding process.",
                  "Ensure smooth transition into new roles.",
                ],
              },
              {
                title: "Monitoring and Follow-Up:",
                points: [
                  "Track progress post-placement for job retention.",
                  "Address issues and provide support as needed.",
                ],
              },
              {
                title: "Evaluation and Feedback:",
                points: [
                  "Evaluate effectiveness based on outcomes.",
                  "Use feedback to enhance future plans.",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border-4 border-gray-900 bg-white p-8 shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="absolute -right-2 -top-2 h-12 w-12 border-4 border-[#EF2B2D] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                
                <h3 className="mb-4 text-xl font-bold text-[#EF2B2D]">{step.title}</h3>
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 flex h-2 w-2 shrink-0 bg-gray-900" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Strategy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative border-4 border-[#EF2B2D] bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl">
              <div className="absolute -left-4 -top-4 h-20 w-20 border-8 border-white/20" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-8 border-white/20" />
              
              <h2 className="mb-4 text-4xl font-bold">
                Strategy to Place the <span className="text-[#EF2B2D]">Trained Candidate</span>
              </h2>
            </div>
          </motion.div>

          {/* Strategy Steps */}
          <div className="mb-20 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Market Research and Analysis:",
                points: [
                  "Understand job market trends and demand.",
                  "Identify industries with high demand for skills.",
                ],
              },
              {
                title: "Partnerships and Networking:",
                points: [
                  "Establish partnerships for job placement.",
                  "Attend events to connect with employers.",
                ],
              },
              {
                title: "Customized Placement Approach:",
                points: [
                  "Tailor placement efforts to candidate preferences.",
                  "Develop personalized job search strategies.",
                ],
              },
              {
                title: "Job Matching and Referrals:",
                points: [
                  "Utilize databases and referrals for job matches.",
                  "Connect candidates with suitable opportunities.",
                ],
              },
              {
                title: "Follow-Up and Support:",
                points: [
                  "Maintain communication and provide assistance.",
                  "Support candidates through the job search process.",
                ],
              },
              {
                title: "Interview Preparation and Coaching:",
                points: [
                  "Offer workshops, mock interviews, and coaching.",
                  "Provide guidance on addressing interview questions.",
                ],
              },
              {
                title: "Tracking and Evaluation:",
                points: [
                  "Keep records of placement activities and outcomes.",
                  "Track metrics for evaluation and improvement.",
                ],
              },
              {
                title: "Continuous Improvement:",
                points: [
                  "Review and update strategy based on feedback.",
                  "Enhance candidate preparation and employer engagement.",
                ],
              },
              {
                title: "Resume and Portfolio Development:",
                points: [
                  "Assist in creating professional resumes and portfolios.",
                  "Optimize online profiles for visibility.",
                ],
              },
              {
                title: "Employer Engagement and Outreach:",
                points: [
                  "Engage with employers to promote candidates.",
                  "Showcase success stories to demonstrate value.",
                ],
              },
            ].map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative border-4 border-gray-900 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl"
              >
                <div className="absolute -left-2 -top-2 h-8 w-8 border-4 border-[#EF2B2D]" />
                
                <h3 className="mb-4 text-lg font-bold text-gray-900">{strategy.title}</h3>
                <ul className="space-y-3">
                  {strategy.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#EF2B2D]">•</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
