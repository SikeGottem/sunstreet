"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import PageNav from "@/components/PageNav";
import PageFooter from "@/components/PageFooter";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="text-[11px] tracking-[0.4em] uppercase text-[#011E41]/40 mb-8 font-mono">
      <span className="text-[#C9A84C]">{number}</span>
      <span className="mx-3 text-[#011E41]/20">—</span>
      {label}
    </p>
  );
}

function ServiceLayer({ svc, index, scrollYProgress, start, end, total }: { svc: { title: string; desc: string }; index: number; scrollYProgress: MotionValue<number>; start: number; end: number; total: number }) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.05, end], [0.9, 1, 1, index === total - 1 ? 1 : 0.95]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center px-6">
      <div className="max-w-3xl relative">
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

export default function CoachingPage() {
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
    <main className="bg-white text-[#011E41] font-sans">
      <PageNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="03" label="Coaching" /></Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Reveal delay={0.1}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]">Change subconscious</h1></Reveal>
              <Reveal delay={0.15}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic">beliefs that are</h1></Reveal>
              <Reveal delay={0.2}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]">self-limiting</h1></Reveal>
            </div>
            <div className="md:mt-20">
              <Reveal delay={0.3}><p className="text-[#011E41]/60 text-lg leading-relaxed">Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging. Transform your inner landscape and unlock your fullest potential.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky scroll services */}
      <div ref={containerRef} className="relative bg-[#EFEBE4]" style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {services.map((svc, i) => (
            <ServiceLayer key={svc.title} svc={svc} index={i} scrollYProgress={scrollYProgress} start={i / services.length} end={(i + 1) / services.length} total={services.length} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="03.1" label="Testimonials" /></Reveal>
          <Reveal delay={0.1}><h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-16">What People <span className="italic">Say</span></h3></Reveal>
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
      </section>

      <PageFooter />
    </main>
  );
}
