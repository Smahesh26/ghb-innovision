"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Innovision Limited: Leading Skill Development in India",
    date: "Feb 10, 2026",
    summary:
      "Innovision Limited stands at the forefront of skill development in India, actively engaging in initiatives that bolster the talent and employability of the nation's youth.",
    image: "/images/blog1.jpg",
    tag: "Training",
  },
  {
    title: "Prioritizing Your Safety: Lessons from the Recent Saif Ali Khan Attack",
    date: "Jan 20, 2025",
    summary:
      "The recent knife attack involving Bollywood actor Saif Ali Khan has brought safety concerns to the forefront. The incident highlights the importance of robust security measures for individuals and families.",
    image: "/images/blog2.jpeg",
    tag: "Security",
  },
  {
    title: "How RPL Certification under PMKVY Transforms Employability",
    date: "Jan 15, 2025",
    summary:
      "In an era marked by the demand for highly skilled labor, the Pradhan Mantri Kaushal Vikas Yojana (PMKVY) emerges as a powerful government initiative designed to upskill the Indian workforce through RPL certification.",
    image: "/images/blog3.jpg",
    tag: "Training",
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* ALL ARTICLES IN A ROW */}
          {articles.map((article) => (
            <motion.article
              key={article.title}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_25px_60px_rgba(15,15,18,0.12)] transition"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-6 top-6 bg-[#EF2B2D] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  {article.tag}
                </span>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {article.date}
                </p>

                <h3 className="mt-4 text-lg font-bold text-neutral-900 line-clamp-2">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-600 line-clamp-3">
                  {article.summary}
                </p>

                <button className="mt-6 relative text-xs font-semibold uppercase tracking-[0.25em] text-[#EF2B2D]">
                  Read More
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#EF2B2D] transition-all duration-500 group-hover:w-full" />
                </button>
              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
