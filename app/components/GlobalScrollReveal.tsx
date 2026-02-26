"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  "section",
  "article",
  "main > div",
  ".rounded-xl",
  ".rounded-2xl",
  "[data-reveal]",
].join(", ");

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    nodes.forEach((element) => {
      if (element.dataset.revealInitialized === "true") {
        return;
      }
      element.dataset.revealInitialized = "true";
      element.classList.add("global-reveal-init");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.classList.add("global-reveal-in");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    nodes.forEach((element) => {
      if (!element.classList.contains("global-reveal-in")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
