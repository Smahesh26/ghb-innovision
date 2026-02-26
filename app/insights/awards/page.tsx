"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

	// Award ceremony images
	const awardImages = [
		{ src: "/images/awards/award1.jpeg", title: "Industry Excellence Award 2024", category: "Leadership" },
		{ src: "/images/awards/award2.jpeg", title: "Security Innovation Award", category: "Technology" },
		{ src: "/images/awards/award3.jpeg", title: "CAPSI Recognition Ceremony", category: "Industry" },
		{ src: "/images/awards/award4.jpeg", title: "National Entrepreneur Award", category: "Business" },
		{ src: "/images/awards/award5.jpeg", title: "Training Excellence Award", category: "Education" },
		{ src: "/images/awards/award6.jpeg", title: "Corporate Achievement Award", category: "Enterprise" },
		{ src: "/images/awards/award7.jpeg", title: "Golden Guard Recognition", category: "Team" },
	];

	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	return (
		<>
			<Header />
			
			{/* Hero Section with Parallax */}
			<motion.section
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
				className="relative min-h-[62vh] bg-gradient-to-br from-neutral-900 via-black to-neutral-900 pt-32 pb-12 overflow-hidden"
			>
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					<motion.div 
						className="absolute top-20 right-20 w-96 h-96 bg-[#EF2B2D]/20 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.div 
						className="absolute bottom-20 left-20 w-96 h-96 bg-[#EF2B2D]/10 rounded-full blur-3xl"
						animate={{
							scale: [1.2, 1, 1.2],
							opacity: [0.2, 0.4, 0.2],
						}}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					/>
					
					{/* Floating particles */}
					{[...Array(10)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-[#EF2B2D] rounded-full"
							initial={{ 
								x: `${(i * 11) % 100}%`, 
								y: `${(i * 17) % 100}%`,
								opacity: 0 
							}}
							animate={{
								y: [0, i % 2 === 0 ? -40 : 40, 0],
								opacity: [0, 1, 0],
							}}
							transition={{
								duration: 4 + (i % 3),
								repeat: Infinity,
								delay: i * 0.18,
								ease: "easeInOut",
							}}
						/>
					))}
				</div>

				<div className="relative mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-center"
					>
						<motion.div 
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-flex items-center gap-3 rounded-full border border-[#EF2B2D]/30 bg-[#EF2B2D]/10 backdrop-blur-sm px-8 py-3 mb-6"
						>
							<motion.svg 
								className="h-6 w-6 text-[#EF2B2D]" 
								fill="currentColor" 
								viewBox="0 0 20 20"
								animate={{ rotate: [0, 10, -10, 0] }}
								transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</motion.svg>
							<span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Recognition & Excellence</span>
						</motion.div>
						
						<motion.h1 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6 leading-tight"
						>
							Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF2B2D] to-red-600">Accolades</span>
						</motion.h1>
						
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="mx-auto max-w-3xl text-lg text-white/75 leading-relaxed"
						>
							Celebrating 19+ years of excellence through national recognition. Our commitment to quality, innovation, and leadership in security & workforce solutions.
						</motion.p>

						{/* Animated Stats */}
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="flex flex-wrap justify-center gap-8 mt-12"
						>
							{[
								{ number: "15+", label: "National Awards" },
								{ number: "19+", label: "Years Excellence" },
								{ number: "7", label: "Industry Recognitions" },
							].map((stat, idx) => (
								<motion.div
									key={idx}
									whileHover={{ scale: 1.05, y: -5 }}
									className="relative group"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
									<div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6">
										<div className="text-4xl font-bold text-[#EF2B2D] mb-1">{stat.number}</div>
										<div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div 
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</motion.section>

			<motion.main
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
				className="bg-gradient-to-b from-white via-neutral-50 to-white pb-20"
			>
				<div className="mx-auto max-w-7xl px-6">

					{/* Lt. Col. Hundal Awards - Enhanced 3D Cards */}
					<section className="py-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="mb-16 text-center"
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className="inline-block mb-6"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 blur-2xl" />
									<div className="relative bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase">
										Leadership Excellence
									</div>
								</div>
							</motion.div>
							
							<h2 className="text-5xl font-bold text-neutral-900 mb-4 lg:text-6xl">
								Lt. Col. Randeep Hundal
							</h2>
							<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
								Managing Director • Visionary Leader • Industry Pioneer
							</p>
						</motion.div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{ltColAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 28 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ 
										duration: 0.65, 
										delay: index * 0.1,
										ease: [0.22, 1, 0.36, 1]
									}}
									viewport={{ once: true }}
									whileHover={{ 
										y: -6,
										scale: 1.01,
										transition: { duration: 0.25, ease: "easeOut" }
									}}
									className="group relative"
								>
									{/* Glow effect */}
									<div className="absolute -inset-1 bg-gradient-to-r from-[#EF2B2D] to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
									
									{/* Card */}
									<div className="relative bg-white rounded-2xl border border-neutral-200 p-8 hover:border-[#EF2B2D]/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
										{/* Background pattern */}
										<div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
											<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
												<path fill="#EF2B2D" d="M45.1,-78.4C58.9,-70.5,71.1,-58.9,79.6,-44.8C88.1,-30.7,92.9,-13.9,92.3,2.7C91.7,19.3,85.7,35.7,75.8,48.9C65.9,62.1,52.1,72.1,37.1,78.8C22.1,85.5,5.9,88.9,-10.8,88.3C-27.5,87.7,-44.7,83.1,-58.9,74.1C-73.1,65.1,-84.3,51.7,-89.8,36.2C-95.3,20.7,-95.1,3.1,-90.5,-12.9C-85.9,-28.9,-76.9,-43.3,-64.8,-52.4C-52.7,-61.5,-37.5,-65.3,-23.2,-72.8C-8.9,-80.3,4.5,-91.5,18.6,-95.4C32.7,-99.3,47.5,-95.9,45.1,-78.4Z" transform="translate(100 100)" />
											</svg>
										</div>

										<div className="flex items-start justify-between mb-6">
											<motion.span 
												className="inline-block rounded-xl bg-gradient-to-r from-[#EF2B2D] to-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg"
												whileHover={{ scale: 1.05 }}
											>
												{award.year}
											</motion.span>
											<motion.svg 
												className="h-8 w-8 text-[#EF2B2D] opacity-30 group-hover:opacity-100 transition-opacity" 
												fill="currentColor" 
												viewBox="0 0 20 20"
												animate={{ 
													rotate: [0, 5, -5, 0],
												}}
												transition={{ 
													duration: 3, 
													repeat: Infinity,
													ease: "easeInOut"
												}}
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</motion.svg>
										</div>
										
										<h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-[#EF2B2D] transition-colors">
											{award.title}
										</h3>
										
										<div className="flex items-center gap-2 mb-4">
											<div className="h-1 w-12 bg-gradient-to-r from-[#EF2B2D] to-red-600 rounded-full" />
											<p className="text-sm font-semibold text-[#EF2B2D]">
												{award.organization}
											</p>
										</div>
										
										<p className="text-sm text-neutral-600 leading-relaxed">
											{award.description}
										</p>

										{/* Hover indicator */}
										<motion.div
											className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EF2B2D] to-red-600"
											initial={{ scaleX: 0 }}
											whileHover={{ scaleX: 1 }}
											transition={{ duration: 0.5 }}
											style={{ transformOrigin: "left" }}
										/>
									</div>
								</motion.div>
							))}
						</div>
					</section>

					{/* Company Awards - Premium Design */}
					<section className="py-20 relative">
						{/* Background decoration */}
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="mb-16 text-center"
						>
							<motion.div
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								transition={{ duration: 0.8, type: "spring" }}
								viewport={{ once: true }}
								className="inline-block mb-6"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 blur-2xl" />
									<div className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase">
										Organizational Excellence
									</div>
								</div>
							</motion.div>
							
							<h2 className="text-5xl font-bold text-neutral-900 mb-4 lg:text-6xl">
								Innovision Limited
							</h2>
							<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
								Industry Recognition • Corporate Achievement • National Awards
							</p>
						</motion.div>

						<div className="grid gap-8 md:grid-cols-2">
							{companyAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 26 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ 
										duration: 0.7, 
										delay: index * 0.1,
										ease: [0.22, 1, 0.36, 1]
									}}
									viewport={{ once: true }}
									whileHover={{ y: -4, scale: 1.01 }}
									className="group relative"
								>
									{/* Premium card with gradient border */}
									<div className="absolute -inset-[1px] bg-gradient-to-r from-[#EF2B2D] via-red-600 to-[#EF2B2D] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									
									<div className="relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
										{/* Animated background gradient */}
										<motion.div
											className="absolute inset-0 bg-gradient-to-br from-[#EF2B2D]/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100"
											transition={{ duration: 0.5 }}
										/>

										{/* Content */}
										<div className="relative flex items-start gap-6">
											{/* Icon with 3D effect */}
											<motion.div 
												className="flex-shrink-0"
												whileHover={{ 
													rotateY: 180,
													scale: 1.1
												}}
												transition={{ duration: 0.6 }}
											>
												<div className="relative">
													<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D] to-red-600 rounded-2xl blur-lg opacity-50" />
													<div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EF2B2D] to-red-600 shadow-lg">
														<svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
													</div>
												</div>
											</motion.div>
											
											<div className="flex-1">
												<motion.span 
													className="inline-block rounded-xl bg-gradient-to-r from-[#EF2B2D]/10 to-red-600/10 border border-[#EF2B2D]/20 px-4 py-1.5 text-sm font-bold text-[#EF2B2D] mb-4"
													whileHover={{ scale: 1.05 }}
												>
													{award.year}
												</motion.span>
												
												<h3 className="text-2xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-[#EF2B2D] transition-colors">
													{award.title}
												</h3>
												
												<div className="flex items-center gap-3 mb-4">
													<div className="h-[2px] w-16 bg-gradient-to-r from-[#EF2B2D] to-red-600 rounded-full" />
													<p className="text-sm font-bold text-[#EF2B2D] uppercase tracking-wider">
														{award.organization}
													</p>
												</div>
												
												<p className="text-neutral-600 leading-relaxed">
													{award.description}
												</p>
											</div>
										</div>

										{/* Bottom accent */}
										<motion.div
											className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#EF2B2D] to-red-600 rounded-b-2xl"
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											transition={{ duration: 1, delay: index * 0.1 }}
											viewport={{ once: true }}
											style={{ transformOrigin: "left" }}
										/>
									</div>
								</motion.div>
							))}
						</div>
					</section>

					{/* Team Awards - Dark Elegant Cards */}
					<section className="py-20 relative">
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="mb-16 text-center"
						>
							<motion.div
								initial={{ scale: 0, y: 50 }}
								whileInView={{ scale: 1, y: 0 }}
								transition={{ duration: 0.6, type: "spring" }}
								viewport={{ once: true }}
								className="inline-block mb-6"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 blur-2xl" />
									<div className="relative bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
										Team Excellence
									</div>
								</div>
							</motion.div>
							
							<h2 className="text-5xl font-bold text-neutral-900 mb-4 lg:text-6xl">
								Team Recognition
							</h2>
							<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
								Honoring Individual Excellence • Celebrating Dedication
							</p>
						</motion.div>

						<div className="grid gap-8 lg:grid-cols-2">
							{teamAwards.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30, scale: 0.98 }}
									whileInView={{ opacity: 1, y: 0, scale: 1 }}
									transition={{ 
										duration: 0.75, 
										delay: index * 0.2,
										ease: [0.22, 1, 0.36, 1]
									}}
									viewport={{ once: true }}
									whileHover={{ y: -6, scale: 1.01 }}
									className="group relative"
								>
									{/* Card glow */}
									<div className="absolute -inset-2 bg-gradient-to-r from-[#EF2B2D] via-red-600 to-[#EF2B2D] rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
									
									<div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-black rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
										{/* Animated background pattern */}
										<motion.div
											className="absolute top-0 right-0 w-64 h-64 opacity-5"
											animate={{
												rotate: [0, 360],
												scale: [1, 1.2, 1],
											}}
											transition={{
												duration: 20,
												repeat: Infinity,
												ease: "linear"
											}}
										>
											<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
												<path fill="white" d="M45.1,-78.4C58.9,-70.5,71.1,-58.9,79.6,-44.8C88.1,-30.7,92.9,-13.9,92.3,2.7C91.7,19.3,85.7,35.7,75.8,48.9C65.9,62.1,52.1,72.1,37.1,78.8C22.1,85.5,5.9,88.9,-10.8,88.3C-27.5,87.7,-44.7,83.1,-58.9,74.1C-73.1,65.1,-84.3,51.7,-89.8,36.2C-95.3,20.7,-95.1,3.1,-90.5,-12.9C-85.9,-28.9,-76.9,-43.3,-64.8,-52.4C-52.7,-61.5,-37.5,-65.3,-23.2,-72.8C-8.9,-80.3,4.5,-91.5,18.6,-95.4C32.7,-99.3,47.5,-95.9,45.1,-78.4Z" transform="translate(100 100)" />
											</svg>
										</motion.div>

										{/* Content */}
										<div className="relative">
											<div className="flex items-start justify-between mb-8">
												<motion.span 
													className="inline-block rounded-xl bg-gradient-to-r from-[#EF2B2D] to-red-600 px-5 py-2 text-sm font-bold shadow-lg"
													whileHover={{ scale: 1.1, rotate: 2 }}
												>
													{award.year}
												</motion.span>
												<motion.svg 
													className="h-16 w-16 text-[#EF2B2D]/80" 
													fill="currentColor" 
													viewBox="0 0 20 20"
													animate={{
														scale: [1, 1.1, 1],
														rotate: [0, 5, -5, 0],
													}}
													transition={{
														duration: 4,
														repeat: Infinity,
														ease: "easeInOut"
													}}
												>
													<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
												</motion.svg>
											</div>
											
											<h3 className="text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text">
												{award.title}
											</h3>
											
											<div className="space-y-2 mb-6">
												<div className="flex items-center gap-3">
													<div className="h-8 w-1 bg-gradient-to-b from-[#EF2B2D] to-red-600 rounded-full" />
													<p className="text-white/90 font-semibold text-lg">
														{award.recipient}
													</p>
												</div>
												<div className="flex items-center gap-3">
													<div className="h-6 w-1 bg-gradient-to-b from-red-600 to-transparent rounded-full" />
													<p className="text-sm font-bold text-[#EF2B2D] uppercase tracking-wider">
														{award.organization}
													</p>
												</div>
											</div>
											
											<p className="text-white/60 leading-relaxed text-base border-t border-white/10 pt-6">
												{award.description}
											</p>
										</div>

										{/* Decorative corner elements */}
										<div className="absolute top-0 left-0 w-20 h-20">
											<div className="absolute top-3 left-3 w-12 h-[1px] bg-gradient-to-r from-[#EF2B2D] to-transparent" />
											<div className="absolute top-3 left-3 w-[1px] h-12 bg-gradient-to-b from-[#EF2B2D] to-transparent" />
										</div>
										<div className="absolute bottom-0 right-0 w-20 h-20">
											<div className="absolute bottom-3 right-3 w-12 h-[1px] bg-gradient-to-l from-[#EF2B2D] to-transparent" />
											<div className="absolute bottom-3 right-3 w-[1px] h-12 bg-gradient-to-t from-[#EF2B2D] to-transparent" />
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</section>

					{/* Award Gallery - Premium Interactive Gallery */}
					<section className="py-20 relative">
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="mb-16 text-center"
						>
							<motion.div
								initial={{ scale: 0, rotate: 180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								transition={{ duration: 0.8, type: "spring" }}
								viewport={{ once: true }}
								className="inline-block mb-6"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[#EF2B2D]/20 to-red-600/20 blur-2xl" />
									<div className="relative bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
										Gallery
									</div>
								</div>
							</motion.div>
							
							<h2 className="text-5xl font-bold text-neutral-900 mb-4 lg:text-6xl">
								Award <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF2B2D] to-red-600">Gallery</span>
							</h2>
							<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
								Moments of Recognition • Celebrating Achievement • Pride & Excellence
							</p>
						</motion.div>

						{/* Gallery Grid with Advanced Animations */}
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{awardImages.map((award, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 28 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ 
										duration: 0.7, 
										delay: index * 0.1,
										ease: [0.22, 0.61, 0.36, 1]
									}}
									viewport={{ once: true }}
									className="group relative cursor-pointer"
									onClick={() => setSelectedImage(index)}
									whileHover={{ y: -8, scale: 1.01 }}
								>
									{/* Outer glow effect */}
									<div 
										className="absolute -inset-2 bg-gradient-to-r from-[#EF2B2D] via-red-600 to-[#EF2B2D] rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700"
									/>
									
									{/* Card container */}
									<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-neutral-200 group-hover:border-[#EF2B2D]/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
										{/* Image */}
										<Image
											src={award.src}
											alt={award.title}
											fill
											className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
										
										{/* Gradient overlay */}
										<motion.div 
											className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											transition={{ duration: 0.4 }}
										>
											{/* Content overlay */}
											<div className="absolute inset-0 flex flex-col justify-end p-6">
												<motion.div
													initial={{ y: 20, opacity: 0 }}
													whileHover={{ y: 0, opacity: 1 }}
													transition={{ duration: 0.3 }}
												>
													{/* Category badge */}
													<span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#EF2B2D] to-red-600 text-white rounded-full">
														{award.category}
													</span>
													
													{/* Title */}
													<h3 className="text-xl font-bold text-white mb-2 leading-tight">
														{award.title}
													</h3>
													
													{/* View indicator */}
													<div className="flex items-center gap-2 text-white/80">
														<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
														</svg>
														<span className="text-sm font-semibold">View Photo</span>
													</div>
												</motion.div>
											</div>
										</motion.div>

										{/* Corner decoration */}
										<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<motion.div
												className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
												whileHover={{ scale: 1.2, rotate: 90 }}
											>
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
												</svg>
											</motion.div>
										</div>

										{/* Animated border shine effect */}
										<motion.div
											className="absolute inset-0 rounded-3xl"
											initial={{ background: "linear-gradient(90deg, transparent 0%, transparent 100%)" }}
											whileHover={{
												background: [
													"linear-gradient(90deg, transparent 0%, rgba(239,43,45,0.3) 50%, transparent 100%)",
													"linear-gradient(180deg, transparent 0%, rgba(239,43,45,0.3) 50%, transparent 100%)",
													"linear-gradient(270deg, transparent 0%, rgba(239,43,45,0.3) 50%, transparent 100%)",
													"linear-gradient(360deg, transparent 0%, rgba(239,43,45,0.3) 50%, transparent 100%)",
												],
											}}
											transition={{ duration: 2, repeat: Infinity }}
										/>
									</div>

								</motion.div>
							))}
						</div>

						{/* Lightbox Modal */}
						<AnimatePresence>
							{selectedImage !== null && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.25, ease: "easeOut" }}
									className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
									onClick={() => setSelectedImage(null)}
								>
									<motion.div
										initial={{ opacity: 0, scale: 0.94, y: 12 }}
										animate={{ opacity: 1, scale: 1, y: 0 }}
										exit={{ opacity: 0, scale: 0.96, y: 8 }}
										transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
										className="relative w-full max-w-4xl"
										onClick={(e) => e.stopPropagation()}
									>
									{/* Close button */}
									<motion.button
										whileHover={{ scale: 1.1, rotate: 90 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setSelectedImage(null)}
										className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#EF2B2D] to-red-600 text-white flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</motion.button>

									{/* Image container */}
									<div className="relative h-[42vh] sm:h-[54vh] md:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white">
										<Image
											src={awardImages[selectedImage].src}
											alt={awardImages[selectedImage].title}
											fill
											className="object-contain"
											sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 70vw"
										/>
									</div>

									{/* Navigation */}
									<div className="flex items-center justify-center gap-4 mt-4">
										<motion.button
											whileHover={{ scale: 1.1, x: -5 }}
											whileTap={{ scale: 0.9 }}
											onClick={() => setSelectedImage((selectedImage - 1 + awardImages.length) % awardImages.length)}
											className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
											</svg>
										</motion.button>
										<motion.button
											whileHover={{ scale: 1.1, x: 5 }}
											whileTap={{ scale: 0.9 }}
											onClick={() => setSelectedImage((selectedImage + 1) % awardImages.length)}
											className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</motion.button>
									</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
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
			</motion.main>
			<Footer />
		</>
	);
}
