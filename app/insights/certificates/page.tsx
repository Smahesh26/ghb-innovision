"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CertificatesPage() {
	const certificates = [
		{
			sr: "1",
			name: "ISO 9001:2015",
			body: "Euro UK Accreditation Licensing Services",
			number: "QMS/230620/5715",
			validFrom: "01-May-25",
			validTill: "30-Apr-28",
			image: "/images/certifications/ISO 9001.2015.jpg",
			description: "Quality Management System",
			category: "Quality",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "2",
			name: "SA 8000:2014",
			body: "Euro UK Accreditation Licensing Services",
			number: "SA/230620/7846",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
			image: "/images/certifications/SA 8000.2014.jpg",
			description: "Social Accountability",
			category: "Social",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "3",
			name: "ISO 18788:2015",
			body: "Accreditation Board For Certification Bodies",
			number: "ICI/1197026/25",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
			image: "/images/certifications/ISO 18788.2015.jpg",
			description: "Management System for Private Security Operations",
			category: "Security",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "4",
			name: "ISO 28000:2007",
			body: "Accreditation Board For Certification Bodies",
			number: "ICI/1197151/25",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
			image: "/images/certifications/ISO 28000-2007.png",
			description: "Supply Chain Security Management",
			category: "Security",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "5",
			name: "ISO 14001:2015",
			body: "QCL Certification Pvt. Ltd.",
			number: "QEMS24070432",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
			image: "/images/certifications/ISO 14001.2015.jpg",
			description: "Environmental Management System",
			category: "Environment",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "6",
			name: "ISO 27001:2022",
			body: "QCL Certification Pvt. Ltd.",
			number: "QCLIS2407041105",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
			image: "/images/certifications/ISO 27001.2022.jpg",
			description: "Information Security Management",
			category: "Security",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "7",
			name: "ISO 45001:2018",
			body: "QCL Certification Pvt. Ltd.",
			number: "QO24070491108",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
			image: "/images/certifications/ISO 45001.2018.jpg",
			description: "Occupational Health & Safety Management",
			category: "Safety",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "8",
			name: "CMMI Maturity Level 3",
			body: "UK Certification & Inspection Ltd.",
			number: "QU-2024070426",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
			image: "/images/certifications/CMMI Maturity level.jpg",
			description: "Capability Maturity Model Integration",
			category: "Process",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "9",
			name: "ISO 10667-2:2011",
			body: "QVA Certification",
			number: "QVA-ISLE-24-174250",
			validFrom: "17-Jan-24",
			validTill: "16-Jan-27",
			image: "/images/certifications/ISO 10667.2011.jpg",
			description: "Assessment Service Delivery",
			category: "Assessment",
			color: "from-[#EF2B2D] to-red-600",
		},
		{
			sr: "10",
			name: "ISO 21001:2018",
			body: "QVA Certification",
			number: "QVA-ISLE-24-174248",
			validFrom: "17-Jan-24",
			validTill: "16-Jan-27",
			image: "/images/certifications/ISO 21001-2018.jpg",
			description: "Educational Organizations Management",
			category: "Education",
			color: "from-[#EF2B2D] to-red-600",
		},
	];

	const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

	return (
		<>
			<Header />
			
			{/* Hero Section with Parallax */}
			<section className="relative min-h-[62vh] bg-gradient-to-br from-neutral-900 via-black to-neutral-900 pt-32 pb-12 overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					<motion.div 
						className="absolute top-20 right-20 w-96 h-96 bg-[#EF2B2D]/20 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.2, 0.4, 0.2],
						}}
						transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.div 
						className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
						animate={{
							scale: [1.3, 1, 1.3],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					/>
					
					{/* Floating particles */}
					{[...Array(30)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-white/40 rounded-full"
							initial={{ 
								x: Math.random() * 100 + "%", 
								y: Math.random() * 100 + "%",
								opacity: 0 
							}}
							animate={{
								y: [null, (Math.random() - 0.5) * 300],
								opacity: [0, 0.8, 0],
							}}
							transition={{
								duration: 4 + Math.random() * 3,
								repeat: Infinity,
								delay: Math.random() * 3,
							}}
						/>
					))}

					{/* Grid pattern */}
					<div className="absolute inset-0 opacity-[0.03]" style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
						backgroundSize: '60px 60px'
					}} />
				</div>

				<div className="relative mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-center"
					>
						<motion.div 
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-flex items-center gap-3 rounded-full border border-[#EF2B2D]/30 bg-[#EF2B2D]/10 backdrop-blur-sm px-8 py-3 mb-6"
						>
							<motion.svg 
								className="h-6 w-6 text-[#EF2B2D]" 
								fill="currentColor" 
								viewBox="0 0 20 20"
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							>
								<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
							</motion.svg>
							<span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Certifications & Compliance</span>
						</motion.div>
						
						<motion.h1 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6 leading-tight"
						>
							Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF2B2D] to-red-500">Certifications</span>
						</motion.h1>
						
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed"
						>
							Demonstrating excellence through internationally recognized quality, security, and compliance standards. Our commitment to governance and best practices.
						</motion.p>

						{/* Animated Stats */}
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="flex flex-wrap justify-center gap-8 mt-12"
						>
							{[
								{ number: "10+", label: "ISO Certifications" },
								{ number: "100%", label: "Compliance Rate" },
								{ number: "3", label: "Years Validity" },
							].map((stat, idx) => (
								<motion.div
									key={idx}
									whileHover={{ scale: 1.05, y: -5 }}
									className="relative group"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
									<div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6">
										<div className="text-4xl font-bold text-red-300 mb-1">{stat.number}</div>
										<div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* View Mode Toggle */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="flex items-center justify-center gap-4 mt-12"
						>
							<span className="text-white/70 text-sm font-semibold">View:</span>
							<div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
								<button
									onClick={() => setViewMode("grid")}
									className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
										viewMode === "grid"
											? "bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white shadow-lg"
											: "text-white/70 hover:text-white"
									}`}
								>
									<span className="flex items-center gap-2">
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
										</svg>
										Gallery
									</span>
								</button>
								<button
									onClick={() => setViewMode("table")}
									className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
										viewMode === "table"
											? "bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white shadow-lg"
											: "text-white/70 hover:text-white"
									}`}
								>
									<span className="flex items-center gap-2">
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
										</svg>
										Table
									</span>
								</button>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div 
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</section>

			{/* Main Content */}
			<main className="bg-gradient-to-b from-white via-neutral-50 to-white pb-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="pt-14"
					>
						<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg sm:p-8">
							<div className="flex flex-wrap items-start justify-between gap-4">
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.28em] text-[#EF2B2D]">Certified Standards</p>
									<h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">Innovision&apos;s ISO Certificates</h2>
									<p className="mt-2 text-sm text-neutral-600 sm:text-base">Recognized certifications across quality, security, compliance, and management systems.</p>
								</div>
								<div className="inline-flex items-center rounded-full bg-[#EF2B2D]/10 px-4 py-2 text-sm font-semibold text-[#EF2B2D]">
									Total Certificates: {certificates.length}
								</div>
							</div>
						</div>
					</motion.section>

					{/* Grid View - Certificate Gallery */}
					{viewMode === "grid" && (
						<section className="py-20">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="mb-16 text-center"
							>
								<h2 className="text-5xl font-bold text-neutral-900 mb-4 lg:text-6xl">
									Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF2B2D] to-red-600">Certifications</span>
								</h2>
								<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
									Browse our certification portfolio
								</p>
							</motion.div>

							{/* Certificate Cards Grid */}
							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
								{certificates.map((cert, index) => (
									<motion.div
										key={cert.number}
										initial={{ opacity: 0, y: 40, scale: 0.96 }}
										whileInView={{ opacity: 1, y: 0, scale: 1 }}
										transition={{ 
											duration: 0.65, 
											delay: index * 0.1,
											ease: [0.22, 1, 0.36, 1]
										}}
										viewport={{ once: true }}
										className="group relative"
										whileHover={{ y: -2 }}
									>
										{/* Outer glow with certificate color */}
										<motion.div 
											className={`absolute -inset-2 bg-gradient-to-r ${cert.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700`}
											whileHover={{ scale: 1.05 }}
										/>
										
										{/* Card container */}
										<div className="relative bg-white rounded-3xl border-2 border-neutral-200 group-hover:border-[#EF2B2D]/40 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
											{/* Certificate Image */}
											<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
												<Image
													src={cert.image}
													alt={cert.name}
													fill
													className="object-contain p-4"
													sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
												/>

												{/* Category badge */}
												<div className="absolute top-4 right-4">
													<span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${cert.color} text-white rounded-full shadow-lg`}>
														{cert.category}
													</span>
												</div>
											</div>

											{/* Certificate Info */}
											<div className="p-6">
												{/* Certificate Number Badge */}
												<motion.div 
													className="inline-block mb-4"
													whileHover={{ scale: 1.05 }}
												>
													<span className="px-4 py-1.5 rounded-xl bg-neutral-100 text-sm font-bold text-neutral-700">
														#{cert.sr}
													</span>
												</motion.div>

												{/* Certificate Name */}
												<h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight group-hover:text-[#EF2B2D] transition-colors">
													{cert.name}
												</h3>

												{/* Description */}
												<p className="text-sm text-neutral-600 mb-4">
													{cert.description}
												</p>

												{/* Divider */}
												<div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent mb-4" />

												{/* Validity Badge */}
												<div className="flex items-center gap-2 text-xs text-neutral-500">
													<svg className="w-4 h-4 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
													</svg>
													<span className="font-semibold">Valid till {cert.validTill}</span>
												</div>
											</div>

											{/* Bottom colored accent */}
											<motion.div
												className={`h-2 bg-gradient-to-r ${cert.color}`}
												initial={{ scaleX: 0 }}
												whileInView={{ scaleX: 1 }}
												transition={{ duration: 1, delay: index * 0.1 }}
												viewport={{ once: true }}
												style={{ transformOrigin: "left" }}
											/>
										</div>

										{/* Certificate number in corner */}
										<motion.div 
											className={`absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} shadow-lg flex items-center justify-center text-white font-bold border-4 border-white`}
											whileHover={{ scale: 1.2, rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											{cert.sr}
										</motion.div>
									</motion.div>
								))}
							</div>

						</section>
					)}

					{/* Table View - Detailed Information */}
					{viewMode === "table" && (
						<section className="py-20">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="mb-12"
							>
								<h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">
									Detailed Certification Information
								</h2>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="overflow-hidden rounded-3xl border-2 border-neutral-200 bg-white shadow-2xl"
							>
								<div className="border-b border-neutral-200 bg-neutral-50 px-6 py-4">
									<h3 className="text-lg font-bold text-neutral-900">Innovision&apos;s ISO Certificates</h3>
									<p className="mt-1 text-sm text-neutral-600">S. No. • Certificate / Name • Certification Body • Certificate Number • Valid From • Valid Till</p>
								</div>
								<div className="overflow-x-auto">
									<table className="w-full text-left text-sm">
										<thead className="bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white">
											<tr>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">No.</th>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">Certificate Name</th>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">Certification Body</th>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">Certificate Number</th>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">Valid From</th>
												<th className="px-6 py-4 font-bold uppercase tracking-wider">Valid Till</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-neutral-200">
											{certificates.map((cert, index) => (
												<motion.tr
													key={cert.number}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ duration: 0.4, delay: index * 0.05 }}
													viewport={{ once: true }}
													className="transition hover:bg-red-50 group"
												>
													<td className="px-6 py-4">
														<span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${cert.color} text-white font-bold text-sm`}>
															{cert.sr}
														</span>
													</td>
													<td className="px-6 py-4">
														<div className="font-bold text-neutral-900 group-hover:text-[#EF2B2D] transition-colors">
															{cert.name}
														</div>
														<div className="text-xs text-neutral-500 mt-1">{cert.description}</div>
													</td>
													<td className="px-6 py-4 text-neutral-700">{cert.body}</td>
													<td className="px-6 py-4 font-mono text-xs text-neutral-600">{cert.number}</td>
													<td className="px-6 py-4 text-neutral-700">{cert.validFrom}</td>
													<td className="px-6 py-4">
														<span className="inline-flex items-center gap-1 text-[#EF2B2D] font-semibold">
															<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
															</svg>
															{cert.validTill}
														</span>
													</td>
												</motion.tr>
											))}
										</tbody>
									</table>
								</div>
							</motion.div>
						</section>
					)}

				</div>
			</main>
			<Footer />
		</>
	);
}
