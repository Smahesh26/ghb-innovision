"use client";

import Image from "next/image";

const clients = Array.from({ length: 8 }, (_, index) => {
  const label = String(index + 1);
  return {
    name: `Client ${label}`,
    logo: `/images/clients/client${label}.png`,
  };
});

export default function Clients() {
  const trackItems = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24 text-neutral-900">

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
            Our Clients
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Trusted By Leading Organizations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600">
            A snapshot of the brands and institutions that rely on Innovision
            for disciplined security and workforce excellence.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative mt-16 overflow-hidden">

          {/* Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f7f7f5] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f7f7f5] to-transparent z-10" />

          <div className="client-track group-hover:[animation-play-state:paused]">
            {trackItems.map((client, index) => (
              <div key={`${client.name}-${index}`} className="client-card group">
                <div className="relative h-20 w-56">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="224px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .client-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        section:hover .client-track {
          animation-play-state: paused;
        }

        .client-card {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 140px;
          width: 280px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(6px);
          box-shadow: 0 18px 40px rgba(15, 15, 18, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .client-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(15, 15, 18, 0.15);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
