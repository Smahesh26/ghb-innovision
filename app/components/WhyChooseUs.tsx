"use client";

import { motion } from "framer-motion";

const highlights = [
	{
		label: "17+ Years' Experience",
		detail:
			"17+ years of operational excellence with sustained growth and structured execution.",
	},
	{
		label: "Service Standards",
		detail:
			"Defined SOPs, measurable KPIs, and disciplined service frameworks.",
	},
	{
		label: "55+ Locations",
		detail:
			"Nationwide operational footprint ensuring rapid deployment capability.",
	},
	{
		label: "Training Centers",
		detail:
			"Certified training facilities with continuous skill enhancement modules.",
	},
	{
		label: "Client-Focused Organization",
		detail:
			"Custom-designed security strategies aligned to each client’s needs.",
	},
	{
		label: "Diverse Clientele",
		detail:
			"Trusted by global enterprises, government bodies, and corporates.",
	},
	{
		label: "Risk Management & Audit",
		detail:
			"Internal audit frameworks ensuring proactive risk mitigation.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: 40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] as const },
	},
};

export default function WhyChooseUs() {
	return (
		<section className="relative overflow-hidden bg-white py-32 text-neutral-900">

			<div className="mx-auto max-w-7xl px-6">

				<div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">

					{/* LEFT SIDE */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Why Choose Us
						</p>

						<h2 className="mt-6 text-4xl font-bold sm:text-5xl leading-tight">
							Built on Discipline.
							<br />
							Driven by Standards.
						</h2>

						<p className="mt-8 text-base leading-relaxed text-neutral-600">
							Innovision combines experience, nationwide presence,
							structured training, and strong audit systems to deliver
							reliable manpower and security excellence.
						</p>

						<div className="mt-10 h-1 w-16 bg-[#EF2B2D]" />
					</motion.div>

					{/* RIGHT SIDE TIMELINE */}
					<div className="relative">

						{/* Animated Vertical Line */}
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "100%" }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							className="absolute left-3 top-0 w-[2px] bg-[#EF2B2D]"
						/>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="space-y-14"
						>
							{highlights.map((item, index) => (
								<motion.div
									key={item.label}
									variants={itemVariants}
									className="relative flex gap-8"
								>

									{/* Animated Dot */}
									<div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#EF2B2D] bg-white">
										<motion.div
											animate={{ scale: [1, 1.4, 1] }}
											transition={{
												repeat: Infinity,
												duration: 2,
											}}
											className="h-2 w-2 rounded-full bg-[#EF2B2D]"
										/>
									</div>

									{/* Content */}
									<div className="pb-2">
										<h3 className="text-lg font-semibold text-neutral-900">
											{item.label}
										</h3>

										<p className="mt-3 text-sm leading-relaxed text-neutral-600">
											{item.detail}
										</p>
									</div>

								</motion.div>
							))}
						</motion.div>

					</div>

				</div>

			</div>

		</section>
	);
}
