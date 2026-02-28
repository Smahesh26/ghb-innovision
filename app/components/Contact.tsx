"use client";

import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import IndiaMapClient from "../map-test/IndiaMapClient";

type ContactProps = {
  showFootprints?: boolean;
  mapOnly?: boolean;
};

export default function Contact({ showFootprints = true, mapOnly = false }: ContactProps) {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    "Security Services",
    "Facility Management",
    "Manpower Sourcing & Payroll",
    "Toll Plaza Management",
    "Skill Development",
    "Overseas Recruitment",
    "Drone Flying Training"
  ];

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (submitState === "success" || submitState === "error") {
      setSubmitState("idle");
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { success: boolean; message?: string };

      if (!response.ok || !data.success) {
        setSubmitState("error");
        setSubmitMessage(data.message ?? "Unable to send your message. Please try again.");
        return;
      }

      setSubmitState("success");
      setSubmitMessage(data.message ?? "Thank you! Your message has been sent.");
      setFormData({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmitState("error");
      setSubmitMessage("Unable to send your message. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-0 text-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute -top-20 left-10 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {showFootprints && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <h3 className="mb-4 text-center text-3xl font-light text-gray-900 sm:text-4xl">
              Our Footprints
            </h3>

            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-gray-600" style={{ textAlign: "center" }}>
              Pan-India operational footprint with 55+ offices across all major regions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 max-w-7xl"
            >
              <IndiaMapClient />
            </motion.div>
          </motion.div>
        )}

        {!mapOnly && (
          <div className="relative left-1/2 right-1/2 mt-14 w-screen -translate-x-1/2 bg-[#EF2B2D]/[0.06] pt-10 pb-0">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl">
                Get In Touch!
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
                We look forward to hearing from you. If you have any questions or need support, please feel free to reach out.
              </p>
            </motion.div>

            <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="text-sm leading-relaxed text-gray-700">+91-9289063231</p>
          </motion.div>

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
              Plot 251, 1st Floor, Udyog Vihar IV, Gurugram HR 122015
            </p>
          </motion.div>

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
            <p className="text-sm leading-relaxed text-gray-700">
              0124-4387354<br />
              0124-2341602 (F)
            </p>
          </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-0 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg lg:p-12"
            >
              <h3 className="mb-8 text-center text-3xl font-light text-gray-900 sm:text-4xl">
                What Are You Looking For?
              </h3>

              <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
            <select
              name="service"
              value={formData.service}
              onChange={handleFieldChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            >
              <option value="">SELECT SERVICES</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFieldChange}
                required
                placeholder="NAME"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFieldChange}
                required
                placeholder="E-MAIL"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFieldChange}
              required
              placeholder="Phone No."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleFieldChange}
              required
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="w-full rounded-lg bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d62426] hover:shadow-[0_0_25px_rgba(239,43,45,0.6)]"
            >
              {submitState === "submitting" ? "SENDING..." : "SEND"}
            </button>

            {submitMessage && (
              <p
                className={`text-sm ${
                  submitState === "success" ? "text-green-600" : "text-[#EF2B2D]"
                }`}
              >
                {submitMessage}
              </p>
            )}
              </form>
            </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
