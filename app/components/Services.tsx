"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
	{
		title: "Toll Plaza Management",
		benefit: "TMS-integrated operations with real-time traffic management.",
		description:
			"Complete toll operations with TMS, ATMS, traffic management, and 24/7 incident response.",
		link: "/services/toll-plaza-management",
		image: "/images/services-home/tollplazaservicehoma.jpg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M3 20h18" />
				<path d="M5 20V8h14v12" />
			</svg>
		),
	},
	{
		title: "Manned Private Security Services",
		benefit: "PSARA-certified guards with rapid deployment capability.",
		description:
			"On-site trained guards, risk assessment, and rapid response coverage.",
		link: "/services/security/manned-private-security",
		image: "/images/services-home/mannedservice1.jpeg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
				<path d="M9.5 12l1.8 1.8L15 10" />
			</svg>
		),
	},
	{
		title: "Integrated Facility Management Services",
		benefit: "Compliance-backed soft services for operational efficiency.",
		description:
			"End-to-end soft services that keep assets compliant and efficient.",
		link: "/services/facility-management",
		image: "/images/clients-services/facilitymanagement1.png",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M4 21V7l8-4 8 4v14" />
			</svg>
		),
	},
	{
		title: "Skill Development",
		benefit: "Industry-aligned training with 100K+ certified graduates.",
		description:
			"Training programs aligned to industry-ready standards and safety.",
		link: "/services/skill-development",
		image: "/images/services-home/skilldevelopmentservicehome.jpg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M4 7l8-3 8 3-8 3-8-3z" />
			</svg>
		),
	},
	{
		title: "Manpower Sourcing & Payroll",
		benefit: "End-to-end recruitment, compliance, and payroll integration.",
		description:
			"Recruitment, onboarding, payroll, and compliance handled in one flow.",
		link: "/services/manpower-sourcing",
		image: "/images/services-home/ManpwerandSourcing.jpg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<circle cx="9" cy="8" r="3" />
				<path d="M3 20a6 6 0 0 1 12 0" />
			</svg>
		),
	},
	
	
	{
		title: "Overseas Recruitment",
		benefit: "Global sourcing with visa and compliance support.",
		description:
			"Global sourcing, documentation, and deployment support.",
		link: "/services/overseas-recruitment",
		image: "/images/services-home/Overseas.jpg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<circle cx="12" cy="12" r="9" />
			</svg>
		),
	},
	{
		title: "Drone Manufacturing & Training",
		benefit: "Government-certified operators for surveillance and inspection.",
		description:
			"Certified drone training for surveillance and inspection tasks.",
		link: "/services#drone",
		image: "/images/services-home/drone.jpg",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<rect x="8" y="9" width="8" height="6" rx="1" />
			</svg>
		),
	},
];

// Animation Variants
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
	},
};

export default function Services() {
	return (
		<section className="relative bg-[#0d0d0f] py-32 text-white">
			<div className="relative mx-auto max-w-7xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Our Services
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
						Comprehensive Security & Workforce Solutions
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base text-white/70">
						Integrated services built for reliability, compliance,
						and operational excellence across industries.
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* GRID */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
				>
					{services.map((service, index) => (
						<Link
							key={service.title}
							href={service.link}
						>
							<motion.div
								variants={cardVariants}
								whileHover={{ y: -12, scale: 1.03 }}
								className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#151517] to-[#1c1c1f] p-8 transition duration-500 hover:border-[#EF2B2D]/50 hover:shadow-[0_30px_80px_rgba(239,43,45,0.2)] cursor-pointer
									${index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
							>

								{/* Glow */}
								<div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.2),transparent_70%)]" />
								</div>

								<div className="relative">
									<div className="relative mb-6 h-40 overflow-hidden rounded-lg border border-white/10">
										<Image
											src={service.image}
											alt={service.title}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className="object-cover transition duration-700 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
									</div>

									<div className="flex items-center justify-between gap-4">
										<div className="flex items-center gap-4">
											<motion.span
												whileHover={{ scale: 1.1, rotate: 5 }}
												className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#EF2B2D]/40 bg-[#EF2B2D]/10 text-[#EF2B2D] transition group-hover:bg-[#EF2B2D] group-hover:text-white"
											>
												{service.icon}
											</motion.span>

											<h3 className="text-lg font-semibold text-white">
												{service.title}
											</h3>
										</div>

										<span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-[#EF2B2D]/40 bg-[#EF2B2D]/10 px-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EF2B2D]">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>

									{/* Benefit Line */}
									<p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#EF2B2D]">
										{service.benefit}
									</p>

									<p className="mt-4 text-sm leading-relaxed text-white/70">
										{service.description}
									</p>

									<span className="mt-6 inline-flex items-center gap-2 rounded-sm border border-[#EF2B2D]/30 bg-[#EF2B2D]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] transition group-hover:gap-3 group-hover:border-[#EF2B2D] group-hover:text-white">
										Learn More
										<span>→</span>
									</span>

								</div>

							</motion.div>
						</Link>
					))}
				</motion.div>

			</div>
		</section>
	);
}
