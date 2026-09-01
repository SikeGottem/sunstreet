// Interactive solar field turns the sunrise mark into a responsive canvas and optical lens.
"use client";

import { useEffect, useRef } from "react";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

type SolarFieldProps = {
  className?: string;
  intensity?: "hero" | "service";
};

export default function SolarField({ className = "", intensity = "hero" }: SolarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useHydratedReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const lens = lensRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !lens || !host) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;
    const pointer = { x: 0.68, y: 0.56, tx: 0.68, ty: 0.56 };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointer.tx = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
      pointer.ty = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    };

    const draw = (time = 0) => {
      pointer.x += (pointer.tx - pointer.x) * (reduceMotion ? 1 : 0.055);
      pointer.y += (pointer.ty - pointer.y) * (reduceMotion ? 1 : 0.055);

      const serviceScale = intensity === "service" ? 0.78 : 1;
      const centerX = width * (0.72 + (pointer.x - 0.5) * 0.1);
      const centerY = height * (0.59 + (pointer.y - 0.5) * 0.08);
      const radius = Math.min(width, height) * 0.33 * serviceScale;
      const phase = reduceMotion ? 0 : time * 0.00018;

      context.clearRect(0, 0, width, height);
      context.save();
      context.lineCap = "round";

      const horizon = context.createLinearGradient(0, centerY, width, centerY);
      horizon.addColorStop(0, "rgba(228, 200, 109, 0)");
      horizon.addColorStop(0.2, "rgba(228, 200, 109, 0.3)");
      horizon.addColorStop(0.72, "rgba(228, 200, 109, 0.88)");
      horizon.addColorStop(1, "rgba(228, 200, 109, 0)");
      context.strokeStyle = horizon;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(0, centerY);
      context.lineTo(width, centerY);
      context.stroke();

      for (let ring = 0; ring < 6; ring += 1) {
        context.strokeStyle = `rgba(228, 200, 109, ${0.08 + ring * 0.022})`;
        context.lineWidth = ring === 5 ? 1.2 : 0.7;
        context.beginPath();
        context.arc(centerX, centerY, radius * (0.42 + ring * 0.17), Math.PI, Math.PI * 2);
        context.stroke();
      }

      for (let ray = 0; ray < 54; ray += 1) {
        const ratio = ray / 53;
        const angle = Math.PI + ratio * Math.PI;
        const pulse = 0.86 + Math.sin(phase * 7 + ray * 0.73) * 0.12;
        const inner = radius * 0.16;
        const outer = radius * (0.96 + (ray % 5) * 0.055) * pulse;
        context.strokeStyle = `rgba(228, 200, 109, ${0.08 + (ray % 4) * 0.025})`;
        context.lineWidth = ray % 9 === 0 ? 1.1 : 0.55;
        context.beginPath();
        context.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
        context.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
        context.stroke();
      }

      for (let particle = 0; particle < 72; particle += 1) {
        const seed = (particle * 47) % 101;
        const orbit = radius * (0.3 + (seed / 101) * 1.35);
        const direction = particle % 2 === 0 ? 1 : -1;
        const angle = particle * 2.399 + phase * direction * (0.3 + (particle % 7) * 0.06);
        const px = centerX + Math.cos(angle) * orbit * 1.35;
        const py = centerY + Math.sin(angle) * orbit * 0.72;
        const size = particle % 11 === 0 ? 1.8 : 0.75;
        context.fillStyle = particle % 6 === 0 ? "rgba(255,255,255,0.72)" : "rgba(228,200,109,0.5)";
        context.beginPath();
        context.arc(px, py, size, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      const lensSize = Math.min(width * 0.34, height * 0.5) * serviceScale;
      lens.style.width = `${lensSize}px`;
      lens.style.height = `${lensSize}px`;
      lens.style.transform = `translate3d(${centerX - lensSize / 2}px, ${centerY - lensSize / 2}px, 0)`;

      if (!reduceMotion && running) frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw();
    });
    observer.observe(host);
    host.addEventListener("pointermove", handlePointer, { passive: true });
    resize();
    draw();

    const handleVisibility = () => {
      running = !document.hidden;
      if (running && !reduceMotion) frame = window.requestAnimationFrame(draw);
      else window.cancelAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      observer.disconnect();
      host.removeEventListener("pointermove", handlePointer);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.cancelAnimationFrame(frame);
    };
  }, [intensity, reduceMotion]);

  return (
    <div className={`solar-field ${solarFieldClass(intensity)} ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="solar-field__canvas" />
      <div ref={lensRef} className="solar-field__lens">
        <span />
      </div>
    </div>
  );
}

function solarFieldClass(intensity: SolarFieldProps["intensity"]) {
  return intensity === "service" ? "solar-field--service" : "solar-field--hero";
}
