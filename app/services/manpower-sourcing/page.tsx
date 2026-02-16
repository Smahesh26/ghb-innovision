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
      icon: "👥",
      gradient: "from-gray-700 to-gray-500",
    },
    {
      title: "Executive Search",
      description: "Finding the right leaders for your organization is crucial for success. Our Executive Search service is designed to identify and attract top-tier executives who align with your company's culture and values. We undertake specific selection assignments, meticulously understanding job specifications and organizational attributes to ensure the perfect match for your leadership roles.",
      icon: "🎯",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "Headhunting",
      description: "Backed by industry experts, Innovision Limited excels in headhunting the best talent available. Our team has the expertise to identify and convince top professionals to join your organization. We leverage our extensive network and industry insights to attract exceptional talent that can drive your business forward solutions.",
      icon: "🔍",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Turnkey Solutions",
      description: "For clients with large-scale recruitment needs, Innovision Limited offers Turnkey Solutions. We manage the entire recruitment process, from sourcing to onboarding, ensuring a hassle-free experience for our clients. Our turnkey approach is designed to handle bulk hiring efficiently, saving you time and resources while delivering quality candidates.",
      icon: "🔑",
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Temporary Staffing",
      description: "Innovision Limited provides temporary staffing solutions to meet the fluctuating manpower needs of businesses. We offer contractual staff for short-term projects or seasonal demands. During the contract period, we manage all HR, administrative, and regulatory compliance for temporary staff, allowing you to focus on your core business operations.",
      icon: "⏱️",
      gradient: "from-gray-600 to-gray-400",
    },
    {
      title: "Payroll Management",
      description: "Managing payroll can be complex and time-consuming. With Innovision Limited's Payroll Management services, we take pre-identified candidates by our clients on our payroll and handle all HR, administrative, and regulatory compliance. Our comprehensive payroll solutions cover all components as per the State/Central Government Labour Act, ensuring accuracy and compliance.",
      icon: "💰",
      gradient: "from-gray-800 to-gray-600",
    },
  ];

  const benefits = [
    {
      title: "EXPERT PROFESSIONALS",
      description: "Our team of experienced professionals has the knowledge and skills to manage all aspects of your manpower needs.",
      icon: "🛠️",
    },
    {
      title: "CUSTOMIZED SOLUTIONS",
      description: "At Innovision Limited, we offer a wide range of services designed to safeguard your business from various threats.",
      icon: "⚙️",
    },
    {
      title: "COST EFFECTIVE",
      description: "Our services are designed to save you money by reducing maintenance costs and increasing energy efficiency.",
      icon: "💵",
    },
    {
      title: "RELIABILITY",
      description: "We are committed to providing reliable and efficient services, ensuring that your facility is always well-maintained and operational.",
      icon: "✅",
    },
    {
      title: "SUSTAINABILITY",
      description: "We prioritize sustainability in all our practices, helping you reduce your environmental impact and save money in the long run.",
      icon: "🌱",
    },
    {
      title: "IMPROVED EFFICIENCY",
      description: "By outsourcing your facility management recruitment to us, you can focus on your core business while we find the right candidate to do the job for you.",
      icon: "📈",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
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
            className="mt-6 max-w-3xl text-xl text-white/90"
          >
            Your Trusted Partner for Manpower Sourcing & HR Solutions
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 text-white">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gray-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
              Innovision Limited: Your Trusted Partner
              <span className="mt-2 block text-[#EF2B2D]">For Manpower Sourcing & HR Solutions</span>
            </h2>
            <div className="mx-auto max-w-5xl border-l-4 border-[#EF2B2D] bg-white/5 p-8 text-left backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-200">
                Innovision Limited Is Your Premier Destination For Comprehensive Manpower Sourcing And HR Solutions. 
                With Our Extensive Experience and Dedication To Excellence, We Cater To A Wide Range Of HR Requirements, 
                Providing Seamless And Efficient Recruitment Solutions For Businesses Within India And Abroad. 
                Discover How Innovision Limited Can Help You Find The Best Talent And Streamline Your HR Processes.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { number: "500+", label: "Successful Placements", icon: "🎯" },
              { number: "200+", label: "Happy Clients", icon: "😊" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl">{stat.icon}</div>
                <div className="mb-2 text-5xl font-bold text-[#EF2B2D]">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">Our Services</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Comprehensive HR solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon/Number */}
                <div className="flex-shrink-0">
                  <div className={`flex h-48 w-48 items-center justify-center border-4 border-gray-900 bg-gradient-to-br ${service.gradient} shadow-2xl`}>
                    <div className="text-center">
                      <div className="text-6xl">{service.icon}</div>
                      <div className="mt-4 text-4xl font-bold text-white">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 border-4 border-gray-300 bg-white p-8 shadow-lg">
                  <h3 className="mb-4 text-3xl font-bold text-[#EF2B2D]">{service.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 text-white">
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-gray-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold sm:text-5xl">
              Why Choose
              <span className="mt-2 block text-[#EF2B2D]">Innovision Limited?</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border-2 border-white/20 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#EF2B2D]"
              >
                {/* Diagonal stripe effect */}
                <div className="absolute -right-12 -top-12 h-32 w-32 bg-[#EF2B2D]/10 transition-transform duration-500 group-hover:scale-150" 
                     style={{ transform: 'rotate(45deg)' }} 
                />
                
                <div className="relative">
                  <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#EF2B2D]">{benefit.title}</h3>
                  <p className="leading-relaxed text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EF2B2D] via-red-600 to-[#EF2B2D] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Ready to Optimize Your HR Processes?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/95">
              Looking to optimize your HR processes and attract top talent? Partner with Innovision Limited for 
              unmatched manpower sourcing and HR solutions. Get in touch with us today to discover how we can meet your business needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-white bg-white px-12 py-4 text-lg font-bold text-[#EF2B2D] shadow-2xl transition-all hover:bg-transparent hover:text-white"
              >
                Contact Us Today
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-white bg-transparent px-12 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:bg-white hover:text-[#EF2B2D]"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
