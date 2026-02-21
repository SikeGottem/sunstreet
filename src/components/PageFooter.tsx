"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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

export default function PageFooter() {
  return (
    <>
      {/* Contact CTA */}
      <div className="section-divider" />
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#011E41]/5 blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal><SunLogo className="w-20 h-20 mx-auto mb-12" /></Reveal>
          <Reveal delay={0.1}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl">Let&apos;s Work</h2></Reveal>
          <Reveal delay={0.2}><h2 className="text-gradient-navy font-sans text-6xl md:text-8xl italic">Together</h2></Reveal>
          <Reveal delay={0.3}><p className="text-[#011E41]/50 text-lg mt-10 mb-16 max-w-xl mx-auto leading-relaxed">Ready to transform your business, expand into Asia, or unlock your potential? We&apos;d love to hear from you.</p></Reveal>
          <Reveal delay={0.4}>
            <MagneticButton href="mailto:hello@sunstreethk.com" className="!bg-[#011E41] !text-white !px-12 !py-4 !text-sm !tracking-[0.3em] uppercase !rounded-xl !border-0 hover:!bg-[#0E1D41] hover:!shadow-lg">
              Get In Touch
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
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
                { label: "Home", href: "/" },
                { label: "Consulting", href: "/consulting" },
                { label: "Trading", href: "/trading" },
                { label: "Coaching", href: "/coaching" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors group">
                  <span className="inline-block w-0 group-hover:w-4 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />{l.label}
                </Link>
              ))}
              <a href="mailto:hello@sunstreethk.com" className="text-sm text-white/40 hover:text-white transition-colors group">
                <span className="inline-block w-0 group-hover:w-4 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-2 align-middle" />Contact
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">Contact</p>
              <a href="mailto:hello@sunstreethk.com" className="text-sm text-white/40 hover:text-white transition-colors">hello@sunstreethk.com</a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">&copy; 2026 Sun Street / Powered by Zen Lab</p>
            <p className="text-xs text-white/15">Designed with intention</p>
          </div>
        </div>
      </footer>
    </>
  );
}
