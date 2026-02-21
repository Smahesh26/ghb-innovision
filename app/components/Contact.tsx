"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const services = [
    "Security Services",
    "Facility Management",
    "Manpower Sourcing & Payroll",
    "Toll Plaza Management",
    "Skill Development",
    "Overseas Recruitment",
    "Drone Flying Training"
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 text-gray-900">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

          {/* Header */}
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Footprints
          </h3>
          
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm text-gray-600">
            Pan-India operational footprint with a clearly marked corporate headquarters in Gurgaon.
          </p>
          
          {/* India Footprint Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl overflow-hidden rounded-xl border-2 border-[#EF2B2D]/20 bg-gray-50 shadow-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/footprints.png"
                alt="Innovision footprint map across India"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
                priority
              />

              <span className="absolute left-[52%] top-[34%] inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#EF2B2D] shadow-[0_0_0_4px_rgba(239,43,45,0.25)]" aria-label="Corporate HQ">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="pointer-events-none absolute left-[52%] top-[34%] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EF2B2D]/40 animate-ping" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF2B2D]" /> Corporate HQ (Gurgaon)
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400" /> Operational Presence
              </span>
            </div>
          </motion.div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Get In Touch!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We look forward to hearing from you. If you have any questions or need support, please feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Registered Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Registered Address
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              First Floor, 1/209, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010
            </p>
          </motion.div>

          {/* Registered Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Registered Phone No.
            </h3>
            <p className="text-sm text-gray-700">‪+91-9289063231‬</p>
          </motion.div>

          {/* Mail Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Mail Address
            </h3>
            <p className="text-sm text-gray-700">contact@innovision.co.in</p>
          </motion.div>

          {/* Corporate Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Corporate Address
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Plot no. 251, Udyog Vihar, Phase IV, Sector 18, Gurgaon, Haryana - 122015
            </p>
          </motion.div>

          {/* Corporate Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Corporate Phone No.
            </h3>
            <p className="text-sm text-gray-700">
              0124-4387354<br />
              0124-2341602 (F)
            </p>
          </motion.div>

          {/* CIN Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              CIN Number
            </h3>
            <p className="text-sm text-gray-700">U74910DL2007PLC157700</p>
          </motion.div>

        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg lg:p-12"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            What Are You Looking For?
          </h3>

          <form className="mx-auto max-w-2xl space-y-6">
            
            {/* Service Selection */}
            <select
              name="service"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            >
              <option value="" className="text-gray-500">
                SELECT SERVICES
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d62426] hover:shadow-[0_0_25px_rgba(239,43,45,0.6)]"
            >
              SEND
            </button>
          </form>
        </motion.div>

        {/* Our Footprints */}
     

      </div>
    </section>
  );
}
