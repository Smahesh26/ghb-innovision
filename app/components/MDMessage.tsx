"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const focusAreas = [
	"Technology-enabled security & surveillance",
	"Expansion in toll and infrastructure operations",
	"Advanced drone and smart monitoring solutions",
	"Deeper penetration across Tier 2 & Tier 3 cities",
];

export default function MDMessage() {
	return (
		<section id="leadership" className="relative bg-white py-32 text-gray-900">
			
			<div className="relative mx-auto max-w-6xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Leadership
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl text-gray-900">
						Message from the Managing Director
					</h2>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* CONTENT GRID */}
				<div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
					
					{/* LEFT: Profile Card */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="mx-auto lg:mx-0"
					>
						<div className="sticky top-24 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg text-center">
							
							<div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#EF2B2D]/20 bg-gradient-to-br from-gray-100 to-gray-200">
								<Image
									src="/images/Randeepsir.jpeg"
									alt="Lt. Col. Randeep Hundal"
									width={192}
									height={192}
									className="h-full w-full object-cover"
									priority
								/>
							</div>

							{/* Name & Title */}
							<h3 className="text-xl font-bold text-gray-900">
								Lt. Col. Randeep Hundal
							</h3>
							<p className="mt-2 text-sm font-semibold text-[#EF2B2D]">
								Managing Director
							</p>
							<p className="mt-3 text-xs text-gray-600 leading-relaxed">
								24+ years of leadership experience in security, infrastructure, and workforce management
							</p>

							{/* Credentials Badge */}
							<div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
								<div className="text-3xl font-bold text-[#EF2B2D]">24+</div>
								<div className="mt-1 text-xs uppercase tracking-wider text-gray-600">Years Leadership</div>
							</div>
						</div>
					</motion.div>

					{/* RIGHT: Message Content */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						
						{/* Opening Quote Decoration */}
						<div className="text-6xl font-bold text-[#EF2B2D]/20 leading-none">"</div>

						{/* Message */}
						<div className="space-y-6 text-base text-gray-700 leading-relaxed -mt-12 pl-8">
							
							<p>
								When we founded <span className="font-semibold text-gray-900">Innovision</span>, our objective was to build a disciplined and dependable services organization. Today, as we enter our next phase of institutional growth and public listing, our vision is broader.
							</p>

							<p className="text-lg font-semibold text-gray-900">
								We aim to become India's most trusted integrated workforce and infrastructure support company—driven by technology, compliance, and operational scale.
							</p>

							<p>
								Aligned with national priorities such as <span className="font-semibold text-gray-900">Viksit Bharat</span> and <span className="font-semibold text-gray-900">Digital India</span>, our next decade will focus on:
							</p>

							{/* Focus Areas */}
							<div className="my-8 space-y-4">
								{focusAreas.map((area, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-4 transition-all duration-300 hover:border-[#EF2B2D]/40 hover:shadow-md"
									>
										<div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#EF2B2D]" />
										<span className="text-sm font-medium text-gray-900">{area}</span>
									</motion.div>
								))}
							</div>

							<p className="text-lg font-semibold text-gray-900 border-l-4 border-[#EF2B2D] pl-4 py-2">
								Our ambition is to build a long-term institution grounded in governance, scale, and stakeholder value creation.
							</p>
						</div>

						{/* Signature */}
						<div className="mt-12 border-t border-gray-200 pt-8">
							<div className="pl-8">
								<div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'cursive' }}>
									Randeep Hundal
								</div>
								<div className="text-sm text-gray-600">
									Managing Director | Innovision Limited
								</div>
							</div>
						</div>

					</motion.div>

				</div>

			</div>
		</section>
	);
}
