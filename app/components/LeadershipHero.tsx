"use client";

import { motion } from "framer-motion";

export default function LeadershipHero() {
  return (
    <section
      className="relative h-[74vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]"
      aria-label="Leadership Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/all-banners/BannerAboutLeadershio.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

      <motion.div
        className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#EF2B2D]/12 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white"
      >
        <motion.div
          className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
          <span>Corporate Governance</span>
          <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
        </motion.div>

        <motion.h1
          className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Leadership
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-lg text-white/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          viewport={{ once: true }}
        >
          Experienced leadership focused on governance, compliance, and sustainable growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
