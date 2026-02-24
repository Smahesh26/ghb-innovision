"use client";

import { motion } from "framer-motion";

const industries = [
	{
		title: "Corporate & IT Parks",
		description: "Security, facility management, and support staff for enterprise campuses",
		image: "/images/banner1.png",
	},
	{
		title: "Manufacturing & Warehousing",
		description: "Industrial security, logistics support, and operational manpower services",
		image: "/images/clients-services/operationalexcellence.jpg",
	},
	{
		title: "Government & PSUs",
		description: "Manpower deployment, facility services, and compliance-driven operations",
		image: "/images/banner2.png",
	},
	{
		title: "Healthcare & Hospitals",
		description: "Patient care support, hygiene services, and security for medical facilities",
		image: "/images/banner3.png",
	},
	{
		title: "Retail & Hospitality",
		description: "Customer-facing staff, loss prevention, and property maintenance teams",
		image: "/images/banner4.png",
	},
	{
		title: "Education & Institutions",
		description: "Campus security, housekeeping, and administrative support services",
		image: "/images/skill-training2.jpg",
	},
	{
		title: "Infrastructure & Real Estate",
		description: "Construction support, toll operations, and integrated facility management",
		image: "/images/clients-services/tollroad.jpg",
	},
	{
		title: "Aviation & Transportation",
		description: "Airport services, ground handling staff, and transport logistics support",
		image: "/images/drone/7.jpg",
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
					className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				>
					{industries.map((industry, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -4, scale: 1.02 }}
							className="group relative h-[200px] w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/20 shadow-xl"
						>
							<div
								className="absolute inset-0 bg-center bg-cover"
								style={{ backgroundImage: `url(${industry.image})` }}
							/>
							<div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45" />

							<div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
								<h3 className="mb-2 text-base font-bold leading-tight">
									{industry.title}
								</h3>
								<p className="mb-0 text-sm leading-relaxed text-white/90">
									{industry.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>

			</div>
		</section>
	);
}
