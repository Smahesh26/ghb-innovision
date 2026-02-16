"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import CTA from "../../../components/CTA";
import { motion } from "framer-motion";

export default function SkillDevelopmentProjectPage() {
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
            <span>Home / Skill Development / Project</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            GOVERNMENT
            <span className="mt-2 block text-[#EF2B2D]">SCHEMES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Government Schemes <span className="text-[#EF2B2D]">Undertaken By</span>
            </h2>
            <h3 className="text-3xl font-bold text-[#EF2B2D]">Innovision Limited</h3>
            <div className="mx-auto mt-6 h-1 w-32 bg-[#EF2B2D]" />
          </motion.div>

          {/* Three Scheme Cards */}
          <div className="mb-20 grid gap-8 md:grid-cols-3">
            {[
              { name: "Recognition of Prior Learning", abbr: "RPL", icon: "🎓", color: "from-gray-800 to-gray-700" },
              { name: "Short Term Training", abbr: "STT", icon: "⏱️", color: "from-gray-700 to-gray-600" },
              { name: "Corporate Social Responsibility", abbr: "CSR", icon: "🤝", color: "from-gray-600 to-gray-500" },
            ].map((scheme, index) => (
              <motion.div
                key={scheme.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border-4 border-gray-900 bg-white shadow-xl transition-all hover:shadow-2xl"
              >
                <div className={`bg-gradient-to-br ${scheme.color} p-8 text-center text-white`}>
                  <div className="mb-4 text-7xl">{scheme.icon}</div>
                  <div className="text-4xl font-bold">{scheme.abbr}</div>
                </div>
                <div className="border-t-4 border-[#EF2B2D] bg-white p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{scheme.name}</h3>
                </div>
                <div className="absolute -bottom-2 -right-2 h-12 w-12 border-4 border-[#EF2B2D] opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          {/* All Schemes Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* MSDE Introduction */}
            <div className="relative border-4 border-gray-900 bg-gradient-to-br from-gray-50 to-white p-12 shadow-2xl">
              <div className="absolute -left-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-8 border-[#EF2B2D]" />
              
              <h3 className="mb-6 text-center text-3xl font-bold text-gray-900">
                Empower Your Future with <span className="text-[#EF2B2D]">Skill Certification from MSDE</span>
              </h3>
              <p className="mb-4 text-center text-xl font-semibold text-gray-700">
                Unlock Industry-Relevant Skills and Secure a Better Livelihood
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                The Ministry of Skill Development and Entrepreneurship (MSDE) has launched numerous Skill Certification Schemes aimed at enabling Indian youth to acquire industry-relevant skills. These certifications can significantly enhance your employment opportunities and ensure a better future.
              </p>
            </div>

            {/* ========== RPL SECTION ========== */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t-4 border-gray-300" />
                <div className="flex items-center gap-4 border-4 border-gray-900 bg-gradient-to-br from-gray-800 to-gray-700 px-8 py-4 shadow-xl">
                  <span className="text-5xl">🎓</span>
                  <h3 className="text-3xl font-bold text-white">RPL - Recognition of Prior Learning</h3>
                </div>
                <div className="flex-1 border-t-4 border-gray-300" />
              </div>

              {/* RPL Description */}
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden border-4 border-gray-900 bg-white p-8 shadow-xl"
                >
                  <div className="absolute -right-3 -top-3 h-16 w-16 border-4 border-[#EF2B2D]" />
                  <h3 className="mb-6 text-2xl font-bold text-[#EF2B2D]">Recognition of Prior Learning (RPL)</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Do You Already Possess Valuable Skills And Experience? The Recognition Of Prior Learning (RPL) Program Allows You To Get Certified For What You Know. Covering Over 2000 Job Roles Aligned With The National Skills Qualifications Framework (NSQF), RPL Helps You Formalize Your Expertise And Improve Your Job Prospects.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden border-4 border-gray-900 bg-gradient-to-br from-[#EF2B2D] to-red-600 p-8 text-white shadow-xl"
                >
                  <div className="absolute -left-3 -top-3 h-16 w-16 border-4 border-white" />
                  <h3 className="mb-6 text-2xl font-bold">Our Training Centers</h3>
                  <p className="mb-4 text-lg leading-relaxed">
                    We at Innovision are proud to offer the RPL program at our six state-of-the-art Pradhan Mantri Kaushal Kendras (PMKK) across Haryana, located in:
                  </p>
                  <ul className="space-y-2 text-lg">
                    {["Gurgaon", "Faridabad", "Mewat", "Rewari", "Mahendergarh", "Palwal"].map((city) => (
                      <li key={city} className="flex items-center gap-3">
                        <span className="h-2 w-2 bg-white" />
                        {city}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-lg">
                    These centers provide the perfect environment to enhance your skills and secure certification.
                  </p>
                </motion.div>
              </div>

              {/* RPL Process */}
              <div className="relative border-4 border-gray-900 bg-gray-900 p-12 shadow-2xl">
                <h3 className="mb-12 text-center text-3xl font-bold text-white">
                  The <span className="text-[#EF2B2D]">RPL Process</span>
                </h3>
                <p className="mb-12 text-center text-lg text-gray-300">
                  Our Comprehensive 5-Step Process Ensures You Receive The Certification You Deserve
                </p>

                <div className="grid gap-6 md:grid-cols-5">
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
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative border-4 border-[#EF2B2D] bg-white p-6 text-center"
                    >
                      <div className="mb-4 text-5xl font-bold text-[#EF2B2D]">{step.num}</div>
                      <div className="text-sm font-semibold text-gray-900">{step.label}</div>
                      {index < 4 && (
                        <div className="absolute -right-8 top-1/2 hidden h-1 w-8 bg-[#EF2B2D] md:block" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="relative overflow-hidden border-4 border-gray-900 bg-gradient-to-br from-white to-gray-50 p-12 shadow-2xl">
                <div className="absolute -right-6 -top-6 h-24 w-24 border-8 border-[#EF2B2D] opacity-20" />
                <h3 className="mb-8 text-3xl font-bold text-gray-900">
                  <span className="text-[#EF2B2D]">Eligibility</span> Criteria
                </h3>
                <p className="mb-6 text-lg text-gray-700">To enroll in the RPL program, you must:</p>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-4">
                    <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                    <span>Be of Indian nationality and meet the minimum age criteria for the relevant Qualification Pack (QP).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                    <span>Possess an Aadhaar Card (or alternate IDs like PAN or Voter ID for specific regions) and a bank account.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 flex h-3 w-3 shrink-0 bg-[#EF2B2D]" />
                    <span>Meet the pre-screening criteria for your job role.</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose RPL */}
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-4 border-gray-900 bg-white p-8 shadow-xl"
                >
                  <h3 className="mb-6 text-2xl font-bold text-[#EF2B2D]">FOR EMPLOYERS</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Fast-track worker certification.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Reduce training costs and downtime.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Identify skill gaps efficiently.</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-4 border-gray-900 bg-white p-8 shadow-xl"
                >
                  <h3 className="mb-6 text-2xl font-bold text-[#EF2B2D]">FOR EMPLOYEES</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Identify and fill knowledge gaps.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Meet job roles or qualification requirements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Encourage continuous skill and knowledge development.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <span>Improve employment opportunities.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Discover Your Potential */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden border-4 border-[#EF2B2D] bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl"
              >
                <div className="absolute -left-8 -top-8 h-32 w-32 border-8 border-white/10" />
                <div className="absolute -bottom-8 -right-8 h-32 w-32 border-8 border-white/10" />
                
                <h3 className="mb-6 text-3xl font-bold">
                  DISCOVER YOUR <span className="text-[#EF2B2D]">POTENTIAL</span>
                </h3>
                <p className="mb-8 text-lg leading-relaxed">
                  RPL is about recognizing your existing knowledge and skills, regardless of how you acquired them. This process ensures you receive formal acknowledgment for your expertise, paving the way for better job opportunities and career growth.
                </p>
                
                <div className="border-t-4 border-[#EF2B2D] pt-8">
                  <h4 className="mb-4 text-2xl font-bold text-[#EF2B2D]">Join Us at Innovision</h4>
                  <p className="text-lg leading-relaxed">
                    Take The Next Step Towards A Brighter Future. Join The RPL Program At Innovision's PMKK Centers And Get The Recognition You Deserve. Empower Your Skills, Enhance Your Career, And Unlock New Opportunities.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ========== STT SECTION ========== */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t-4 border-gray-300" />
                <div className="flex items-center gap-4 border-4 border-gray-900 bg-gradient-to-br from-gray-700 to-gray-600 px-8 py-4 shadow-xl">
                  <span className="text-5xl">⏱️</span>
                  <h3 className="text-3xl font-bold text-white">STT - Short Term Training</h3>
                </div>
                <div className="flex-1 border-t-4 border-gray-300" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative border-4 border-gray-900 bg-gradient-to-br from-white to-gray-50 p-12 shadow-2xl"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 border-8 border-[#EF2B2D]" />
                
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center border-4 border-gray-900 bg-gradient-to-br from-gray-700 to-gray-600 text-4xl font-bold text-white shadow-xl">
                    STT
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Short Term <span className="text-[#EF2B2D]">Training</span>
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Short Term Training (STT) is a component of the Pradhan Mantri Kaushal Vikas Yojana (PMKVY), aimed at providing skill development to candidates in India, particularly targeting school and college dropouts as well as unemployed individuals aged 15-45. The training is delivered through PMKVY Training Centres (TCs) and focuses on enhancing employability by equipping participants with relevant skills as per the National Skills Qualification Framework (NSQF).
                </p>
              </motion.div>
            </div>

            {/* ========== CSR SECTION ========== */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t-4 border-gray-300" />
                <div className="flex items-center gap-4 border-4 border-gray-900 bg-gradient-to-br from-gray-600 to-gray-500 px-8 py-4 shadow-xl">
                  <span className="text-5xl">🤝</span>
                  <h3 className="text-3xl font-bold text-white">CSR - Corporate Social Responsibility</h3>
                </div>
                <div className="flex-1 border-t-4 border-gray-300" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative border-4 border-gray-900 bg-white p-12 shadow-2xl"
              >
                <div className="absolute -left-4 -top-4 h-24 w-24 border-8 border-[#EF2B2D]" />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 border-4 border-gray-900" />
                
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center border-4 border-gray-900 bg-gradient-to-br from-gray-600 to-gray-500 text-4xl font-bold text-white shadow-xl">
                    CSR
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Corporate Social <span className="text-[#EF2B2D]">Responsibility</span>
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">Corporate Conscience & Citizenship</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Corporate Social Responsibility (CSR), also known as corporate conscience or corporate citizenship, is the integration of socially beneficial programs and practices into a corporation's business model and culture. CSR aims to increase long-term profits for online and offline businesses by enabling them to become more efficient and attract positive attention for their efforts.
                </p>
              </motion.div>

              {/* CSR Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative border-4 border-[#EF2B2D] bg-gradient-to-br from-gray-900 to-gray-800 p-12 shadow-2xl"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 border-8 border-white/20" />
                
                <h3 className="mb-6 text-center text-3xl font-bold text-white">
                  What Benefits Does <span className="text-[#EF2B2D]">CSR Offer</span> to Businesses?
                </h3>
                <p className="mb-12 text-center text-lg text-gray-300">
                  Both ecommerce and brick-and-mortar businesses stand to benefit from the implementation of CSR strategies. Some activities that fall under the umbrella of CSR, with their corresponding benefits:
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Prevent Financial Ramifications",
                      icon: "⚖️",
                      description: "Compliance With The Spirit And Letter Of The Law — Both Nationally And Internationally — Through Self-Regulatory Processes Will Prevent Fines, Put Your Business \"Low On Regulators' Radar Screens,\" And Lower Legal Expenses."
                    },
                    {
                      title: "Increase Employee Loyalty",
                      icon: "🤝",
                      description: "Treating Your Employees Fairly And Generously Is A Part Of Corporate Social Responsibility. By Providing Good Jobs And Encouraging High Professional And Moral Standards, You Increase Employee Loyalty, And By Procuring Only Those Overseas Products Produced At Factories Where Workers Were Treated Ethically, You Gain Support Among \"Fair Trade\" Advocates."
                    },
                    {
                      title: "Maintain A Positive Reputation",
                      icon: "⭐",
                      description: "Demonstrated Consciousness In A Variety Of Areas Can Garner Publicity And Give A Business Tangible Proof Of Their Conduct, Which Can Be Proudly Displayed On A Company Website."
                    },
                    {
                      title: "Environmental Consciousness",
                      icon: "🌍",
                      description: "Reducing Waste, Recycling, Minimizing Carbon Footprint, And Other Best Practices Can. Using Or Producing Only Sustainable Products, Lowering Energy Usage, And Supporting Environmental Causes Will Boost A Business's \"Green Reputation\" Among Environmentally Concerned Clients."
                    },
                    {
                      title: "Social Concern",
                      icon: "❤️",
                      description: "Donating To Humanitarian Causes That Fight Persistent Poverty, Help The Victims Of Epidemics Like AIDS Or Ebola, Or Assist Those Displaced By Hurricanes Or Earthquakes Shows Concern For Issues That Consumers Are More And More Aware Of In Our Modern, Interconnected World."
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden border-4 border-white/20 bg-white p-8 shadow-xl transition-all hover:border-[#EF2B2D] hover:shadow-2xl"
                    >
                      <div className="absolute -right-4 -top-4 h-16 w-16 border-4 border-[#EF2B2D] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      
                      <div className="mb-4 text-5xl">{benefit.icon}</div>
                      <h4 className="mb-4 text-xl font-bold text-[#EF2B2D]">{benefit.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-700">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
