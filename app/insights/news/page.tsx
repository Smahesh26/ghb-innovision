import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "News & Press Releases - Innovision Security",
	description: "Latest news, press releases, and media updates from Innovision Security.",
};

export default function NewsPage() {
	const newsItems = [
		{
			title: "Innovision Commences Operations at Nemili–Sriperumpudur Toll Plaza, Tamil Nadu",
			source: "Innovision Blog",
			date: "10 November 2025",
			excerpt:
				"Innovision has officially commenced operations at the Nemili–Sriperumpudur Toll Plaza in Tamil Nadu from 8th October 2025, marking another proud step in our journey of managing highways that connect people and places. This landmark project, worth over ₹100 crore, integrates toll management with the maintenance of nearby public amenities with a strong focus on cleanliness, safety, and commuter comfort.",
			href: "/insights/blogs/innovision-commences-operations-at-nemili-sriperumpudur-toll-plaza",
		},
		{
			title: "Innovision Limited Poised For Successful IPO Launch",
			source: "Evrimagaci",
			date: "20 August 2024",
			excerpt:
				"The IPO market is set to welcome Innovision Limited, a company based out of Haryana, as it recently filed its draft Red Herring Prospectus (DRHP) with the Securities and Exchange Board of India (Sebi).",
			href: "https://evrimagaci.org/tpg/innovision-limited-poised-for-successful-ipo-launch-33641",
		},
		{
			title: "Manpower service provider Innovision Limited filed DRHP for IPO",
			source: "Microsoft star",
			date: "21 August 2024",
			excerpt:
				"Haryana-based Innovision Limited, which provides manpower services, toll plaza management and skill development training, has filed its DRHP with SEBI to raise funds through an IPO. The IPO includes a fresh equity issue of ₹315 crore and an offer for sale by promoter selling shareholders.",
			href: "",
		},
		{
			title: "IPO rush continues: Unimech Aerospace, Innovision, Manjushree Technopack file DRHP with SEBI",
			source: "FURTUNE INDIA",
			date: "21 August 2024",
			excerpt:
				"The IPO flow continues as three companies, including Innovision, filed their DRHPs with SEBI to list shares on stock exchanges, with an expected collective raise of around ₹4,000 crore.",
			href: "https://www.fortuneindia.com/investing/ipo-rush-continues-unimech-aerospace-innovision-manjushree-technopack-file-drhp-with-sebi/118086",
		},
		{
			title: "Latest News | Haryana-based Innovision Files IPO Papers with Sebi; Eyes Rs 315-cr Via Fresh Issue",
			source: "Latestly",
			date: "20 August 2024",
			excerpt:
				"New Delhi, Aug 20 (PTI): Manpower services company Innovision Ltd filed draft papers with SEBI to raise funds via an initial public offering (IPO).",
			href: "https://www.latestly.com/agency-news/latest-news-haryana-based-innovision-files-ipo-papers-with-sebi-eyes-rs-315-cr-via-fresh-issue-6203411.html",
		},
	];

	return (
		<>
			<Header />
			<main className="relative min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div
					className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-cover bg-center opacity-20"
					style={{ backgroundImage: "url('/all-banners/BannerNews.jpg')" }}
				/>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-black/60 via-black/35 to-transparent" />
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<div className="mb-16">
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
					</div>

					{/* News Grid */}
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{newsItems.map((item, index) => (
							<article
								key={`${item.title}-${index}`}
								className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-[#EF2B2D]/50 hover:bg-white/10"
							>
								<div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
									<p className="font-semibold text-[#EF2B2D]">{item.source}</p>
									<span className="text-white/30">|</span>
									<p className="text-white/60">{item.date}</p>
								</div>
								<h3 className="mt-4 text-xl font-bold text-white group-hover:text-[#EF2B2D] transition">
									{item.title}
								</h3>
								<p className="mt-4 text-sm text-white/70">{item.excerpt}</p>
								{item.href ? (
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] hover:text-white transition"
									>
										Read More →
									</a>
								) : (
									<span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
										Read More
									</span>
								)}
							</article>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
