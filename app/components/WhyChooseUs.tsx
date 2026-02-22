"use client";

import { motion } from "framer-motion";

const highlights = [
	{
		label: "1,00,000+ Trained Candidates",
		detail:
			"Successfully trained over one lakh candidates with industry-relevant skills and certifications, enabling consistent and rapid deployment across projects.",
	},
	{
		label: "Toll Plaza Expertise",
		detail:
			"Managed with standardized SOPs, revenue control systems, and transaction-level monitoring to ensure accuracy, compliance, and operational efficiency.",
	},
	{
		label: "PSARA Authorization",
		detail:
			"Authorized to operate Private Security Training Institutes under PSARA regulations, ensuring compliant and certified security personnel.",
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
							Built on discipline.
							<br />
							Driven by standards.
						</h2>

						<p className="mt-8 text-base leading-relaxed text-neutral-600">
							Innovision combines toll plaza expertise, nationwide presence,
							structured training, and strong audit systems to deliver
							reliable toll operations, skilled manpower, and security services.
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
