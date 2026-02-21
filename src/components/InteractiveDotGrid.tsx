"use client";
import { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    let raf: number;
    const GAP = 28;
    const BASE_R = 1;
    const MAX_R = 2.5;
    const INFLUENCE = 150;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GAP;
          const y = r * GAP;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / INFLUENCE);

          const radius = BASE_R + (MAX_R - BASE_R) * t;
          const alpha = 0.04 + 0.35 * t;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(1, 30, 65, ${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    // Listen on the parent section (or window) so cursor tracks even over content
    const parent = canvas.parentElement || window;
    const onMoveWindow = (e: Event) => {
      const me = e as MouseEvent;
      const rect = canvas.getBoundingClientRect();
      mouse = { x: me.clientX - rect.left, y: me.clientY - rect.top };
    };
    parent.addEventListener("mousemove", onMoveWindow);
    parent.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMoveWindow);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
