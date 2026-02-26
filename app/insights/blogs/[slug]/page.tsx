import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, orderedBlogPosts } from "../data";

type BlogDetailPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return orderedBlogPosts.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) {
		notFound();
	}

	const relatedBlogs = orderedBlogPosts.filter((item) => item.slug !== blog.slug);

	return (
		<>
			<Header />
			<main className="min-h-screen bg-black pb-20">
				<section className="relative min-h-[62vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
					<div
						className="absolute inset-0 bg-cover bg-center opacity-25"
						style={{ backgroundImage: `url('${blog.bannerImage}')` }}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

					<div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-12 text-center text-white">
						<div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
							<span className="h-px w-12 bg-[#EF2B2D]" />
							<span>{blog.category}</span>
							<span className="h-px w-12 bg-[#EF2B2D]" />
						</div>
						<h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							{blog.title}
						</h1>
						<div className="mt-5 flex items-center gap-4 text-sm text-white/70">
							<span>{blog.date}</span>
							<span>•</span>
							<span>{blog.readTime}</span>
						</div>
					</div>
				</section>

				<section className="bg-white py-16">
					<div className="mx-auto max-w-5xl px-6">
						<article>
							<div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-black/10 shadow-[0_18px_42px_rgba(0,0,0,0.12)]">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover"
								/>
							</div>

							<div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-black/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:p-10">
								<div className="mb-8 flex flex-wrap items-center gap-3 border-b border-black/10 pb-6">
									<span className="rounded-full bg-[#EF2B2D]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#EF2B2D]">{blog.category}</span>
									<span className="text-xs font-semibold text-black/50">{blog.date}</span>
									<span className="text-xs text-black/40">•</span>
									<span className="text-xs font-semibold text-black/50">{blog.readTime}</span>
								</div>
								{blog.content.map((paragraph, index) => (
									<p
										key={`${blog.slug}-${index}`}
										className="mb-8 text-[17px] leading-relaxed text-black/80 last:mb-0"
									>
										{paragraph}
									</p>
								))}
							</div>
						</article>

						<section className="mt-20">
							<div className="mb-10 flex items-center gap-4">
								<span className="h-px w-12 bg-[#EF2B2D]" />
								<p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/60">
									News & Articles
								</p>
								<span className="h-px flex-1 bg-black/10" />
							</div>
							<h2 className="mb-8 text-3xl font-bold text-[#141414] sm:text-4xl">
								More From Innovision
							</h2>

							<div className="-mx-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
								<div className="flex snap-x snap-mandatory gap-6 px-2">
									{relatedBlogs.map((item, index) => (
										<Link
											key={item.slug}
											href={`/insights/blogs/${item.slug}`}
											className="block w-[85vw] shrink-0 snap-start sm:w-[440px]"
										>
											<article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_36px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(0,0,0,0.18)]">
												<div className="relative h-48 w-full overflow-hidden">
													<Image
														src={item.image}
														alt={item.title}
														fill
														className="object-cover transition duration-500 group-hover:scale-105"
													/>
													<div className="absolute top-3 right-3 rounded-full border border-white/35 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
														#{String(index + 1).padStart(2, "0")}
													</div>
												</div>
												<div className="p-6">
													<p className="text-xs text-black/60">{item.date}</p>
													<h3 className="mt-3 text-xl font-bold text-[#141414] transition group-hover:text-[#EF2B2D]">
														{item.title}
													</h3>
													<p className="mt-3 text-sm text-black/70">{item.excerpt}</p>
												</div>
											</article>
										</Link>
									))}
								</div>
							</div>
						</section>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
