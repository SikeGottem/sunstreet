"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SunLogo from "@/components/SunLogo";
import Marquee from "@/components/Marquee";
import CounterNumber from "@/components/CounterNumber";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function LandingHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 bg-white">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
        <SunLogo className="w-20 h-20 mx-auto mb-12" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-xs tracking-[0.4em] uppercase text-[#011E41]/40 mb-6">
        Welcome to Sun Street
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-[#011E41]/50 text-lg leading-relaxed max-w-2xl text-center">
        Established in 2016, Sun Street was founded by an ex-management consultant with over 15 years experience in APAC. We help organisations develop and implement strategy, connect brands with Asian markets, and provide transformative life coaching.
      </motion.p>
    </section>
  );
}

function ServiceCards() {
  const cards = [
    { href: "/consulting", icon: "◈", title: "Consulting", desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy" },
    { href: "/trading", icon: "◆", title: "Trading", desc: "At Sun Street, we are passionate about finding new or established brands for Asia" },
    { href: "/coaching", icon: "○", title: "Coaching", desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging" },
  ];

  return (
    <section className="px-6 pb-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <Link key={card.href} href={card.href}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="landing-card group relative border-2 border-[#011E41]/15 bg-white p-12 text-center card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-sm h-full"
            >
              <span className="text-[#011E41]/30 text-3xl block mb-6 group-hover:text-white/50 transition-colors duration-300">{card.icon}</span>
              <h3 className="font-sans text-2xl tracking-wide mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{card.title}</h3>
              <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{card.desc}</p>
              <div className="mt-8 flex justify-center">
                <span className="card-arrow text-white text-lg">→</span>
              </div>
            </motion.div>
          </Link>
        ))}
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
      <section className="relative py-40 overflow-hidden bg-[#EFEBE4]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#011E41]/5 blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal><SunLogo className="w-20 h-20 mx-auto mb-12" /></Reveal>
          <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl">Let&apos;s Work</h2></Reveal>
          <Reveal delay={0.2}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl italic">Together</h2></Reveal>
          <Reveal delay={0.3}><p className="text-[#011E41]/50 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></Reveal>
          <Reveal delay={0.4}>
            <a href="mailto:hello@sunstreethk.com" className="inline-block bg-[#011E41] text-white px-12 py-4 text-sm tracking-[0.3em] uppercase rounded-sm hover:bg-[#0E1D41] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
              Get In Touch
            </a>
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
      <ServiceCards />
      <StatsSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
