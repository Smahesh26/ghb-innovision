"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
	return (
		<section className="relative bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] py-32 text-white overflow-hidden">
			
			{/* Background Effects */}
			<div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/20 blur-3xl" />
			<div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />

			<div className="relative mx-auto max-w-5xl px-6 text-center">

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					
					{/* Badge */}
					<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm mb-6">
						<svg className="h-4 w-4 text-[#EF2B2D]" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
						</svg>
						<span className="text-xs font-semibold uppercase tracking-[0.3em]">
							IPO Ready | Positioned for Growth
						</span>
					</div>

					{/* Headline */}
					<h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
						Partner with India's Leading<br />
						<span className="text-[#EF2B2D]">Integrated Infrastructure Support Platform</span>
					</h2>

					{/* Subheadline */}
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
						Join 500+ organizations trusting Innovision for secure, compliant, and technology-enabled workforce and facility management solutions.
					</p>

					{/* CTA Buttons */}
					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<Link
							href="/contact"
							className="group relative overflow-hidden rounded-md bg-[#EF2B2D] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#d62426] hover:shadow-[0_10px_40px_rgba(239,43,45,0.4)]"
						>
							<span className="relative z-10">Request Consultation</span>
							<div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
						</Link>

						<Link
							href="/services"
							className="group rounded-md border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
						>
							Explore Services
						</Link>
					</div>

					{/* Trust Indicators */}
					<div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-12">
						<div>
							<div className="text-3xl font-bold text-white">19+</div>
							<div className="mt-1 text-xs uppercase tracking-wider text-white/60">Years Track Record</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-white">500+</div>
							<div className="mt-1 text-xs uppercase tracking-wider text-white/60">Trusted Clients</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-white">20,000+</div>
							<div className="mt-1 text-xs uppercase tracking-wider text-white/60">Deployed Workforce</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-white">2,000+</div>
							<div className="mt-1 text-xs uppercase tracking-wider text-white/60">Active Sites</div>
						</div>
					</div>

				</motion.div>

			</div>
		</section>
	);
}
