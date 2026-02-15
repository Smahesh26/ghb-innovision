"use client";

import { motion } from "framer-motion";

const strengths = [
	{
		number: "01",
		title: "Recurring multi-year service contracts",
		description: "Long-term government and enterprise engagements ensuring predictable revenue visibility",
	},
	{
		number: "02",
		title: "Asset-light deployment structure",
		description: "Minimal capital expenditure requirements with focus on manpower and operational excellence",
	},
	{
		number: "03",
		title: "Centralized compliance and payroll systems",
		description: "Technology-enabled platforms for attendance tracking, payroll processing, and regulatory compliance",
	},
	{
		number: "04",
		title: "Diversified service portfolio reducing dependency risk",
		description: "Multiple revenue streams across security, facilities, toll operations, and skill development",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
	},
};

export default function BusinessModel() {
	return (
		<section className="relative bg-white py-32 text-gray-900">
			
			{/* Subtle Background Pattern */}
			<div className="absolute inset-0 opacity-[0.02]" style={{
				backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
				repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`
			}} />

			<div className="relative mx-auto max-w-7xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mx-auto max-w-4xl text-center"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Investor Overview
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl text-gray-900">
						Scalable, Recurring Revenue Model
					</h2>

					<p className="mx-auto mt-6 text-base text-gray-600 leading-relaxed">
						Innovision operates a contract-based services model with long-term government and enterprise engagements, ensuring predictable revenue streams and operational continuity.
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* KEY STRENGTHS LABEL */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-16 mb-8"
				>
					<h3 className="text-xl font-bold text-gray-900 text-center">
						Key Revenue Strengths
					</h3>
				</motion.div>

				{/* STRENGTHS LIST - Unique Design */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-4"
				>
					{strengths.map((strength, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group relative overflow-hidden rounded-lg border-l-4 border-[#EF2B2D] bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-l-8"
						>
							<div className="flex items-start gap-6">
								{/* Number Badge */}
								<div className="shrink-0">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EF2B2D] to-[#d62426] text-2xl font-bold text-white shadow-lg">
										{strength.number}
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<h4 className="text-lg font-bold text-gray-900 leading-snug mb-2">
										{strength.title}
									</h4>
									
									<p className="text-sm text-gray-600 leading-relaxed">
										{strength.description}
									</p>
								</div>

								{/* Arrow Icon */}
								<div className="shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
									<svg className="h-6 w-6 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* OPERATING LEVERAGE */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-16 mx-auto max-w-4xl"
				>
					<div className="rounded-2xl border-2 border-[#EF2B2D]/20 bg-gradient-to-br from-gray-50 to-white p-10 shadow-lg">
						
						<div className="mb-4 inline-flex items-center gap-3">
							<div className="h-10 w-1 bg-[#EF2B2D]" />
							<h3 className="text-2xl font-bold text-gray-900">
								Operating Leverage
							</h3>
						</div>

						<p className="text-base text-gray-700 leading-relaxed">
							As scale increases, operating leverage improves through <span className="font-semibold text-gray-900">standardized training protocols</span>, <span className="font-semibold text-gray-900">centralized technology platforms</span> for workforce management, and <span className="font-semibold text-gray-900">national procurement efficiencies</span> that reduce per-unit deployment costs while maintaining service quality standards.
						</p>

						{/* Metrics Row */}
						<div className="mt-8 grid grid-cols-3 gap-6 border-t border-gray-200 pt-6">
							<div className="text-center">
								<div className="text-3xl font-bold text-[#EF2B2D]">19+</div>
								<div className="mt-1 text-xs uppercase tracking-wider text-gray-600">Years Operating</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-[#EF2B2D]">55+</div>
								<div className="mt-1 text-xs uppercase tracking-wider text-gray-600">Locations</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-[#EF2B2D]">Pan India</div>
								<div className="mt-1 text-xs uppercase tracking-wider text-gray-600">Operations</div>
							</div>
						</div>
					</div>
				</motion.div>

			</div>
		</section>
	);
}
