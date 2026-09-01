"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let animationFrame = 0;
    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }
    animationFrame = requestAnimationFrame(raf);

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const handlers = anchors.map((anchor) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) { const target = document.querySelector(href); if (target) lenis.scrollTo(target as HTMLElement); }
      };
      anchor.addEventListener("click", handler);
      return { anchor, handler };
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      handlers.forEach(({ anchor, handler }) => anchor.removeEventListener("click", handler));
      lenis.destroy();
    };
  }, []);
  return null;
}
