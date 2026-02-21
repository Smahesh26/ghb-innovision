"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function IpoDisclaimerConfirmPage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  const handleConfirm = () => {
    setShowContent(true);
  };

  const handleDecline = () => {
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f7f5] to-[#f2f2f0]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        {!showContent ? (
          // Confirmation Screen
          <div className="rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-12">
            <div className="mb-8 border-b border-neutral-200 pb-6">
              <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Confirmation Required</h1>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">
                IPO Material Documents
              </p>
            </div>

            <div className="space-y-6 text-neutral-700">
              <div className="rounded-sm border border-blue-200/80 bg-blue-50/50 p-6">
                <h2 className="text-lg font-bold text-blue-900">Before Proceeding</h2>
                <p className="mt-3 text-sm leading-relaxed text-blue-800">
                  Please confirm that you have read and understood the IPO disclaimer and agree to the terms 
                  and conditions outlined therein.
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p className="font-semibold text-neutral-900">
                  I hereby confirm that:
                </p>

                <ul className="ml-6 space-y-2 list-disc marker:text-[#EF2B2D]">
                  <li>I have read and understood the IPO disclaimer in its entirety.</li>
                  <li>I acknowledge the risks associated with securities investments.</li>
                  <li>I am authorized to access this information and am not restricted by any applicable laws.</li>
                  <li>I will not distribute or reproduce this content without proper authorization.</li>
                  <li>I understand that this does not constitute an offer or solicitation to purchase securities.</li>
                </ul>

                <p className="mt-6 text-sm font-semibold text-neutral-900">
                  By clicking "I Confirm", you will gain access to IPO audiovisual presentations and material documents.
                </p>
              </div>
            </div>

            {/* Confirmation Buttons */}
            <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-end">
              <button
                onClick={handleDecline}
                className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
              >
                I Do Not Confirm
              </button>
              <button
                onClick={handleConfirm}
                className="inline-flex items-center justify-center rounded-sm border border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D] to-[#d62426] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_10px_25px_rgba(239,43,45,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(239,43,45,0.45)]"
              >
                I Confirm
              </button>
            </div>
          </div>
        ) : (
          // Video Content Screen
          <div className="space-y-8">
            <div className="rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-12">
              <div className="mb-8 border-b border-neutral-200 pb-6">
                <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">IPO Audio Visual Presentations</h1>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">
                  Innovision Limited
                </p>
              </div>

              <div className="space-y-8">
                {/* English Video */}
                <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-neutral-900">IPO Presentation - English</h2>
                    <span className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                      English
                    </span>
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-sm border border-neutral-200/80 bg-black shadow-[0_10px_30px_rgba(15,15,18,0.15)]">
                    <video
                      controls
                      className="h-full w-full"
                      poster="/images/video-poster-en.jpg"
                    >
                      <source src="/videos/ipo-presentation-english.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">
                    Comprehensive overview of Innovision Limited's IPO details, business model, and growth strategy.
                  </p>
                </div>

                {/* Hindi Video */}
                <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-neutral-900">IPO Presentation - Hindi</h2>
                    <span className="rounded-sm bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-800">
                      हिंदी
                    </span>
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-sm border border-neutral-200/80 bg-black shadow-[0_10px_30px_rgba(15,15,18,0.15)]">
                    <video
                      controls
                      className="h-full w-full"
                      poster="/images/video-poster-hi.jpg"
                    >
                      <source src="/videos/ipo-presentation-hindi.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">
                    इनोविज़न लिमिटेड के आईपीओ विवरण, व्यवसाय मॉडल और विकास रणनीति का व्यापक अवलोकन।
                  </p>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mt-8 rounded-sm border border-neutral-200/80 bg-gradient-to-b from-[#ffffff] to-[#fafaf9] p-6">
                <h3 className="text-lg font-bold text-neutral-900">Additional IPO Documents</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="/images/pdfs/drhp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-neutral-200/80 bg-white p-4 text-sm font-medium text-neutral-700 transition hover:border-[#EF2B2D]/25 hover:bg-[#fafaf9]"
                  >
                    <span>Draft Red Herring Prospectus</span>
                    <svg className="h-5 w-5 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="/images/pdfs/addendumtodrhp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-neutral-200/80 bg-white p-4 text-sm font-medium text-neutral-700 transition hover:border-[#EF2B2D]/25 hover:bg-[#fafaf9]"
                  >
                    <span>Addendum to DRHP</span>
                    <svg className="h-5 w-5 text-[#EF2B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:justify-between">
                <Link
                  href="/investors"
                  className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Back to Investors
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}
