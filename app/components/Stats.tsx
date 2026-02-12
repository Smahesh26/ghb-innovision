"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
	{ label: "17+ Years' Experience" },
	{ label: "Service Standards" },
	{ label: "55+ Locations" },
	{ label: "Training Centers" },
	{ label: "Client-Focused Organization" },
	{ label: "Diverse Clientele" },
	{ label: "Risk Management & Audit" },
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
	},
};

export default function Stats() {
	return (
		<section className="relative overflow-hidden py-32 text-white perspective-[1200px]">

			{/* Background Image */}
			<Image
				src="/images/2.png"
				alt="Why Innovision Security"
				fill
				className="object-cover scale-110"
				sizes="100vw"
			/>

			{/* Dark Overlays */}
			<div className="absolute inset-0 bg-black/75" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

			{/* 3D Glow Effects */}
			<div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#EF2B2D]/30 blur-3xl" />
			<div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#EF2B2D]/20 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="max-w-3xl"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Why Choose Us
					</p>

					<h2 className="mt-6 text-4xl font-bold sm:text-5xl">
						Built on Discipline.
						<br />
						Driven by Standards.
					</h2>

					<p className="mt-6 text-base text-white/70">
						Innovision combines experience, nationwide presence,
						structured training, and strong audit systems to deliver
						reliable manpower and security excellence.
					</p>

					<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* 3D Glass Cards */}
				<motion.ul
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{highlights.map((item, index) => (
						<motion.li
							key={item.label}
							variants={itemVariants}
							whileHover={{
								rotateX: 6,
								rotateY: -6,
								scale: 1.05,
							}}
							className={`group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-500
							${index === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
						>
							{/* Glow */}
							<div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.25),transparent_70%)] opacity-0 transition group-hover:opacity-100" />

							<div className="relative flex items-center gap-4">
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B2D] shadow-[0_0_20px_rgba(239,43,45,0.6)]">
									<svg
										viewBox="0 0 24 24"
										className="h-4 w-4 text-white"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M5 13l4 4L19 7" />
									</svg>
								</span>

								<span className="text-sm font-semibold text-white">
									{item.label}
								</span>
							</div>

						</motion.li>
					))}
				</motion.ul>

			</div>
		</section>
	);
}
