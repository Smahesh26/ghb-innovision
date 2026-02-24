"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OverseasRecruitmentPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-36 sm:pt-32 lg:pt-28 pb-10 sm:pb-8 lg:pb-0 text-center text-white">
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

      {/* Introduction Section */}
      <section id="content" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/services-home/Overseas Recruitment.png"
                  alt="Global Workforce"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Global Workforce</p>
              <h2 className="mt-6 text-4xl font-light text-gray-900">
                Explore Global Opportunities with
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Overseas Recruitment</span>
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-gray-600">
                  We specialize in bridging the gap between global companies and India&apos;s skilled workforce. 
                  As a licensed RA agency, we are authorized to deploy Indian talent across the globe, 
                  providing seamless recruitment solutions for international employers.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  With a robust PAN-India network, we deliver highly skilled professionals tailored to meet 
                  the diverse needs of businesses worldwide. Our unwavering commitment to excellence and 
                  proven track record position us as a trusted leader in global workforce solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg border border-[#EF2B2D]/30 bg-gradient-to-br from-[#EF2B2D]/10 to-transparent p-12 text-white"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Mission</p>
              <h2 className="mb-6 text-2xl font-light">Connecting India&apos;s Talent with Global Opportunities</h2>
              <p className="text-sm leading-relaxed text-gray-300">
                At Innovision International, we aim to connect India&apos;s talent with global opportunities, empowering individuals and driving economic growth through skilled international placements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg border border-white/10 bg-white/5 p-12 text-white"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Vision</p>
              <h2 className="mb-6 text-2xl font-light">Breaking Barriers, Building Futures</h2>
              <p className="text-sm leading-relaxed text-gray-300">
                To be a trusted leader in international recruitment, breaking barriers to create a world where talent thrives beyond borders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">What Sets Us Apart</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Our Unique <span className="font-semibold text-[#EF2B2D]">Approach</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-12"
          >
            <div className="space-y-6 text-base leading-relaxed text-gray-600">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">The Advantage</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Why Choose <span className="font-semibold text-[#EF2B2D]">Innovision International?</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Licensed and Authorized",
                description: "Innovision International is licensed and authorized by the government to send skilled workers abroad, ensuring compliance with legal and regulatory requirements.",
              },
              {
                title: "Extensive Network",
                description: "With a vast network of skilled workers in India and international clients, we have the resources and capabilities to fulfill high-volume recruitment needs efficiently.",
              },
              {
                title: "Compliance and Legality",
                description: "We operate with strict compliance and legality, ensuring peace of mind for our clients and candidates alike.",
              },
              {
                title: "Comprehensive Services",
                description: "From initial screening and shortlisting to conducting interviews and facilitating placements, we offer end-to-end recruitment solutions tailored to the needs of our clients.",
              },
              {
                title: "Dedicated Support",
                description: "At Innovision International, we are committed to providing personalized and dedicated support to our clients throughout the recruitment process, ensuring a seamless experience.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#EF2B2D] hover:shadow-lg"
              >
                <h3 className="mb-4 text-base font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Get Started</p>
            <h2 className="text-4xl font-light text-white">
              Streamline Your <span className="font-semibold text-[#EF2B2D]">Overseas Recruitment Process</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80">
              Let us connect you with skilled professionals worldwide customized to meet your business requirements.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded border border-[#EF2B2D] bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-[#EF2B2D]"
              >
                Download Brochure
              </motion.button>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded border border-white/30 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Ready to Help</p>
            <p className="text-xl leading-relaxed text-gray-600">
              We are ready to secure your business and people. Contact <span className="font-semibold text-[#EF2B2D]">Innovision Limited</span> today and let us tailor a comprehensive recruitment solution that meets your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </>
  );
}
