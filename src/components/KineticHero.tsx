// Homepage poster couples split typography, scroll choreography, and the interactive sun instrument.
"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PointerEvent } from "react";
import SolarField from "./SolarField";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

export default function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.7 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.7 });
  const streetX = useTransform(springX, (value) => value * -1.2);
  const streetY = useTransform(springY, (value) => value * -0.55);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const sunScrollX = useTransform(scrollYProgress, [0, 0.72, 1], ["0vw", "-8vw", "-30vw"]);
  const streetScrollX = useTransform(scrollYProgress, [0, 0.72, 1], ["0vw", "9vw", "32vw"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.96, 0.86]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 1, 0]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 82]);
  const footerY = useTransform(scrollYProgress, [0, 0.72], [0, -38]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 32);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 22);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="kinetic-hero"
      aria-labelledby="home-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="kinetic-hero__stage">
        <SolarField />

        <div className="site-shell kinetic-hero__content">
          <div className="kinetic-hero__topline">
            <p className="eyebrow eyebrow--light">Hong Kong · Since 2016</p>
            <span>22.3193° N · 114.1694° E</span>
          </div>

          <motion.h1
            id="home-title"
            className="kinetic-hero__title"
            aria-label="Sun Street"
            style={reduceMotion ? undefined : { scale: titleScale, opacity: titleOpacity }}
          >
            <motion.span className="kinetic-word kinetic-word--sun" style={reduceMotion ? undefined : { x: sunScrollX }}>
              <motion.i data-text="SUN" style={reduceMotion ? undefined : { x: springX, y: springY }}>SUN</motion.i>
            </motion.span>
            <motion.span className="kinetic-word kinetic-word--street" style={reduceMotion ? undefined : { x: streetScrollX }}>
              <motion.i data-text="STREET" style={reduceMotion ? undefined : { x: streetX, y: streetY }}>STREET</motion.i>
            </motion.span>
          </motion.h1>

          <motion.div className="kinetic-hero__orbit" style={reduceMotion ? undefined : { rotate: orbitRotate }} aria-hidden="true">
            <span>Strategy</span>
            <span>Distribution</span>
            <span>Transformation</span>
          </motion.div>

          <motion.div className="kinetic-hero__footer" style={reduceMotion ? undefined : { y: footerY }}>
            <p>
              Three disciplines for moments<br />when standing still is not an option.
            </p>
            <a className="hero-link hero-link--light" href="#practice">
              Move toward change <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        <p className="kinetic-hero__scroll" aria-hidden="true">
          <span>Scroll to move the sun</span><i />
        </p>
      </div>
    </section>
  );
}
