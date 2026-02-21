import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
	title: "Insights - Innovision Security",
	description: "News, articles, certifications, and gallery from Innovision Security.",
};

export default function InsightsPage() {
	const sections = [
		{
			title: "News & Press Releases",
			description: "Latest news, announcements, and media coverage about Innovision Security.",
			href: "/insights/news",
			icon: "📰",
			color: "from-[#EF2B2D]/20",
		},
		{
			title: "Certifications & Compliance",
			description: "Industry certifications, compliance documents, and quality standards.",
			href: "/insights/certificates",
			icon: "✓",
			color: "from-blue-500/20",
		},
		{
			title: "Blogs & Articles",
			description: "Expert insights, industry trends, and thought leadership articles.",
			href: "/insights/blogs",
			icon: "✍️",
			color: "from-purple-500/20",
		},
		{
			title: "Photo Gallery",
			description: "Explore our operations, events, facilities, and team culture.",
			href: "/insights/gallery",
			icon: "🖼️",
			color: "from-amber-500/20",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div className="mx-auto max-w-7xl px-6">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights & Updates
						</p>
						<h1 className="mt-6 text-5xl sm:text-6xl font-bold text-white">
							News, Stories & Resources
						</h1>
						<p className="mt-8 mx-auto max-w-2xl text-lg text-white/70">
							Stay informed with the latest news, industry insights, certifications, and visual stories from Innovision Security.
						</p>
						<div className="mt-12 h-1 w-16 bg-[#EF2B2D] mx-auto" />
					</div>

					{/* Sections Grid */}
					<div className="grid gap-8 md:grid-cols-2 mb-20">
						{sections.map((section, index) => (
							<Link
								key={section.title}
								href={section.href}
							>
								<div
									className="group h-full cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] to-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-[#EF2B2D]/50 hover:shadow-[0_30px_60px_rgba(239,43,45,0.15)]"
								>
									{/* Background Gradient */}
									<div className={`absolute inset-0 bg-gradient-to-br ${section.color} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500`} />

									<div className="relative">
										{/* Icon */}
										<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#EF2B2D]/20 text-2xl">
											{section.icon}
										</div>

										{/* Title */}
										<h3 className="text-2xl font-bold text-white group-hover:text-[#EF2B2D] transition">
											{section.title}
										</h3>

										{/* Description */}
										<p className="mt-4 text-base text-white/70 group-hover:text-white/80 transition">
											{section.description}
										</p>

										{/* CTA */}
										<div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#EF2B2D] group-hover:gap-3 transition">
											Explore
											<span className="transition group-hover:translate-x-1">→</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>

					{/* Featured Content Section */}
					<div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#EF2B2D]/10 via-[#0b0b0d] to-[#EF2B2D]/5 backdrop-blur-md p-12">
						<div className="grid gap-12 md:grid-cols-2 items-center">
							{/* Left Content */}
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
									Latest Update
								</p>
								<h2 className="mt-4 text-3xl font-bold text-white">
									Innovision Security IPO Launch 2026
								</h2>
								<p className="mt-6 text-white/70">
									We're excited to announce that Innovision Security Limited is launching its IPO, marking a major milestone in our 19-year journey. This represents our commitment to growth, transparency, and shareholder value creation.
								</p>
								<a
									href="/insights/news"
									className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#EF2B2D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]"
								>
									Read Full Announcement
									<span>→</span>
								</a>
							</div>

							{/* Right - Stats */}
							<div className="grid grid-cols-2 gap-6">
								{[
									{ label: "Years of Excellence", value: "19+" },
									{ label: "Trained Professionals", value: "100K+" },
									{ label: "Corporate Clients", value: "1000+" },
									{ label: "Revenue CAGR", value: "80%+" },
								].map((stat, idx) => (
									<div
										key={stat.label}
										className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center"
									>
										<p className="text-2xl font-black text-[#EF2B2D]">
											{stat.value}
										</p>
										<p className="mt-2 text-xs text-white/70">
											{stat.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
