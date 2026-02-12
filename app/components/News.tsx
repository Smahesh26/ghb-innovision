"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Innovision Expands Training Centers Nationwide",
    date: "Jan 18, 2026",
    summary:
      "New facilities strengthen skill development programs and enhance workforce readiness across regions.",
    image: "/images/banner1.png",
    tag: "Training",
  },
  {
    title: "How Integrated Facility Management Improves Compliance",
    date: "Dec 02, 2025",
    summary:
      "A closer look at IFM frameworks that reduce operational risk and boost service quality.",
    image: "/images/banner2.png",
    tag: "IFM",
  },
  {
    title: "Security Tech That Cuts Response Time",
    date: "Nov 12, 2025",
    summary:
      "Modern monitoring and rapid escalation systems deliver measurable improvements in incident handling.",
    image: "/images/banner3.png",
    tag: "Security",
  },
];

export default function News() {
  return (
    <section className="relative bg-[#f7f7f5] py-28 text-neutral-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
            News & Articles
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Insights From Innovision
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600">
            Updates, expertise, and best practices across security,
            manpower, and facility operations.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">

          {/* FEATURED ARTICLE */}
          <motion.article
            whileHover={{ scale: 1.01 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_25px_60px_rgba(15,15,18,0.12)] transition"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-6 top-6 bg-[#EF2B2D] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {articles[0].tag}
              </span>
            </div>

            <div className="p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {articles[0].date}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                {articles[0].title}
              </h3>

              <p className="mt-4 text-base text-neutral-600">
                {articles[0].summary}
              </p>

              <button className="mt-6 relative text-xs font-semibold uppercase tracking-[0.25em] text-[#EF2B2D]">
                Read More
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#EF2B2D] transition-all duration-500 group-hover:w-full" />
              </button>
            </div>
          </motion.article>

          {/* SIDE ARTICLES */}
          <div className="space-y-8">
            {articles.slice(1).map((article) => (
              <motion.article
                key={article.title}
                whileHover={{ y: -5 }}
                className="group flex overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_18px_40px_rgba(15,15,18,0.1)] transition"
              >
                <div className="relative h-40 w-40 shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      {article.date}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-600">
                      {article.summary}
                    </p>
                  </div>

                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#EF2B2D]">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
