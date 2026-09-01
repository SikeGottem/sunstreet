// Shared, reduced-motion-safe entrance animation for editorial page sections.
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}: RevealProps) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: distance, filter: "blur(4px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
