"use client";

import {
	motion,
	AnimatePresence,
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
	const [sliderIndex, setSliderIndex] = useState(0);
	const playerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

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

	const toggleMute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = !videoRef.current.muted;
		setIsMuted(videoRef.current.muted);
	};

	const toggleFullscreen = async () => {
		if (!playerRef.current) return;
		if (document.fullscreenElement) {
			await document.exitFullscreen();
			return;
		}
		await playerRef.current.requestFullscreen();
	};

	const handleSeek = (nextTime: number) => {
		if (!videoRef.current) return;
		videoRef.current.currentTime = nextTime;
		setCurrentTime(nextTime);
	};

	const formatTime = (value: number) => {
		if (!Number.isFinite(value)) return "00:00";
		const mins = Math.floor(value / 60)
			.toString()
			.padStart(2, "0");
		const secs = Math.floor(value % 60)
			.toString()
			.padStart(2, "0");
		return `${mins}:${secs}`;
	};

	const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

	useEffect(() => {
		const sliderInterval = window.setInterval(() => {
			setSliderIndex((prev) => (prev + 1) % highlights.length);
		}, 2600);

		return () => window.clearInterval(sliderInterval);
	}, []);

	useEffect(() => {
		if (!videoRef.current) return;
		videoRef.current.muted = isMuted;
	}, [isMuted]);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(document.fullscreenElement === playerRef.current);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, []);

	return (
		<>
			<section className="relative overflow-hidden bg-white pt-32 pb-14 text-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-stretch lg:gap-10">
						{/* LEFT SIDE - HEADING AND VIDEO */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="h-full lg:sticky lg:top-28 lg:self-start"
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
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className="relative rounded-2xl overflow-hidden shadow-2xl mt-12"
							>
								<div ref={playerRef} className="group/player relative w-full overflow-hidden rounded-2xl bg-black aspect-video">
									<video
										ref={videoRef}
										className="h-full w-full rounded-2xl object-cover"
										preload="metadata"
										onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
										onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
										onPlay={() => setIsPlaying(true)}
										onPause={() => setIsPlaying(false)}
										onEnded={() => setIsPlaying(false)}
										playsInline
									>
										<source src="/images/Innovision%20Video.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>

									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

									<button
										type="button"
										onClick={togglePlay}
										className="absolute inset-0 z-10 flex items-center justify-center"
										aria-label={isPlaying ? "Pause video" : "Play video"}
									>
										<span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-black/60">
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
										</span>
									</button>

									<div className="absolute inset-x-0 bottom-0 z-20 p-4 transition-opacity duration-300 group-hover/player:opacity-100 group-focus-within/player:opacity-100 lg:opacity-95">
										<div className="rounded-xl border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md">
											<input
												type="range"
												min={0}
												max={duration || 0}
												step={0.1}
												value={currentTime}
												onChange={(event) => handleSeek(Number(event.target.value))}
												className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-[#EF2B2D]"
												style={{
													background: `linear-gradient(to right, #EF2B2D ${progress}%, rgba(255,255,255,0.2) ${progress}%)`,
												}}
												aria-label="Video progress"
											/>
											<div className="mt-2 flex items-center justify-between gap-3">
												<div className="text-xs font-semibold tracking-[0.12em] text-white/90 tabular-nums">
													{formatTime(currentTime)} / {formatTime(duration)}
												</div>

												<div className="flex items-center gap-2">
													<button
														type="button"
														onClick={toggleMute}
														className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/30 text-white transition hover:border-white/60 hover:bg-white/10"
														aria-label={isMuted ? "Unmute video" : "Mute video"}
													>
														{isMuted ? (
															<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
																<path d="M11 5 6 9H3v6h3l5 4V5z" />
																<path d="m23 9-6 6" />
																<path d="m17 9 6 6" />
															</svg>
														) : (
															<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
																<path d="M11 5 6 9H3v6h3l5 4V5z" />
																<path d="M15.5 8.5a5 5 0 0 1 0 7" />
																<path d="M18.5 6a9 9 0 0 1 0 12" />
															</svg>
														)}
													</button>

													<button
														type="button"
														onClick={toggleFullscreen}
														className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/30 text-white transition hover:border-white/60 hover:bg-white/10"
														aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
													>
														{isFullscreen ? (
															<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
																<path d="M9 15H5v4" />
																<path d="M15 15h4v4" />
																<path d="M9 9H5V5" />
																<path d="M15 9h4V5" />
															</svg>
														) : (
															<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
																<path d="M9 3H3v6" />
																<path d="M15 3h6v6" />
																<path d="M9 21H3v-6" />
																<path d="M15 21h6v-6" />
															</svg>
														)}
													</button>
												</div>
											</div>
										</div>
									</div>
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

						{/* RIGHT SIDE - ANIMATED POINTERS */}
						<motion.div
							className="relative pt-8 pb-4 lg:py-0"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.1 }}
							viewport={{ once: true, amount: 0.25 }}
						>
							<div className="relative mx-auto h-full min-h-[460px] w-full max-w-2xl overflow-hidden rounded-2xl bg-white/80 p-6 backdrop-blur-md sm:p-7">
								<AnimatePresence mode="wait">
									<motion.div
										key={highlights[sliderIndex].label}
										initial={{ opacity: 0, y: 36 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -36 }}
										transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
										className="flex h-full flex-col justify-center"
									>
										<div className="flex items-start gap-4">
											<div className="relative mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#EF2B2D] bg-white">
												<motion.div
													className="h-2.5 w-2.5 rounded-full bg-[#EF2B2D]"
													animate={{ scale: [1, 1.25, 1], opacity: [1, 0.85, 1] }}
													transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
												/>
											</div>
											<div className="min-w-0">
												<h3 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
													{highlights[sliderIndex].label}
												</h3>
												<p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
													{highlights[sliderIndex].detail}
												</p>
											</div>
										</div>

										<div className="mt-10 flex gap-2">
											{highlights.map((item, index) => (
												<span
													key={item.label}
													className={`h-1.5 rounded-full transition-all duration-500 ${
														index === sliderIndex ? "w-10 bg-[#EF2B2D]" : "w-3 bg-[#EF2B2D]/25"
													}`}
												/>
											))}
										</div>
									</motion.div>
								</AnimatePresence>
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
