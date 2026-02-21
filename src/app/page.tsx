"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SunLogo from "@/components/SunLogo";
import Marquee from "@/components/Marquee";
import CounterNumber from "@/components/CounterNumber";
import RotatingWords from "@/components/RotatingWords";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function LandingHero() {
  const cards = [
    { href: "/consulting", icon: "◈", title: "Consulting", desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy" },
    { href: "/trading", icon: "◆", title: "Trading", desc: "At Sun Street, we are passionate about finding new or established brands for Asia" },
    { href: "/coaching", icon: "○", title: "Coaching", desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #011E41 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Logo with rotation entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SunLogo className="w-12 h-12 mx-auto mb-6" />
        </motion.div>

        {/* Mixed weight heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-[#011E41]/40 mb-3"
        >
          Welcome to <span className="font-bold text-[#011E41]/70">Sun Street</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#011E41]/50 text-sm leading-relaxed max-w-xl text-center mb-10"
        >
          Established in 2016, Sun Street was founded by an ex-management consultant with over 15 years experience in APAC.
        </motion.p>

        {/* Rotating words */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-[#011E41]/50 text-sm mb-10"
        >
          We help with <RotatingWords words={["Strategy", "Growth", "Brands", "Coaching"]} className="text-[#011E41]" />
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {cards.map((card, i) => (
            <Link key={card.href} href={card.href} className="block h-full">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
              <TiltCard className="pillar-card group relative border-2 border-[#011E41]/10 bg-white p-8 text-center rounded-xl h-full overflow-hidden transition-all duration-500 hover:shadow-xl">

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
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience", deco: "15" },
    { value: 2016, suffix: "", label: "Established", deco: "2016" },
    { value: 8, suffix: "+", label: "Countries", deco: "08" },
    { value: 3, suffix: "", label: "Core Pillars", deco: "03" },
  ];
  return (
    <>
      <div className="section-divider" />
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="relative text-center">
                <span className="deco-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[180px]">{stat.deco}</span>
                <div className="relative z-10">
                  <div className="font-sans text-5xl md:text-7xl text-[#011E41] mb-2">
                    <CounterNumber end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                  </div>
                  <p className="text-[#011E41]/40 text-xs tracking-[0.3em] uppercase">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactCTA() {
  return (
    <>
      <div className="section-divider" />
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#011E41]/5 blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal><SunLogo className="w-20 h-20 mx-auto mb-12" /></Reveal>
          <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl">Let&apos;s Work</h2></Reveal>
          <Reveal delay={0.2}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl italic">Together</h2></Reveal>
          <Reveal delay={0.3}><p className="text-[#011E41]/50 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></Reveal>
          <Reveal delay={0.4}>
            <MagneticButton href="mailto:hello@sunstreethk.com" className="!bg-[#011E41] !text-white !px-12 !py-4 !text-sm !tracking-[0.3em] uppercase !rounded-sm !border-0 hover:!bg-[#0E1D41] hover:!shadow-lg">
              Get In Touch
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#011E41]">
      <Marquee speed="slow" className="py-4 border-b border-white/10">
        {["Sun Street", "Hong Kong", "Consulting", "Trading", "Coaching", "Strategy", "APAC", "Since 2016"].map((w, i) => (
          <span key={i} className="mx-6 text-xs text-white/15 tracking-[0.3em] uppercase">{w} <span className="mx-6 text-white/10">{"\u2726"}</span></span>
        ))}
      </Marquee>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4">
              <line x1="8" y1="40" x2="56" y2="40" stroke="white" strokeWidth="1.5" />
              <path d="M18 40C18 32.268 24.268 26 32 26C39.732 26 46 32.268 46 40" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="32" y1="18" x2="32" y2="23" stroke="white" strokeWidth="1.5" />
              <line x1="20.2" y1="22.2" x2="23.4" y2="25.4" stroke="white" strokeWidth="1.5" />
              <line x1="43.8" y1="22.2" x2="40.6" y2="25.4" stroke="white" strokeWidth="1.5" />
              <line x1="14" y1="33" x2="19" y2="33" stroke="white" strokeWidth="1.5" />
              <line x1="45" y1="33" x2="50" y2="33" stroke="white" strokeWidth="1.5" />
              <line x1="22" y1="44" x2="42" y2="44" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="26" y1="47" x2="38" y2="47" stroke="white" strokeWidth="1" opacity="0.3" />
            </svg>
            <p className="font-sans text-lg text-white/60">Sun Street</p>
            <p className="text-xs text-white/30 mt-2">Hong Kong</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-2">Navigate</p>
            {[
              { label: "Consulting", href: "/consulting" },
              { label: "Trading", href: "/trading" },
              { label: "Coaching", href: "/coaching" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors group">
                <span className="inline-block w-0 group-hover:w-4 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />{l.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">Contact</p>
            <a href="mailto:hello@sunstreethk.com" className="text-sm text-white/40 hover:text-white transition-colors">hello@sunstreethk.com</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; 2024 Sun Street / Powered by Zen Lab</p>
          <p className="text-xs text-white/15">Designed with intention</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-[#011E41] font-sans">
      <LandingHero />
      <StatsSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
