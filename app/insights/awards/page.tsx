"use client";

/**
 * Awards & Accolades Page
 * 
 * TODO: Replace placeholder award images
 * - Currently using banner1.png, banner2.png, banner3.png as placeholders
 * - User mentioned 6 award images exist but location is unknown
 * - Once award images are located, update the awardImages array (around line 120)
 * - Recommended: Create /public/images/awards/ folder and place all award ceremony photos there
 * - Then update paths like: "/images/awards/award-1.jpg", "/images/awards/award-2.jpg", etc.
 */

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// Note: Metadata export removed as this is a client component
// For SEO, consider converting to server component or use next/head

export default function AwardsPage() {
	const ltColAwards = [
		{
			year: "2024",
			title: "12 Visionary Entrepreneurs 2024",
			organization: "Entrepreneur Street",
			description: "Recognized among India's 12 visionary entrepreneurs shaping the future of business.",
		},
		{
			year: "2023",
			title: "Rising Star in Security Industry",
			organization: "BW Businessworld Honors",
			description: "National award recognizing exceptional talent and promise in the Security Industry.",
		},
		{
			year: "2022",
			title: "Champion of Change Haryana",
			organization: "Interactive Forum on Indian Economy (IIFE)",
			description: "Honored for promoting Indian values in Business and Social Development.",
		},
		{
			year: "2022",
			title: "Man of Excellence",
			organization: "Indian Achievers' Award",
			description: "Outstanding professionalism achievement & contribution in Nation building.",
		},
		{
			year: "2022",
			title: "CEO of the Year",
			organization: "Indian Achievers' Award",
			description: "Demonstrating strong leadership qualities and vision.",
		},
		{
			year: "2019",
			title: "Security Entrepreneur of the Year",
			organization: "Central Association of Private Security Industry (CAPSI)",
			description: "National award recognizing excellence in security entrepreneurship.",
		},
		{
			year: "2013",
			title: "Young Security Entrepreneur of the Year",
			organization: "CAPSI & Association of Private Detectives (APDI)",
			description: "National recognition for young entrepreneurial excellence in security.",
		},
	];

	const companyAwards = [
		{
			year: "2024",
			title: "Best Man Guarding Company of the Year",
			organization: "CAPSI",
			description: "Recognized as the leading man guarding service provider in India.",
		},
		{
			year: "2023",
			title: "Security Training Company of The Year",
			organization: "BW Businessworld",
			description: "Excellence in security training and skill development programs.",
		},
		{
			year: "2022",
			title: "Brand Impact Award",
			organization: "Indian Achievers' Forum",
			description: "Recognition for strong brand presence and market impact.",
		},
		{
			year: "2019",
			title: "Best Large Scale Private Organization - Training Program",
			organization: "ASSOCHAM",
			description: "Excellence in large-scale training program implementation.",
		},
		{
			year: "2018",
			title: "Best Small Scale Private Organization - Training Program",
			organization: "ASSOCHAM",
			description: "Outstanding training program for small scale operations.",
		},
		{
			year: "2017",
			title: "Best Start up in Skill Development",
			organization: "ASSOCHAM",
			description: "Innovation and excellence in skill development initiatives.",
		},
	];

	const teamAwards = [
		{
			year: "2022",
			title: "Lady Leadership in Security",
			recipient: "Ms. Navneet Kaur, VP INNOVISION",
			organization: "CAPSI",
			description: "Recognition for outstanding women leadership in security industry.",
		},
		{
			year: "2022 & 2025",
			title: "Golden Guard Award",
			recipient: "6 Security Personnel",
			organization: "CAPSI",
			description: "Exceptional performance and dedication by our security personnel.",
		},
	];

	// Placeholder for award images - user mentioned 6 images exist
	const awardImages = [
		"/images/awards/award1.jpeg", // Placeholder - replace with actual award images
		"/images/awards/award2.jpeg",
		"/images/awards/award3.jpeg",
		"/images/awards/award4.jpeg",
		"/images/awards/award5.jpeg",
		"/images/awards/award6.jpeg",
	];

	return (
		<>
			<Header />
			
			{/* Hero Section */}
			<section className="relative bg-gradient-to-b from-neutral-50 to-white pt-32 pb-16">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center"
					>
						<div className="inline-flex items-center gap-3 rounded-full border border-[#EF2B2D]/20 bg-[#EF2B2D]/5 px-6 py-2 mb-6">
							<svg className="h-5 w-5 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span className="text-sm font-semibold text-[#EF2B2D]">RECOGNITION & EXCELLENCE</span>
						</div>
						
						<h1 className="text-5xl font-bold text-neutral-900 sm:text-6xl lg:text-7xl mb-6">
							Awards & Accolades
						</h1>
						
						<p className="mx-auto max-w-3xl text-xl text-neutral-600 leading-relaxed">
							Celebrating 19+ years of excellence through national recognition. Our commitment to quality, innovation, and leadership.
						</p>
					</motion.div>
				</div>
			</section>

			<main className="bg-white pb-20">
				<div className="mx-auto max-w-7xl px-6">

					{/* Lt. Col. Hundal Awards */}
					<section className="py-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="mb-12"
						>
							<h2 className="text-4xl font-bold text-neutral-900 mb-3">
								Lt. Col. Randeep Hundal
							</h2>
							<p className="text-lg text-neutral-600">
								Managing Director • Leadership Excellence
							</p>
						</motion.div>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{ltColAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									viewport={{ once: true }}
									className="group relative bg-white rounded-xl border border-neutral-200 p-6 hover:border-[#EF2B2D] hover:shadow-lg transition-all duration-300"
								>
									<div className="flex items-start justify-between mb-4">
										<span className="inline-block rounded-lg bg-[#EF2B2D] px-3 py-1 text-sm font-bold text-white">
											{award.year}
										</span>
										<svg className="h-6 w-6 text-[#EF2B2D] opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									
									<h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">
										{award.title}
									</h3>
									
									<p className="text-sm font-semibold text-[#EF2B2D] mb-3">
										{award.organization}
									</p>
									
									<p className="text-sm text-neutral-600 leading-relaxed">
										{award.description}
									</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* Company Awards */}
					<section className="py-16 border-t border-neutral-200">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="mb-12"
						>
							<h2 className="text-4xl font-bold text-neutral-900 mb-3">
								Innovision Limited
							</h2>
							<p className="text-lg text-neutral-600">
								Organizational Excellence • Industry Recognition
							</p>
						</motion.div>

						<div className="grid gap-6 md:grid-cols-2">
							{companyAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									viewport={{ once: true }}
									className="group relative bg-white rounded-xl border border-neutral-200 p-8 hover:border-[#EF2B2D] hover:shadow-lg transition-all duration-300"
								>
									<div className="flex items-start gap-6">
										<div className="flex-shrink-0">
											<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF2B2D] to-[#d62426] shadow-md">
												<svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											</div>
										</div>
										
										<div className="flex-1">
											<span className="inline-block rounded-lg bg-[#EF2B2D]/10 px-3 py-1 text-sm font-bold text-[#EF2B2D] mb-3">
												{award.year}
											</span>
											
											<h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">
												{award.title}
											</h3>
											
											<p className="text-sm font-semibold text-[#EF2B2D] mb-3">
												{award.organization}
											</p>
											
											<p className="text-sm text-neutral-600 leading-relaxed">
												{award.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</section>

					{/* Team Awards */}
					<section className="py-16 border-t border-neutral-200">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="mb-12"
						>
							<h2 className="text-4xl font-bold text-neutral-900 mb-3">
								Team Recognition
							</h2>
							<p className="text-lg text-neutral-600">
								Honoring Individual Excellence
							</p>
						</motion.div>

						<div className="grid gap-6 lg:grid-cols-2">
							{teamAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-8 text-white"
								>
									<div className="flex items-start justify-between mb-6">
										<span className="inline-block rounded-lg bg-[#EF2B2D] px-3 py-1 text-sm font-bold">
											{award.year}
										</span>
										<svg className="h-12 w-12 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</div>
									
									<h3 className="text-2xl font-bold mb-3 leading-tight">
										{award.title}
									</h3>
									
									<p className="text-white/90 font-semibold mb-3">
										{award.recipient}
									</p>
									
									<p className="text-sm font-semibold text-[#EF2B2D] mb-4">
										{award.organization}
									</p>
									
									<p className="text-white/70 leading-relaxed">
										{award.description}
									</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* Award Gallery */}
					<section className="py-16 border-t border-neutral-200">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="mb-12 text-center"
						>
							<h2 className="text-4xl font-bold text-neutral-900 mb-3">
								Award Gallery
							</h2>
							<p className="text-lg text-neutral-600">
								Moments of Recognition & Achievement
							</p>
						</motion.div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{awardImages.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									viewport={{ once: true }}
									className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200"
								>
									<Image
										src={image}
										alt={`Award ceremony ${index + 1}`}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-4 left-4 right-4">
											<p className="text-sm font-semibold text-white">Award Ceremony</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>

					
					</section>

					{/* Call to Action - Split Layout */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-2xl"
					>
						{/* Decorative Elements */}
						<div className="absolute inset-0">
							<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
							<div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
						</div>
						
						<div className="relative grid md:grid-cols-2 gap-12 p-12 lg:p-16">
							{/* Left Content */}
							<div className="flex flex-col justify-center">
								<div className="inline-flex items-center gap-2 rounded-full bg-[#EF2B2D]/20 px-4 py-2 w-fit mb-6">
									<div className="h-2 w-2 rounded-full bg-[#EF2B2D] animate-pulse" />
									<span className="text-sm font-bold text-[#EF2B2D]">Join Us</span>
								</div>
								
								<h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight mb-6">
									Join Our Award-Winning Team
								</h3>
								
								<p className="text-lg text-white/70 leading-relaxed mb-8">
									Be part of an organization that values excellence, innovation, and dedication. Explore career opportunities with India&apos;s leading security and workforce solutions provider.
								</p>
								
								<div className="flex flex-wrap gap-4">
									<a
										href="/careers"
										className="group inline-flex items-center gap-3 rounded-full bg-[#EF2B2D] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d62426] hover:shadow-[0_10px_40px_rgba(239,43,45,0.4)]"
									>
										<span>Explore Careers</span>
										<svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</a>
									<a
										href="/contact"
										className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/40"
									>
										Contact Us
									</a>
								</div>
							</div>
							
							{/* Right Stats */}
							<div className="flex flex-col justify-center gap-6">
								<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
									<div className="text-5xl font-bold text-[#EF2B2D] mb-2">15+</div>
									<p className="text-white/70">National Awards</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
									<div className="text-5xl font-bold text-[#EF2B2D] mb-2">19+</div>
									<p className="text-white/70">Years of Excellence</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
									<div className="text-5xl font-bold text-[#EF2B2D] mb-2">1000+</div>
									<p className="text-white/70">Satisfied Clients</p>
								</div>
							</div>
						</div>
					</motion.div>

				</div>
			</main>
			<Footer />
		</>
	);
}
