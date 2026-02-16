"use client";

import { motion } from "framer-motion";

const technologies = [
	{
		title: "AI Powered Process Automation",
		description: "Advanced facial recognition, behavior analytics, and real-time threat detection systems",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
			</svg>
		),
	},
	{
		title: "Drone Technology",
		description: "Surveillance drones, inspection systems, and aerial monitoring for infrastructure assets",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
			</svg>
		),
	},
	{
		title: "Biometric Attendance Systems",
		description: "RFID, fingerprint, and facial recognition for accurate workforce tracking across sites",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
			</svg>
		),
	},
	{
		title: "Centralized Command Centers",
		description: "Real-time monitoring dashboards with integrated CCTV, analytics, and incident response",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
	{
		title: "Cloud-Based Payroll & HR",
		description: "Automated payroll processing, compliance tracking, and workforce management platforms",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
			</svg>
		),
	},
	{
		title: "Mobile Workforce Apps",
		description: "Field staff applications for reporting, task management, and GPS-enabled tracking",
		icon: (
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
			</svg>
		),
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

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
	},
};

export default function Technology() {
	return (
		<section className="relative bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] py-32 text-white overflow-hidden">
			
			{/* Animated Grid Lines */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(90deg, #EF2B2D 1px, transparent 1px),
					linear-gradient(0deg, #EF2B2D 1px, transparent 1px)`,
					backgroundSize: '80px 80px'
				}} />
			</div>

			{/* Glow Effects */}
			<div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/20 blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

			<div className="relative mx-auto max-w-7xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Digital Transformation
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
						Technology & Innovation
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-base text-white/70 leading-relaxed">
						Leveraging cutting-edge technology platforms to deliver efficient, transparent, and scalable workforce and infrastructure management solutions
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* TECHNOLOGIES - 2 Row Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-6"
				>
					{/* First Row - 3 Cards */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{technologies.slice(0, 3).map((tech, index) => (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ scale: 1.03 }}
								className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#EF2B2D]/40"
							>
								{/* Glow on hover */}
								<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.15),transparent_70%)]" />
								</div>

								<div className="relative flex flex-1 flex-col">
									{/* Icon - Fixed size */}
									<div className="mb-6 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#EF2B2D]/20 p-4 text-[#EF2B2D]">
										{tech.icon}
									</div>

									{/* Title - Fixed height */}
									<h3 className="mb-4 h-14 text-xl font-bold leading-tight text-white">
										{tech.title}
									</h3>

									{/* Description - Fixed height */}
									<p className="h-20 text-sm leading-relaxed text-white/60">
										{tech.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Second Row - 3 Cards */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{technologies.slice(3, 6).map((tech, index) => (
							<motion.div
								key={index + 3}
								variants={cardVariants}
								whileHover={{ scale: 1.03 }}
								className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#EF2B2D]/40"
							>
								{/* Glow on hover */}
								<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.15),transparent_70%)]" />
								</div>

								<div className="relative flex flex-1 flex-col">
									{/* Icon - Fixed size */}
									<div className="mb-6 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#EF2B2D]/20 p-4 text-[#EF2B2D]">
										{tech.icon}
									</div>

									{/* Title - Fixed height */}
									<h3 className="mb-4 h-14 text-xl font-bold leading-tight text-white">
										{tech.title}
									</h3>

									{/* Description - Fixed height */}
									<p className="h-20 text-sm leading-relaxed text-white/60">
										{tech.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* INNOVATION STATEMENT - Updated for Dark Theme */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-12 backdrop-blur-xl">
						<div className="grid gap-8 lg:grid-cols-2 items-center">
							
							{/* Left */}
							<div>
								<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EF2B2D]/30 bg-[#EF2B2D]/10 px-4 py-2">
									<svg className="h-4 w-4 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
									</svg>
									<span className="text-xs font-semibold text-white">Digital India Aligned</span>
								</div>
								<h3 className="text-3xl font-bold text-white mb-4">
									Future-Ready Infrastructure
								</h3>
								<p className="text-base text-white/70 leading-relaxed">
									Our technology roadmap aligns with national digital infrastructure initiatives, enabling seamless integration with government platforms, real-time data visibility, and enhanced operational efficiency across all service verticals.
								</p>
							</div>

							{/* Right - Stats Grid */}
							<div className="grid grid-cols-2 gap-4">
								<div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm">
									<div className="text-4xl font-bold text-[#EF2B2D]">100%</div>
									<div className="mt-2 text-xs uppercase tracking-wider text-white/70">Digital Attendance</div>
								</div>
								<div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm">
									<div className="text-4xl font-bold text-[#EF2B2D]">24/7</div>
									<div className="mt-2 text-xs uppercase tracking-wider text-white/70">Command Centers</div>
								</div>
								<div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm">
									<div className="text-4xl font-bold text-[#EF2B2D]">Real-Time</div>
									<div className="mt-2 text-xs uppercase tracking-wider text-white/70">Monitoring</div>
								</div>
								<div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm">
									<div className="text-4xl font-bold text-[#EF2B2D]">Cloud</div>
									<div className="mt-2 text-xs uppercase tracking-wider text-white/70">Infrastructure</div>
								</div>
							</div>
						</div>

						{/* Decorative Element */}
						<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#EF2B2D]/20 blur-2xl" />
					</div>
				</motion.div>

			</div>
		</section>
	);
}
