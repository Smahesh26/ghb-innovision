"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Prashant Kumar",
    role: "Manager - Loss Prevention & QHS, Future Supply Chain",
    quote:
      "Innovision Limited has been an excellent partner, providing trained security guards that meet our store requirements. They've consistently delivered quality staff over the past year, showing reliability and integrity. We look forward to continuing our collaboration.",
  },
  {
    name: "Rubina Nath",
    role: "Manager, CavinKare Pvt Ltd",
    quote:
      "Impressed by their dedication to providing top-notch security services. Their proactive approach set them apart in the industry.",
  },
  {
    name: "Sajal Mandal",
    role: "Manager, SVLL Godrej, Kolkata",
    quote:
      "Their tailored solutions and experienced staff make them a valuable asset to any organisation.",
  },
  {
    name: "Krishnamurthy",
    role: "Client Partner",
    quote:
      "Innovision Limited has been dedicated in meeting our manpower hiring needs. Their professional team provided us with well-qualified candidates. We recommend their services for reliable and skilled security manpower services.",
  },
  {
    name: "Deepak Gupta",
    role: "Manager, Reliance Jewels",
    quote:
      "Their team is skilled, responsive, and ready to tackle any challenges.",
  },
  {
    name: "Ashish Kumar",
    role: "Hub Manager, APML",
    quote:
      "Their professionalism and commitment to safety are unmatched. Highly recommend their services.",
  },
  {
    name: "Lt. Col Rohit Kapila",
    role: "SVP, Stellar Value Chain",
    quote:
      "We needed a reliable security partner prioritizing quality service and frontline team support. Innovision has consistently met these needs over our years of collaboration. We recommend Innovision as a security partner.",
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
