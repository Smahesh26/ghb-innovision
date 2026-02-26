import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Quick Links - Innovision Limited",
  description:
    "India's leading manpower solutions provider - Domestic & International Recruitment, Jobs, Training & Strategic Partnerships",
};

const primaryLinks = [
  {
    title: "Manpower Security & Facility Services",
    description: "Submit manpower and facility requirements across India.",
    href: "/contact",
    cta: "Submit Requirement",
  },
  {
    title: "Job Placements",
    description: "Explore domestic and international opportunities.",
    href: "/careers",
    cta: "Explore Jobs",
  },
  {
    title: "Recruitment Partners",
    description: "Join as consultant, vendor, or training partner.",
    href: "/contact",
    cta: "Become Partner",
  },
  {
    title: "Global Reach",
    description: "See how Innovision connects professionals worldwide.",
    href: "/about",
    cta: "Learn More",
  },
];

const whatsappChannels = [
  {
    title: "International & Domestic Jobs",
    description: "Verified openings across India and overseas.",
    href: "https://whatsapp.com/channel/0029VaeeDvxF3rssBzBf4J3s",
  },
  {
    title: "Consultants & Vendors",
    description: "Official updates for recruitment partners.",
    href: "https://whatsapp.com/channel/0029VarjuV85Bb3zuHxJdV3b",
  },
  {
    title: "Ex-Servicemen Jobs",
    description: "Dedicated opportunities for defence veterans.",
    href: "https://whatsapp.com/channel/0029Vaew0eV0IaKN4JJVS33V",
  },
  {
    title: "Professional Network",
    description: "Pan-India manpower & facility leadership network.",
    href: "https://chat.whatsapp.com/KAMTvKePJgLDkVEDdKNLEg",
  },
];

const exServicemenGroups = [
  {
    title: "Navy & Air Force Jobs",
    href: "https://chat.whatsapp.com/EyLXHe3kxmFHoZjHJk6cai",
  },
  {
    title: "Innovision Ex-Servicemen",
    href: "https://chat.whatsapp.com/F00Tl1xHXJ6BPoJ9ZtZ8Mc",
  },
  {
    title: "JCO / NCO / OR Jobs",
    href: "https://chat.whatsapp.com/Bd7ND7KKU0e67vqsshiCHZ",
  },
];

export default function QuickLinksPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[64vh] overflow-hidden bg-gradient-to-br from-[#0c0c0f] via-[#15151a] to-[#0b0b0d]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.15),transparent_42%)]" />

        <div className="relative mx-auto flex min-h-[64vh] max-w-7xl flex-col justify-center px-6 pt-28 pb-16 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/65">
            Quick Access
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Quick <span className="text-[#EF2B2D]">Links</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Your central access point for jobs, partnership opportunities, manpower requirements,
            and verified communication channels.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#primary" className="rounded-full bg-[#EF2B2D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]">
              Explore Links
            </a>
            <a href="#contact" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
              Contact Teams
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-[#f8f8f9] via-white to-[#f6f7f8] pb-24">
        <section id="primary" className="mx-auto max-w-7xl px-6 pt-20">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/60">Primary Links</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {primaryLinks.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-black/10 bg-white p-7 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#EF2B2D]/30 hover:shadow-[0_24px_56px_rgba(0,0,0,0.14)]"
              >
                <h3 className="text-xl font-bold leading-snug text-[#131313] transition group-hover:text-[#EF2B2D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{item.description}</p>
                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#EF2B2D]">
                  {item.cta}
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">WhatsApp Channels</p>
              <h2 className="mt-3 text-3xl font-bold text-[#131313] sm:text-4xl">Official Communication Channels</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {whatsappChannels.map((channel) => (
                <article key={channel.title} className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 transition hover:border-[#25D366]/40 hover:bg-[#f4fbf6]">
                  <h3 className="text-lg font-bold text-[#151515]">{channel.title}</h3>
                  <p className="mt-2 text-sm text-black/65">{channel.description}</p>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#25D366]"
                  >
                    Join Channel
                    <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/60">Ex-Servicemen Groups</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {exServicemenGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[#EF2B2D]/30 hover:shadow-[0_20px_46px_rgba(0,0,0,0.10)]">
                <h3 className="text-xl font-bold text-[#161616]">{group.title}</h3>
                <a
                  href={group.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#EF2B2D]"
                >
                  Join Group
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-20 max-w-7xl px-6">
          <div className="rounded-[2rem] bg-[#101013] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.32)] md:p-12">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">Contact Teams</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Domestic & International Job Support</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-bold">Domestic Jobs & Placements</h3>
                <div className="mt-5 space-y-3 text-sm text-white/80">
                  <p>Email: <a href="mailto:contact@innovision.co.in" className="text-white underline">contact@innovision.co.in</a></p>
                  <p>Phone: <a href="tel:+919289062827" className="text-white underline">+91 92890 62827</a></p>
                  <p>WhatsApp: <a href="https://wa.me/919289062827" target="_blank" rel="noopener noreferrer" className="text-white underline">Message Us</a></p>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-bold">International Jobs & Placements</h3>
                <div className="mt-5 space-y-3 text-sm text-white/80">
                  <p>Email: <a href="mailto:contactintl@innovision.co.in" className="text-white underline">contactintl@innovision.co.in</a></p>
                  <p>Phone: <a href="tel:+919818776874" className="text-white underline">+91 98187 76874</a></p>
                  <p>WhatsApp: <a href="https://wa.me/919818776874" target="_blank" rel="noopener noreferrer" className="text-white underline">Message Us</a></p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
