"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Amit Sharma",
    role: "Facility Head, Manufacturing",
    quote:
      "Innovision helped us stabilize site security and improve response times within weeks. The team is disciplined and proactive.",
  },
  {
    name: "Neha Verma",
    role: "Operations Manager, Logistics",
    quote:
      "Their manpower sourcing and training reduced attrition and boosted compliance. Reliable partner for scale.",
  },
  {
    name: "Rajesh Iyer",
    role: "Admin Lead, IT Campus",
    quote:
      "From audits to daily supervision, the standards are consistent. We see visible improvements in safety and reporting.",
  },
  {
    name: "Priya Kulkarni",
    role: "HR Director, Retail",
    quote:
      "Quick deployment, professional guards, and transparent communication. We are confident in every location.",
  },
  {
    name: "Vikram Singh",
    role: "Plant Head, FMCG",
    quote:
      "Clear SOPs, well-trained teams, and consistent supervision made a big difference in safety compliance.",
  },
  {
    name: "Sana Khan",
    role: "Corporate Services, BFSI",
    quote:
      "Their nationwide coverage helped us standardize service quality across all branches.",
  },
  {
    name: "Karan Mehta",
    role: "Operations Head, Infrastructure",
    quote:
      "Strong audit practices and quick escalation support keep our sites secure and accountable.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-28 text-neutral-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
            Client Reviews
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Trusted By Teams Nationwide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600">
            Real feedback from clients who rely on Innovision for security,
            manpower, and facility excellence.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* MAIN REVIEW CARD */}
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-10 shadow-[0_30px_60px_rgba(15,15,18,0.12)]">

            {/* Big Quote Symbol */}
            <span className="absolute right-8 top-6 text-8xl font-bold text-[#EF2B2D]/10">
              “
            </span>

            {/* Animated Review */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl font-medium leading-relaxed text-neutral-900 sm:text-2xl">
                  "{reviews[activeIndex].quote}"
                </p>

                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <p className="text-base font-semibold text-neutral-900">
                    {reviews[activeIndex].name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {reviews[activeIndex].role}
                  </p>

                  <div className="mt-4 text-[#EF2B2D] text-xl">
                    ★★★★★
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <motion.div
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6 }}
              className="absolute bottom-0 left-0 h-1 bg-[#EF2B2D]"
            />

            {/* Navigation */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={handlePrev}
                className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-[#EF2B2D]"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-[#EF2B2D]"
              >
                Next
              </button>
            </div>

          </div>

          {/* REVIEW SELECTOR */}
          <div className="grid gap-4">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                onClick={() => setActiveIndex(index)}
                className={`rounded-lg border p-5 text-left transition duration-300 ${
                  index === activeIndex
                    ? "border-[#EF2B2D] bg-[#EF2B2D]/5 shadow-md"
                    : "border-neutral-200 bg-white hover:border-[#EF2B2D]/40"
                }`}
              >
                <p className="text-sm font-semibold text-neutral-900">
                  {review.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {review.role}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
