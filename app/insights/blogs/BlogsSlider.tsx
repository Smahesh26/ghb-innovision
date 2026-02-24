"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { BlogPost } from "./data";

type BlogsSliderProps = {
	blogs: BlogPost[];
};

export default function BlogsSlider({ blogs }: BlogsSliderProps) {
	const sliderRef = useRef<HTMLDivElement>(null);

	const scrollSlider = (direction: "left" | "right") => {
		const slider = sliderRef.current;
		if (!slider) return;

		const scrollAmount = slider.clientWidth * 0.9;
		slider.scrollBy({
			left: direction === "right" ? scrollAmount : -scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<div className="mb-5 flex justify-end gap-3">
				<button
					type="button"
					onClick={() => scrollSlider("left")}
					aria-label="Previous blogs"
					className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-[#EF2B2D] hover:text-[#EF2B2D]"
				>
					←
				</button>
				<button
					type="button"
					onClick={() => scrollSlider("right")}
					aria-label="Next blogs"
					className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-[#EF2B2D] hover:text-[#EF2B2D]"
				>
					→
				</button>
			</div>

			<div
				ref={sliderRef}
				className="-mx-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				<div className="flex snap-x snap-mandatory gap-6 px-2">
					{blogs.map((blog) => (
						<Link
							key={blog.title}
							href={`/insights/blogs/${blog.slug}`}
							className="block w-[85vw] shrink-0 snap-start md:w-[48%] xl:w-[32%]"
						>
							<article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)]">
								<div className="relative h-56 w-full overflow-hidden">
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										className="object-cover transition duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
									<div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
										{blog.category}
									</div>
								</div>

								<div className="flex flex-col p-7">
									<div className="flex items-center justify-between gap-4">
										<p className="text-xs text-black/50">{blog.date}</p>
										<span className="text-xs text-black/60">{blog.readTime}</span>
									</div>

									<h3 className="mt-4 min-h-[92px] text-2xl font-bold text-[#111111] transition group-hover:text-[#EF2B2D]">
										{blog.title}
									</h3>

									<p className="mt-4 text-sm leading-relaxed text-black/70">
										{blog.excerpt}
									</p>

									<div className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] transition group-hover:gap-3">
										Read Article
										<span>→</span>
									</div>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
