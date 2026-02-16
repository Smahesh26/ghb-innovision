"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const milestones = [
	{
		year: "2007",
		title: "Company Founded",
		description: "Established as a manpower and security services provider",
	},
	{
		year: "2011",
		title: "Public Company Conversion",
		description: "Transitioned to public limited company structure",
	},
	{
		year: "2015",
		title: "Facility Management Expansion",
		description: "Integrated facility management services launched nationwide",
	},
	{
		year: "2017",
		title: "Government Partnerships",
		description: "Strategic skill development programs with government agencies",
	},
	{
		year: "2019",
		title: "Toll Operations Launch",
		description: "Expanded into toll plaza management and highway services",
	},
	{
		year: "2022",
		title: "Drone Manufacturing",
		description: "Entered drone-enabled surveillance and technology vertical",
	},
	{
		year: "2023",
		title: "Overseas Expansion",
		description: "International recruitment and workforce deployment services launched",
	},
	{
		year: "2025",
		title: "IPO Phase",
		description: "Preparing for public listing as diversified infrastructure partner",
	},
];

export default function Timeline() {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<section className="relative bg-[#0d0d0f] py-32 text-white overflow-hidden">
			
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
			
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
						Corporate Evolution
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
						Our Evolution: From Security Provider<br />to National Infrastructure Partner
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-base text-white/70 leading-relaxed">
						Founded in 2007 as a manpower and security services company, Innovision has strategically expanded into integrated facility management, government skill development programs, toll operations, payroll management, and drone-enabled surveillance solutions.
					</p>
					
					<p className="mx-auto mt-4 max-w-3xl text-base text-white/70 leading-relaxed">
						Over 19+ years, the company has transitioned from a service provider to a diversified, recurring-revenue, infrastructure support platform serving mission-critical operations nationwide.
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* TIMELINE */}
				<div className="mt-20 relative">
					
					{/* Horizontal Line */}
					<div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
					
					{/* Desktop: Horizontal Grid */}
					<div className="hidden lg:grid grid-cols-8 gap-4">
						{milestones.map((milestone, index) => (
							<motion.div
								key={milestone.year}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								viewport={{ once: true }}
								className="relative flex flex-col items-center"
							>
								{/* Dot */}
								<div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#EF2B2D] bg-[#0d0d0f] shadow-[0_0_30px_rgba(239,43,45,0.4)]">
									<span className="text-xl font-bold text-[#EF2B2D]">
										{milestone.year.slice(2)}
									</span>
								</div>

								{/* Content Card */}
								<div className="mt-6 rounded-lg border border-white/10 bg-[#161618] p-5 text-center h-full min-h-[200px] flex flex-col">
									<h3 className="text-sm font-bold text-white uppercase tracking-wider">
										{milestone.title}
									</h3>
									<p className="mt-3 text-xs text-white/60 leading-relaxed flex-1">
										{milestone.description}
									</p>
									<div className="mt-4 pt-3 border-t border-white/10">
										<span className="text-2xl font-bold text-[#EF2B2D]">
											{milestone.year}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Mobile/Tablet: Vertical Timeline */}
					<div className="lg:hidden space-y-8">
						{milestones.map((milestone, index) => (
							<motion.div
								key={milestone.year}
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative flex gap-6"
							>
								{/* Left: Year Dot */}
								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#EF2B2D] bg-[#0d0d0f] shadow-[0_0_30px_rgba(239,43,45,0.4)]">
										<span className="text-xl font-bold text-[#EF2B2D]">
											{milestone.year.slice(2)}
										</span>
									</div>
									{index < milestones.length - 1 && (
										<div className="w-[2px] flex-1 bg-gradient-to-b from-[#EF2B2D]/50 to-transparent mt-4" />
									)}
								</div>

								{/* Right: Content */}
								<div className="flex-1 pb-8">
									<div className="rounded-lg border border-white/10 bg-[#161618] p-6">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-lg font-bold text-white">
												{milestone.title}
											</h3>
											<span className="text-xl font-bold text-[#EF2B2D]">
												{milestone.year}
											</span>
										</div>
										<p className="text-sm text-white/60 leading-relaxed">
											{milestone.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

			</div>
		</section>
	);
}
