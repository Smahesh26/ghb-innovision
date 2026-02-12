"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f3f3f1] py-24 text-neutral-900">
      
      {/* Soft Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Innovision Security team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 55vw, 95vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>

            {/* Red Accent Border */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#EF2B2D]" />
          </motion.div>

          {/* CONTENT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:pr-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              More About Us
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Who We Are
            </h2>

            <div className="mt-5 h-1 w-14 bg-[#EF2B2D]" />

            <p className="mt-8 text-base leading-relaxed text-neutral-700">
              At <span className="font-semibold text-neutral-900">Innovision Limited</span>,
              we are ranked among the top Security Manpower companies in India.
              We lead the staffing industry by addressing the evolving needs of
              businesses nationwide, offering reliable and disciplined manpower
              solutions.
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              Recognizing the crucial role of skilled manpower in driving
              efficiency and operational excellence, we have become the trusted
              partner for sourcing top-quality workforce solutions across
              diverse industries.
            </p>

            {/* Optional CTA */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block border-b-2 border-[#EF2B2D] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:text-[#EF2B2D]"
              >
                Learn More
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
