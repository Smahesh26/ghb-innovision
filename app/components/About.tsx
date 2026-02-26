"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const whyChooseUsItems = [
    {
      title: "Expertise",
      description:
        "Innovision excels with 19+ years of experience, ISO certifications, and PSARA licenses. We've served 1000+ clients with a nationwide team led by experienced professionals and leadership under Lt Col Randeep Hundal and Mr. Uday Pal Singh, ensuring top-tier service."
    },
    {
      title: "Compliance",
      description:
        "Registered with statutory regulatory bodies, ensuring compliance with legal requirements. Operations follow strict statutory compliance, with the internal audit team overseeing risk mitigation and quality control efforts."
    },
    {
      title: "Geographical Reach",
      description:
        "We have established a strong presence across India, with 55+ locations nationwide and 70+ training centers in Pan-India. The headquarters is situated in Gurugram, serving as the central hub for operations."
    },
    {
      title: "Licensing",
      description:
        "Hold licenses under the Private Security Agency Regulatory Act – 2005 (PSARA) in 24 states across India, demonstrating dedication to regulatory adherence and professionalism."
    },
    {
      title: "Reputation",
      description:
        "Proud to be recognized as one of the top-rated service partners, serving a diverse clientele that includes leading corporates, government, and semi-government organizations."
    },
    {
      title: "Skill Development",
      description:
        "We've collaborated with the National Skills Development Corporation (NSDC) to conduct training programs across various sector skill councils, contributing to the growth and development of skilled professionals nationwide. This partnership underscores our dedication to enhancing workforce skills and employability."
    },
    {
      title: "PSARA Authorized Training Center",
      description:
        "The Training Centers are PSARA (Private Security Agencies Regulation Act) authorized, allowing us to deliver comprehensive, industry-leading Security Training programs. This enables us to provide certified, highly skilled manpower to businesses in diverse sectors."
    }
  ];

  return (
    <section id="story" className="relative scroll-mt-32 overflow-hidden bg-white py-24 text-neutral-900">
      
      {/* Soft Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.05),transparent_58%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Who We Are
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 bg-[#EF2B2D]" />
          </div>

          <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="lg:pr-10"
            >

            <p 
              className="mt-8 text-base leading-relaxed text-neutral-700" 
              style={{ 
                hyphens: 'none', 
                WebkitHyphens: 'none', 
                msHyphens: 'none', 
                wordBreak: 'keep-all', 
                overflowWrap: 'break-word',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
              At <span className="font-semibold text-neutral-900">Innovision Limited</span>,
          we operate at the intersection of infrastructure management and workforce execution. 
            </p>

            <p 
              className="mt-5 text-base leading-relaxed text-neutral-700" 
              style={{ 
                hyphens: 'none', 
                WebkitHyphens: 'none', 
                msHyphens: 'none', 
                wordBreak: 'keep-all', 
                overflowWrap: 'break-word',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
Our core strength lies in managing large-scale toll plaza operations and delivering structured manpower solutions that keep mission-critical projects running efficiently across India. We don’t just deploy people — we deploy process-driven, compliance-backed operational systems that ensure revenue integrity, security discipline, and service continuity.
            </p>

            <p 
              className="mt-5 text-base leading-relaxed text-neutral-700" 
              style={{ 
                hyphens: 'none', 
                WebkitHyphens: 'none', 
                msHyphens: 'none', 
                wordBreak: 'keep-all', 
                overflowWrap: 'break-word',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
Our expertise spans toll Plaza management, private security services, Integrated facility management, Manpower sourcing & payroll, structured training, and overseas workforce deployment. With deep on-ground execution capability and centralized compliance control, we enable infrastructure developers, government agencies, and corporate clients to focus on scale while we manage operations with precision. Our approach is data-oriented, performance-driven, and built around accountability — ensuring every site functions with trained personnel, regulatory alignment, and measurable outcomes.            </p>

            <p 
              className="mt-5 text-base leading-relaxed text-neutral-700" 
              style={{ 
                hyphens: 'none', 
                WebkitHyphens: 'none', 
                msHyphens: 'none', 
                wordBreak: 'keep-all', 
                overflowWrap: 'break-word',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
We position ourselves not merely as a service provider, but as a long-term operational partner delivering industry-ready solutions nationwide.         </p>

            {/* <p 
              className="mt-5 text-base leading-relaxed text-neutral-700" 
              style={{ 
                hyphens: 'none', 
                WebkitHyphens: 'none', 
                msHyphens: 'none', 
                wordBreak: 'keep-all', 
                overflowWrap: 'break-word',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
              We prioritize innovation, efficiency, and reliability, delivering quality services with measurable results. Leveraging expertise and resources, we ensure excellence from recruitment to ongoing support, providing peace of mind to businesses. We&apos;re not just a staffing company – we&apos;re strategic partners in success.
            </p> */}

              {/* Optional CTA */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block border-b-2 border-[#EF2B2D] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:text-[#EF2B2D]"
                >
                  Connect With Us
                </a>
              </div>
            </motion.div>

            {/* IMAGE BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/aboutus.png"
                  alt="Innovision Security team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 95vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              </div>

              {/* Red Accent Border */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#EF2B2D]" />
            </motion.div>
          </div>
        </motion.div>
        {/* CORE VALUES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 border-y border-neutral-700/70 bg-[linear-gradient(180deg,rgba(22,22,24,0.96),rgba(14,14,16,0.98))] py-10 shadow-xl sm:py-12"
        >
          <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
              Our Core Values
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Our Core Values
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 bg-[#EF2B2D]" />
          </div>

          <p
            className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/80"
            style={{
              hyphens: 'none',
              WebkitHyphens: 'none',
              msHyphens: 'none',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              textAlign: 'justify',
              textJustify: 'inter-word'
            }}
          >
            The principles that define us are more than just words—they are the guiding forces behind our actions. Discover the core values that inspire us to reach new heights and make a difference.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-sm border border-neutral-700/70 bg-[#18181b] p-6 shadow-md">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#EF2B2D]" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
                Our Guiding Principle
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed text-white/75"
                style={{
                  hyphens: 'none',
                  WebkitHyphens: 'none',
                  msHyphens: 'none',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  textAlign: 'justify',
                  textJustify: 'inter-word'
                }}
              >
                Driven through customer centric services we strongly believe in maintaining our consistent growth Service Quality, Client Satisfaction & Employee Welfare.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-neutral-700/70 bg-[#18181b] p-6 shadow-md">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#EF2B2D]" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
                Vision
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed text-white/75"
                style={{
                  hyphens: 'none',
                  WebkitHyphens: 'none',
                  msHyphens: 'none',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  textAlign: 'justify',
                  textJustify: 'inter-word'
                }}
              >
                To become leader in creation and delivery of innovative human resources solutions and services.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-neutral-700/70 bg-[#18181b] p-6 shadow-md">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#EF2B2D]" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
                Core Values
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed text-white/75"
                style={{
                  hyphens: 'none',
                  WebkitHyphens: 'none',
                  msHyphens: 'none',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  textAlign: 'justify',
                  textJustify: 'inter-word'
                }}
              >
                Innovation, Knowledge, Accountability, Integrity, Reliability, Transparency, Consistency, Reciprocity.
              </p>
            </div>
          </div>
          </div>
        </motion.div>

        {/* NEW WHY CHOOSE US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 border-y border-neutral-200 bg-[linear-gradient(180deg,#ffffff,#f7f7f6)] py-12"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Why Choose Us?
              </h2>
              <div className="mx-auto mt-5 h-1 w-16 bg-[#EF2B2D]" />
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {whyChooseUsItems.map((item, index) => (
                <article key={item.title} className="border-b border-neutral-300 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EF2B2D]/10 text-xs font-bold text-[#EF2B2D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  </div>
                  <p
                    className="mt-4 text-sm leading-relaxed text-neutral-700"
                    style={{
                      hyphens: 'none',
                      WebkitHyphens: 'none',
                      msHyphens: 'none',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      textAlign: 'justify',
                      textJustify: 'inter-word'
                    }}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
