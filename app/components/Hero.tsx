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
					className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-4 text-2xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#EF2B2D] hover:scale-110"
				>
					‹
				</button>

				<button
					onClick={nextSlide}
					aria-label="Next slide"
					className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-4 text-2xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#EF2B2D] hover:scale-110"
				>
					›
				</button>

				{/* Dots */}
				<div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
							className={`h-3 rounded-full transition-all duration-300 ${
								index === activeIndex
									? "w-10 bg-[#EF2B2D] shadow-lg shadow-[#EF2B2D]/50"
									: "w-3 bg-white/50 hover:bg-white hover:w-6"
							}`}
						/>
					))}
				</div>
			</section>


		</>
	);
}
