"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Marquee from "@/components/Marquee";

const pillars = [
  {
    title: "Consulting",
    href: "#consulting",
    desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy.",
    bg: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=60",
    icon: "◆",
  },
  {
    title: "Trading",
    href: "#trading",
    desc: "At Sun Street, we are passionate about finding new or established brands for Asia.",
    bg: "https://images.unsplash.com/photo-1563950708-baa6e689e243?w=800&q=60",
    icon: "◈",
  },
  {
    title: "Coaching",
    href: "#coaching",
    desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging.",
    bg: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=60",
    icon: "◇",
  },
];

const consultingServices = [
  {
    num: "01",
    title: "Strategic Operating Model Review",
    desc: "Holistic analysis of your organisation including people, process, technology and governance to highlight key opportunities and risks.",
  },
  {
    num: "02",
    title: "Process Improvement",
    desc: "Detailed analysis and implementation of new and existing business processes with the aim of achieving optimal efficiency and effectiveness.",
  },
  {
    num: "03",
    title: "Programme & Change Management",
    desc: "Integration, implementation and risk mitigation for any organisational change programme.",
  },
];

const tradingServices = [
  {
    num: "01",
    title: "Full Service Distribution",
    desc: "End-to-end distribution services including warehousing, logistics, sales, marketing and customer service across Hong Kong and Asia.",
  },
  {
    num: "02",
    title: "Retail Strategy",
    desc: "Strategic retail planning and execution to position brands in the right channels for maximum impact and growth.",
  },
  {
    num: "03",
    title: "Market Entry Consultation",
    desc: "Expert guidance on entering the Hong Kong and Asian markets, from regulatory compliance to channel strategy.",
  },
];

