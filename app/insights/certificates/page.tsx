import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "Certificates & Certifications - Innovision Security",
	description: "Industry certifications, compliance documents, and quality certifications from Innovision Security.",
};

export default function CertificatesPage() {
	const certificates = [
		{
			name: "ISO 9001:2015",
			category: "Quality Management",
			description: "International Organization for Standardization certification for quality management systems.",
		},
		{
			name: "PSARA Certification",
			category: "Security",
			description: "Private Security Agency Registration Authority certification for professional security services.",
		},
		{
			name: "ISO 27001:2013",
			category: "Information Security",
			description: "Information Security Management System certification ensuring data protection standards.",
		},
		{
			name: "NASSCOM Accreditation",
			category: "Training & Development",
			description: "National Association of Software and Services Companies recognition for training excellence.",
		},
		{
			name: "ISO 45001:2018",
			category: "Occupational Health & Safety",
			description: "Occupational Health and Safety Management System certification for employee safety.",
		},
		{
			name: "FICCI Membership",
			category: "Industry Association",
			description: "Federation of Indian Chambers of Commerce and Industry membership and recognition.",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<div className="mb-16">
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights
						</p>
						<h1 className="mt-4 text-5xl font-bold text-white">
							Certifications & Compliance
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-white/70">
							Innovision Security holds industry-recognized certifications and compliance standards, demonstrating our commitment to excellence and governance.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</div>

					{/* Certificates Grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{certificates.map((cert, index) => (
							<div
								key={cert.name}
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0b0d] to-white/5 p-8 backdrop-blur-md transition hover:border-[#EF2B2D]/50 hover:shadow-[0_0_40px_rgba(239,43,45,0.2)]"
							>
								{/* Certificate Icon */}
								<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EF2B2D]/20">
									<svg className="h-6 w-6 text-[#EF2B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>

								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF2B2D]">
									{cert.category}
								</p>
								<h3 className="mt-3 text-xl font-bold text-white">
									{cert.name}
								</h3>
								<p className="mt-4 text-sm text-white/70">
									{cert.description}
								</p>
							</div>
						))}
					</div>

					{/* Download Section */}
					<div className="mt-20 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-12 text-center">
						<h3 className="text-2xl font-bold text-white">
							Comprehensive Documentation
						</h3>
						<p className="mt-4 text-white/70">
							For detailed certification documents and compliance documentation, please contact our compliance team.
						</p>
						<a
							href="/contact"
							className="mt-6 inline-block rounded-md bg-[#EF2B2D] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d62426]"
						>
							Request Documents
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
