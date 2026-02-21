import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "Gallery - Innovision Security",
	description: "Gallery of Innovision Security operations, events, facilities, and team moments.",
};

export default function GalleryPage() {
	const galleryCategories = [
		{
			category: "Operations",
			description: "Security operations and field deployments",
			count: "24 images",
		},
		{
			category: "Training Centers",
			description: "State-of-the-art training facilities",
			count: "18 images",
		},
		{
			category: "Corporate Events",
			description: "Company events, conferences, and seminars",
			count: "32 images",
		},
		{
			category: "Team & Culture",
			description: "Team moments and company culture",
			count: "28 images",
		},
		{
			category: "Certifications",
			description: "Ceremonies and certification events",
			count: "15 images",
		},
		{
			category: "Facilities",
			description: "Office spaces and operational centers",
			count: "20 images",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<div className="mb-20">
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights
						</p>
						<h1 className="mt-4 text-5xl font-bold text-white">
							Photo Gallery
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-white/70">
							Explore our operations, training facilities, events, and the people behind Innovision Security.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</div>

					{/* Gallery Categories Grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{galleryCategories.map((item, index) => (
							<a
								key={item.category}
								href="#"
								className="group relative block overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] to-white/5 p-8 backdrop-blur-md transition hover:scale-[1.02] hover:border-[#EF2B2D]/50"
							>
								{/* Background gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/10 to-transparent opacity-0 transition group-hover:opacity-100" />

								{/* Content */}
								<div className="relative">
									{/* Icon */}
									<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EF2B2D]/20 text-[#EF2B2D] group-hover:bg-[#EF2B2D]/30 transition">
										<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
									</div>

									{/* Title */}
									<h3 className="text-2xl font-bold text-white group-hover:text-[#EF2B2D] transition">
										{item.category}
									</h3>

									{/* Description */}
									<p className="mt-3 text-sm text-white/70">
										{item.description}
									</p>

									{/* Count */}
									<p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
										{item.count}
									</p>

									{/* Arrow */}
									<div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#EF2B2D] group-hover:gap-3 transition">
										View Gallery
										<span className="transition group-hover:translate-x-1">→</span>
									</div>
								</div>
							</a>
						))}
					</div>

					{/* Featured Section */}
					<div className="mt-24">
						<h2 className="text-3xl font-bold text-white mb-8">
							Featured Highlights
						</h2>

						{/* Featured Grid - 2x2 with one larger */}
						<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
							{/* Featured Large */}
							<div className="lg:col-span-2 lg:row-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] via-white/5 to-[#EF2B2D]/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-80 hover:border-[#EF2B2D]/50 transition group cursor-pointer">
								<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#EF2B2D]/20 text-[#EF2B2D] group-hover:bg-[#EF2B2D]/30 transition">
									<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white text-center">
									Innovision Security Events
								</h3>
								<p className="mt-4 text-center text-white/70">
									Explore our latest corporate events, seminars, and team gatherings.
								</p>
							</div>

							{/* Smaller Grid Items */}
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] to-white/5 backdrop-blur-md p-6 hover:border-[#EF2B2D]/50 transition cursor-pointer min-h-40 flex items-end"
								>
									<div className="w-full">
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
											Featured
										</p>
										<h4 className="mt-2 text-lg font-bold text-white">
											Gallery Item {item}
										</h4>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CTA */}
					<div className="mt-20 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-12 text-center">
						<h3 className="text-2xl font-bold text-white">
							Share Your Story
						</h3>
						<p className="mt-4 text-white/70">
							Have photos or stories from Innovision Security? Contact us to contribute to our gallery.
						</p>
						<a
							href="/contact"
							className="mt-6 inline-block rounded-md bg-[#EF2B2D] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]"
						>
							Get in Touch
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
