"use client";

import { motion } from "framer-motion";

const services = [
	{
		title: "Manned Private Security Services",
		description:
			"On-site trained guards, risk assessment, and rapid response coverage.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
				<path d="M9.5 12l1.8 1.8L15 10" />
			</svg>
		),
	},
	{
		title: "Integrated Facility Managed Services",
		description:
			"End-to-end soft services that keep assets compliant and efficient.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M4 21V7l8-4 8 4v14" />
			</svg>
		),
	},
	{
		title: "Manpower Sourcing & Payroll",
		description:
			"Recruitment, onboarding, payroll, and compliance handled in one flow.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<circle cx="9" cy="8" r="3" />
				<path d="M3 20a6 6 0 0 1 12 0" />
			</svg>
		),
	},
	{
		title: "Toll Plaza Management",
		description:
			"Comprehensive toll operations and highway maintenance services including TMS, ATMS, MLFF systems, traffic management, toll collection, infrastructure maintenance, and 24/7 incident management for seamless highway operations.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M3 20h18" />
				<path d="M5 20V8h14v12" />
			</svg>
		),
	},
	{
		title: "Skill Development",
		description:
			"Training programs aligned to industry-ready standards and safety.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M4 7l8-3 8 3-8 3-8-3z" />
			</svg>
		),
	},
	{
		title: "Overseas Recruitment",
		description:
			"Global sourcing, documentation, and deployment support.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<circle cx="12" cy="12" r="9" />
			</svg>
		),
	},
	{
		title: "Drone Flying Training",
		description:
			"Certified drone training for surveillance and inspection tasks.",
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
						<motion.div
							key={service.title}
							variants={cardVariants}
							whileHover={{ y: -10, scale: 1.02 }}
							className={`group relative overflow-hidden rounded-md border border-white/10 bg-[#161618] p-8 transition duration-500 hover:border-[#EF2B2D]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)]
								${index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
						>

							{/* Glow */}
							<div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.15),transparent_70%)]" />
							</div>

							<div className="relative">

								<div className="flex items-center gap-4">
									<span className="flex h-12 w-12 items-center justify-center rounded-md border border-[#EF2B2D]/40 bg-[#EF2B2D]/10 text-[#EF2B2D] transition group-hover:bg-[#EF2B2D] group-hover:text-white">
										{service.icon}
									</span>

									<h3 className="text-lg font-semibold text-white">
										{service.title}
									</h3>
								</div>

								<p className="mt-6 text-sm leading-relaxed text-white/70">
									{service.description}
								</p>

								<button
									type="button"
									className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#EF2B2D] transition group-hover:text-white"
								>
									Learn More →
								</button>

							</div>

						</motion.div>
					))}
				</motion.div>

			</div>
		</section>
	);
}
