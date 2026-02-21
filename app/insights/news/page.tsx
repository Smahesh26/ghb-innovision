import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

export const metadata = {
	title: "News & Press Releases - Innovision Security",
	description: "Latest news, press releases, and media updates from Innovision Security.",
};

export default function NewsPage() {
	const newsItems = [
		{
			date: "February 21, 2026",
			title: "Innovision Security IPO Launch Announced",
			excerpt: "Innovision Security Limited announces its upcoming IPO, marking a major milestone in the company's growth journey.",
			category: "Corporate News",
		},
		{
			date: "January 15, 2026",
			title: "Expansion into 5 New States",
			excerpt: "Innovision Security expands its operations into 5 new states, strengthening its nationwide presence.",
			category: "Business Expansion",
		},
		{
			date: "December 10, 2025",
			title: "Industry Recognition: Best Security Training Provider",
			excerpt: "Awarded as the Best Security Training Provider for the third consecutive year by industry peers.",
			category: "Awards",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights
						</p>
						<h1 className="mt-4 text-5xl font-bold text-white">
							News & Press Releases
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-white/70">
							Stay updated with the latest news, announcements, and media coverage from Innovision Security.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</motion.div>

					{/* News Grid */}
					<div className="grid gap-8 md:grid-cols-3">
						{newsItems.map((item, index) => (
							<motion.article
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-[#EF2B2D]/50 hover:bg-white/10"
							>
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
									{item.category}
								</p>
								<p className="mt-2 text-xs text-white/60">{item.date}</p>
								<h3 className="mt-4 text-xl font-bold text-white group-hover:text-[#EF2B2D] transition">
									{item.title}
								</h3>
								<p className="mt-4 text-sm text-white/70">{item.excerpt}</p>
								<a
									href="#"
									className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] hover:text-white transition"
								>
									Read More →
								</a>
							</motion.article>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
