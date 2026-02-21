"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import SunLogo from "@/components/SunLogo";

const pillars = [
  {
    title: "Consulting",
    desc: "Strategic guidance for organisations across APAC",
    href: "#consulting",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
  },
  {
    title: "Trading",
    desc: "Connecting global brands with Asian markets",
    href: "#trading",
    image: "https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=800&q=80",
  },
  {
    title: "Coaching",
    desc: "Transform limiting beliefs into limitless potential",
    href: "#coaching",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
  },
];

const consultingServices = [
  {
    title: "Strategic Operating Model Review",
    desc: "Holistic analysis of your organisation including people, process, technology and governance to highlight key opportunities and risks",
    num: "01",
  },
  {
    title: "Process Improvement",
    desc: "Detailed analysis and implementation of new and existing business processes with the aim of achieving optimal efficiency and effectiveness",
    num: "02",
  },
  {
    title: "Programme and Change Management",
    desc: "Integration, implementation and risk mitigation for any organisational change programme",
    num: "03",
  },
];

const tradingServices = [
  {
    title: "Full Service Distribution",
    desc: "End-to-end brand distribution services from sales, warehousing, fulfilment and after-sales support",
    num: "01",
  },
  {
    title: "Retail Strategy",
    desc: "Development of your brand's retail strategy by leveraging existing retail knowledge and networks to ensure correct brand positioning",
    num: "02",
  },
  {
    title: "Market Entry Consultation",
    desc: "Development of market entry strategies and assistance in finding the right partners to succeed",
    num: "03",
  },
];

const coachingServices = [
  {
    title: "Life Coaching",
    desc: "The goal of the Awakening program is to introduce individuals to the freedom of living life in a fully expressed way",
    num: "01",
  },
  {
    title: "PSYCH-K®",
    desc: "A process of reprogramming self limiting beliefs. It is a way to change subconscious beliefs that perpetuate old habits of thinking and behavior.",
    num: "02",
  },
  {
    title: "Nei Gong",
    desc: "Chinese energy exercises to create harmony and balance for the body, mind and spirit. It is the parent system of Tai Chi and Qi Gong and follows the Taoist water tradition",
    num: "03",
  },
];

const clients = ["Verco", "Lion Nathan", "Babcock & Brown", "Ageas"];

