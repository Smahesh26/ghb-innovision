"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
	const videoTestimonials = [
		{
			company: "Manufacturing Client",
			person: "Plant Security Head",
			duration: "2:45",
			preview: "Rapid deployment and disciplined guard force delivery improved our compliance standards.",
			poster: "/images/video-poster-en.jpg",
		},
		{
			company: "Infrastructure Operator",
			person: "Operations Director",
			duration: "3:12",
			preview: "Integrated manpower and toll operations support helped us scale reliably across sites.",
			poster: "/images/video-poster-hi.jpg",
		},
	];

	return (
		<section className="relative overflow-hidden bg-white py-20 text-neutral-900">
			<div className="relative mx-auto max-w-7xl px-6">
				{/* VIDEO TESTIMONIALS SECTION */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-[0_18px_40px_rgba(15,15,18,0.10)] sm:p-12"
				>
					<div className="mb-12 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]">Client Voice</p>
						<h3 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Video Testimonials</h3>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						{videoTestimonials.map((video, index) => (
							<motion.div
								key={video.company}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 transition hover:border-[#EF2B2D]/50"
							>
								{/* Video Placeholder */}
								<div className="relative aspect-video w-full overflow-hidden">
									<Image src={video.poster} alt={video.company} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
									<div className="absolute inset-0 bg-black/35" />
									{/* Play button */}
									<motion.div
										whileHover={{ scale: 1.1 }}
										className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#EF2B2D]/80 text-white shadow-[0_0_30px_rgba(239,43,45,0.6)]"
									>
										<svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
											<path d="M5 3v18l15-9z" />
										</svg>
									</motion.div>

									{/* Duration badge */}
									<div className="absolute top-4 right-4 rounded bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
										{video.duration}
									</div>
								</div>

								{/* Content */}
								<div className="p-6">
									<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] mb-2">
										{video.company}
									</p>
									<h4 className="mb-3 text-sm font-bold text-neutral-900">
										{video.person}
									</h4>
									<p className="line-clamp-2 text-sm text-neutral-600">
										"{video.preview}"
									</p>
									<Link href="/investors/ipo-disclaimer/confirm" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#EF2B2D] transition group-hover:gap-3">
										Watch Video
										<span>→</span>
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
