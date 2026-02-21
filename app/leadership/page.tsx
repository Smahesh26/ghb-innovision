import { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import News from "../components/News";
import Footer from "../components/Footer";

const boardOfDirectors = [
  {
    name: "Lt Col Randeep Hundal",
    role: "CMD, Executive Director",
    image: "/images/Randeepsir.jpeg",
  },
  {
    name: "Mr. Uday Pal Singh",
    role: "CEO, Executive Director",
    image: "/images/uday.jpeg",
  },
  {
    name: "Lt Col Gurpal Singh",
    role: "Executive Director",
    image: "/images/gurpalsingh.jpg",
  },
];

const independentDirectors = [
  {
    name: "Captain Pawan Kumar",
    role: "Independent Director (Non-Executive)",
    image: "/images/pawankumar.png",
  },
  {
    name: "Ms. Sudha Hooda",
    role: "Independent Director (Non-Executive)",
    image: "/images/sudhahooda.png",
  },
  {
    name: "Ms. Sulekha Sharma",
    role: "Independent Director (Non-Executive)",
    image: "/images/sulekhasharma.png",
  },
];

type Director = {
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

export const metadata: Metadata = {
  title: "Leadership | Innovision Limited",
  description:
    "Meet Innovision Limited's Board of Directors and Independent Directors guiding strategic growth, governance, and operational excellence.",
  alternates: {
    canonical: "https://innovision.co.in/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Header />

      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]" aria-label="Leadership Hero">
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
            <span>Corporate Governance</span>
            <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Leadership
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Experienced leadership focused on governance, compliance, and sustainable growth.
          </p>
        </div>
      </section>

      <section className="relative bg-[#f7f7f5] py-24 text-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              Corporate Leadership
            </p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Board of Directors</h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {boardOfDirectors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              Governance Excellence
            </p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Independent Directors</h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {independentDirectors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>
        </div>
      </section>

      <News />
      <Footer />
    </>
  );
}
