"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setHidden(false);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-magnetic], [data-hover]")) setHovering(true);
    };
    const onOut = () => setHovering(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gold pointer-events-none mix-blend-difference hidden md:block"
        style={{ zIndex: 99999 }}
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0 : clicking ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none mix-blend-difference hidden md:block"
        style={{ zIndex: 99999 }}
        animate={{
          x: pos.x - (hovering ? 40 : 24),
          y: pos.y - (hovering ? 40 : 24),
          width: hovering ? 80 : 48,
          height: hovering ? 80 : 48,
          borderColor: hovering ? "rgba(201,168,76,0.8)" : "rgba(201,168,76,0.4)",
          borderWidth: clicking ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}

interface Particle { id: number; x: number; y: number }

function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const addParticle = useCallback((x: number, y: number) => {
    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < 20) return;
    lastPos.current = { x, y };
    const id = idRef.current++;
    setParticles((prev) => [...prev.slice(-12), { id, x, y }]);
    setTimeout(() => setParticles((prev) => prev.filter((p) => p.id !== id)), 600);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => addParticle(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [addParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none hidden md:block" style={{ zIndex: 99998 }}>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 1, x: p.x - 3, y: p.y - 3 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function CursorTrail() {
  return (
    <>
      <CursorDot />
      <ParticleTrail />
    </>
  );
}
