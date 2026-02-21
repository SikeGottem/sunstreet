"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import SunLogo from "@/components/SunLogo";
import Marquee from "@/components/Marquee";
import CounterNumber from "@/components/CounterNumber";
import Card3D from "@/components/Card3D";
import HorizontalScroll from "@/components/HorizontalScroll";
import { RevealLine, GlitchText } from "@/components/TextReveal";

/* ─── HERO ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} id="home" className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80">
          <source src="https://player.vimeo.com/external/371837743.sd.mp4?s=bea46f0b09db1ff0e14eaa07ec2ffbd1d9e5b8a3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0F1C2E]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/60 via-transparent to-[#0F1C2E]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-blue-900/10" />
      </motion.div>

      <motion.div style={{ opacity, y: textY }} className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0, rotate: -180 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
          <SunLogo className="w-24 h-24 mx-auto mb-12" />
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-sans text-6xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.85] font-normal">
              <span className="text-white/90">Sun</span>
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-sans text-6xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.85]">
              <span className="text-gold italic">Street</span>
            </h1>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex items-center justify-center gap-4 md:gap-8 mb-16">
          {["Consulting", "\u00b7", "Trading", "\u00b7", "Coaching"].map((word, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }} className={`text-sm md:text-base tracking-[0.3em] uppercase ${word === "\u00b7" ? "text-gold" : "text-white/50"}`}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }}>
          <MagneticButton href="#consulting" variant="large">Enter</MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 80 }} transition={{ delay: 2.5, duration: 1 }} className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 rotate-90 origin-center translate-y-4">Scroll</span>
        <motion.div className="w-px bg-gradient-to-b from-gold to-transparent" animate={{ height: [40, 80, 40] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}

/* ─── MARQUEE DIVIDER ─── */
function MarqueeDivider({ words, className = "" }: { words: string[]; className?: string }) {
  return (
    <div className={`py-6 border-y border-white/5 overflow-hidden ${className}`}>
      <Marquee>
        {words.map((w, i) => (
          <span key={i} className="mx-8 text-lg md:text-xl font-sans text-white/10 tracking-widest uppercase">
            {w}<span className="mx-8 text-gold/20">{"\u2726"}</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ─── BENTO PILLARS ─── */
function BentoSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">What We Do</p></AnimatedSection>
        <RevealLine><h2 className="font-sans text-5xl md:text-7xl mb-4">Three Pillars</h2></RevealLine>
        <RevealLine delay={0.1}><h2 className="font-sans text-5xl md:text-7xl text-gold mb-20 italic">of Excellence</h2></RevealLine>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          <Card3D className="md:col-span-7 md:row-span-2 group relative">
            <a href="#consulting" className="block w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80)" }} />
              <div className="absolute inset-0 bg-[#0F1C2E]/70 group-hover:bg-[#0F1C2E]/50 transition-all duration-700" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">01</span>
                <h3 className="font-sans text-4xl md:text-5xl mb-3 group-hover:text-gold transition-colors duration-500">Consulting</h3>
                <p className="text-white/50 max-w-md text-sm leading-relaxed">Strategic guidance for organisations across APAC. 15+ years of transforming businesses.</p>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "60px" }} transition={{ delay: 0.5, duration: 0.8 }} className="h-px bg-gold mt-6" />
              </div>
            </a>
          </Card3D>

          <Card3D className="md:col-span-5 md:row-span-3 group relative">
            <a href="#trading" className="block w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=800&q=80)" }} />
              <div className="absolute inset-0 bg-[#0F1C2E]/70 group-hover:bg-[#0F1C2E]/50 transition-all duration-700" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">02</span>
                <h3 className="font-sans text-4xl md:text-5xl mb-3 group-hover:text-gold transition-colors duration-500">Trading</h3>
                <p className="text-white/50 max-w-md text-sm leading-relaxed">Connecting global brands with the energy and opportunity of Asian markets.</p>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "60px" }} transition={{ delay: 0.7, duration: 0.8 }} className="h-px bg-gold mt-6" />
              </div>
            </a>
          </Card3D>

          <Card3D className="md:col-span-7 md:row-span-1 group relative">
            <a href="#coaching" className="block w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80)" }} />
              <div className="absolute inset-0 bg-[#0F1C2E]/70 group-hover:bg-[#0F1C2E]/50 transition-all duration-700" />
              <div className="absolute inset-0 p-8 flex items-center">
                <div>
                  <span className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-2 block">03</span>
                  <h3 className="font-sans text-3xl md:text-4xl group-hover:text-gold transition-colors duration-500">Coaching</h3>
                </div>
                <p className="text-white/50 max-w-sm text-sm leading-relaxed ml-auto hidden md:block">Transform limiting beliefs into limitless potential through life coaching and PSYCH-K&reg;.</p>
              </div>
            </a>
          </Card3D>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS COUNTER ─── */
function StatsSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 2016, suffix: "", label: "Established" },
    { value: 8, suffix: "+", label: "Countries" },
    { value: 3, suffix: "", label: "Core Pillars" },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F1C2E]" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0F1C2E]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0F1C2E]" style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-sans text-5xl md:text-7xl text-gold mb-2">
                  <CounterNumber end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                </div>
                <p className="text-white/30 text-xs tracking-[0.3em] uppercase">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONSULTING ─── */
function ConsultingSection() {
  return (
    <section id="consulting">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80)" }} />
          <div className="absolute inset-0 bg-[#0F1C2E]/80" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-32">
          <div>
            <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Consulting</p></AnimatedSection>
            <RevealLine><h2 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95]">With over</h2></RevealLine>
            <RevealLine delay={0.1}><h2 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-gold italic">15 years</h2></RevealLine>
            <RevealLine delay={0.2}><h2 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95]">experience</h2></RevealLine>
            <AnimatedSection delay={0.4}>
              <p className="text-white/50 mt-8 text-lg leading-relaxed max-w-lg">Sun Street helps organisations develop and implement strategy. Established in 2016, we assist clients review, develop and implement strategic plans across industries.</p>
              <p className="text-white/40 mt-4 leading-relaxed max-w-lg">Founded by an ex-management consultant with 15+ years of APAC experience. From large scale transformations to SME business reviews.</p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80)" }} />
                <div className="absolute inset-0 bg-[#0F1C2E]/30" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold/30 flex items-center justify-center bg-[#0F1C2E]/90">
                <div className="text-center">
                  <span className="font-sans text-4xl text-gold">15+</span>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">Years APAC</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <HorizontalScroll panels={4}>
        <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#0F1C2E] px-6">
          <div className="text-center">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Our Services</p>
            <h3 className="font-sans text-5xl md:text-7xl">What We <span className="text-gold italic">Deliver</span></h3>
            <motion.p className="text-white/30 mt-8 text-sm tracking-wider" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>Keep scrolling &rarr;</motion.p>
          </div>
        </div>
        {[
          { num: "01", title: "Strategic Operating\nModel Review", desc: "Holistic analysis of your organisation including people, process, technology and governance to highlight key opportunities and risks", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
          { num: "02", title: "Process\nImprovement", desc: "Detailed analysis and implementation of new and existing business processes with the aim of achieving optimal efficiency and effectiveness", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
          { num: "03", title: "Programme & Change\nManagement", desc: "Integration, implementation and risk mitigation for any organisational change programme", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
        ].map((svc) => (
          <div key={svc.num} className="w-screen h-screen flex-shrink-0 flex items-center bg-[#0F1C2E]">
            <div className="grid md:grid-cols-2 h-full w-full">
              <div className="flex flex-col justify-center px-8 md:px-20">
                <span className="text-gold/30 font-mono text-sm mb-6">{svc.num}</span>
                <h4 className="font-sans text-4xl md:text-5xl leading-tight whitespace-pre-line mb-6">{svc.title}</h4>
                <p className="text-white/50 leading-relaxed max-w-md">{svc.desc}</p>
                <div className="w-16 h-px bg-gold/30 mt-8" />
              </div>
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${svc.image})` }} />
                <div className="absolute inset-0 bg-[#0F1C2E]/50" />
              </div>
            </div>
          </div>
        ))}
      </HorizontalScroll>

      <div className="bg-[#0F1C2E] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Case Studies</p></AnimatedSection>
          <RevealLine><h3 className="font-sans text-4xl md:text-5xl mb-16">Programme & <span className="text-gold italic">Change Management</span></h3></RevealLine>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Multinational F&B Company", desc: "Integration of 3 businesses into 1 for a new multinational owner. Work included identification and quantification of change magnitude, integration risks, costs, benefits and immediate actions across all functions." },
              { title: "Government Service Agencies", desc: "Merger of 3 large government service agencies \u2014 ICT Infrastructure integration roadmap, current state review, cost/benefit mapping, integration plan with timelines, milestones, gaps and risk areas." },
            ].map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.15}>
                <Card3D className="border border-white/10 p-8 md:p-10 bg-white/[0.02] h-full">
                  <div>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">{cs.title}</span>
                    <p className="text-white/50 mt-4 leading-relaxed">{cs.desc}</p>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-24">
            <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-10">Trusted By</p></AnimatedSection>
            <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
              {["Verco", "Lion Nathan", "Babcock & Brown", "Ageas"].map((c, i) => (
                <AnimatedSection key={c} delay={i * 0.1}>
                  <span className="text-white/20 hover:text-white/50 transition-colors text-xl font-sans tracking-wider distort-hover">{c}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TRADING ─── */
function TradingSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="trading" className="relative">
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=1920&q=80)" }} />
          <div className="absolute inset-0 bg-[#0F1C2E]/60" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Trading & Distribution</p></AnimatedSection>
            <RevealLine><h2 className="font-sans text-5xl md:text-7xl lg:text-8xl">Passionate About</h2></RevealLine>
            <RevealLine delay={0.15}><h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-gold italic">Brands for Asia</h2></RevealLine>
          </div>
        </div>
      </div>

      <div className="bg-[#0F1C2E] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-16">At Sun Street, we are passionate about finding new or established brands for Asia. We connect global brands with the opportunities and networks they need to thrive in Asian markets.</p></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-32">
            {[
              { num: "01", title: "Full Service Distribution", desc: "End-to-end brand distribution services from sales, warehousing, fulfilment and after-sales support" },
              { num: "02", title: "Retail Strategy", desc: "Development of your brand\u2019s retail strategy by leveraging existing retail knowledge and networks to ensure correct brand positioning" },
              { num: "03", title: "Market Entry Consultation", desc: "Development of market entry strategies and assistance in finding the right partners to succeed" },
            ].map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.1}>
                <Card3D className="border border-white/10 p-8 bg-white/[0.02] h-full group">
                  <div>
                    <span className="text-gold/30 font-mono text-sm">{svc.num}</span>
                    <h4 className="font-sans text-2xl mt-4 mb-4 group-hover:text-gold transition-colors duration-500">{svc.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
                    <div className="w-0 group-hover:w-12 h-px bg-gold mt-6 transition-all duration-700" />
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="relative border border-gold/20 overflow-hidden" style={{ boxShadow: "0 0 60px rgba(201,168,76,0.15), 0 0 120px rgba(201,168,76,0.05)" }}>
              <div className="grid md:grid-cols-5 min-h-[400px]">
                <div className="md:col-span-3 p-8 md:p-16 flex flex-col justify-center">
                  <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Featured Brand</p>
                  <h3 className="font-sans text-4xl md:text-5xl mb-6"><GlitchText text="Uppercut Deluxe" /></h3>
                  <p className="text-white/50 leading-relaxed max-w-lg">Sun Street has been the authorised distributor of Uppercut Deluxe in Hong Kong and China since 2016 and contributed to Uppercut&apos;s expansion in Asia by supporting distribution partners in Indonesia, Japan and Singapore as well as appointing distributors in Thailand, Korea, and Taiwan.</p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    {["Hong Kong", "China", "Indonesia", "Japan", "Singapore", "Thailand", "Korea", "Taiwan"].map((c) => (
                      <span key={c} className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1 text-white/30 hover:border-gold/40 hover:text-gold transition-all duration-300">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 relative min-h-[200px]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503951914875-452f0297d600?w=800&q=80)" }} />
                  <div className="absolute inset-0 bg-[#0F1C2E]/30" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── COACHING ─── */
function ServiceLayer({ svc, index, scrollYProgress, start, end, total }: { svc: { title: string; desc: string; image: string }; index: number; scrollYProgress: MotionValue<number>; start: number; end: number; total: number }) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.05, end], [0.9, 1, 1, index === total - 1 ? 1 : 0.95]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center">
      <div className="grid md:grid-cols-2 h-full w-full">
        <div className="flex flex-col justify-center px-8 md:px-20">
          <span className="text-gold/30 font-mono text-sm mb-4">0{index + 1}</span>
          <h4 className="font-sans text-4xl md:text-5xl mb-6">{svc.title}</h4>
          <p className="text-white/50 leading-relaxed max-w-lg text-lg">{svc.desc}</p>
          <div className="w-16 h-px bg-gold/30 mt-8" />
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${svc.image})` }} />
          <div className="absolute inset-0 bg-[#0F1C2E]/40" />
        </div>
      </div>
    </motion.div>
  );
}

function CoachingSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const services = [
    { title: "Life Coaching", desc: "The goal of the Awakening program is to introduce individuals to the freedom of living life in a fully expressed way", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
    { title: "PSYCH-K\u00ae", desc: "A process of reprogramming self limiting beliefs. It is a way to change subconscious beliefs that perpetuate old habits of thinking and behavior.", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80" },
    { title: "Nei Gong", desc: "Chinese energy exercises to create harmony and balance for the body, mind and spirit. It is the parent system of Tai Chi and Qi Gong and follows the Taoist water tradition", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
  ];

  return (
    <section id="coaching">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&q=80)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]-dark via-navy to-[#0F1C2E]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Coaching</p></AnimatedSection>
          <RevealLine><h2 className="font-sans text-5xl md:text-7xl leading-[0.95]">Change subconscious</h2></RevealLine>
          <RevealLine delay={0.1}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95] text-gold italic">beliefs that are</h2></RevealLine>
          <RevealLine delay={0.2}><h2 className="font-sans text-5xl md:text-7xl leading-[0.95]">self-limiting</h2></RevealLine>
          <AnimatedSection delay={0.4}><p className="text-white/50 mt-10 text-lg leading-relaxed max-w-2xl">Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging. Transform your inner landscape and unlock your fullest potential.</p></AnimatedSection>
        </div>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {services.map((svc, i) => (
            <ServiceLayer key={svc.title} svc={svc} index={i} scrollYProgress={scrollYProgress} start={i / services.length} end={(i + 1) / services.length} total={services.length} />
          ))}
        </div>
      </div>

      <div className="bg-[#0F1C2E] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p></AnimatedSection>
          <RevealLine><h3 className="font-sans text-4xl md:text-5xl mb-16">What People <span className="text-gold italic">Say</span></h3></RevealLine>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Rahul K.", text: "I felt calm, more grounded, unexplainably more of myself. Most importantly, hearing on the same day I experienced much more intensely. Later I was given me of my goals and action steps to make the work stick. I felt it was a very compelling experience, and I would highly recommend it to anyone looking to enhance all aspects of their life, especially where they are stuck." },
              { name: "Preneur", text: "It seems unorganized and lacking first, but I now see it as the most powerful way to manifest and create a better reality. The improvements I\u2019ve had have been incredible results." },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.2}>
                <Card3D className="border border-white/10 p-8 md:p-10 bg-white/[0.02] h-full">
                  <div>
                    <svg className="w-10 h-10 text-gold/20 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <p className="text-white/50 leading-relaxed mb-8 italic text-lg">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><span className="text-gold text-sm font-sans">{t.name[0]}</span></div>
                      <p className="text-gold text-sm tracking-wider uppercase">&mdash; {t.name}</p>
                    </div>
                  </div>
                </Card3D>
              </AnimatedSection>
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
    <section id="contact" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F1C2E]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -90 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
          <SunLogo className="w-20 h-20 mx-auto mb-12" />
        </motion.div>
        <RevealLine><h2 className="font-sans text-6xl md:text-8xl lg:text-9xl">Let&apos;s Work</h2></RevealLine>
        <RevealLine delay={0.15}><h2 className="font-sans text-6xl md:text-8xl lg:text-9xl text-gold italic">Together</h2></RevealLine>
        <AnimatedSection delay={0.4}><p className="text-white/40 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></AnimatedSection>
        <AnimatedSection delay={0.6}><MagneticButton href="mailto:hello@sunstreethk.com" variant="large">Get In Touch</MagneticButton></AnimatedSection>
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
          <span key={i} className="mx-6 text-xs text-white/10 tracking-[0.3em] uppercase">{w} <span className="mx-6 text-gold/10">{"\u2726"}</span></span>
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
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-white/30 hover:text-gold transition-colors group">
                <span className="inline-block w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />{l}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">Contact</p>
            <a href="mailto:hello@sunstreethk.com" className="text-sm text-white/40 hover:text-gold transition-colors">hello@sunstreethk.com</a>
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
    <main className="grain">
      <SmoothScroll />
      <CursorTrail />
      <Navigation />
      <HeroSection />
      <MarqueeDivider words={["Strategy", "Innovation", "Growth", "Asia Pacific", "Transformation", "Excellence"]} />
      <BentoSection />
      <StatsSection />
      <ConsultingSection />
      <MarqueeDivider words={["Distribution", "Brands", "Market Entry", "Retail", "Asia", "Partnership"]} className="bg-[#0F1C2E]" />
      <TradingSection />
      <CoachingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
