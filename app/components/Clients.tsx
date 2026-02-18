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

          <div className="client-track">
            {trackItems.map((client, index) => (
              <div key={`${client.name}-${index}`} className="logo-wrapper">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="logo-image"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .client-track {
          display: flex;
          gap: 48px;
          align-items: center;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .client-track:hover {
          animation-play-state: paused;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          height: 140px;
          padding: 16px;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)) 
                  drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06));
          transition: all 0.3s ease;
          opacity: 0.75;
        }

        .logo-wrapper:hover .logo-image {
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15)) 
                  drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          opacity: 0.95;
          transform: scale(1.05);
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
