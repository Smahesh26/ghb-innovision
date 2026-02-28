"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
	{
		image: "/images/tollbanner.jpeg",
		title: "Toll Plaza Management",
		description:
			"Comprehensive toll management, traffic systems, and highway maintenance for seamless operations.",
	},
	{
		image: "/images/securitybanner.jpg",
		title: "Manned Private Security Services",
		description:
			"Trusted teams, proven processes, and uncompromising safety standards.",
	},
	{
		image: "/images/integratedfacilitybanner.jpg",
		title: "Integrated facility management",
		description:
			"Your go-to partner for premium facility management that runs smoothly.",
	},
	{
		image: "/images/skillsbanner.jpg",
		title: "Transforming India into a global hub of skills",
		description:
			"Building trained, dependable workforces for every industry we serve.",
	},
	// {
	// 	image: "/images/services-home/ManpwerandSourcing.jpg",
	// 	title: "Manpower Sourcing & Payroll",
	// 	description:
	// 		"End-to-end recruitment, onboarding, payroll, and compliance for scalable workforce deployment.",
	// },
	// {
	// 	image: "/images/services-home/Overseas.jpg",
	// 	title: "Overseas Recruitment",
	// 	description:
	// 		"Global talent sourcing, documentation, and deployment support with compliance-first processes.",
	// },
	// {
	// 	image: "/images/services-home/drone.jpg",
	// 	title: "Drone Manufacturing & Training",
	// 	description:
	// 		"Certified drone training and deployment support for surveillance, inspection, and critical operations.",
	// },
];

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % slides.length);
	}, []);

	const prevSlide = useCallback(() => {
		setActiveIndex((prev) =>
			prev === 0 ? slides.length - 1 : prev - 1
		);
	}, []);

	useEffect(() => {
		const interval = setInterval(nextSlide, 6000);
		return () => clearInterval(interval);
	}, [nextSlide]);

	return (
		<>
			{/* HERO SECTION */}
			<section className="relative h-screen w-full overflow-hidden">
				{/* Background Slider */}
				<AnimatePresence mode="wait">
					<motion.div
						key={slides[activeIndex].image}
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
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
					<AnimatePresence mode="wait">
						<motion.div
							key={activeIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							className="w-full text-center"
						>
							<div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
								<span className="h-px w-12 bg-[#EF2B2D]" />
								<span>Trust - Discipline - Protection</span>
								<span className="h-px w-12 bg-[#EF2B2D]" />
							</div>

							<h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl text-center">
								{slides[activeIndex].title}
							</h1>

							<p className="mt-5 mx-auto max-w-2xl text-white/80 text-center">
								{slides[activeIndex].description}
							</p>

							<div className="mx-auto mt-7 w-full max-w-2xl">
								<div className="h-[3px] w-full bg-white/25">
									<motion.div
										key={activeIndex}
										initial={{ width: "0%" }}
										animate={{ width: "100%" }}
										transition={{ duration: 6, ease: "linear" }}
										className="h-full bg-[#EF2B2D]"
									/>
								</div>
							</div>

							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<Link
									href="/services"
									className="bg-[#EF2B2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[#d62426]"
								>
									Our Services
								</Link>

								<Link
									href="/contact"
									className="border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
								>
									Contact Us
								</Link>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Arrows */}
				<button
					onClick={prevSlide}
					aria-label="Previous slide"
					className="absolute bottom-0 left-0 z-10 rounded-tr-xl bg-gradient-to-br from-[#EF2B2D]/55 to-black/70 p-4 text-2xl text-white shadow-[0_10px_22px_rgba(239,43,45,0.3)] backdrop-blur-sm transition-all duration-300 hover:from-[#EF2B2D] hover:to-[#991b1b]"
				>
					‹
				</button>

				<button
					onClick={nextSlide}
					aria-label="Next slide"
					className="absolute bottom-0 right-0 z-10 rounded-tl-xl bg-gradient-to-bl from-[#EF2B2D]/55 to-black/70 p-4 text-2xl text-white shadow-[0_10px_22px_rgba(239,43,45,0.3)] backdrop-blur-sm transition-all duration-300 hover:from-[#EF2B2D] hover:to-[#991b1b]"
				>
					›
				</button>
			</section>


		</>
	);
}
