// Route curtain gives internal navigation a fast branded horizon transition instead of an abrupt swap.
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SunLogo from "./SunLogo";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

type Phase = "idle" | "cover" | "reveal";

export default function RouteCurtain() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useHydratedReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const destinationRef = useRef<string | null>(null);
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    const intercept = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        phase !== "idle"
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (destination.origin !== current.origin) return;
      if (destination.pathname === current.pathname && destination.search === current.search) return;

      event.preventDefault();
      const next = `${destination.pathname}${destination.search}${destination.hash}`;
      if (reduceMotion) {
        router.push(next);
        return;
      }

      destinationRef.current = next;
      setPhase("cover");
    };

    document.addEventListener("click", intercept, true);
    return () => document.removeEventListener("click", intercept, true);
  }, [phase, reduceMotion, router]);

  useEffect(() => {
    if (phase !== "cover" || !destinationRef.current) return;
    const navigate = window.setTimeout(() => router.push(destinationRef.current as string), 430);
    const escape = window.setTimeout(() => setPhase("reveal"), 4500);
    return () => {
      window.clearTimeout(navigate);
      window.clearTimeout(escape);
    };
  }, [phase, router]);

  useEffect(() => {
    if (pathname === previousPathRef.current) return;
    previousPathRef.current = pathname;
    if (phase !== "cover") return;
    const reveal = window.requestAnimationFrame(() => setPhase("reveal"));
    return () => window.cancelAnimationFrame(reveal);
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const reset = window.setTimeout(() => {
      destinationRef.current = null;
      setPhase("idle");
    }, 620);
    return () => window.clearTimeout(reset);
  }, [phase]);

  return (
    <div className={`route-curtain route-curtain--${phase}`} aria-hidden="true">
      <div className="route-curtain__horizon" />
      <SunLogo className="route-curtain__mark" />
      <p>Shift the horizon</p>
    </div>
  );
}