const coachingServices = [
  {
    num: "01",
    title: "Life Coaching",
    sub: "The Awakening Program",
    desc: "A transformative coaching journey designed to unlock your potential and align your life with your deepest values and purpose.",
  },
  {
    num: "02",
    title: "PSYCH-K®",
    desc: "A proven set of principles and processes to change subconscious beliefs that limit self-expression and the realisation of your full potential.",
  },
  {
    num: "03",
    title: "Nei Gong",
    desc: "Ancient internal energy cultivation practices for profound physical, emotional and spiritual transformation.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[var(--color-gold)]">
            <circle cx="24" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M24 14V4M12 18L6 12M36 18L42 12M8 28H2M46 28H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="text-center max-w-5xl">
          <h1 className="font-sans font-bold leading-[0.9] tracking-tight">
            <span className="block text-[clamp(4rem,15vw,12rem)]">SUN</span>
            <span className="block text-[clamp(4rem,15vw,12rem)] text-[var(--color-gold)]">STREET</span>
          </h1>
          <p className="mt-6 text-sm tracking-[0.4em] uppercase text-white/50 font-sans">
            Consulting&ensp;·&ensp;Trading&ensp;·&ensp;Coaching
          </p>
        </div>

        <div className="absolute bottom-12 scroll-indicator">
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="text-white/40">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="3" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ═══════════ THREE PILLARS ═══════════ */}
      <section className="flex flex-col md:flex-row min-h-[80vh]">
        {pillars.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="pillar-card flex-1 flex flex-col justify-end p-8 md:p-12 min-h-[280px] md:min-h-0 border-b md:border-b-0 md:border-r border-white/10 last:border-0 group cursor-pointer"
          >
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${p.bg})` }}
            />
            <div className="card-content">
              <span className="text-3xl mb-4 block text-[var(--color-gold)] opacity-60 group-hover:opacity-100 transition-opacity">
                {p.icon}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-sans mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                {p.title}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs group-hover:text-white/70 transition-colors">
                {p.desc}
              </p>
              <span className="inline-block mt-6 text-xs tracking-[0.3em] uppercase text-white/30 group-hover:text-[var(--color-gold)] transition-colors">
                Explore →
              </span>
            </div>
          </a>
        ))}
      </section>

      {/* ═══════════ CONSULTING ═══════════ */}
      <section id="consulting" className="py-32 px-6 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight mb-2">
            CONSUL
            <span className="text-[var(--color-gold)]">TING</span>
          </h2>
        </RevealOnScroll>

        <Marquee text="STRATEGY · PROCESS · CHANGE MANAGEMENT ·" />

        <div className="mt-20 max-w-3xl">
          <RevealOnScroll>
            <p className="text-lg text-white/60 leading-relaxed font-serif italic">
              Established in 2016, Sun Street assists clients to review, develop and implement strategic plans.
              With experience across industries — from large-scale transformations to SME business reviews — we bring
              over 15 years of APAC management consulting expertise to every engagement.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12 md:gap-16">
          {consultingServices.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 150}>
              <div>
                <span className="service-number">{s.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-8">Case Studies</p>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div className="border-l-2 border-[var(--color-gold)]/30 pl-6">
                <h4 className="font-bold mb-2">Multinational F&B Company</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Integration of 3 businesses into 1 unified operating model, spanning people, process, technology and governance.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="border-l-2 border-[var(--color-gold)]/30 pl-6">
                <h4 className="font-bold mb-2">Government Service Agencies</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Merger of 3 large government service agencies — ICT Infrastructure integration roadmap and implementation strategy.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-24 flex flex-wrap gap-12 items-center">
          {["Verco", "Lion Nathan", "Babcock & Brown", "Ageas"].map((c) => (
            <span key={c} className="client-logo">{c}</span>
          ))}
        </div>
      </section>

      {/* ═══════════ TRADING ═══════════ */}
      <section id="trading" className="py-32 px-6 md:px-16 bg-[#0d0d18]">
        <RevealOnScroll>
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight mb-2">
            TRA
            <span className="text-[var(--color-gold)]">DING</span>
          </h2>
        </RevealOnScroll>

        <Marquee text="DISTRIBUTION · RETAIL · MARKET ENTRY ·" />

        <div className="mt-24 grid md:grid-cols-3 gap-12 md:gap-16">
          {tradingServices.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 150}>
              <div>
                <span className="service-number">{s.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Uppercut Deluxe */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-8">Featured Brand</p>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Uppercut Deluxe</h3>
              <p className="text-white/50 leading-relaxed">
                Authorized distributor since 2016. Starting in Hong Kong and China, Sun Street has expanded
                Uppercut Deluxe&apos;s presence across Asia — building distribution networks, retail partnerships
                and brand awareness in one of the world&apos;s most dynamic markets.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ COACHING ═══════════ */}
      <section id="coaching" className="py-32 px-6 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight mb-2">
            COACH
            <span className="text-[var(--color-gold)]">ING</span>
          </h2>
        </RevealOnScroll>

        <Marquee text="LIFE COACHING · PSYCH-K® · NEI GONG ·" />

        <div className="mt-24 grid md:grid-cols-3 gap-12 md:gap-16">
          {coachingServices.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 150}>
              <div>
                <span className="service-number">{s.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">{s.title}</h3>
                {s.sub && (
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">{s.sub}</p>
                )}
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-32 max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <svg width="40" height="32" viewBox="0 0 40 32" className="mx-auto mb-8 text-[var(--color-gold)]/30">
              <path d="M0 20L6 0h10l-6 20h8v12H0V20zm22 0L28 0h10l-6 20h8v12H22V20z" fill="currentColor" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed">
              &ldquo;I felt calm, more grounded, unexplainably more of myself...&rdquo;
            </blockquote>
            <p className="mt-6 text-sm tracking-[0.2em] uppercase text-white/30">— Rahul K.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ CONTACT + FOOTER ═══════════ */}
      <section className="py-32 px-6 md:px-16 border-t border-white/10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-8">Get In Touch</p>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold leading-tight mb-8">
              Don&apos;t hesitate
              <br />
              to say <span className="text-[var(--color-gold)] gold-hover">hello</span>
            </h2>
            <a
              href="mailto:hello@sunstreethk.com"
              className="inline-block text-lg text-white/60 hover:text-[var(--color-gold)] transition-colors tracking-wide"
            >
              hello@sunstreethk.com
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <footer className="py-8 px-6 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
        <span>© 2024 Sun Street</span>
        <span>Powered by Zen Lab</span>
      </footer>
    </main>
  );
}
