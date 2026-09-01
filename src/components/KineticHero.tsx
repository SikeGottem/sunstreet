// Homepage poster couples split typography, scroll choreography, and the interactive sun instrument.
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SolarField from "./SolarField";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

export default function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const sunX = useTransform(scrollYProgress, [0, 1], ["0vw", "-10vw"]);
  const streetX = useTransform(scrollYProgress, [0, 1], ["0vw", "11vw"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 1, 0.2]);
  const footerY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      ref={heroRef}
      className="kinetic-hero"
      aria-labelledby="home-title"
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
            style={reduceMotion ? undefined : { opacity: titleOpacity }}
          >
            <motion.span className="kinetic-word kinetic-word--sun" style={reduceMotion ? undefined : { x: sunX }}>
              <i>SUN</i>
            </motion.span>
            <motion.span className="kinetic-word kinetic-word--street" style={reduceMotion ? undefined : { x: streetX }}>
              <i>STREET</i>
            </motion.span>
          </motion.h1>

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
          <span>Move the light</span><i />
        </p>
      </div>
    </section>
  );
}
