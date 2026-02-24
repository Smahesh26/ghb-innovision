"use client";

import {
	motion,
	useMotionValue,
	useTransform,
	animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
	{
		label: "Nationwide Presence",
		detail:
			"Operating across 55+ offices with active deployment at 2000+ sites, ensuring localized presence and rapid response capabilities.",
	},
	{
		label: "20,000+ Workforce",
		detail:
			"Large trained and vetted workforce ready for immediate deployment across security, facility management, and specialized services.",
	},
	{
		label: "ISO Certified Operations",
		detail:
			"Compliance with ISO 9001, 45001, 27001, and other international standards ensuring quality, safety, and data security.",
	},
	{
		label: "Integrated Solutions",
		detail:
			"End-to-end services from security and facility management to skill development, toll operations, and drone-enabled surveillance.",
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

function Counter({ value, suffix = "", size = "default" }: { value: number; suffix?: string; size?: "small" | "default" }) {
	const [isInView, setIsInView] = useState(false);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const [displayValue, setDisplayValue] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const numberSizeClass = size === "small" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl";

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, value, {
				duration: 2,
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
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			onViewportEnter={() => setIsInView(true)}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<h3 className={`${numberSizeClass} font-bold text-[#EF2B2D] tabular-nums`}>
				{displayValue.toLocaleString()}{suffix}
			</h3>
		</motion.div>
	);
}

export default function WhyChooseUs() {
	const sequenceRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [revealedCount, setRevealedCount] = useState(1);

	useEffect(() => {
		let rafId: number | null = null;

		const updateTimeline = () => {
			if (!sequenceRef.current) {
				return;
			}

			const rect = sequenceRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const startOffset = viewportHeight * 0.64;
			const scrollableDistance = Math.max(1, rect.height - viewportHeight * 0.35);
			const rawProgress = (startOffset - rect.top) / scrollableDistance;
			const safeProgress = Number.isFinite(rawProgress) ? rawProgress : 0;
			const progress = Math.min(1, Math.max(0, safeProgress));

			const nextIndex = Math.min(
				highlights.length - 1,
				Math.floor(progress * highlights.length)
			);

			setActiveIndex(Number.isFinite(nextIndex) ? nextIndex : 0);
			setRevealedCount((prev) => {
				const nextCount = Number.isFinite(nextIndex) ? nextIndex + 1 : 1;
				return Math.max(1, Math.max(prev, nextCount));
			});
		};

		const onScroll = () => {
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
			rafId = requestAnimationFrame(updateTimeline);
		};

		updateTimeline();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateTimeline);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updateTimeline);
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
		};
	}, []);

	return (
		<>
			<section className="relative overflow-hidden bg-white py-32 text-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
						{/* LEFT SIDE - HEADING AND VIDEO */}
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

							{/* Video Section */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className="relative rounded-2xl overflow-hidden shadow-2xl mt-12"
							>
								<div className="relative bg-black aspect-video w-full">
									<iframe
										width="100%"
										height="100%"
										src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
										title="Innovision Services Video"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="rounded-2xl"
									/>
								</div>
							</motion.div>
						</motion.div>

						{/* RIGHT SIDE - STICKY SCROLL TIMELINE */}
						<div
							ref={sequenceRef}
							className="relative pt-20 pb-36"
							style={{ minHeight: `calc(100vh + ${(highlights.length - 1) * 40}vh)` }}
						>
							<div className="sticky top-[176px] pt-10 lg:top-[188px] lg:pt-12">
								<div className="relative">
									<div className="absolute bottom-4 left-4 top-4 w-px bg-[#EF2B2D]/25" />

									<div className="space-y-14">
										{highlights.map((item, index) => {
											const isVisible = index < revealedCount;
											const isCurrent = index === activeIndex;

											return (
												<motion.div
													key={item.label}
													className="relative grid grid-cols-[2rem_1fr] items-start gap-6"
													initial={false}
													animate={{
														opacity: isVisible ? 1 : 0.3,
														x: isVisible ? 0 : 28,
													}}
													transition={{ duration: 0.45, ease: [0.0, 0.0, 0.2, 1.0] }}
												>
													<motion.div
														className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EF2B2D] bg-white"
														initial={false}
														animate={{
															scale: isVisible ? 1 : 0.85,
															opacity: isVisible ? 1 : 0.55,
														}}
														transition={{ duration: 0.35 }}
													>
														<motion.div
															className="h-2 w-2 rounded-full bg-[#EF2B2D]"
															animate={
																isCurrent
																	? { scale: [1, 1.35, 1], opacity: [1, 0.8, 1] }
																	: { scale: 1, opacity: isVisible ? 1 : 0.45 }
															}
															transition={
																isCurrent
																	? { repeat: Infinity, duration: 1.4 }
																	: { duration: 0.2 }
															}
														/>
													</motion.div>

													<motion.div
														className="pb-2"
														initial={false}
														animate={{ opacity: isVisible ? 1 : 0.45, y: isVisible ? 0 : 8 }}
														transition={{ duration: 0.35 }}
													>
														<h3 className="text-lg font-semibold text-neutral-900">
															{item.label}
														</h3>

														<p className="mt-3 text-sm leading-relaxed text-neutral-600">
															{item.detail}
														</p>
													</motion.div>
												</motion.div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* STATS SECTION */}
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
