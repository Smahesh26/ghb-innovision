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
      <section className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/all-banners/Banner ServicesPlacement.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        <motion.div
          className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#EF2B2D]/12 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-[#EF2B2D]/10 blur-3xl"
          animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
          transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
        />

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

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 sm:pt-32 lg:pt-28 pb-10 sm:pb-8 lg:pb-0 text-center text-white">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <a href="#content" className="group inline-flex flex-col items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-px bg-gradient-to-b from-[#EF2B2D] to-transparent"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Placement Plan Section */}
      <section id="content" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Approach</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Comprehensive <span className="font-semibold text-[#EF2B2D]">Placement Plan</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
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
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className="group space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#EF2B2D]/60 hover:shadow-md"
              >
                <div className="text-6xl font-light text-gray-200 transition-colors duration-300 group-hover:text-[#EF2B2D]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Strategy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20 text-center shadow-[0_22px_45px_rgba(17,24,39,0.2)]"
          >
            <div className="mx-auto max-w-4xl px-6">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Strategy</p>
              <h2 className="text-4xl font-light text-white">
                Strategy to Place the <span className="font-semibold text-[#EF2B2D]">Trained Candidate</span>
              </h2>
              <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#EF2B2D]/60 hover:shadow-[0_14px_35px_rgba(17,24,39,0.12)]"
              >
                <h3 className="mb-4 text-base font-semibold text-gray-900">{strategy.title}</h3>
                <ul className="space-y-3">
                  {strategy.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
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
