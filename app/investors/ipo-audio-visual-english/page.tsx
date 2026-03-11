"use client";

import { useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function IpoAudioVisualEnglishPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const handleStartVideo = async () => {
    if (isStarted || isStarting || !videoRef.current) return;
    setIsStarting(true);
    try {
      await videoRef.current.play();
      setIsStarted(true);
    } catch {
      setIsStarted(false);
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f7f5] to-[#f2f2f0]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] pb-20 pt-36 text-white sm:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,43,45,0.18),transparent_45%)]" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Home / Investor / IPO Offer Documents</p>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">IPO Audio Visual (English)</h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-white/75 sm:text-base">
              Watch the Innovision Limited IPO audio visual in English.
            </p>
          </div>
        </section>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.08),transparent_45%)]" />

        <section className="relative w-full px-4 pb-24 pt-10 sm:px-6 sm:pt-12">
          <div className="w-full max-w-4xl rounded-sm border border-neutral-200/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,15,18,0.08)] sm:p-8 lg:p-10" style={{ marginInline: "auto" }}>
            <div className="mb-6 border-b border-neutral-200 pb-5 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Innovision Limited IPO Audio Visual (English)</h2>
              <p className="mt-2 text-sm text-neutral-600">Use player controls to play, pause, seek, and go fullscreen.</p>
            </div>

            <div className="w-full" style={{ marginInline: "auto" }}>
              <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-sm border border-neutral-300/70 bg-black ring-1 ring-black/5 shadow-[0_12px_35px_rgba(15,15,18,0.2)]" style={{ marginInline: "auto" }}>
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  playsInline
                  src="/English_Innovision%20Limited_Sebi%20AV_1.mp4"
                />
                {!isStarted ? (
                  <button
                    type="button"
                    onClick={handleStartVideo}
                    disabled={isStarting}
                    className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 bg-black/45 text-white transition hover:bg-black/35 disabled:cursor-not-allowed"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#EF2B2D] shadow-[0_10px_25px_rgba(239,43,45,0.45)]">
                      <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 4.2A1 1 0 005 5.06v9.88a1 1 0 001.54.84l7.26-4.94a1 1 0 000-1.68L6.3 4.2z" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                      {isStarting ? "Starting..." : "Play English Video"}
                    </span>
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:justify-center">
              <a
                href="/investors/"
                className="inline-flex w-full items-center justify-center rounded-sm border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 sm:min-w-[220px] sm:w-auto"
              >
                Back to Investors
              </a>
              <a
                href="/"
                className="inline-flex w-full items-center justify-center rounded-sm border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 sm:min-w-[220px] sm:w-auto"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
