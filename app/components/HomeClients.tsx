import Image from "next/image";

const homeClients = Array.from({ length: 8 }, (_, index) => {
  const item = index + 1;
  return {
    name: `Client ${item}`,
    logo: `/images/clients/client${item}.png`,
  };
});

export default function HomeClients() {
  const trackItems = [...homeClients, ...homeClients];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24 text-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
            Our Clients
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Trusted By Leading Organizations
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f7f5] to-transparent" />

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
    </section>
  );
}