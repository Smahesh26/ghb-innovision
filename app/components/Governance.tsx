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
		<section id="governance" className="relative bg-gradient-to-b from-gray-50 to-white py-32 text-gray-900">
			
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
					className="mt-20"
				>
					<div className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white p-12 shadow-2xl">
						
						{/* Decorative corner accents */}
						<div className="absolute left-0 top-0 h-24 w-24 border-l-4 border-t-4 border-[#EF2B2D] opacity-20" />
						<div className="absolute right-0 top-0 h-24 w-24 border-r-4 border-t-4 border-[#EF2B2D] opacity-20" />
						<div className="absolute bottom-0 left-0 h-24 w-24 border-b-4 border-l-4 border-[#EF2B2D] opacity-20" />
						<div className="absolute bottom-0 right-0 h-24 w-24 border-b-4 border-r-4 border-[#EF2B2D] opacity-20" />
						
						{/* Background pattern */}
						<div className="absolute inset-0 opacity-[0.03]" style={{
							backgroundImage: `repeating-linear-gradient(45deg, #EF2B2D 0px, #EF2B2D 2px, transparent 2px, transparent 20px)`
						}} />

						<div className="relative">
							<div className="mb-10 text-center">
								<div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-2 shadow-md">
									<svg className="h-5 w-5 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span className="text-xs font-bold uppercase tracking-wider text-gray-700">Compliance Excellence</span>
								</div>
								
								<h3 className="text-3xl font-bold text-gray-900">
									Certifications & Licensing
								</h3>
								<p className="mt-4 text-base text-gray-600 font-medium">
									Internationally recognized quality, safety, and compliance standards
								</p>
								
								<div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-[#EF2B2D] to-transparent" />
							</div>

							{/* ISO Grid */}
							<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
								{certifications.map((cert, index) => (
									<motion.div
										key={cert.code}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.08 }}
										viewport={{ once: true }}
										className="group relative"
									>
										{/* Outer glow on hover */}
										<div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#EF2B2D]/20 to-gray-300/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
										
										{/* Card */}
										<div className="relative overflow-hidden rounded-xl border-2 border-gray-300 bg-white p-6 text-center shadow-lg transition-all duration-300 group-hover:border-[#EF2B2D] group-hover:shadow-xl">
											<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
											
											{/* Badge icon */}
											<div className="relative mb-3">
												<svg className="mx-auto h-8 w-8 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
												</svg>
											</div>
											
											<div className="relative text-xl font-black text-gray-900 tracking-tight">
												{cert.code}
											</div>
											<div className="relative mt-2 text-xs font-semibold text-gray-600 leading-tight">
												{cert.title}
											</div>
										</div>
									</motion.div>
								))}
							</div>

							{/* PSARA Badge - More Distinguished */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
								className="mt-10"
							>
								<div className="relative overflow-hidden rounded-2xl border-4 border-[#EF2B2D]/30 bg-gradient-to-br from-[#EF2B2D]/5 via-white to-[#EF2B2D]/5 p-8 shadow-xl">
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
									
									<div className="relative flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:text-left">
										{/* Shield Icon */}
										<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] shadow-lg">
											<svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
											</svg>
										</div>
										
										{/* Text */}
										<div className="flex-1">
											<div className="text-xl font-black text-gray-900">
												PSARA Licensed Security Operations
											</div>
											<div className="mt-1 text-sm font-medium text-gray-600">
												Private Security Agencies Regulation Act Compliant
											</div>
										</div>
										
										{/* Verified badge */}
										<div className="flex shrink-0 items-center gap-2 rounded-full border-2 border-green-600 bg-green-50 px-4 py-2">
											<svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className="text-xs font-bold uppercase tracking-wider text-green-700">Verified</span>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
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
