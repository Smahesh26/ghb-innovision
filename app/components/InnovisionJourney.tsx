"use client";

import { motion } from "framer-motion";

const journeyMilestones = [
  {
    year: "2007",
    points: ["lnnovision Incorporated"],
  },
  {
    year: "2008",
    points: ["Innovision Limited established footprint in North India"],
  },
  {
    year: "2010",
    points: ["Innovision Limited established footprint in West India"],
  },
  {
    year: "2013",
    points: [
      "10 Cr. Milestone Achieved",
      "Awarded 'Young Security Entrepreneur of the Year 2013' by CAPSI",
    ],
  },
  {
    year: "2015",
    points: [
      "Established Pan India Presence",
      "Started Skills Development vertical",
      "Started Integrated Facility Management vertical",
    ],
  },
  {
    year: "2016",
    points: [
      "50 Cr. Milestone Achieved",
      "158% Growth observed",
      "Awarded 'Best Startup in Skill Development' by ASSOCHAM",
    ],
  },
  {
    year: "2017",
    points: [
      "2000+ Guards Deployed in Punjab",
      "Awarded 'Best Employer' twice at RozgarMela (EmploymentFair) organized by NSDC",
    ],
  },
  {
    year: "2018",
    points: [
      "100 Cr. Milestone achieved",
      "Managing 2 Million plus sq. ft area for complete IFM services with Rajasthan Government",
      "Awarded 'Best Small Scale Private organization-2018' by ASSOCHAM",
    ],
  },
  {
    year: "2019",
    points: [
      "Started Toll Management vertical",
      "150 Cr. milestone achieved",
      "Best Large Scale Private Organization Training Program-2019 by ASSOCHAM",
      "Awarded 'Security Entrepreneur of the Year - 2019' by CAPSI",
    ],
  },
  {
    year: "2020",
    points: [
      "200 Cr milestone achieved",
      "Lt Col Hundal awarded 'Badge of Honour-2020' by CAPSI",
    ],
  },
  {
    year: "2021",
    points: ["Acquired a Single Contract of value 35+ Cr with 2500+ Manpower"],
  },
  {
    year: "2022",
    points: [
      "Lt Col. Randeep Hundal awarded by Indian Achievers' Forum- 'CEO of the Year-2022'",
      "Lt Col. Randeep Hundal awarded 'Man of Excellence Award-2022'",
      "Awarded 'Brand Impact Award-2022'",
      "Awarded 'Champion of Change Award-2022'",
    ],
  },
  {
    year: "2023",
    points: [
      "Achieved a milestone of 500+ Crore",
      "100% growth achieved",
      "Started our new wing Aerodrone Robotics",
      "Started our overseas operations - Innovision International",
      "OTM grew by more than 550%",
    ],
  },
];

export default function InnovisionJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fcfcfb] via-[#f8f8f6] to-[#f3f3f1] py-28 text-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.09),transparent_62%)]" />
      <div className="absolute right-[-120px] top-24 h-72 w-72 rounded-full bg-[#EF2B2D]/5 blur-3xl" />
      <div className="absolute left-[-120px] bottom-16 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#EF2B2D]">
            Milestones
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Our Journey</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-neutral-600">
            A year-wise journey of growth, capability expansion, and award-winning leadership.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-[22px] top-0 h-full w-[2px] bg-gradient-to-b from-[#EF2B2D]/70 via-[#EF2B2D]/40 to-transparent" />

          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#EF2B2D]/80 bg-white text-xs font-bold text-[#EF2B2D] shadow-[0_8px_20px_rgba(239,43,45,0.22)] ring-4 ring-[#EF2B2D]/10">
                  {milestone.year.slice(2)}
                </div>

                <div className="rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-white to-[#fdfdfc] p-6 shadow-[0_16px_40px_rgba(15,15,18,0.09)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,15,18,0.13)]">
                  <div className="flex items-center justify-between gap-3 border-b border-neutral-200 pb-3">
                    <h3 className="text-lg font-bold text-neutral-900">{milestone.year}</h3>
                    <span className="rounded-full bg-[#EF2B2D]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EF2B2D]">Milestone</span>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {milestone.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF2B2D]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
