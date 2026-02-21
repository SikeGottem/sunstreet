"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll({ children, className = "", panels = 4 }: { children: React.ReactNode; className?: string; panels?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(panels - 1) * 100}%`]);

  return (
    <div ref={containerRef} className={className} style={{ height: `${panels * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">{children}</motion.div>
      </div>
    </div>
  );
}
