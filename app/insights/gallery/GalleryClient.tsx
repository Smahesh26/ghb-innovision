"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
  span?: string;
};

type GalleryClientProps = {
  galleryImages: GalleryImage[];
  categories: string[];
  tilePattern: string[];
};

export default function GalleryClient({ galleryImages, categories, tilePattern }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }
    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryImages]);

  const closeLightbox = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) return current;
      return (current + 1) % filteredImages.length;
    });
  };

  const showPrev = () => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) return current;
      return (current - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      showNext();
    } else if (swipeDistance < -swipeThreshold) {
      showPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                isActive
                  ? "border-[#EF2B2D] bg-[#EF2B2D]/15 text-white"
                  : "border-white/10 text-white/80 hover:border-[#EF2B2D]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filteredImages.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-white/70">
          No photos found in this category.
        </div>
      ) : (
        <div className="grid auto-rows-[95px] gap-3 sm:auto-rows-[120px] sm:gap-4 sm:grid-cols-2 lg:auto-rows-[140px] lg:grid-cols-4">
          {filteredImages.map((item, index) => (
            <button
              key={`${item.src}-${item.title}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left ${item.span ?? ""} ${tilePattern[index % tilePattern.length]}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#EF2B2D]">
                  {item.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:border-white"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-3 sm:left-6 rounded-full border border-white/30 bg-black/40 p-3 text-white hover:border-white"
              aria-label="Previous image"
            >
              ←
            </button>

            <div
              className="relative h-[72vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 sm:right-6 rounded-full border border-white/30 bg-black/40 p-3 text-white hover:border-white"
              aria-label="Next image"
            >
              →
            </button>

            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
