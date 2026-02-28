"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";

export default function SkillDevelopmentProjectPage() {
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
          style={{ backgroundImage: "url('/all-banners/BannerServicesProject.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        <motion.div
          className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#EF2B2D]/12 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
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
            <span>Home / Skill Development / Project</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl"
          >
            Government
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Schemes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 max-w-3xl text-2xl font-normal text-white/90"
          >
            Undertaken by Innovision Limited
          </motion.p>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Programs</p>
            <h2 className="text-4xl font-medium leading-tight text-gray-900 sm:text-5xl">
              Government Schemes
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Undertaken By Innovision Limited</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#EF2B2D] to-transparent" />
          </motion.div>

          {/* Three Scheme Cards */}
          <div className="mb-24 grid gap-6 md:grid-cols-3">
            {[
              { name: "Recognition of Prior Learning", abbr: "RPL", num: "01" },
              { name: "Short Term Training", abbr: "STT", num: "02" },
              { name: "Corporate Social Responsibility", abbr: "CSR", num: "03" },
            ].map((scheme, index) => (
              <motion.div
                key={scheme.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200/70 bg-white p-8 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#EF2B2D] opacity-0 transition-all group-hover:opacity-100" />
                <div className="mb-6 text-8xl font-light text-gray-200 transition-all group-hover:text-[#EF2B2D]/10">{scheme.num}</div>
                <div className="mb-3 text-2xl font-semibold text-gray-900">{scheme.abbr}</div>
                <h3 className="text-base font-normal text-gray-600">{scheme.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* All Schemes Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {/* MSDE Introduction */}
            <div className="mx-auto max-w-4xl py-16 text-center">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Ministry of Skill Development</p>
              <h3 className="mb-6 text-3xl font-medium leading-tight text-gray-900 sm:text-4xl">
                Empower Your Future with
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Skill Certification from MSDE</span>
              </h3>
              <p className="mb-8 text-lg font-light leading-relaxed text-gray-600">
                The Ministry of Skill Development and Entrepreneurship (MSDE) has launched numerous Skill Certification Schemes aimed at enabling Indian youth to acquire industry-relevant skills. These certifications can significantly enhance your employment opportunities and ensure a better future.
              </p>
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* ========== RPL SECTION ========== */}
            <div className="space-y-16">
              <div className="text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Certification Program</p>
                <h3 className="text-3xl font-medium text-gray-900">
                  <span className="font-semibold">RPL</span> — Recognition of Prior Learning
                </h3>
                <div className="mx-auto mt-6 h-px w-16 bg-[#EF2B2D]" />
              </div>

              {/* RPL Description */}
              <div className="grid gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-medium text-gray-900">
                    What is <span className="font-semibold text-[#EF2B2D]">RPL?</span>
                  </h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    The Recognition Of Prior Learning (RPL) Program allows you to get certified for the skills and experience you already possess. Covering over 2,000 job roles aligned with the National Skills Qualifications Framework (NSQF), RPL helps you formalize your expertise and improve your job prospects.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-medium text-gray-900">
                    Our <span className="font-semibold text-[#EF2B2D]">Training Centers</span>
                  </h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    We at Innovision offer the RPL program at our six state-of-the-art Pradhan Mantri Kaushal Kendras (PMKK) across Haryana:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Gurgaon", "Faridabad", "Mewat", "Rewari", "Mahendergarh", "Palwal"].map((city) => (
                      <div key={city} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                        {city}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RPL Process */}
              <div className="bg-gradient-to-br from-gray-50 to-white py-16">
                <div className="mx-auto max-w-5xl text-center">
                  <h4 className="mb-4 text-2xl font-medium text-gray-900">
                    The <span className="font-semibold text-[#EF2B2D]">RPL Process</span>
                  </h4>
                  <p className="mb-12 text-base text-gray-600">
                    Our comprehensive 5-step certification process
                  </p>

                  <div className="grid gap-8 md:grid-cols-5">
                    {[
                      { num: "01", label: "Mobilization" },
                      { num: "02", label: "Counseling & Pre-Screening" },
                      { num: "03", label: "Orientation" },
                      { num: "04", label: "Final Assessment" },
                      { num: "05", label: "Certification, Grading, and Reward" },
                    ].map((step, index) => (
                      <motion.div
                        key={step.num}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative text-center"
                      >
                        <div className="mb-4 text-4xl font-light text-[#EF2B2D] transition-all group-hover:scale-110">{step.num}</div>
                        <div className="text-xs font-light leading-relaxed text-gray-600">{step.label}</div>
                        {index < 4 && (
                          <div className="absolute -right-4 top-8 hidden h-px w-8 bg-gradient-to-r from-[#EF2B2D] to-transparent md:block" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mx-auto max-w-3xl space-y-6">
                <h4 className="text-2xl font-light text-gray-900">
                  <span className="font-semibold text-[#EF2B2D]">Eligibility</span> Criteria
                </h4>
                <p className="text-base text-gray-600">To enroll in the RPL program, you must:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-base text-gray-600">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                    <span>Be of Indian nationality and meet the minimum age criteria for the relevant Qualification Pack (QP).</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-gray-600">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                    <span>Possess an Aadhaar Card (or alternate IDs like PAN or Voter ID for specific regions) and a bank account.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-gray-600">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                    <span>Meet the pre-screening criteria for your job role.</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose RPL */}
              <div className="grid gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-[#EF2B2D]">For Employers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Fast-track worker certification</span>
                    </li>
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Reduce training costs and downtime</span>
                    </li>
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Identify skill gaps efficiently</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-[#EF2B2D]">For Employees</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Identify and fill knowledge gaps</span>
                    </li>
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Meet job roles or qualification requirements</span>
                    </li>
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Encourage continuous skill and knowledge development</span>
                    </li>
                    <li className="flex items-start gap-3 text-base text-gray-600">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EF2B2D]" />
                      <span>Improve employment opportunities</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Discover Your Potential */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20 text-center"
              >
                <div className="mx-auto max-w-3xl px-6">
                  <h4 className="mb-6 text-3xl font-medium text-white">
                    Discover Your <span className="font-semibold text-[#EF2B2D]">Potential</span>
                  </h4>
                  <p className="mb-8 text-base leading-relaxed text-white/80">
                    RPL is about recognizing your existing knowledge and skills, regardless of how you acquired them. This process ensures you receive formal acknowledgment for your expertise, paving the way for better job opportunities and career growth.
                  </p>
                  
                  <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#EF2B2D]">Join Us at Innovision</p>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    Take the next step towards a brighter future. Join the RPL Program at Innovision's PMKK Centers and get the recognition you deserve.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ========== STT SECTION ========== */}
            <div className="space-y-16">
              <div className="text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Training Program</p>
                <h3 className="text-3xl font-medium text-gray-900">
                  <span className="font-semibold">STT</span> — Short Term Training
                </h3>
                <div className="mx-auto mt-6 h-px w-16 bg-[#EF2B2D]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-4xl space-y-6"
              >
                <h4 className="text-2xl font-medium text-gray-900">
                  Pradhan Mantri Kaushal Vikas Yojana <span className="font-semibold text-[#EF2B2D]">(PMKVY)</span>
                </h4>
                <p className="text-base leading-relaxed text-gray-600">
                  Short Term Training (STT) is a component of the Pradhan Mantri Kaushal Vikas Yojana (PMKVY), aimed at providing skill development to candidates in India, particularly targeting school and college dropouts as well as unemployed individuals aged 15-45. The training is delivered through PMKVY Training Centres (TCs) and focuses on enhancing employability by equipping participants with relevant skills as per the National Skills Qualification Framework (NSQF).
                </p>
              </motion.div>
            </div>

            {/* ========== CSR SECTION ========== */}
            <div className="space-y-16">
              <div className="text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Social Initiative</p>
                <h3 className="text-3xl font-medium text-gray-900">
                  <span className="font-semibold">CSR</span> — Corporate Social Responsibility
                </h3>
                <div className="mx-auto mt-6 h-px w-16 bg-[#EF2B2D]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-4xl space-y-6"
              >
                <h4 className="text-2xl font-medium text-gray-900">
                  Corporate Conscience & <span className="font-semibold text-[#EF2B2D]">Citizenship</span>
                </h4>
                <p className="text-base leading-relaxed text-gray-600">
                  Corporate Social Responsibility (CSR), also known as corporate conscience or corporate citizenship, is the integration of socially beneficial programs and practices into a corporation's business model and culture. CSR aims to increase long-term profits for online and offline businesses by enabling them to become more efficient and attract positive attention for their efforts.
                </p>
              </motion.div>

              {/* CSR Benefits */}
              <div className="bg-gradient-to-br from-gray-50 to-white py-16">
                <div className="mx-auto max-w-6xl">
                  <h4 className="mb-4 text-center text-2xl font-medium text-gray-900">
                    What Benefits Does <span className="font-semibold text-[#EF2B2D]">CSR Offer</span> to Businesses?
                  </h4>
                  <p className="mb-12 text-center text-base text-gray-600">
                    Key advantages of implementing CSR strategies
                  </p>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Prevent Financial Ramifications",
                        num: "01",
                        description: "Compliance with regulatory standards nationally and internationally through self-regulatory processes will prevent fines and lower legal expenses."
                      },
                      {
                        title: "Increase Employee Loyalty",
                        num: "02",
                        description: "Treating employees fairly and generously increases loyalty and supports ethical procurement practices, gaining support among fair trade advocates."
                      },
                      {
                        title: "Maintain A Positive Reputation",
                        num: "03",
                        description: "Demonstrated consciousness in various areas can garner publicity and provide tangible proof of conduct for company branding."
                      },
                      {
                        title: "Environmental Consciousness",
                        num: "04",
                        description: "Reducing waste, minimizing carbon footprint, and supporting environmental causes will boost your business's reputation among environmentally concerned clients."
                      },
                      {
                        title: "Social Concern",
                        num: "05",
                        description: "Donating to humanitarian causes shows concern for issues that consumers are increasingly aware of in our modern, interconnected world."
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group space-y-4"
                      >
                        <div className="text-5xl font-light text-gray-200 transition-all group-hover:text-[#EF2B2D]/20">{benefit.num}</div>
                        <h5 className="text-lg font-semibold text-gray-900">{benefit.title}</h5>
                        <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
