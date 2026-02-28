import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { orderedBlogPosts } from "./data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
	title: "Blogs & Articles - Innovision Security",
	description: "Industry insights, expert articles, and thought leadership from Innovision Security.",
};

export default function BlogsPage() {
	const blogs = orderedBlogPosts;
	const newsReleases = [
		{
			title: "Innovision Commences Operations at Nemili–Sriperumpudur Toll Plaza, Tamil Nadu",
			source: "Innovision Blog",
			date: "10 November 2025",
			excerpt:
				"Innovision commenced operations at the Nemili–Sriperumpudur Toll Plaza, integrating toll management and public amenity maintenance with a strong focus on safety, cleanliness, and commuter comfort.",
			href: "/insights/blogs/innovision-commences-operations-at-nemili-sriperumpudur-toll-plaza",
		},
		{
			title: "Innovision Limited Poised For Successful IPO Launch",
			source: "Evrimagaci",
			date: "20 August 2024",
			excerpt:
				"The IPO market is set to welcome Innovision Limited after filing its DRHP with SEBI, signaling a major milestone for the Haryana-based company.",
			href: "/insights/news",
		},
		{
			title: "Manpower service provider Innovision Limited filed DRHP for IPO",
			source: "Microsoft star",
			date: "21 August 2024",
			excerpt:
				"Innovision filed draft papers with SEBI for an IPO including a fresh issue of ₹315 crore and an offer for sale by promoter shareholders.",
			href: "/insights/news",
		},
		{
			title: "IPO rush continues: Unimech Aerospace, Innovision, Manjushree Technopack file DRHP with SEBI",
			source: "FURTUNE INDIA",
			date: "21 August 2024",
			excerpt:
				"Three companies, including Innovision, filed DRHPs with SEBI as primary market momentum remained strong for new public listings.",
			href: "/insights/news",
		},
		{
			title: "Latest News | Haryana-based Innovision Files IPO Papers with Sebi; Eyes Rs 315-cr Via Fresh Issue",
			source: "Latestly",
			date: "20 August 2024",
			excerpt:
				"Innovision Ltd filed draft IPO papers with SEBI to raise capital through a fresh issue, according to media coverage.",
			href: "/insights/news",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0f0f10] pb-24">
				<section className="relative min-h-[78vh] w-full overflow-hidden bg-gradient-to-br from-[#0f0f10] via-[#151518] to-[#1b1b1f]">
					<div
						className="absolute inset-0 bg-cover bg-center opacity-20"
						style={{ backgroundImage: "url('/images/blogs/tollblog1.png')" }}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/30" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.15),transparent_45%)]" />

					<div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-12 text-center text-white">
						<div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<span>Insights</span>
							<span className="h-px w-12 bg-[#EF2B2D]" />
						</div>
						<h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
							Latest Articles & Blogs
						</h1>
						<p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
							Explore Innovision updates, industry perspectives, and practical guidance across security, toll operations, and skill development.
						</p>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
							<div className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
								{blogs.length} Articles
							</div>
							<div className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
								Security & Skill Insights
							</div>
						</div>
					</div>
				</section>

				<section className="bg-gradient-to-b from-[#f9f9fa] via-white to-[#f8f8f9] py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mb-10 flex items-center gap-4">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/60">
								News & Articles
							</p>
							<span className="h-px flex-1 bg-black/10" />
						</div>

						<div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
						{blogs.map((blog, index) => (
							<Link
								key={blog.slug}
								href={`/insights/blogs/${blog.slug}`}
								className="block"
							>
								<article className="group h-full overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/95 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#EF2B2D]/25 hover:shadow-[0_24px_56px_rgba(0,0,0,0.14)]">
									<div className="relative h-56 w-full overflow-hidden">
										<Image
											src={blog.image}
											alt={blog.title}
											fill
											className="object-cover transition duration-500 group-hover:scale-[1.04]"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-transparent" />
										<div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
											{blog.category}
										</div>
										<div className="absolute top-4 right-4 rounded-full border border-white/35 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
											#{String(index + 1).padStart(2, "0")}
										</div>
									</div>

									<div className="flex h-[calc(100%-14rem)] flex-col p-7">
										<div className="flex items-center justify-between gap-4">
											<p className="rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">{blog.date}</p>
											<span className="text-xs text-black/60">{blog.readTime}</span>
										</div>

											<h3 className="mt-4 min-h-[92px] text-2xl font-bold leading-snug tracking-tight text-[#111111] transition group-hover:text-[#EF2B2D]">
											{blog.title}
										</h3>

										<p className="mt-4 line-clamp-4 text-sm leading-relaxed text-black/70">
											{blog.excerpt}
										</p>

										<div className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#EF2B2D] transition group-hover:gap-3">
											Read Article
											<span>→</span>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>

						<div className="mt-20 mb-10 flex items-center gap-4">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/60">
								News & Releases
							</p>
							<span className="h-px flex-1 bg-black/10" />
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							{newsReleases.map((item) => (
								<Link key={item.title} href={item.href} className="block">
									<article className="group h-full rounded-2xl border border-black/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[#EF2B2D]/30 hover:shadow-[0_20px_44px_rgba(0,0,0,0.10)]">
										<div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#EF2B2D]">
											<span className="font-bold">{item.source}</span>
											<span className="text-black/30">|</span>
											<span className="text-black/55">{item.date}</span>
										</div>
										<h3 className="mt-4 text-xl font-bold leading-snug text-[#141414] transition group-hover:text-[#EF2B2D]">
											{item.title}
										</h3>
										<p className="mt-4 line-clamp-4 text-sm leading-relaxed text-black/70">
											{item.excerpt}
										</p>
										<div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#EF2B2D]">
											Read More
											<span>→</span>
										</div>
									</article>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
