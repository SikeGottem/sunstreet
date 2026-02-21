"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", href, onClick, variant = "default" }: { children: React.ReactNode; className?: string; href?: string; onClick?: () => void; variant?: "default" | "large" | "ghost" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => { const el = ref.current; if (!el) return; const { left, top, width, height } = el.getBoundingClientRect(); setPosition({ x: (e.clientX - left - width / 2) * 0.35, y: (e.clientY - top - height / 2) * 0.35 }); };
  const reset = () => setPosition({ x: 0, y: 0 });
  const Tag = href ? "a" : "button";
  const variants = {
    default: "px-8 py-3.5 border border-gold text-gold hover:bg-gold hover:text-navy-dark text-sm tracking-[0.2em] uppercase",
    large: "px-12 py-5 border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark text-base tracking-[0.2em] uppercase",
    ghost: "px-6 py-2 text-gold hover:text-white text-sm tracking-[0.15em] uppercase border-b border-gold/30 hover:border-gold",
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }} data-magnetic className="inline-block">
      <Tag href={href} onClick={onClick} className={`inline-block font-medium transition-all duration-300 ${variants[variant]} ${className}`}>{children}</Tag>
    </motion.div>
  );
}
