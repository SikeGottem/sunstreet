"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setTransform({ rotateX: (y - 0.5) * -20, rotateY: (x - 0.5) * 20 });
    setGlare({ x: x * 100, y: y * 100 });
  };

  const reset = () => { setTransform({ rotateX: 0, rotateY: 0 }); setGlare({ x: 50, y: 50 }); };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ rotateX: transform.rotateX, rotateY: transform.rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`relative overflow-hidden ${className}`}
        style={{ transformStyle: "preserve-3d" }}
        data-hover
      >
        {children}
        <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(201,168,76,0.12) 0%, transparent 60%)` }} />
      </motion.div>
    </div>
  );
}
