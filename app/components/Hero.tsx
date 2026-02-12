"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
	{
		image: "/images/2.png",
		title: "India's top manpower security service provider",
		description:
			"Trusted teams, proven processes, and uncompromising safety standards.",
	},
	{
		image: "/images/3.png",
		title: "Integrated facility management",
		description:
			"Your go-to partner for premium facility management that runs smoothly.",
	},
	{
		image: "/images/4.png",
		title: "Transforming India into a global hub of skills",
		description:
			"Building trained, dependable workforces for every industry we serve.",
	},
];

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () =>
		setActiveIndex((prev) => (prev + 1) % slides.length);

	const prevSlide = () =>
		setActiveIndex((prev) =>
			prev === 0 ? slides.length - 1 : prev - 1
		);

	useEffect(() => {
		const interval = setInterval(nextSlide, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{/* HERO SECTION */}
			<section className="relative h-screen w-full overflow-hidden">
				{/* Background Slider */}
				<AnimatePresence mode="wait">
					<motion.div
						key={slides[activeIndex].image}
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className="absolute inset-0"
					>
						<Image
							src={slides[activeIndex].image}
							alt={slides[activeIndex].title}
							fill
							priority
							className="object-cover object-center"
						/>
					</motion.div>
				</AnimatePresence>

				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

				{/* Content */}
				<div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
					<div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
						<span className="h-px w-12 bg-[#EF2B2D]" />
						<span>Trust - Discipline - Protection</span>
						<span className="h-px w-12 bg-[#EF2B2D]" />
					</div>

					<h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
						{slides[activeIndex].title}
					</h1>

					<p className="mt-5 max-w-2xl text-white/80">
						{slides[activeIndex].description}
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							href="/contact"
							className="bg-[#EF2B2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[#d62426]"
						>
							Request Security Audit
						</Link>

						<Link
							href="/services"
							className="border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
						>
							Our Services
						</Link>
					</div>
				</div>

				{/* Arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80"
				>
					‹
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80"
				>
					›
				</button>

				{/* Dots */}
				<div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`h-3 w-3 rounded-full transition ${
								index === activeIndex
									? "bg-[#EF2B2D]"
									: "bg-white/50 hover:bg-white"
							}`}
						/>
					))}
				</div>
			</section>

			{/* ATTACHED STATS SECTION */}
			<section className="w-full bg-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">

						{[
							{ value: "1000+", label: "Happy Customers" },
							{ value: "2000+", label: "Active Sites" },
							{ value: "55+", label: "Offices" },
							{ value: "20000+", label: "Workforce" },
						].map((item, index) => (
							<div
								key={index}
								className={`flex flex-col items-center text-center ${
									index !== 0 ? "sm:border-l sm:border-neutral-200" : ""
								}`}
							>
								<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#EF2B2D] bg-[#EF2B2D]/10">
									<svg
										viewBox="0 0 24 24"
										className="h-7 w-7 text-[#EF2B2D]"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.8"
									>
										<circle cx="12" cy="8" r="4" />
										<path d="M20 21a8 8 0 0 0-16 0" />
									</svg>
								</div>

								<h3 className="text-3xl font-bold text-[#EF2B2D] sm:text-4xl">
									{item.value}
								</h3>

								<p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800">
									{item.label}
								</p>
							</div>
						))}

					</div>
				</div>
			</section>
		</>
	);
}
