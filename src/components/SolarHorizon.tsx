// Code-native sunrise artwork gives Sun Street a distinctive visual anchor without stock imagery.
"use client";

import { motion } from "framer-motion";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

type SolarHorizonProps = {
  className?: string;
  variant?: "hero" | "quiet";
};

export default function SolarHorizon({ className = "", variant = "hero" }: SolarHorizonProps) {
  const reduceMotion = useHydratedReducedMotion();
  const rays = Array.from({ length: 25 }, (_, index) => index);

  return (
    <div className={`solar-horizon solar-horizon--${variant} ${className}`} aria-hidden="true">
      <div className="solar-horizon__aura" />
      <motion.div
        className="solar-horizon__sun"
        initial={reduceMotion ? false : { y: "36%", opacity: 0 }}
        animate={reduceMotion ? undefined : { y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.2, 0, 0, 1], delay: 0.15 }}
      />
      <motion.div
        className="solar-horizon__rays"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.2, 0, 0, 1], delay: 0.45 }}
      >
        {rays.map((ray) => (
          <i key={ray} style={{ transform: `rotate(${(ray / (rays.length - 1)) * 180 - 90}deg)` }} />
        ))}
      </motion.div>
      <motion.div
        className="solar-horizon__line"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={reduceMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 1.3, ease: [0.2, 0, 0, 1], delay: 0.3 }}
      />
    </div>
  );
}
