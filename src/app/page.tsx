"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SunLogo from "@/components/SunLogo";
import CounterNumber from "@/components/CounterNumber";
import TiltCard from "@/components/TiltCard";
import PageNav from "@/components/PageNav";
import PageFooter from "@/components/PageFooter";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";
import TextScramble from "@/components/TextScramble";
import VelocityMarquee from "@/components/VelocityMarquee";
import Marquee from "@/components/Marquee";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const TAGLINE_WORDS = "Established in 2016, Sun Street was founded by an ex-management consultant with over 15 years experience in APAC.".split(" ");

const MARQUEE_ITEMS = ["CONSULTING", "TRADING", "COACHING", "HONG KONG", "SINCE 2016"];

function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const cards = [
    { href: "/consulting", icon: "◈", title: "Consulting", desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy" },
    { href: "/trading", icon: "◆", title: "Trading", desc: "At Sun Street, we are passionate about finding new or established brands for Asia" },
    { href: "/coaching", icon: "○", title: "Coaching", desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-white overflow-hidden">
      {/* Interactive dot grid canvas */}
      <InteractiveDotGrid />

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Logo with rotation entrance + parallax */}
        <motion.div
          style={{ y: logoY }}
          initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SunLogo className="w-14 h-14 mx-auto mb-8" />
        </motion.div>

        {/* Giant SUN STREET heading with text scramble + parallax */}
        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans font-bold tracking-tight text-[#011E41] text-center leading-none">
            <TextScramble text="SUN STREET" duration={1200} />
          </h1>
        </motion.div>

        {/* Word-by-word staggered tagline + parallax */}
        <motion.p
          style={{ y: descY }}
          className="text-[#011E41]/50 text-sm md:text-base leading-relaxed max-w-xl text-center mb-8 flex flex-wrap justify-center gap-x-[0.3em]"
        >
          {TAGLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + i * 0.04,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Scroll-velocity marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="w-screen mb-14 border-y border-[#011E41]/10 py-3"
        >
          <VelocityMarquee baseSpeed={0.5}>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="mx-6 text-xs text-[#011E41]/30 tracking-[0.3em] uppercase font-sans">
                {item} <span className="mx-6 text-[#011E41]/15">✦</span>
              </span>
            ))}
          </VelocityMarquee>
        </motion.div>

        {/* Cards with parallax */}
        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {cards.map((card, i) => (
            <Link key={card.href} href={card.href} className="block h-full">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
              <TiltCard className="pillar-card group relative border-2 border-[#011E41]/10 bg-white p-10 py-14 text-center rounded-xl h-full overflow-hidden transition-all duration-500 hover:shadow-xl">

                <span className="text-[#011E41]/25 text-2xl block mb-4 transition-colors duration-300 group-hover:text-white/50">{card.icon}</span>

                {/* Title with animated underline */}
                <h3 className="relative inline-block font-sans text-xl tracking-wide mb-3 text-[#011E41] transition-colors duration-300 group-hover:text-white">
                  {card.title}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#011E41] transition-all duration-500 group-hover:w-full group-hover:bg-white" />
                </h3>

                <p className="text-[#011E41]/45 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/70">{card.desc}</p>

                {/* Hover gradient + arrow */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#011E41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:from-white/5" />
                <div className="absolute bottom-4 right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#011E41]/40 group-hover:text-white/60 text-lg">
                  →
                </div>
              </TiltCard>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 2016, suffix: "", label: "Established" },
    { value: 8, suffix: "+", label: "Countries" },
    { value: 3, suffix: "", label: "Core Pillars" },
  ];
  return (
    <>
      <div className="section-divider" />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-l-2 border-[#C9A84C] pl-5 py-2">
                <div className="font-sans text-3xl md:text-4xl text-[#011E41] mb-1">
                  <CounterNumber end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                </div>
                <p className="text-[#011E41]/40 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-[#011E41] font-sans">
      <PageNav />
      <LandingHero />
      <StatsSection />
      <PageFooter />
    </main>
  );
}
