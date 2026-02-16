"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

const slides = [
	{
		image: "/images/banner4.png",
		title: "Toll Operations & Highway Maintenance Services",
		description:
			"Comprehensive toll management, traffic systems, and highway maintenance for seamless operations.",
	},
	{
		image: "/images/banner1.png",
		title: "Integrated Infrastructure & Workforce Management Platform",
		description:
			"Trusted teams, proven processes, and uncompromising safety standards.",
	},
	{
		image: "/images/banner2.png",
		title: "Integrated facility management",
		description:
			"Your go-to partner for premium facility management that runs smoothly.",
	},
	{
		image: "/images/banner3.png",
		title: "Transforming India into a global hub of skills",
		description:
			"Building trained, dependable workforces for every industry we serve.",
	},
];

const statsData = [
	{ 
		value: 1000, 
		label: "Happy Customers", 
		suffix: "+",
		icon: (
			<svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
				<path d="M8 14h8" strokeLinecap="round" />
			</svg>
		)
	},
	{ 
		value: 2000, 
		label: "Active Sites", 
		suffix: "+",
		icon: (
			<svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
				<circle cx="12" cy="10" r="3" />
			</svg>
		)
	},
	{ 
		value: 55, 
		label: "Offices", 
		suffix: "+",
		icon: (
			<svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
				<rect x="4" y="2" width="16" height="20" rx="2" />
				<path d="M9 22V12h6v10" />
				<path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01" strokeLinecap="round" />
			</svg>
		)
	},
	{ 
		value: 20000, 
		label: "Workforce", 
		suffix: "+",
		icon: (
			<svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		)
	},
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
	const [isInView, setIsInView] = useState(false);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, value, {
				duration: 2.5,
				ease: "easeOut",
			});
			return controls.stop;
		}
	}, [isInView, count, value]);

	useEffect(() => {
		const unsubscribe = rounded.on("change", (latest) => {
			setDisplayValue(latest);
		});
		return unsubscribe;
	}, [rounded]);

	return (
		<motion.h3
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}
			className="text-3xl font-bold text-[#EF2B2D] sm:text-4xl lg:text-5xl tabular-nums"
		>
			{displayValue.toLocaleString()}{suffix}
		</motion.h3>
	);
}

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
			<section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
				{/* Decorative background elements */}
				<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#EF2B2D]/20 to-transparent" />
				<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#EF2B2D]/20 to-transparent" />
				
				<div className="mx-auto max-w-7xl px-6">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						{/* <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#EF2B2D]">
							Our Impact
						</h2> */}
						{/* <div className="mx-auto mt-2 h-1 w-16 bg-[#EF2B2D]" /> */}
					</motion.div>

					<div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
						{statsData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className={`group relative flex flex-col items-center text-center ${
									index !== 0 ? "sm:border-l sm:border-gray-200" : ""
								}`}
							>
								{/* Hover glow effect */}
								<div className="absolute inset-0 -z-10 scale-75 rounded-full bg-[#EF2B2D]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
								
								{/* Icon container */}
								<motion.div 
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#EF2B2D] bg-gradient-to-br from-[#EF2B2D]/10 to-[#EF2B2D]/5 shadow-lg transition-all duration-300 group-hover:border-[#EF2B2D] group-hover:bg-[#EF2B2D] group-hover:shadow-[0_0_30px_rgba(239,43,45,0.4)]"
								>
									<div className="text-[#EF2B2D] transition-colors duration-300 group-hover:text-white">
										{item.icon}
									</div>
								</motion.div>

								{/* Counter */}
								<Counter value={item.value} suffix={item.suffix} />

								{/* Label */}
								<p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
									{item.label}
								</p>

								{/* Bottom accent line on hover */}
								<div className="mt-4 h-0.5 w-0 bg-[#EF2B2D] transition-all duration-300 group-hover:w-12" />
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
