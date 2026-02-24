import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { blogPosts } from "./data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
	title: "Blogs & Articles - Innovision Security",
	description: "Industry insights, expert articles, and thought leadership from Innovision Security.",
};

export default function BlogsPage() {
	const blogs = blogPosts;

	return (
		<>
			<Header />
			<main className="min-h-screen bg-black pb-20">
				<section className="relative min-h-[62vh] w-full overflow-hidden bg-gradient-to-br from-black to-[#1a1a1d]">
					<div className="absolute inset-0 bg-[url('/images/blog1.jpg')] bg-cover bg-center opacity-20" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

					<div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-12 text-center text-white">
						<div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<span>Insights</span>
							<span className="h-px w-12 bg-[#EF2B2D]" />
						</div>
						<h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
							Latest Articles & Blogs
						</h1>
						<p className="mt-5 max-w-3xl text-lg text-white/80">
							Explore Innovision updates, industry perspectives, and practical guidance across security, toll operations, and skill development.
						</p>
					</div>
				</section>

				<section className="bg-white py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mb-10 flex items-center gap-4">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/60">
								News & Articles
							</p>
							<span className="h-px flex-1 bg-black/10" />
						</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{blogs.map((blog) => (
							<Link
								key={blog.slug}
								href={`/insights/blogs/${blog.slug}`}
								className="block"
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
				</section>
			</main>
			<Footer />
		</>
	);
}
