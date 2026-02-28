"use client";

import {
	motion,
	useMotionValue,
	useTransform,
	animate,
} from "framer-motion";
import { useEffect, useRef, useState, type WheelEvent } from "react";

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
	const numberSizeClass = size === "small" ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl lg:text-5xl";

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
			className="flex min-h-[64px] w-full items-center justify-center"
		>
			<h3 className={`${numberSizeClass} w-full text-center font-bold leading-none text-[#EF2B2D] tabular-nums`}>
				{displayValue.toLocaleString()}{suffix}
			</h3>
		</motion.div>
	);
}

export default function WhyChooseUs() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoFrameRef = useRef<HTMLDivElement>(null);
	const rightScrollRef = useRef<HTMLDivElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isScrollLockActive, setIsScrollLockActive] = useState(false);

	useEffect(() => {
		const target = videoFrameRef.current;
		if (!target || isScrollLockActive) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) {
					setIsScrollLockActive(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.65, rootMargin: "0px 0px -8% 0px" }
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [isScrollLockActive]);

	const togglePlay = async () => {
		if (!videoRef.current) return;
		if (videoRef.current.paused) {
			await videoRef.current.play();
			setIsPlaying(true);
			return;
		}
		videoRef.current.pause();
		setIsPlaying(false);
	};

	const handleSectionWheel = (event: WheelEvent<HTMLElement>) => {
		if (!isScrollLockActive) return;

		const scrollContainer = rightScrollRef.current;
		if (!scrollContainer) return;

		const hasOverflow = scrollContainer.scrollHeight > scrollContainer.clientHeight;
		if (!hasOverflow) return;

		const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
		const deltaY = event.deltaY;
		const atTop = scrollTop <= 0;
		const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

		if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
			event.preventDefault();
			scrollContainer.scrollTop += deltaY;
		}
	};

	return (
		<>
			<section onWheel={handleSectionWheel} className="relative h-screen overflow-hidden bg-white text-neutral-900">
				<div className="mx-auto h-full max-w-7xl px-6">
					<div className="grid h-full min-h-0 gap-12 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-stretch lg:gap-10">
						{/* LEFT SIDE - HEADING AND VIDEO */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="h-full flex flex-col justify-start pt-8 pb-8 lg:sticky lg:top-0 lg:pt-12"
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

							{/* Video Section */}
							<motion.div
								ref={videoFrameRef}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className="relative rounded-2xl overflow-hidden shadow-2xl mt-12"
							>
								<div className="group/player relative w-full overflow-hidden rounded-2xl bg-black aspect-video">
									<video
										ref={videoRef}
										className="h-full w-full rounded-2xl object-cover"
										preload="metadata"
										poster="/images/drone/1.jpg"
										onPlay={() => setIsPlaying(true)}
										onPause={() => setIsPlaying(false)}
										onEnded={() => setIsPlaying(false)}
										playsInline
									>
										<source src="/images/drone/video1.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>

									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

									<motion.button
										type="button"
										onClick={togglePlay}
										whileHover={{ scale: 1.04 }}
										whileTap={{ scale: 0.96 }}
										className="absolute inset-0 z-10 flex items-center justify-center"
										aria-label={isPlaying ? "Pause video" : "Play video"}
									>
										{!isPlaying && (
											<motion.span
												className="absolute h-20 w-20 rounded-full border border-white/30"
												animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0, 0.55] }}
												transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
											/>
										)}
										<motion.span
											className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm"
											animate={isPlaying ? { scale: 1 } : { scale: [1, 1.08, 1] }}
											transition={{ duration: 1.4, repeat: isPlaying ? 0 : Infinity, ease: "easeInOut" }}
										>
											{isPlaying ? (
												<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
													<rect x="6" y="5" width="4" height="14" rx="1" />
													<rect x="14" y="5" width="4" height="14" rx="1" />
												</svg>
											) : (
												<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
													<path d="M8 5v14l11-7-11-7z" />
												</svg>
											)}
										</motion.span>
									</motion.button>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							className="hidden w-px self-stretch rounded-full bg-gradient-to-b from-[#EF2B2D]/15 via-[#EF2B2D] to-[#EF2B2D]/15 lg:block"
							initial={{ opacity: 0, scaleY: 0.2 }}
							whileInView={{ opacity: 1, scaleY: 1 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true, amount: 0.3 }}
						/>

						{/* RIGHT SIDE - SCROLLABLE POINTS */}
						<motion.div
							className="relative flex h-full min-h-0 flex-col py-8 lg:py-10"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.1 }}
							viewport={{ once: true, amount: 0.25 }}
						>
							<div ref={rightScrollRef} className="relative mx-auto flex-1 min-h-0 w-full max-w-2xl overflow-y-auto p-6 sm:p-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
								<div className="space-y-3">
									{highlights.map((item, index) => (
										<motion.div
											key={item.label}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.25 }}
											transition={{ duration: 0.45, delay: index * 0.05 }}
											className="p-3"
										>
											<h3 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
												{item.label}
											</h3>
											<p className="mt-3 text-base leading-relaxed text-neutral-600">
												{item.detail}
											</p>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* STATS SECTION */}
			<section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-14">
				{/* Decorative background elements */}
				<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#EF2B2D]/20 to-transparent" />
				<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#EF2B2D]/20 to-transparent" />
				
				<div className="mx-auto max-w-7xl px-6">
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
