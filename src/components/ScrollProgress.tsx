"use client";
import { motion, useScroll } from "framer-motion";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useHydratedReducedMotion();

  if (reduceMotion) return null;

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
