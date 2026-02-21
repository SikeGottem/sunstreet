"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
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

/* ─── LANDING ─── */
function LandingSection() {
  const cards = [
    { id: "consulting", icon: "◈", title: "Consulting", desc: "With over 15 years consulting experience, Sun Street helps organisations develop and implement strategy" },
    { id: "trading", icon: "◆", title: "Trading", desc: "At Sun Street, we are passionate about finding new or established brands for Asia" },
    { id: "coaching", icon: "○", title: "Coaching", desc: "Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
        <SunLogo className="w-20 h-20 mx-auto mb-12" />
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-xs tracking-[0.4em] uppercase text-white/40 mb-20">
        Welcome to Sun Street
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((card, i) => (
          <motion.a
            key={card.id}
            href={`#${card.id}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group border border-white/10 bg-[#1B2A3D]/50 p-10 text-center hover:border-[#C9A84C]/40 transition-all duration-500"
            onClick={(e) => { e.preventDefault(); document.getElementById(card.id)?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <span className="text-[#C9A84C]/60 text-3xl block mb-6">{card.icon}</span>
            <h3 className="font-sans text-2xl tracking-wide mb-4 group-hover:text-[#C9A84C] transition-colors duration-500">{card.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
            <div className="w-0 group-hover:w-12 h-px bg-[#C9A84C] mx-auto mt-6 transition-all duration-700" />
          </motion.a>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-12 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/20">Scroll</span>
        <motion.div className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" animate={{ height: [30, 50, 30] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 2016, suffix: "", label: "Established" },
    { value: 8, suffix: "+", label: "Countries" },
    { value: 3, suffix: "", label: "Core Pillars" },
  ];
  return (
    <section className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-sans text-5xl md:text-7xl text-[#C9A84C] mb-2">
                <CounterNumber end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
              </div>
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
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
    <section id="consulting" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Consulting</p></Reveal>
        <Reveal delay={0.1}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] mb-2">With over <span className="text-[#C9A84C] italic">15 years</span></h2></Reveal>
        <Reveal delay={0.2}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] mb-10">experience</h2></Reveal>
        <Reveal delay={0.3}>
          <div className="max-w-2xl mb-6">
            <p className="text-white/50 text-lg leading-relaxed">Sun Street helps organisations develop and implement strategy. Established in 2016, we assist clients review, develop and implement strategic plans across industries.</p>
            <p className="text-white/40 mt-4 leading-relaxed">Founded by an ex-management consultant with 15+ years of APAC experience. From large scale transformations to SME business reviews.</p>
          </div>
        </Reveal>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 mb-32">
          {services.map((svc, i) => (
            <Reveal key={svc.num} delay={i * 0.1}>
              <div className="border border-white/10 p-8 bg-[#1B2A3D]/30 h-full group hover:border-[#C9A84C]/30 transition-all duration-500">
                <span className="text-[#C9A84C]/30 font-mono text-sm">{svc.num}</span>
                <h4 className="font-sans text-2xl mt-4 mb-4 group-hover:text-[#C9A84C] transition-colors duration-500">{svc.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
                <div className="w-0 group-hover:w-12 h-px bg-[#C9A84C] mt-6 transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Case Studies */}
        <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Case Studies</p></Reveal>
        <Reveal delay={0.1}><h3 className="font-sans text-4xl md:text-5xl mb-16">Programme & <span className="text-[#C9A84C] italic">Change Management</span></h3></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 0.15}>
              <div className="border border-white/10 p-8 md:p-10 bg-[#1B2A3D]/20 h-full">
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">{cs.title}</span>
                <p className="text-white/50 mt-4 leading-relaxed">{cs.desc}</p>
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
                <span className="text-white/20 hover:text-white/50 transition-colors text-xl font-sans tracking-wider">{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
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
    <section id="trading" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Trading &amp; Distribution</p></Reveal>
        <Reveal delay={0.1}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95]">Passionate About</h2></Reveal>
        <Reveal delay={0.15}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] text-[#C9A84C] italic mb-10">Brands for Asia</h2></Reveal>
        <Reveal delay={0.3}><p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-20">At Sun Street, we are passionate about finding new or established brands for Asia. We connect global brands with the opportunities and networks they need to thrive in Asian markets.</p></Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {services.map((svc, i) => (
            <Reveal key={svc.num} delay={i * 0.1}>
              <div className="border border-white/10 p-8 bg-[#1B2A3D]/30 h-full group hover:border-[#C9A84C]/30 transition-all duration-500">
                <span className="text-[#C9A84C]/30 font-mono text-sm">{svc.num}</span>
                <h4 className="font-sans text-2xl mt-4 mb-4 group-hover:text-[#C9A84C] transition-colors duration-500">{svc.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
                <div className="w-0 group-hover:w-12 h-px bg-[#C9A84C] mt-6 transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Uppercut Deluxe */}
        <Reveal>
          <div className="border border-[#C9A84C]/20 p-8 md:p-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Featured Brand</p>
            <h3 className="font-sans text-4xl md:text-5xl mb-6">Uppercut Deluxe</h3>
            <p className="text-white/50 leading-relaxed max-w-2xl">Sun Street has been the authorised distributor of Uppercut Deluxe in Hong Kong and China since 2016 and contributed to Uppercut&apos;s expansion in Asia by supporting distribution partners in Indonesia, Japan and Singapore as well as appointing distributors in Thailand, Korea, and Taiwan.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Hong Kong", "China", "Indonesia", "Japan", "Singapore", "Thailand", "Korea", "Taiwan"].map((c) => (
                <span key={c} className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1 text-white/30 hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-300">{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── COACHING ─── */
function ServiceLayer({ svc, index, scrollYProgress, start, end, total }: { svc: { title: string; desc: string }; index: number; scrollYProgress: MotionValue<number>; start: number; end: number; total: number }) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.05, end], [0.9, 1, 1, index === total - 1 ? 1 : 0.95]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center px-6">
      <div className="max-w-3xl">
        <span className="text-[#C9A84C]/30 font-mono text-sm mb-4 block">0{index + 1}</span>
        <h4 className="font-sans text-4xl md:text-5xl mb-6">{svc.title}</h4>
        <p className="text-white/50 leading-relaxed text-lg max-w-lg">{svc.desc}</p>
        <div className="w-16 h-px bg-[#C9A84C]/30 mt-8" />
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
    <section id="coaching" className="border-t border-white/5">
      {/* Intro */}
      <div className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Coaching</p></Reveal>
          <Reveal delay={0.1}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95]">Change subconscious</h2></Reveal>
          <Reveal delay={0.15}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] text-[#C9A84C] italic">beliefs that are</h2></Reveal>
          <Reveal delay={0.2}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] mb-10">self-limiting</h2></Reveal>
          <Reveal delay={0.3}><p className="text-white/50 text-lg leading-relaxed max-w-2xl">Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging. Transform your inner landscape and unlock your fullest potential.</p></Reveal>
        </div>
      </div>

      {/* Sticky scroll services */}
      <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {services.map((svc, i) => (
            <ServiceLayer key={svc.title} svc={svc} index={i} scrollYProgress={scrollYProgress} start={i / services.length} end={(i + 1) / services.length} total={services.length} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p></Reveal>
          <Reveal delay={0.1}><h3 className="font-sans text-4xl md:text-5xl mb-16">What People <span className="text-[#C9A84C] italic">Say</span></h3></Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.2}>
                <div className="border border-white/10 p-8 md:p-10 bg-[#1B2A3D]/20 h-full">
                  <svg className="w-10 h-10 text-[#C9A84C]/20 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <p className="text-white/50 leading-relaxed mb-8 italic text-lg">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center"><span className="text-[#C9A84C] text-sm font-sans">{t.name[0]}</span></div>
                    <p className="text-[#C9A84C] text-sm tracking-wider uppercase">&mdash; {t.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <SunLogo className="w-20 h-20 mx-auto mb-12" />
        </Reveal>
        <Reveal delay={0.1}><h2 className="font-sans text-6xl md:text-8xl">Let&apos;s Work</h2></Reveal>
        <Reveal delay={0.2}><h2 className="font-sans text-6xl md:text-8xl text-[#C9A84C] italic">Together</h2></Reveal>
        <Reveal delay={0.3}><p className="text-white/40 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></Reveal>
        <Reveal delay={0.4}>
          <a href="mailto:hello@sunstreethk.com" className="inline-block border border-[#C9A84C] text-[#C9A84C] px-12 py-4 text-sm tracking-[0.3em] uppercase hover:bg-[#C9A84C] hover:text-[#0F1C2E] transition-all duration-500">
            Get In Touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Marquee speed="slow" className="py-4 border-b border-white/5">
        {["Sun Street", "Hong Kong", "Consulting", "Trading", "Coaching", "Strategy", "APAC", "Since 2016"].map((w, i) => (
          <span key={i} className="mx-6 text-xs text-white/10 tracking-[0.3em] uppercase">{w} <span className="mx-6 text-[#C9A84C]/10">{"\u2726"}</span></span>
        ))}
      </Marquee>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <SunLogo className="w-10 h-10 mb-4" />
            <p className="font-sans text-lg text-white/60">Sun Street</p>
            <p className="text-xs text-white/20 mt-2">Hong Kong</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-2">Navigate</p>
            {["Home", "Consulting", "Trading", "Coaching", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-white/30 hover:text-[#C9A84C] transition-colors group">
                <span className="inline-block w-0 group-hover:w-4 h-px bg-[#C9A84C] transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />{l}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">Contact</p>
            <a href="mailto:hello@sunstreethk.com" className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">hello@sunstreethk.com</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">&copy; 2024 Sun Street / Powered by Zen Lab</p>
          <p className="text-xs text-white/10">Designed with intention</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  return (
    <main className="bg-[#0F1C2E] text-white font-sans">
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
