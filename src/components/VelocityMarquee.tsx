"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function VelocityMarquee({
  children,
  baseSpeed = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  baseSpeed?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const velocityRef = useRef(0);
  const prevScrollRef = useRef(0);
  const rafRef = useRef<number>(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - prevScrollRef.current;
    prevScrollRef.current = latest;
    velocityRef.current = delta;
  });

  useEffect(() => {
    const animate = () => {
      const speed = baseSpeed + Math.min(Math.abs(velocityRef.current) * 0.3, 8);
      // Decay velocity
      velocityRef.current *= 0.95;
      xRef.current -= speed;

      if (innerRef.current) {
        const halfWidth = innerRef.current.scrollWidth / 2;
        if (Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0;
        }
        innerRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [baseSpeed]);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={innerRef} className="inline-flex will-change-transform">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
}
