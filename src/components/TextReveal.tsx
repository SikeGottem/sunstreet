"use client";
import { motion } from "framer-motion";

export function SplitText({ text, className = "", delay = 0, stagger = 0.03 }: { text: string; className?: string; delay?: number; stagger?: number }) {
  const words = text.split(" ");
  return (
    <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={`inline ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span className="inline-block" variants={{ hidden: { y: "120%", rotateX: -40 }, visible: { y: 0, rotateX: 0, transition: { duration: 0.8, delay: delay + wi * stagger * 3, ease: [0.22, 1, 0.36, 1] } } }}>
            {word.split("").map((char, ci) => (
              <motion.span key={ci} className="inline-block" variants={{ hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay + (wi * word.length + ci) * stagger, ease: [0.22, 1, 0.36, 1] } } }}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function RevealLine({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block group ${className}`} data-hover>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-70 text-gold transition-opacity duration-100" style={{ clipPath: "inset(10% 0 60% 0)", transform: "translate(-2px, 2px)" }} aria-hidden="true">{text}</span>
      <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-70 text-blue-400 transition-opacity duration-100" style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -1px)" }} aria-hidden="true">{text}</span>
    </span>
  );
}
