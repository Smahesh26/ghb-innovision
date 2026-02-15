"use client";

import { motion } from "framer-motion";

const industries = [
	{
		title: "Corporate & IT Parks",
		description: "Security, facility management, and support staff for enterprise campuses",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
		),
	},
	{
		title: "Manufacturing & Warehousing",
		description: "Industrial security, logistics support, and operational manpower services",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
		),
	},
	{
		title: "Government & PSUs",
		description: "Manpower deployment, facility services, and compliance-driven operations",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
			</svg>
		),
	},
	{
		title: "Healthcare & Hospitals",
		description: "Patient care support, hygiene services, and security for medical facilities",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
			</svg>
		),
	},
	{
		title: "Retail & Hospitality",
		description: "Customer-facing staff, loss prevention, and property maintenance teams",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
			</svg>
		),
	},
	{
		title: "Education & Institutions",
		description: "Campus security, housekeeping, and administrative support services",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 14l9-5-9-5-9 5 9 5z" />
				<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
			</svg>
		),
	},
	{
		title: "Infrastructure & Real Estate",
		description: "Construction support, toll operations, and integrated facility management",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
		),
	},
	{
		title: "Aviation & Transportation",
		description: "Airport services, ground handling staff, and transport logistics support",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

export default function Industries() {
	return (
		<section className="relative bg-white py-32 text-gray-900">
			
			{/* Diagonal Pattern */}
			<div className="absolute inset-0 opacity-[0.02]">
				<div className="absolute inset-0" style={{
					backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)`,
					backgroundSize: '20px 20px'
				}} />
			</div>

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
						Sector Expertise
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl text-gray-900">
						Industries Served
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 leading-relaxed">
						Trusted by leading organizations across diverse sectors with specialized workforce and operational solutions
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* INDUSTRIES - Unique Compact Grid with Icon Emphasis */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-3 grid-cols-2 md:grid-cols-4"
				>
					{industries.map((industry, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -4, scale: 1.05 }}
							className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:border-[#EF2B2D] hover:shadow-2xl"
						>
							{/* Background Gradient on Hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							{/* Content */}
							<div className="relative text-center">
								{/* Large Icon */}
								<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EF2B2D]/10 to-[#EF2B2D]/5 text-[#EF2B2D] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
									{industry.icon}
								</div>

								{/* Title */}
								<h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
									{industry.title}
								</h3>

								{/* Description - Only show on hover */}
								<div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
									<p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-200">
										{industry.description}
									</p>
								</div>
							</div>

							{/* Corner Accent */}
							<div className="absolute top-0 right-0 h-12 w-12 translate-x-6 -translate-y-6 rotate-45 bg-[#EF2B2D]/20 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
						</motion.div>
					))}
				</motion.div>

			</div>
		</section>
	);
}
