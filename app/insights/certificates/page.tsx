import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "Certificates & Certifications - Innovision Security",
	description: "Industry certifications, compliance documents, and quality certifications from Innovision Security.",
};

export default function CertificatesPage() {
	const certificates = [
		{
			sr: "1",
			name: "ISO 9001:2015",
			body: "Euro UK Accreditation Licensing Services",
			number: "QMS/230620/5715",
			validFrom: "01-May-25",
			validTill: "30-Apr-28",
		},
		{
			sr: "2",
			name: "SA 8000:2014",
			body: "Euro UK Accreditation Licensing Services",
			number: "SA/230620/7846",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
		},
		{
			sr: "3",
			name: "ISO 18788:2015",
			body: "Accreditation Board For Certification Bodies",
			number: "ICI/1197026/25",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
		},
		{
			sr: "4",
			name: "ISO 28000:2007",
			body: "Accreditation Board For Certification Bodies",
			number: "ICI/1197151/25",
			validFrom: "21-Aug-25",
			validTill: "20-Aug-28",
		},
		{
			sr: "5",
			name: "ISO 14001:2015",
			body: "QCL Certification Pvt. Ltd.",
			number: "QEMS24070432",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
		},
		{
			sr: "6",
			name: "ISO 27001:2022",
			body: "QCL Certification Pvt. Ltd.",
			number: "QCLIS2407041105",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
		},
		{
			sr: "7",
			name: "ISO 45001:2018",
			body: "QCL Certification Pvt. Ltd.",
			number: "QO24070491108",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
		},
		{
			sr: "8",
			name: "CMMI Maturity Level 3",
			body: "UK Certification & Inspection Ltd.",
			number: "QU-2024070426",
			validFrom: "04-Jul-24",
			validTill: "03-Jul-27",
		},
		{
			sr: "9",
			name: "ISO 10667-2:2011",
			body: "QVA Certification",
			number: "QVA-ISLE-24-174250",
			validFrom: "17-Jan-24",
			validTill: "16-Jan-27",
		},
		{
			sr: "10",
			name: "ISO 21001:2018",
			body: "QVA Certification",
			number: "QVA-ISLE-24-174248",
			validFrom: "17-Jan-24",
			validTill: "16-Jan-27",
		},
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-white pt-32 pb-20">
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<div className="mb-16">
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights
						</p>
						<h1 className="mt-4 text-5xl font-bold text-neutral-900">
							Certifications & Compliance
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-neutral-600">
							Innovision Security holds industry-recognized certifications and compliance standards, demonstrating our commitment to excellence and governance.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</div>

					{/* Certificates Table */}
					<div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
						<div className="overflow-x-auto">
							<table className="w-full text-left text-sm text-neutral-700">
								<thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-wide text-neutral-600">
									<tr>
										<th className="px-6 py-4">No.</th>
										<th className="px-6 py-4">Certificate / Name</th>
										<th className="px-6 py-4">Certification Body</th>
										<th className="px-6 py-4">Certificate Number</th>
										<th className="px-6 py-4">Valid From</th>
										<th className="px-6 py-4">Valid Till</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-neutral-200">
									{certificates.map((cert) => (
										<tr key={cert.number} className="transition hover:bg-neutral-50">
											<td className="px-6 py-4 font-semibold text-neutral-900">{cert.sr}</td>
											<td className="px-6 py-4 font-semibold text-neutral-900">{cert.name}</td>
											<td className="px-6 py-4">{cert.body}</td>
											<td className="px-6 py-4">{cert.number}</td>
											<td className="px-6 py-4">{cert.validFrom}</td>
											<td className="px-6 py-4">{cert.validTill}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
