"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import CTA from "../../components/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OverseasRecruitmentPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="absolute h-2 w-2 rounded-full bg-[#EF2B2D]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
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
            <span>Home / Overseas Recruitment</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            OVERSEAS
            <span className="mt-2 block text-[#EF2B2D]">RECRUITMENT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Explore Global Opportunities
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-12 -top-12 h-64 w-64 bg-[#EF2B2D] opacity-5" />
            <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-gray-900 opacity-5" />
            
            <div className="relative border-8 border-gray-900 bg-white p-12 shadow-2xl lg:p-16">
              <h2 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">
                Explore Global Opportunities with <span className="text-[#EF2B2D]">Overseas Recruitment</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  We specialize in bridging the gap between global companies and India&apos;s skilled workforce. As a licensed RA agency, we are authorized to deploy Indian talent across the globe, providing seamless recruitment solutions for international employers.
                </p>
                <p>
                  With a robust PAN-India network, we deliver highly skilled professionals tailored to meet the diverse needs of businesses worldwide. Our unwavering commitment to excellence and proven track record position us as a trusted leader in global workforce solutions.
                </p>
              </div>
              
              {/* Image placeholder */}
              <div className="mt-12 border-4 border-gray-900">
                <div className="relative h-[400px] w-full bg-gray-100">
                  <Image
                    src="/images/overseas-recruitment1.jpg"
                    alt="Global Opportunities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border-4 border-white bg-gradient-to-br from-[#EF2B2D] to-red-700 p-12 text-white shadow-2xl"
            >
              <div className="absolute -right-8 -top-8 h-40 w-40 border-8 border-white opacity-10" />
              
              <div className="mb-6 text-6xl">🎯</div>
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                At Innovision International, we aim to connect India&apos;s talent with global opportunities, empowering individuals and driving economic growth through skilled international placements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border-4 border-white bg-gradient-to-br from-gray-800 to-gray-700 p-12 text-white shadow-2xl"
            >
              <div className="absolute -left-8 -bottom-8 h-40 w-40 border-8 border-[#EF2B2D] opacity-20" />
              
              <div className="mb-6 text-6xl">🌍</div>
              <h2 className="mb-6 text-3xl font-bold">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be a trusted leader in international recruitment, breaking barriers to create a world where talent thrives beyond borders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Unique <span className="text-[#EF2B2D]">Approach</span>
            </h2>
            <div className="mx-auto mt-6 h-2 w-32 bg-[#EF2B2D]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative border-4 border-gray-900 bg-gradient-to-br from-gray-50 to-white p-12 shadow-2xl"
          >
            <div className="absolute -left-4 -top-4 h-24 w-24 border-8 border-[#EF2B2D]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-8 border-gray-900" />
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At Innovision International, we distinguish ourselves through our comprehensive approach to international recruitment. As an authorized Recruiting Agent from India, we hold an <strong className="text-[#EF2B2D]">RA License (Delhi/Company/5815365/2023)</strong> certified under section 11 of the Emigration Act 1983 by the Ministry of External Affairs, Government of India.
              </p>
              <p>
                Additionally, we collaborate with the National Skills Development Corporation (NSDC), the Ministry of Rural Development (MORD), as well as central and state governments, NGOs, and large private organizations to support the national goal of creating a skilled workforce.
              </p>
              <p>
                Our experienced team meticulously screens and shortlists candidates, conducting preliminary interviews to ensure the best fit for our clients&apos; needs. We take pride in our well-established office, staffed by highly qualified personnel dedicated to meeting the rigorous recruitment standards of our international clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Choose <span className="text-[#EF2B2D]">Innovision International?</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📜",
                title: "Licensed and Authorized",
                description: "Innovision International is licensed and authorized by the government to send skilled workers abroad, ensuring compliance with legal and regulatory requirements.",
              },
              {
                icon: "🌐",
                title: "Extensive Network",
                description: "With a vast network of skilled workers in India and international clients, we have the resources and capabilities to fulfill high-volume recruitment needs efficiently.",
              },
              {
                icon: "⚖️",
                title: "Compliance and Legality",
                description: "We operate with full compliance and legality, ensuring peace of mind for our clients and candidates alike.",
              },
              {
                icon: "🎯",
                title: "Comprehensive Services",
                description: "From initial screening and shortlisting to conducting interviews and facilitating placements, we offer end-to-end recruitment solutions tailored to the needs of our clients.",
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                description: "At Innovision International, we are committed to providing personalized and dedicated support to our clients throughout the recruitment process, ensuring a seamless experience.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border-4 border-gray-900 bg-white p-8 shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="absolute -right-2 -top-2 h-16 w-16 border-4 border-[#EF2B2D] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                
                <div className="mb-4 text-6xl">{benefit.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-4 border-[#EF2B2D] bg-gradient-to-br from-white to-gray-50 p-12 text-center shadow-2xl lg:p-16"
          >
            <div className="absolute -left-8 -top-8 h-32 w-32 border-8 border-gray-900 opacity-10" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 border-8 border-[#EF2B2D] opacity-20" />
            
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              Streamline Your Overseas Recruitment Process
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              Let us connect you with skilled professionals worldwide customized to meet your business requirements.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="border-4 border-gray-900 bg-[#EF2B2D] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-red-700 hover:shadow-2xl">
                Download Brochure
              </button>
              <a
                href="/contact"
                className="border-4 border-gray-900 bg-gray-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-gray-800 hover:shadow-2xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Recruitment <span className="text-[#EF2B2D]">Process</span>
            </h2>
            <div className="mx-auto mt-6 h-2 w-32 bg-[#EF2B2D]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative border-4 border-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl"
          >
            <div className="absolute -left-4 -top-4 h-20 w-20 border-8 border-[#EF2B2D]" />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-8 border-white opacity-20" />
            
            <p className="text-xl leading-relaxed lg:text-2xl">
              We are ready to secure your business and people. Contact <span className="font-bold text-[#EF2B2D]">Innovision Limited</span> today and let us tailor a comprehensive security solution that meets your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
