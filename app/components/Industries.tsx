"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
	{
		title: "Corporate & IT Parks",
		description: "Security, facility management, and support staff for enterprise campuses",
		image: "/images/IndustriesServed/Corporate & IT Parks.jpg",
	},
	{
		title: "Manufacturing & Warehousing",
		description: "Industrial security, logistics support, and operational manpower services",
		image: "/images/IndustriesServed/Manufacturing & Warehousing.jpg",
	},
	{
		title: "Government & PSUs",
		description: "Manpower deployment, facility services, and compliance-driven operations",
		image: "/images/IndustriesServed/Government & PSUs.jpg",
	},
	{
		title: "Healthcare & Hospitals",
		description: "Patient care support, hygiene services, and security for medical facilities",
		image: "/images/IndustriesServed/Healthcare & Hospitals.jpg",
	},
	{
		title: "Retail & Hospitality",
		description: "Customer-facing staff, loss prevention, and property maintenance teams",
		image: "/images/IndustriesServed/Retail & Hospitality.jpg",
	},
	{
		title: "Education & Institutions",
		description: "Campus security, housekeeping, and administrative support services",
		image: "/images/IndustriesServed/Education & Institutions.jpg",
	},
	{
		title: "Infrastructure & Real Estate",
		description: "Construction support, toll operations, and integrated facility management",
		image: "/images/IndustriesServed/Infrastructure & Real Estate.jpg",
	},
	{
		title: "Aviation & Transportation",
		description: "Airport services, ground handling staff, and transport logistics support",
		image: "/images/IndustriesServed/Aviation & Transportation.jpg",
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

				{/* INDUSTRIES */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				>
					{industries.map((industry, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -6 }}
							className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_10px_30px_rgba(17,24,39,0.08)] transition-all duration-300 hover:border-[#EF2B2D]/35 hover:shadow-[0_16px_40px_rgba(17,24,39,0.14)]"
						>
							<div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
								<Image
									src={encodeURI(industry.image)}
									alt={industry.title}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
							</div>

							<div className="p-5">
								<div className="mb-3 h-0.5 w-10 rounded-full bg-[#EF2B2D]/70 transition-all duration-300 group-hover:w-14 group-hover:bg-[#EF2B2D]" />
								<h3 className="text-base font-bold leading-snug text-gray-900">
									{industry.title}
								</h3>
								<p className="mt-2 mb-0 text-sm leading-relaxed text-gray-600">
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
