import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "Blogs & Articles - Innovision Security",
	description: "Industry insights, expert articles, and thought leadership from Innovision Security.",
};

export default function BlogsPage() {
	const blogs = [
		{
			category: "Security Trends",
			date: "February 20, 2026",
			title: "The Future of Private Security: Technology & Human Expertise",
			excerpt: "Exploring how AI and advanced technology are reshaping the private security industry while maintaining the human touch.",
			readTime: "5 min read",
		},
		{
			category: "Workforce Development",
			date: "February 15, 2026",
			title: "Building a Skilled Security Workforce: Interview & Training Methods",
			excerpt: "Best practices in identifying, training, and retaining top security talent for modern enterprises.",
			readTime: "7 min read",
		},
		{
			category: "Industry Insights",
			date: "February 10, 2026",
			title: "Risk Assessment in Corporate Security: A Comprehensive Guide",
			excerpt: "Understanding modern threat landscapes and implementing effective risk mitigation strategies.",
			readTime: "6 min read",
		},
		{
			category: "Business Growth",
			date: "February 5, 2026",
			title: "Scaling Security Services Across India: The Innovision Strategy",
			excerpt: "How we built a nationwide security and staffing network reaching 100,000+ trained professionals.",
			readTime: "8 min read",
		},
		{
			category: "Technology",
			date: "January 30, 2026",
			title: "Digital Tools for Modern Security Management",
			excerpt: "Leveraging technology to improve efficiency, compliance, and service delivery in security operations.",
			readTime: "6 min read",
		},
		{
			category: "Compliance",
			date: "January 25, 2026",
			title: "Understanding PSARA Compliance Requirements",
			excerpt: "A deep dive into Private Security Agency Registration Authority standards and compliance obligations.",
			readTime: "9 min read",
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
							Latest Articles & Blogs
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-white/70">
							Expert insights, industry trends, and thought leadership on security, workforce development, and business innovation.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</div>

					{/* Blog Grid */}
					<div className="grid gap-8 md:grid-cols-2">
						{blogs.map((blog, index) => (
							<article
								key={blog.title}
								className="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] to-white/5 p-8 backdrop-blur-md transition hover:border-[#EF2B2D]/50"
							>
								{/* Category & Date */}
								<div className="flex items-center justify-between gap-4">
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
										{blog.category}
									</span>
									<span className="text-xs text-white/60">{blog.readTime}</span>
								</div>

								{/* Date */}
								<p className="mt-3 text-xs text-white/50">{blog.date}</p>

								{/* Title */}
								<h3 className="mt-4 flex-1 text-2xl font-bold text-white group-hover:text-[#EF2B2D] transition">
									{blog.title}
								</h3>

								{/* Excerpt */}
								<p className="mt-4 text-sm text-white/70">
									{blog.excerpt}
								</p>

								{/* Read More */}
								<a
									href="#"
									className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D] hover:gap-3 transition"
								>
									Read Article
									<span>→</span>
								</a>
							</article>
						))}
					</div>

					{/* Newsletter Section */}
					<div className="mt-24 rounded-xl border border-white/10 bg-gradient-to-r from-[#EF2B2D]/10 via-transparent to-[#EF2B2D]/5 backdrop-blur-md p-12 text-center">
						<h3 className="text-2xl font-bold text-white">
							Subscribe to Our Newsletter
						</h3>
						<p className="mt-4 text-white/70">
							Get the latest insights and industry updates delivered to your inbox.
						</p>
						<form className="mt-8 flex gap-3 justify-center">
							<input
								type="email"
								placeholder="Enter your email"
								className="rounded-md bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-md border border-white/10 focus:outline-none focus:border-[#EF2B2D]"
							/>
							<button
								type="submit"
								className="rounded-md bg-[#EF2B2D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
