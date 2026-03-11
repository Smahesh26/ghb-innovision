"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function IpoDisclaimerConfirmPage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [loadedVideo, setLoadedVideo] = useState<"english" | "hindi" | null>(null);
  const englishVideoRef = useRef<HTMLVideoElement | null>(null);
  const hindiVideoRef = useRef<HTMLVideoElement | null>(null);
  const englishVideoUrl = "/English_Innovision%20Limited_Sebi%20AV_1.mp4";
  const hindiVideoUrl = "/Hindi_Innovision%20Limited_Sebi%20AV_1.mp4";
  const bannerTitle = showContent ? "IPO Audio Visual" : "IPO Disclaimer Confirmation";
  const bannerTrail = showContent ? "Home / Investor / IPO Audio Visual" : "Home / Investor / IPO Disclaimer / Confirm";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (showContent) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [showContent]);

  useEffect(() => {
    if (loadedVideo === "english" && englishVideoRef.current) {
      void englishVideoRef.current.play().catch(() => {
        // Fallback to controls if autoplay is blocked by browser policy.
      });
    }

    if (loadedVideo === "hindi" && hindiVideoRef.current) {
      void hindiVideoRef.current.play().catch(() => {
        // Fallback to controls if autoplay is blocked by browser policy.
      });
    }
  }, [loadedVideo]);

  const handleConfirm = () => {
    setShowContent(true);
  };

  const handleLoadVideo = (language: "english" | "hindi") => {
    setLoadedVideo(language);
  };

  const handleDecline = () => {
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f7f5] to-[#f2f2f0]">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] pb-20 pt-36 text-white sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">{bannerTrail}</p>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">{bannerTitle}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/75 sm:text-base">
            {showContent
              ? "Watch the IPO audiovisuals and access supporting IPO documents."
              : "Confirm that you have read and accepted the IPO disclaimer before viewing IPO materials."}
          </p>
        </div>
      </section>

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-12">
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
                <h2 className="mt-1 text-3xl font-bold text-neutral-900 sm:text-4xl">IPO Audio Visual Content</h2>
                <p className="mt-3 text-sm text-neutral-600">
                  Watch the latest IPO audio visual presentations directly on this page.
                </p>
                <p className="mt-2 text-xs font-medium text-neutral-500">Videos load on demand for faster page performance.</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-sm border border-neutral-200/80 bg-gradient-to-b from-white to-[#f8f8f7] p-5 shadow-[0_12px_28px_rgba(15,15,18,0.08)] sm:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Video 1</p>
                    <span className="rounded-sm border border-[#EF2B2D]/20 bg-[#EF2B2D]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b91f21]">
                      English
                    </span>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-neutral-300/70 bg-black ring-1 ring-black/5 shadow-[0_12px_35px_rgba(15,15,18,0.2)]">
                    {loadedVideo === "english" && (
                      <video
                        ref={englishVideoRef}
                        className="h-full w-full"
                        controls
                        autoPlay
                        preload="metadata"
                        playsInline
                        src={englishVideoUrl}
                      />
                    )}
                    {loadedVideo !== "english" && (
                      <button
                        type="button"
                        onClick={() => handleLoadVideo("english")}
                        className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white transition hover:from-neutral-800 hover:to-neutral-900"
                      >
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EF2B2D] shadow-[0_10px_25px_rgba(239,43,45,0.45)]">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 4.2A1 1 0 005 5.06v9.88a1 1 0 001.54.84l7.26-4.94a1 1 0 000-1.68L6.3 4.2z" />
                          </svg>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Load English Video</span>
                      </button>
                    )}
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">INNOVISION IPO English</h2>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    Use the built-in player controls to play, pause, seek, adjust volume, and enter fullscreen.
                  </p>
                </article>

                <article className="rounded-sm border border-neutral-200/80 bg-gradient-to-b from-white to-[#f8f8f7] p-5 shadow-[0_12px_28px_rgba(15,15,18,0.08)] sm:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Video 2</p>
                    <span className="rounded-sm border border-[#EF2B2D]/20 bg-[#EF2B2D]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b91f21]">
                      Hindi
                    </span>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-neutral-300/70 bg-black ring-1 ring-black/5 shadow-[0_12px_35px_rgba(15,15,18,0.2)]">
                    {loadedVideo === "hindi" && (
                      <video
                        ref={hindiVideoRef}
                        className="h-full w-full"
                        controls
                        autoPlay
                        preload="metadata"
                        playsInline
                        src={hindiVideoUrl}
                      />
                    )}
                    {loadedVideo !== "hindi" && (
                      <button
                        type="button"
                        onClick={() => handleLoadVideo("hindi")}
                        className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white transition hover:from-neutral-800 hover:to-neutral-900"
                      >
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EF2B2D] shadow-[0_10px_25px_rgba(239,43,45,0.45)]">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 4.2A1 1 0 005 5.06v9.88a1 1 0 001.54.84l7.26-4.94a1 1 0 000-1.68L6.3 4.2z" />
                          </svg>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Load Hindi Video</span>
                      </button>
                    )}
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">INNOVISION IPO Hindi</h2>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    Use the built-in player controls to play, pause, seek, adjust volume, and enter fullscreen.
                  </p>
                </article>
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
                <a
                  href="/investors/"
                  className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Back to Investors
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Go to Homepage
                </a>
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
