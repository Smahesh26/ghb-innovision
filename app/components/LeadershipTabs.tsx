"use client";

import { useState } from "react";
import Image from "next/image";

type Director = {
  name: string;
  role: string;
  image: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

function DirectorCard({ director }: { director: Director }) {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white/95 p-7 text-center shadow-[0_18px_40px_rgba(15,15,18,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,15,18,0.14)]">
      <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 ring-4 ring-[#EF2B2D]/10">
        <Image
          src={director.image}
          alt={director.name}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
          sizes="144px"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-snug text-neutral-900">{director.name}</h3>
      <div className="mx-auto mt-3 h-[2px] w-10 bg-[#EF2B2D]" />
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#EF2B2D]">{director.role}</p>
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
    <section className="relative bg-[#f7f7f5] py-24 text-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("board")}
            className={`rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all ${
              activeTab === "board"
                ? "bg-[#EF2B2D] text-white shadow-lg"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            }`}
          >
            Board of Directors
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all ${
              activeTab === "team"
                ? "bg-[#EF2B2D] text-white shadow-lg"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            }`}
          >
            Team Innovision
          </button>
        </div>

        {/* Board of Directors Tab */}
        {activeTab === "board" && (
          <div className="space-y-20">
            <div>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                  Corporate Leadership
                </p>
                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Board of Directors</h2>
                <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {boardOfDirectors.map((director) => (
                  <DirectorCard key={director.name} director={director} />
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                  Governance Excellence
                </p>
                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Independent Directors</h2>
                <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {independentDirectors.map((director) => (
                  <DirectorCard key={director.name} director={director} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Team Innovision Tab */}
        {activeTab === "team" && (
          <div>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                Executive Team
              </p>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Team Innovision</h2>
              <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
