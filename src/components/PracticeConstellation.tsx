// Scroll-driven practice constellation turns Sun Street's disciplines into one continuous transformation scene.
"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import SunLogo from "./SunLogo";
import useHydratedReducedMotion from "./useHydratedReducedMotion";

const practices = [
  {
    index: "01",
    href: "/consulting",
    title: "Consulting",
    signal: "Direction",
    statement: "Turn direction into operating reality.",
    note: "Strategy · Operating model · Change",
  },
  {
    index: "02",
    href: "/trading",
    title: "Trading",
    signal: "Reach",
    statement: "Move global brands through Asian markets.",
    note: "Distribution · Retail · Market entry",
  },
  {
    index: "03",
    href: "/coaching",
    title: "Coaching",
    signal: "Belief",
    statement: "Change the pattern shaping what comes next.",
    note: "Life coaching · PSYCH-K® · Nei Gong",
  },
];

const panelRanges = [
  [0, 0.035, 0.29, 0.335],
  [0.32, 0.355, 0.625, 0.665],
  [0.65, 0.69, 0.999, 1],
];

export default function PracticeConstellation() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 225]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.84]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = value < 0.335 ? 0 : value < 0.665 ? 1 : 2;
    setActive((current) => (current === next ? current : next));
  });

  if (reduceMotion) {
    return (
      <section id="practice" className="practice-constellation practice-constellation--reduced" aria-labelledby="practice-title">
        <div className="site-shell constellation-static">
          <p className="eyebrow">Three ways to move</p>
          <h2 id="practice-title">One sun.<br /><em>Three forces.</em></h2>
          <div className="constellation-static__list">
            {practices.map((practice) => (
              <Link key={practice.href} href={practice.href}>
                <span>{practice.index}</span>
                <strong>{practice.title}</strong>
                <p>{practice.statement}</p>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="practice"
      className={`practice-constellation practice-constellation--${active}`}
      aria-labelledby="practice-title"
    >
      <h2 id="practice-title" className="sr-only">Sun Street practices</h2>
      <div className="constellation-stage">
        <div className="constellation-stage__meta">
          <p>One sun · Three forces</p>
          <span>Scroll / 0{active + 1} of 03</span>
        </div>

        <motion.div className="constellation-sun" style={{ rotate: sunRotate, scale: sunScale }} aria-hidden="true">
          <div className="constellation-sun__rings" />
          <SunLogo className="constellation-sun__mark" />
        </motion.div>

        {practices.map((practice, index) => (
          <ConstellationPanel
            key={practice.href}
            practice={practice}
            progress={scrollYProgress}
            range={panelRanges[index]}
            active={active === index}
            direction={index % 2 === 0 ? 1 : -1}
          />
        ))}

        <div className="constellation-counter" aria-hidden="true">
          {practices.map((practice, index) => (
            <span key={practice.index} className={active === index ? "is-active" : ""}>{practice.index}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

type Practice = (typeof practices)[number];

function ConstellationPanel({
  practice,
  progress,
  range,
  active,
  direction,
}: {
  practice: Practice;
  progress: MotionValue<number>;
  range: number[];
  active: boolean;
  direction: 1 | -1;
}) {
  const opacity = useTransform(progress, range, practice.index === "03" ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const x = useTransform(progress, range, [`${18 * direction}vw`, "0vw", "0vw", `${-20 * direction}vw`]);
  const signalX = useTransform(progress, range, [`${-30 * direction}vw`, "0vw", "0vw", `${26 * direction}vw`]);
  const rotate = useTransform(progress, range, [direction * 2.5, 0, 0, direction * -2]);

  return (
    <motion.article
      className="constellation-panel"
      style={{ opacity }}
      aria-hidden={!active}
    >
      <motion.p className="constellation-panel__signal" style={{ x: signalX }} aria-hidden="true">
        {practice.signal}
      </motion.p>
      <motion.div className="constellation-panel__body" style={{ x, rotate }}>
        <p className="constellation-panel__index">{practice.index} · {practice.title}</p>
        <h3>{practice.statement}</h3>
        <div className="constellation-panel__foot">
          <span>{practice.note}</span>
          <Link href={practice.href} tabIndex={active ? 0 : -1}>
            Enter {practice.title} <i aria-hidden="true">↗</i>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}
