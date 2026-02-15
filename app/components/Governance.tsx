"use client";

import { motion } from "framer-motion";

const governanceStructure = [
	{
		title: "Independent Board of Directors",
		description: "Diverse board composition with independent directors ensuring objective oversight and strategic guidance",
	},
	{
		title: "Audit Committee",
		description: "Financial reporting oversight, internal control evaluation, and external auditor coordination",
	},
	{
		title: "Risk Management Committee",
		description: "Enterprise risk assessment, mitigation strategies, and compliance monitoring frameworks",
	},
	{
		title: "Structured Internal Control Systems",
		description: "Documented processes, segregation of duties, and periodic internal audit protocols",
	},
	{
		title: "Transparent Disclosure Practices",
		description: "Timely financial reporting, material event disclosures, and stakeholder communication",
	},
	{
		title: "SEBI Compliance Framework",
		description: "Full alignment with Securities and Exchange Board of India regulations and listing requirements",
	},
];

const certifications = [
	{ code: "ISO 9001", title: "Quality Management" },
	{ code: "ISO 14001", title: "Environmental Management" },
	{ code: "ISO 45001", title: "Occupational Health & Safety" },
	{ code: "ISO 27001", title: "Information Security" },
	{ code: "ISO 18788", title: "Security Operations Management" },
	{ code: "SA 8000", title: "Social Accountability" },
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
	},
};

export default function Governance() {
	return (
		<section className="relative bg-gradient-to-b from-gray-50 to-white py-32 text-gray-900">
			
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
						Institutional Standards
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl text-gray-900">
						Governance & Compliance Framework
					</h2>

					<p className="mx-auto mt-6 text-base text-gray-700 leading-relaxed">
						Innovision operates under institutional-grade governance standards aligned with SEBI regulations and public market discipline.
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* GOVERNANCE STRUCTURE - Unique Split Design */}
				<div className="mt-16 grid gap-8 lg:grid-cols-2">
					
					{/* Left Column */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-3"
					>
						{governanceStructure.slice(0, 3).map((item, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#EF2B2D]/60 hover:-translate-y-1"
							>
								<div className="flex items-start gap-4">
									{/* Number Badge */}
									<div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EF2B2D] text-lg font-bold text-white">
										{(index + 1).toString().padStart(2, '0')}
									</div>
									
									<div className="flex-1">
										<h3 className="text-base font-bold text-gray-900 mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-gray-600 leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
								
								{/* Side Accent Bar */}
								<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EF2B2D] transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
							</motion.div>
						))}
					</motion.div>

					{/* Right Column */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-3"
					>
						{governanceStructure.slice(3).map((item, index) => (
							<motion.div
								key={index + 3}
								variants={itemVariants}
								className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#EF2B2D]/60 hover:-translate-y-1"
							>
								<div className="flex items-start gap-4">
									{/* Number Badge */}
									<div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EF2B2D] text-lg font-bold text-white">
										{(index + 4).toString().padStart(2, '0')}
									</div>
									
									<div className="flex-1">
										<h3 className="text-base font-bold text-gray-900 mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-gray-600 leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
								
								{/* Side Accent Bar */}
								<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EF2B2D] transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* CERTIFICATIONS & LICENSING */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-lg">
						
						<div className="mb-8 text-center">
							<h3 className="text-2xl font-bold text-gray-900">
								Certifications & Licensing
							</h3>
							<p className="mt-3 text-sm text-gray-600">
								Internationally recognized quality, safety, and compliance standards
							</p>
						</div>

						{/* ISO Grid */}
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
							{certifications.map((cert, index) => (
								<motion.div
									key={cert.code}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									viewport={{ once: true }}
									className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 text-center transition-all duration-300 hover:border-[#EF2B2D]/40 hover:shadow-md"
								>
									<div className="text-lg font-bold text-[#EF2B2D]">
										{cert.code}
									</div>
									<div className="mt-2 text-xs text-gray-600 leading-tight">
										{cert.title}
									</div>
									
									{/* Checkmark Icon */}
									<div className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
										<svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
										</svg>
									</div>
								</motion.div>
							))}
						</div>

						{/* PSARA Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="mt-8 flex items-center justify-center gap-3 rounded-lg border border-[#EF2B2D]/20 bg-[#EF2B2D]/5 p-4"
						>
							<svg className="h-6 w-6 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
							<div>
								<span className="text-sm font-bold text-gray-900">PSARA Licensed Security Operations</span>
								<span className="ml-2 text-xs text-gray-600">| Private Security Agencies Regulation Act</span>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* BOTTOM STATEMENT */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<p className="mx-auto max-w-3xl text-base text-gray-700 leading-relaxed">
						Our governance model reflects readiness for sustained public market participation and long-term stakeholder trust.
					</p>
				</motion.div>

			</div>
		</section>
	);
}
