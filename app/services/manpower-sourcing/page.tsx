"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ManpowerSourcingPage() {
  const services = [
    {
      title: "Recruitment Solutions",
      description: "At Innovision Limited, we specialize in offering tailored recruitment solutions that span from entry-level positions to senior executive roles. Our deep understanding of diverse industries and job markets enables us to meet the unique HR needs of our clients effectively. Whether you're looking for fresh talent or seasoned professionals, our recruitment strategies ensure you get the right fit for your organization.",
    },
    {
      title: "Executive Search",
      description: "Finding the right leaders for your organization is crucial for success. Our Executive Search service is designed to identify and attract top-tier executives who align with your company's culture and values. We undertake specific selection assignments, meticulously understanding job specifications and organizational attributes to ensure the perfect match for your leadership roles.",
    },
    {
      title: "Headhunting",
      description: "Backed by industry experts, Innovision Limited excels in headhunting the best talent available. Our team has the expertise to identify and convince top professionals to join your organization. We leverage our extensive network and industry insights to attract exceptional talent that can drive your business forward solutions.",
    },
    {
      title: "Turnkey Solutions",
      description: "For clients with large-scale recruitment needs, Innovision Limited offers Turnkey Solutions. We manage the entire recruitment process, from sourcing to onboarding, ensuring a hassle-free experience for our clients. Our turnkey approach is designed to handle bulk hiring efficiently, saving you time and resources while delivering quality candidates.",
    },
    {
      title: "Temporary Staffing",
      description: "Innovision Limited provides temporary staffing solutions to meet the fluctuating manpower needs of businesses. We offer contractual staff for short-term projects or seasonal demands. During the contract period, we manage all HR, administrative, and regulatory compliance for temporary staff, allowing you to focus on your core business operations.",
    },
    {
      title: "Payroll Management",
      description: "Managing payroll can be complex and time-consuming. With Innovision Limited's Payroll Management services, we take pre-identified candidates by our clients on our payroll and handle all HR, administrative, and regulatory compliance. Our comprehensive payroll solutions cover all components as per the State/Central Government Labour Act, ensuring accuracy and compliance.",
    },
  ];

  const benefits = [
    {
      title: "Expert Professionals",
      description: "Our team of experienced professionals has the knowledge and skills to manage all aspects of your manpower needs.",
    },
    {
      title: "Customized Solutions",
      description: "At Innovision Limited, we offer a wide range of services designed to safeguard your business from various threats.",
    },
    {
      title: "Cost Effective",
      description: "Our services are designed to save you money by reducing maintenance costs and increasing energy efficiency.",
    },
    {
      title: "Reliability",
      description: "We are committed to providing reliable and efficient services, ensuring that your facility is always well-maintained and operational.",
    },
    {
      title: "Sustainability",
      description: "We prioritize sustainability in all our practices, helping you reduce your environmental impact and save money in the long run.",
    },
    {
      title: "Improved Efficiency",
      description: "By outsourcing your facility management recruitment to us, you can focus on your core business while we find the right candidate to do the job for you.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Manpower</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            MANPOWER SOURCING
            <span className="mt-2 block text-[#EF2B2D]">& PAYROLL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl text-2xl font-light text-white/90"
          >
            Your Trusted Partner for Manpower Sourcing & HR Solutions
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">About Us</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Innovision Limited: Your Trusted Partner
              <span className="mt-2 block font-semibold text-[#EF2B2D]">For Manpower Sourcing & HR Solutions</span>
            </h2>
            <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-8 text-left">
              <p className="text-base leading-relaxed text-gray-600">
                Innovision Limited is your premier destination for comprehensive manpower sourcing and HR solutions. 
                With our extensive experience and dedication to excellence, we cater to a wide range of HR requirements, 
                providing seamless and efficient recruitment solutions for businesses within India and abroad. 
                Discover how Innovision Limited can help you find the best talent and streamline your HR processes.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { number: "500+", label: "Successful Placements" },
              { number: "200+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-lg border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mb-2 text-5xl font-light text-[#EF2B2D]">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">What We Offer</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Our <span className="font-semibold text-[#EF2B2D]">Services</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600">
              Comprehensive HR solutions tailored to your business needs
            </p>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group space-y-4"
              >
                <div className="text-6xl font-light text-gray-200 transition-colors duration-300 group-hover:text-[#EF2B2D]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">The Advantage</p>
            <h2 className="mt-6 text-4xl font-light text-white">
              Why Choose <span className="font-semibold text-[#EF2B2D]">Innovision Limited?</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#EF2B2D]"
              >
                <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-[#EF2B2D]">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Get Started</p>
            <h2 className="text-4xl font-light text-white">
              Ready to Optimize Your <span className="font-semibold text-[#EF2B2D]">HR Processes?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80">
              Looking to optimize your HR processes and attract top talent? Partner with Innovision Limited for 
              unmatched manpower sourcing and HR solutions. Get in touch with us today to discover how we can meet your business needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded border border-[#EF2B2D] bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-[#EF2B2D]"
              >
                Contact Us Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <motion.div
        id="contact"
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
