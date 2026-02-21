"use client";

import { motion } from "framer-motion";

const highlights = [
	{
		metric: "80%+",
		unit: "Revenue CAGR",
		title: "More Than 80% Revenue CAGR",
		description: "Exceptional year-over-year growth demonstrating strong market demand and operational scalability",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
			</svg>
		),
	},
	{
		metric: "₹1000+ Cr",
		unit: "Order Book",
		title: "Strong Order Book",
		description: "Secured contracts worth over ₹1000 crores providing robust revenue pipeline and business continuity",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
			</svg>
		),
	},
	{
		metric: "3-5 Years",
		unit: "Visibility",
		title: "Forward Revenue Visibility",
		description: "Long-term multi-year contracts ensuring predictable cash flows and sustainable growth trajectory",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
			</svg>
		),
	},
	{
		metric: "15+",
		unit: "States",
		title: "Multi-State Presence",
		description: "Pan-India operational infrastructure across 15+ states with localized service delivery capabilities",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
	},
	{
		metric: "ISO",
		unit: "Certified",
		title: "Institutional Governance",
		description: "ISO 9001, 14001, 45001, 27001, 18788 certifications with robust compliance frameworks and PSARA licensing",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
			</svg>
		),
	},
	{
		metric: "20,000+",
		unit: "Workforce",
		title: "Scale & Deployment Capacity",
		description: "Trained and deployed personnel serving mission-critical operations nationwide with rapid mobilization capability",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
		),
	},
	{
		metric: "2,000+",
		unit: "Active Sites",
		title: "Operational Footprint",
		description: "Active deployment across corporate campuses, government facilities, toll plazas, and infrastructure projects",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
		),
	},
	{
		metric: "7",
		unit: "Verticals",
		title: "Diversified Revenue Streams",
		description: "Security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone technology",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
			</svg>
		),
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
	},
};

export default function InvestmentHighlights() {
	return (
		<section className="relative bg-gradient-to-b from-[#0d0d0f] to-[#1a1a1d] py-32 text-white">
			
			{/* Background Glow */}
			<div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Measurable Strengths
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
						Facts and Figures
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base text-white/70">
						Data-driven performance metrics demonstrating operational excellence and sustainable growth
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* HIGHLIGHTS GRID */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
				>
					{highlights.map((highlight, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -8, scale: 1.02 }}
							className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1a1d] to-[#161618] p-6 transition-all duration-300 hover:border-[#EF2B2D]/40 hover:shadow-[0_20px_50px_rgba(239,43,45,0.15)]"
						>
							{/* Glow Effect */}
							<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.1),transparent_70%)]" />
							</div>

							{/* Icon */}
							<div className="relative mb-4 inline-flex items-center justify-center rounded-lg bg-[#EF2B2D]/10 p-3 text-[#EF2B2D] transition-all duration-300 group-hover:bg-[#EF2B2D]/20">
								{highlight.icon}
							</div>

							{/* Metric */}
							<div className="relative mb-2">
								<div className="text-4xl font-bold text-white">
									{highlight.metric}
								</div>
								<div className="text-xs font-semibold uppercase tracking-wider text-[#EF2B2D]">
									{highlight.unit}
								</div>
							</div>

							{/* Title */}
							<h3 className="relative mb-3 text-base font-bold text-white">
								{highlight.title}
							</h3>

							{/* Description */}
							<p className="relative text-xs text-white/60 leading-relaxed">
								{highlight.description}
							</p>

							{/* Bottom Accent Line */}
							<div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#EF2B2D] to-transparent transition-all duration-500 group-hover:w-full" />
						</motion.div>
					))}
				</motion.div>

				{/* BOTTOM CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
						<svg className="h-5 w-5 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span className="text-sm font-semibold text-white">
							Backed by strong fundamentals and proven execution capabilities
						</span>
					</div>
				</motion.div>

			</div>
		</section>
	);
}
