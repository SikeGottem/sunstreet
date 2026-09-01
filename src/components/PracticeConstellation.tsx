// Homepage practice index turns the three disciplines into concise, reactive editorial rows.
"use client";

import Link from "next/link";
import { useState } from "react";

const practices = [
  { index: "01", href: "/consulting", title: "Consulting", signal: "Direction", statement: "Turn direction into operating reality." },
  { index: "02", href: "/trading", title: "Trading", signal: "Reach", statement: "Move global brands through Asian markets." },
  { index: "03", href: "/coaching", title: "Coaching", signal: "Belief", statement: "Change the pattern shaping what comes next." },
];

export default function PracticeConstellation() {
  const [active, setActive] = useState(0);

  return (
    <section id="practice" className={`practice-index practice-index--${active}`} aria-labelledby="practice-title">
      <div className="site-shell practice-index__header">
        <p className="eyebrow eyebrow--light">Three ways to move</p>
        <h2 id="practice-title">One street.<br /><span>Three directions.</span></h2>
        <p>Select a discipline to shift the field.</p>
      </div>
      <div className="practice-index__rows">
        {practices.map((practice, index) => (
          <Link
            key={practice.href}
            href={practice.href}
            className={active === index ? "is-active" : ""}
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className="practice-index__number">{practice.index}</span>
            <strong>{practice.title}</strong>
            <span className="practice-index__signal">{practice.signal}</span>
            <p>{practice.statement}</p>
            <i aria-hidden="true">↗</i>
          </Link>
        ))}
      </div>
      <div className="practice-index__sun" aria-hidden="true"><span /></div>
    </section>
  );
}
