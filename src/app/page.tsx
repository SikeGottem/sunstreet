"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import SunLogo from "@/components/SunLogo";
import Marquee from "@/components/Marquee";
import CounterNumber from "@/components/CounterNumber";

/* ─── FADE-IN WRAPPER ─── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="text-[11px] tracking-[0.4em] uppercase text-[#011E41]/40 mb-8 font-mono">
      <span className="text-[#C9A84C]">{number}</span>
      <span className="mx-3 text-[#011E41]/20">—</span>
      {label}
    </p>
  );
}

/* ─── LANDING ─── */
function LandingSection() {
  const cards = [
    { id: "consulting", icon: "◈", title: "Consulting", desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy" },
    { id: "trading", icon: "◆", title: "Trading", desc: "At Sun Street, we are passionate about finding new or established brands for Asia" },
    { id: "coaching", icon: "○", title: "Coaching", desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-white">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
        <SunLogo className="w-20 h-20 mx-auto mb-12" />
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-xs tracking-[0.4em] uppercase text-[#011E41]/40 mb-20">
        Welcome to Sun Street
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card, i) => (
          <motion.a
            key={card.id}
            href={`#${card.id}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="landing-card group relative border-2 border-[#011E41]/15 bg-white p-12 text-center card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-sm"
            onClick={(e) => { e.preventDefault(); document.getElementById(card.id)?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <span className="text-[#011E41]/30 text-3xl block mb-6 group-hover:text-white/50 transition-colors duration-300">{card.icon}</span>
            <h3 className="font-sans text-2xl tracking-wide mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{card.title}</h3>
            <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{card.desc}</p>
            {/* Arrow that slides in on hover */}
            <div className="mt-8 flex justify-center">
              <span className="card-arrow text-white text-lg">→</span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-12 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#011E41]/20">Scroll</span>
        <motion.div className="w-px h-10 bg-gradient-to-b from-[#011E41]/30 to-transparent" animate={{ height: [30, 50, 30] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}

/* ─── STATS ─── */
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
      <section className="py-32 px-6 bg-[#EFEBE4] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="relative text-center">
                {/* Oversized decorative number */}
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

/* ─── CONSULTING ─── */
function ConsultingSection() {
  const services = [
    { num: "01", title: "Strategic Operating Model Review", desc: "Holistic analysis of your organisation including people, process, technology and governance to highlight key opportunities and risks" },
    { num: "02", title: "Process Improvement", desc: "Detailed analysis and implementation of new and existing business processes with the aim of achieving optimal efficiency and effectiveness" },
    { num: "03", title: "Programme & Change Management", desc: "Integration, implementation and risk mitigation for any organisational change programme" },
  ];
  const caseStudies = [
    { title: "Multinational F&B Company", desc: "Integration of 3 businesses into 1 for a new multinational owner. Work included identification and quantification of change magnitude, integration risks, costs, benefits and immediate actions across all functions." },
    { title: "Government Service Agencies", desc: "Merger of 3 large government service agencies — ICT Infrastructure integration roadmap, current state review, cost/benefit mapping, integration plan with timelines, milestones, gaps and risk areas." },
  ];

  return (
    <>
      <div className="section-divider" />
      <section id="consulting" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="01" label="Consulting" /></Reveal>

          {/* Staggered 2-col layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Reveal delay={0.1}>
                <h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] mb-2">With over</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic">15 years</h2>
              </Reveal>
              <Reveal delay={0.25}>
                <h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] mb-10">experience</h2>
              </Reveal>
            </div>
            <div className="md:mt-16">
              <Reveal delay={0.3}>
                <p className="text-[#011E41]/60 text-lg leading-relaxed">Sun Street helps organisations develop and implement strategy. Established in 2016, we assist clients review, develop and implement strategic plans across industries.</p>
                <p className="text-[#011E41]/50 mt-4 leading-relaxed">Founded by an ex-management consultant with 15+ years of APAC experience. From large scale transformations to SME business reviews.</p>
              </Reveal>
            </div>
          </div>

          {/* Services — card lift */}
          <div className="grid md:grid-cols-3 gap-6 mt-24 mb-32">
            {services.map((svc, i) => (
              <Reveal key={svc.num} delay={i * 0.1}>
                <div className="border-2 border-[#011E41]/15 p-8 bg-white h-full group card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-sm">
                  <span className="text-[#C9A84C]/50 font-mono text-sm group-hover:text-white/30 transition-colors duration-300">{svc.num}</span>
                  <h4 className="font-sans text-2xl mt-4 mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{svc.title}</h4>
                  <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{svc.desc}</p>
                  <div className="w-0 group-hover:w-12 h-px bg-white/50 mt-6 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case Studies */}
          <Reveal><SectionLabel number="01.1" label="Case Studies" /></Reveal>
          <Reveal delay={0.1}><h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-16">Programme & <span className="italic">Change Management</span></h3></Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.15}>
                <div className="border-2 border-[#011E41]/15 p-8 md:p-10 bg-[#EFEBE4] h-full card-lift rounded-sm">
                  <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">{cs.title}</span>
                  <p className="text-[#011E41]/60 mt-4 leading-relaxed">{cs.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Clients */}
          <div className="mt-24">
            <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-10">Trusted By</p></Reveal>
            <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
              {["Verco", "Lion Nathan", "Babcock & Brown", "Ageas"].map((c, i) => (
                <Reveal key={c} delay={i * 0.1}>
                  <span className="link-underline text-[#011E41]/25 hover:text-[#011E41]/60 transition-colors text-xl font-sans tracking-wider cursor-default">{c}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── TRADING ─── */
function TradingSection() {
  const services = [
    { num: "01", title: "Full Service Distribution", desc: "End-to-end brand distribution services from sales, warehousing, fulfilment and after-sales support" },
    { num: "02", title: "Retail Strategy", desc: "Development of your brand\u2019s retail strategy by leveraging existing retail knowledge and networks to ensure correct brand positioning" },
    { num: "03", title: "Market Entry Consultation", desc: "Development of market entry strategies and assistance in finding the right partners to succeed" },
  ];

  return (
    <>
      <div className="section-divider" />
      <section id="trading" className="py-32 px-6 bg-[#EFEBE4]">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="02" label="Trading & Distribution" /></Reveal>

          {/* Staggered layout — text right, heading left */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]">Passionate About</h2></Reveal>
              <Reveal delay={0.15}><h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic mb-10">Brands for Asia</h2></Reveal>
            </div>
            <div className="md:mt-12">
              <Reveal delay={0.3}><p className="text-[#011E41]/60 text-lg leading-relaxed">At Sun Street, we are passionate about finding new or established brands for Asia. We connect global brands with the opportunities and networks they need to thrive in Asian markets.</p></Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 mb-32">
            {services.map((svc, i) => (
              <Reveal key={svc.num} delay={i * 0.1}>
                <div className="border-2 border-[#011E41]/15 p-8 bg-white h-full group card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-sm">
                  <span className="text-[#C9A84C]/50 font-mono text-sm group-hover:text-white/30 transition-colors duration-300">{svc.num}</span>
                  <h4 className="font-sans text-2xl mt-4 mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{svc.title}</h4>
                  <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{svc.desc}</p>
                  <div className="w-0 group-hover:w-12 h-px bg-white/50 mt-6 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Uppercut Deluxe */}
          <Reveal>
            <div className="border-2 border-[#011E41]/15 p-8 md:p-16 bg-white rounded-sm card-lift relative overflow-hidden">
              {/* Decorative background text */}
              <span className="deco-number absolute -right-8 -top-8 text-[200px] md:text-[280px] leading-none select-none">UD</span>
              <div className="relative z-10">
                <SectionLabel number="02.1" label="Featured Brand" />
                <h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-6">Uppercut Deluxe</h3>
                <p className="text-[#011E41]/60 leading-relaxed max-w-2xl">Sun Street has been the authorised distributor of Uppercut Deluxe in Hong Kong and China since 2016 and contributed to Uppercut&apos;s expansion in Asia by supporting distribution partners in Indonesia, Japan and Singapore as well as appointing distributors in Thailand, Korea, and Taiwan.</p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["Hong Kong", "China", "Indonesia", "Japan", "Singapore", "Thailand", "Korea", "Taiwan"].map((c) => (
                    <span key={c} className="text-[10px] tracking-[0.2em] uppercase border border-[#011E41]/15 px-3 py-1 text-[#011E41]/40 hover:border-[#011E41] hover:text-[#011E41] transition-all duration-300">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ─── COACHING ─── */
function ServiceLayer({ svc, index, scrollYProgress, start, end, total }: { svc: { title: string; desc: string }; index: number; scrollYProgress: MotionValue<number>; start: number; end: number; total: number }) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.05, end], [0.9, 1, 1, index === total - 1 ? 1 : 0.95]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center px-6">
      <div className="max-w-3xl relative">
        {/* Oversized decorative index */}
        <span className="deco-number absolute -left-8 md:-left-20 -top-16 text-[150px] md:text-[220px]">0{index + 1}</span>
        <div className="relative z-10">
          <span className="text-[#011E41]/20 font-mono text-sm mb-4 block">0{index + 1}</span>
          <h4 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-6">{svc.title}</h4>
          <p className="text-[#011E41]/60 leading-relaxed text-lg max-w-lg">{svc.desc}</p>
          <div className="w-16 h-px bg-[#011E41]/20 mt-8" />
        </div>
      </div>
    </motion.div>
  );
}

function CoachingSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const services = [
    { title: "Life Coaching", desc: "The goal of the Awakening program is to introduce individuals to the freedom of living life in a fully expressed way" },
    { title: "PSYCH-K\u00ae", desc: "A process of reprogramming self limiting beliefs. It is a way to change subconscious beliefs that perpetuate old habits of thinking and behavior." },
    { title: "Nei Gong", desc: "Chinese energy exercises to create harmony and balance for the body, mind and spirit. It is the parent system of Tai Chi and Qi Gong and follows the Taoist water tradition" },
  ];
  const testimonials = [
    { name: "Rahul K.", text: "I felt calm, more grounded, unexplainably more of myself. Most importantly, hearing on the same day I experienced much more intensely. Later I was given me of my goals and action steps to make the work stick. I felt it was a very compelling experience, and I would highly recommend it to anyone looking to enhance all aspects of their life, especially where they are stuck." },
    { name: "Preneur", text: "It seems unorganized and lacking first, but I now see it as the most powerful way to manifest and create a better reality. The improvements I\u2019ve had have been incredible results." },
  ];

  return (
    <>
      <div className="section-divider" />
      <section id="coaching">
        {/* Intro — staggered layout */}
        <div className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal><SectionLabel number="03" label="Coaching" /></Reveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]">Change subconscious</h2></Reveal>
                <Reveal delay={0.15}><h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic">beliefs that are</h2></Reveal>
                <Reveal delay={0.2}><h2 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]">self-limiting</h2></Reveal>
              </div>
              <div className="md:mt-20">
                <Reveal delay={0.3}><p className="text-[#011E41]/60 text-lg leading-relaxed">Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging. Transform your inner landscape and unlock your fullest potential.</p></Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky scroll services */}
        <div ref={containerRef} className="relative bg-[#EFEBE4]" style={{ height: `${services.length * 100}vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden">
            {services.map((svc, i) => (
              <ServiceLayer key={svc.title} svc={svc} index={i} scrollYProgress={scrollYProgress} start={i / services.length} end={(i + 1) / services.length} total={services.length} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal><SectionLabel number="03.1" label="Testimonials" /></Reveal>
            <Reveal delay={0.1}><h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-16">What People <span className="italic">Say</span></h3></Reveal>
            {/* Staggered testimonial grid */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.2} className={i === 1 ? "md:mt-12" : ""}>
                  <div className="border-2 border-[#011E41]/15 p-8 md:p-10 bg-[#EFEBE4] h-full card-lift rounded-sm">
                    <svg className="w-10 h-10 text-[#011E41]/10 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <p className="text-[#011E41]/60 leading-relaxed mb-8 italic text-lg">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#011E41]/10 flex items-center justify-center"><span className="text-[#011E41] text-sm font-sans">{t.name[0]}</span></div>
                      <p className="text-[#011E41] text-sm tracking-wider uppercase">&mdash; {t.name}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  return (
    <>
      <div className="section-divider" />
      <section id="contact" className="relative py-40 overflow-hidden bg-[#EFEBE4]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#011E41]/5 blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <SunLogo className="w-20 h-20 mx-auto mb-12" />
          </Reveal>
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

/* ─── FOOTER ─── */
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
            {["Home", "Consulting", "Trading", "Coaching", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors group">
                <span className="inline-block w-0 group-hover:w-4 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />{l}
              </a>
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

/* ─── MAIN ─── */
export default function Home() {
  return (
    <main className="bg-white text-[#011E41] font-sans">
      <ScrollProgress />
      <Navigation />
      <LandingSection />
      <StatsSection />
      <ConsultingSection />
      <TradingSection />
      <CoachingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
