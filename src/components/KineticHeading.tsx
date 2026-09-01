// Service-page heading adds a restrained optical echo that responds to the visitor's pointer.
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

export default function KineticHeading({ id, children }: { id: string; children: ReactNode }) {
  const reduceMotion = useHydratedReducedMotion();
  const x = useMotionValue(8);
  const y = useMotionValue(-4);
  const echoX = useSpring(x, { stiffness: 105, damping: 17, mass: 0.65 });
  const echoY = useSpring(y, { stiffness: 105, damping: 17, mass: 0.65 });

  const move = (event: PointerEvent<HTMLHeadingElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 24);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14);
  };

  return (
    <h1 id={id} className="service-hero__heading kinetic-heading" onPointerMove={move}>
      <span className="kinetic-heading__main">{children}</span>
      <motion.span
        className="kinetic-heading__echo"
        style={reduceMotion ? undefined : { x: echoX, y: echoY }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </h1>
  );
}
