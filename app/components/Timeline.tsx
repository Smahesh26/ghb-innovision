"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type UIEvent, type WheelEvent } from "react";

const milestones = [
	{
		year: "2007",
		title: "Company Founded",
		description: "Established as a manpower and security services provider",
	},
	{
		year: "2011",
		title: "Public Company Conversion",
		description: "Transitioned to public limited company structure",
	},
	{
		year: "2015",
		title: "Facility Management Expansion",
		description: "Integrated facility management services launched nationwide",
	},
	{
		year: "2017",
		title: "Government Partnerships",
		description: "Strategic skill development programs with government agencies",
	},
	{
		year: "2019",
		title: "Toll Operations Launch",
		description: "Expanded into toll plaza management and highway services",
	},
	{
		year: "2022",
		title: "Drone Manufacturing",
		description: "Entered drone-enabled surveillance and technology vertical",
	},
	{
		year: "2023",
		title: "Overseas Expansion",
		description: "International recruitment and workforce deployment services launched",
	},
	{
		year: "2025",
		title: "IPO Phase",
		description: "Preparing for public listing as diversified infrastructure partner",
	},
];

export default function Timeline() {
	const timelineScrollRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isScrollLockActive, setIsScrollLockActive] = useState(false);

	const rowVariants = {
		hidden: { opacity: 0, y: 32 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
		},
	};

	useEffect(() => {
		const target = timelineScrollRef.current;
		if (!target || isScrollLockActive) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) {
					setIsScrollLockActive(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [isScrollLockActive]);

	const handleSectionWheel = (event: WheelEvent<HTMLElement>) => {
		if (!isScrollLockActive) return;

		const scrollContainer = timelineScrollRef.current;
		if (!scrollContainer) return;

		const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
		if (maxScroll <= 0) return;

		const deltaY = event.deltaY;
		const atTop = scrollContainer.scrollTop <= 1;
		const atBottom = scrollContainer.scrollTop >= maxScroll - 1;

		if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
			event.preventDefault();
			scrollContainer.scrollBy({ top: deltaY, behavior: "auto" });
		}
	};

	const handleTimelineScroll = (event: UIEvent<HTMLDivElement>) => {
		const element = event.currentTarget;
		const maxScroll = element.scrollHeight - element.clientHeight;
		if (maxScroll <= 0) {
			setScrollProgress(0);
			return;
		}
		setScrollProgress(element.scrollTop / maxScroll);
	};

	return (
		<section onWheel={handleSectionWheel} className="relative h-[100svh] min-h-[100svh] overflow-hidden bg-[#0d0d0f] text-white">
			
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
			
			<div className="relative mx-auto flex h-full max-w-7xl flex-col px-6">
				
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="shrink-0 pt-12 text-center md:pt-14"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
						Corporate Evolution
					</p>

					<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
						From Security Provider<br />to Infrastructure Partner
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-base text-white/70 leading-relaxed">
						Since 2007, Innovision has evolved from manpower and security services into a diversified, recurring-revenue infrastructure platform supporting mission-critical operations across India.
					</p>

					<div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
				</motion.div>

				{/* TIMELINE */}
				<div
					ref={timelineScrollRef}
					onScroll={handleTimelineScroll}
					className="relative mt-10 flex-1 min-h-0 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-12 md:pr-2"
				>
					<div className="relative pb-10 md:pb-16">
						<div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/15" />
						<motion.div
							className="absolute left-[5px] top-0 w-px bg-[#EF2B2D] shadow-[0_0_12px_rgba(239,43,45,0.7)]"
							animate={{ height: `${scrollProgress * 100}%` }}
							transition={{ duration: 0.18, ease: "linear" }}
						/>

						<div className="space-y-8 md:space-y-0">
							{milestones.map((milestone, index) => (
								<motion.div
									key={milestone.year}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: false, amount: 0.35 }}
									className="grid grid-cols-[1fr] gap-5 md:min-h-[calc(100vh-340px)] md:grid-cols-[220px_1fr] md:gap-10"
								>
									<div className="relative">
										<motion.div variants={rowVariants} className="sticky top-1/2 z-10 flex -translate-y-1/2 items-center gap-3 md:gap-4">
											<span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-[#EF2B2D] shadow-[0_0_18px_rgba(239,43,45,0.55)]" />
											<span className="text-xl font-bold tracking-[0.08em] text-[#EF2B2D] md:text-3xl">
												{milestone.year}
											</span>
										</motion.div>
									</div>

									<motion.article variants={rowVariants} className="flex h-full flex-col justify-center p-6 md:p-8">
										<h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
											{milestone.title}
										</h3>
										<p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
											{milestone.description}
										</p>
									</motion.article>
								</motion.div>
							))}
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
