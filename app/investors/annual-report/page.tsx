import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report | Innovision Limited",
  description: "Download Innovision Limited annual return documents by financial year.",
  alternates: {
    canonical: "https://innovision.co.in/investors/annual-report",
  },
};

const annualReports = [
  {
    year: "2022-2023",
    file: "/images/pdfs/investor/annualrepoert1.pdf",
  },
  {
    year: "2023-2024",
    file: "/images/pdfs/investor/annualreport2.pdf",
  },
];

export default function AnnualReportPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f8f7] text-neutral-900">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.16),transparent_46%)]" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">ANNUAL REPORT</h1>

            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/75">
              Home / ANNUAL REPORT
            </p>
          </div>
        </section>

        <section className="py-18">
          <div className="mx-auto max-w-4xl space-y-6 px-6 py-14">
            {annualReports.map((item) => (
              <article
                key={item.year}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,15,18,0.06)]"
              >
                <h2 className="text-2xl font-bold text-neutral-900">Annual Return</h2>
                <p className="mt-3 text-sm text-neutral-600">Filter by financial year :{item.year}</p>

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-md bg-[#EF2B2D] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#d62426]"
                >
                  Download
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
