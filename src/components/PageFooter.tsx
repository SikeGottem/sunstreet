"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useCallback } from "react";
import SunLogo from "./SunLogo";
import Marquee from "./Marquee";
import MagneticButton from "./MagneticButton";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function MagneticCTA({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 150;
    if (dist < maxDist) {
      const strength = 0.3 * (1 - dist / maxDist);
      setOffset({ x: dx * strength, y: dy * strength });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block p-12">
      <a
        ref={ref}
        href={href}
        className={className}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "inline-block",
        }}
      >
        {children}
      </a>
    </div>
  );
}

function FooterLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="relative text-sm text-white/40 hover:text-white transition-colors duration-300 inline-block group"
      >
        {label}
        <span className="absolute left-0 -bottom-0.5 h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      </Link>
    </Reveal>
  );
}

export default function PageFooter() {
  return (
    <>
      {/* Contact CTA */}
      <div className="section-divider" />
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#011E41]/5 blur-[120px]" />
        {/* Decorative watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-sans text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-[#011E41] opacity-[0.04] leading-none whitespace-nowrap">
            LET&apos;S TALK
          </span>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal><SunLogo className="w-20 h-20 mx-auto mb-12" /></Reveal>
          <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl">Let&apos;s Work</h2></Reveal>
          <Reveal delay={0.2}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl italic">Together</h2></Reveal>
          <Reveal delay={0.3}><p className="text-[#011E41]/50 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></Reveal>
          <Reveal delay={0.4}>
            <MagneticCTA href="mailto:hello@sunstreethk.com" className="bg-[#011E41] text-white px-12 py-4 text-sm tracking-[0.3em] uppercase rounded-xl hover:bg-[#0E1D41] hover:shadow-lg transition-all duration-300">
              Get In Touch
            </MagneticCTA>
          </Reveal>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(1,30,65,0.15), transparent)" }} />

      {/* Footer */}
      <footer className="border-t-2 border-[#C9A84C] bg-[#011E41]">
        <Marquee speed="slow" className="py-4 border-b border-white/10">
          {["Sun Street", "Hong Kong", "Consulting", "Trading", "Coaching", "Strategy", "APAC", "Since 2016"].map((w, i) => (
            <span key={i} className="mx-6 text-xs text-white/15 tracking-[0.3em] uppercase">{w} <span className="mx-6 text-white/10">{"\u2726"}</span></span>
          ))}
        </Marquee>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <Reveal>
              <div>
                <SunLogo className="w-12 h-12 mb-4 text-white" />
                <p className="font-sans text-lg text-white/60">Sun Street</p>
                <p className="text-xs text-white/30 mt-2">Hong Kong</p>
              </div>
            </Reveal>
            <div className="flex flex-col gap-3">
              <Reveal><p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-2">Navigate</p></Reveal>
              {[
                { label: "Consulting", href: "/consulting" },
                { label: "Trading", href: "/trading" },
                { label: "Coaching", href: "/coaching" },
              ].map((l, i) => (
                <FooterLink key={l.label} href={l.href} label={l.label} delay={0.1 * (i + 1)} />
              ))}
            </div>
            <Reveal delay={0.2}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">Contact</p>
                <a
                  href="mailto:hello@sunstreethk.com"
                  className="text-sm text-white/40 hover:text-[#5BA4E6] hover:scale-105 transition-all duration-300 inline-block origin-left"
                >
                  hello@sunstreethk.com
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/30">&copy; 2026 Sun Street / Powered by Zen Lab</p>
              <p className="text-xs text-white/15">Designed with intention</p>
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
