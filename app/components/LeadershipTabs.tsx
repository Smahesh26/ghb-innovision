"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Director = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

function DirectorCard({ director }: { director: Director }) {
  const isExternalLinkedIn = director.linkedin?.startsWith("http");

  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white/95 p-7 text-center shadow-[0_18px_40px_rgba(15,15,18,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,15,18,0.14)]">
      <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 ring-4 ring-[#EF2B2D]/10">
        <Image
          src={director.image}
          alt={director.name}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
          sizes="144px"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-snug text-neutral-900">{director.name}</h3>
      <div className="mx-auto mt-3 h-[2px] w-10 bg-[#EF2B2D]" />
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#EF2B2D]">{director.role}</p>

      {director.linkedin && (
        <a
          href={director.linkedin}
          target={isExternalLinkedIn ? "_blank" : undefined}
          rel={isExternalLinkedIn ? "noopener noreferrer" : undefined}
          aria-label={`${director.name} LinkedIn profile`}
          className="mx-auto mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EF2B2D]/30 text-[#EF2B2D] transition hover:border-[#EF2B2D] hover:bg-[#EF2B2D] hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.13 1.45-2.13 2.94v5.68H9.36V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
          </svg>
        </a>
      )}
    </article>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white/95 p-7 text-center shadow-[0_18px_40px_rgba(15,15,18,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,15,18,0.14)]">
      <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 ring-4 ring-[#EF2B2D]/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
          sizes="144px"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-snug text-neutral-900">{member.name}</h3>
      <div className="mx-auto mt-3 h-[2px] w-10 bg-[#EF2B2D]" />
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#EF2B2D]">{member.role}</p>
    </article>
  );
}

export default function LeadershipTabs({
  boardOfDirectors,
  independentDirectors,
}: {
  boardOfDirectors: Director[];
  independentDirectors: Director[];
}) {
  const [activeTab, setActiveTab] = useState<"board" | "team">("board");

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const teamMembers: TeamMember[] = [
    { name: "Bijender Yadav", role: "Chief Financial Officer", image: "/images/BijenderYadav.jpg" },
    { name: "Lt. Col. Permender Malik", role: "SVP-Manpower", image: "/images/PermenderMalik.jpeg" },
    { name: "Commodore Thanigai Anandan", role: "VP-Skills", image: "/images/Thangai.jpg" },
    { name: "Captain Sunil Dogra", role: "AVP Aerodrone Robtics", image: "/images/SunilDogra.jpg" },
    // { name: "Shyam B Singh", role: "AVP-Sales", image: "/images/ShyamBSingh.png" },
    // { name: "Rajender Prasad", role: "GM -Admin", image: "/images/RajendraPrasad.jpg" },
    // { name: "Munish Kumar", role: "GM-Accounts", image: "/images/MunishKumar.jpg" },
    // { name: "Anil Kumar", role: "GM-Compliance", image: "/images/AnilKumar.png" },
  ];

  return (
    <motion.section
      className="relative bg-[#f7f7f5] py-24 text-neutral-900"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4">
          <motion.button
            onClick={() => setActiveTab("board")}
            className={`relative rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all ${
              activeTab === "board"
                ? "bg-[#EF2B2D] text-white shadow-lg"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Board of Directors
            {activeTab === "board" && (
              <motion.span
                layoutId="leadership-tab-glow"
                className="absolute inset-0 -z-10 rounded-sm bg-[#EF2B2D]/20 blur-md"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("team")}
            className={`relative rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all ${
              activeTab === "team"
                ? "bg-[#EF2B2D] text-white shadow-lg"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Team Innovision
            {activeTab === "team" && (
              <motion.span
                layoutId="leadership-tab-glow"
                className="absolute inset-0 -z-10 rounded-sm bg-[#EF2B2D]/20 blur-md"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "board" ? (
            <motion.div
              key="board"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-20"
            >
              <div>
                <div className="mb-14 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                    Corporate Leadership
                  </p>
                  <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Board of Directors</h2>
                  <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
                </div>
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {boardOfDirectors.map((director) => (
                    <motion.div key={director.name} variants={cardVariants}>
                      <DirectorCard director={director} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <div className="mb-14 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                    Governance Excellence
                  </p>
                  <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Independent Directors</h2>
                  <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
                </div>
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {independentDirectors.map((director) => (
                    <motion.div key={director.name} variants={cardVariants}>
                      <DirectorCard director={director} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                  Executive Team
                </p>
                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Team Innovision</h2>
                <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
              </div>
              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
              >
                {teamMembers.map((member) => (
                  <motion.div key={member.name} variants={cardVariants}>
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
