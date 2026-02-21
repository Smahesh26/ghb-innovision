"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MoreAboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left Side - Image */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-sm">
            <Image
              src="/images/about.jpg"
              alt="Innovision Limited Team"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-sm"
              priority
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Label */}
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]"
            >
              More About Us
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-neutral-900 sm:text-5xl"
            >
              Who We Are
            </motion.h2>

            {/* Red Underline */}
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-[#EF2B2D] rounded-sm"
            />

            {/* First Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-neutral-700 text-justify"
            >
              At <span className="font-semibold">Innovision Limited</span>, we are ranked among the top Security 
              Manpower companies in India. We lead the staffing industry by addressing the evolving needs of 
              businesses nationwide, offering reliable and disciplined manpower solutions.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-neutral-700 text-justify"
            >
              Recognizing the crucial role of skilled manpower in driving efficiency and operational excellence, 
              we have become the trusted partner for sourcing top-quality workforce solutions across diverse industries.
            </motion.p>

            {/* Learn More Link */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/about"
                className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-900 border-b-2 border-[#EF2B2D] transition-all duration-300 hover:text-[#EF2B2D] pb-2 inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