const testimonials = [
  {
    name: "Rahul K.",
    text: "I felt calm, more grounded, unexplainably more of myself. Most importantly, hearing on the same day I experienced much more intensely. Later I was given me of my goals and action steps to make the work stick. I felt it was a very compelling experience, and I would highly recommend it to anyone looking to enhance all aspects of their life, especially where they are stuck.",
  },
  {
    name: "Preneur",
    text: "It seems unorganized and lacking first, but I now see it as the most powerful way to manifest and create a better reality. The improvements I've had have been incredible results.",
  },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SunLogo className="w-20 h-20 mx-auto mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]"
        >
          <span className="text-white">Welcome to</span>
          <br />
          <span className="text-gold">Sun Street</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light tracking-wide"
        >
          Consulting · Trading · Coaching
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12"
        >
          <MagneticButton href="#consulting">Discover More</MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-20">
            Three Pillars of<br />
            <span className="text-gold">Excellence</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15}>
              <a href={p.href} className="group block relative overflow-hidden">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="font-serif text-3xl mb-2 group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <motion.span className="inline-block">→</motion.span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group border border-white/10 p-8 hover:border-gold/40 transition-colors duration-500 bg-white/[0.02]"
    >
      <span className="text-gold/40 text-sm font-mono">{num}</span>
      <h4 className="font-serif text-xl mt-4 mb-4 group-hover:text-gold transition-colors duration-300">
        {title}
      </h4>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ConsultingSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="consulting" className="relative py-32 overflow-hidden">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80)",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/90 to-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Split layout hero */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Consulting</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              With over 15 years consulting experience
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Sun Street helps organisations develop and implement strategy. Established in 2016, we assist clients review, develop and implement strategic plans across industries — from large scale transformations to SME business reviews.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              Founded by an ex-management consultant with 15+ years of APAC experience, Sun Street also offers 1-1 coaching and trading/distribution services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
              <div className="absolute inset-0 border border-gold/20" />
            </div>
          </AnimatedSection>
        </div>

        {/* Services */}
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8">Services</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {consultingServices.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <ServiceCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        {/* Case Studies */}
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Case Studies</p>
          <h3 className="font-serif text-3xl mb-12">Programme and Change Management</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection>
            <div className="border border-white/10 p-8 bg-white/[0.02] h-full">
              <p className="text-gold text-sm mb-4 tracking-wider uppercase">Multinational F&B Company</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Integration of 3 businesses into 1 for a new multinational owner. Work included identification and quantification of change magnitude, integration risks, costs, benefits and immediate actions across all functions.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="border border-white/10 p-8 bg-white/[0.02] h-full">
              <p className="text-gold text-sm mb-4 tracking-wider uppercase">Government Service Agencies</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Merger of 3 large government service agencies — ICT Infrastructure integration roadmap, current state review, cost/benefit mapping, integration plan with timelines, milestones, gaps and risk areas.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Clients horizontal scroll */}
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8">Clients</p>
        </AnimatedSection>
        <div className="flex items-center gap-16 overflow-x-auto pb-4 scrollbar-none">
          {clients.map((client, i) => (
            <AnimatedSection key={client} delay={i * 0.05}>
              <div className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors text-lg tracking-wider font-light whitespace-nowrap">
                {client}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradingSection() {
  return (
    <section id="trading" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Split hero - reversed */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=800&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
              <div className="absolute inset-0 border border-gold/20" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Trading</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Passionate about finding brands for Asia
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              At Sun Street, we are passionate about finding new or established brands for Asia. We connect global brands with the opportunities and networks they need to thrive in Asian markets.
            </p>
          </AnimatedSection>
        </div>

        {/* Services */}
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8">Services</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {tradingServices.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <ServiceCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        {/* Uppercut Deluxe brand spotlight */}
        <AnimatedSection>
          <div className="border border-gold/20 p-8 md:p-12 bg-white/[0.02]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Featured Brand</p>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">Uppercut Deluxe</h3>
                <p className="text-white/60 leading-relaxed">
                  Sun Street has been the authorised distributor of Uppercut Deluxe in Hong Kong and China since 2016 and contributed to Uppercut&apos;s expansion in Asia by supporting distribution partners in Indonesia, Japan and Singapore as well as appointing distributors in Thailand, Korea, and Taiwan.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1503951914875-452f0297d600?w=800&q=80)",
                  }}
                />
                <div className="absolute inset-0 bg-navy/30" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CoachingSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} id="coaching" className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&q=80)",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Coaching</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Change subconscious beliefs that are self-limiting
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Sun Street provides personal life coaching to change subconscious beliefs that are self-limiting and self-sabotaging. Transform your inner landscape and unlock your fullest potential.
            </p>
          </AnimatedSection>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {coachingServices.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <ServiceCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-12">Testimonials</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="border border-white/10 p-8 bg-white/[0.02]">
                <svg className="w-8 h-8 text-gold/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/60 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-gold text-sm tracking-wider uppercase">— {t.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <SunLogo className="w-16 h-16 mx-auto mb-8" />
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Let&apos;s Work<br />Together
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.
          </p>
          <MagneticButton href="mailto:hello@sunstreethk.com">
            Contact Us
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <SunLogo className="w-8 h-8" />
          <span className="font-serif text-sm text-white/40">Sun Street</span>
        </div>
        <div className="flex items-center gap-8">
          {["Consulting", "Trading", "Coaching", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-white/30 hover:text-gold transition-colors tracking-wider uppercase"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/30">
          © 2024 Sun Street / Powered by Zen Lab
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="grain">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <ConsultingSection />
      <TradingSection />
      <CoachingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
