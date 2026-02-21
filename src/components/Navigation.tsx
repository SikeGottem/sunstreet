"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SunLogo from "./SunLogo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Consulting", href: "#consulting" },
  { label: "Trading", href: "#trading" },
  { label: "Coaching", href: "#coaching" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <SunLogo className="w-10 h-10" />
            <span className="font-serif text-xl tracking-wide text-[#011E41] group-hover:text-[#011E41]/70 transition-colors">Sun Street</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm tracking-wider uppercase text-[#011E41]/70 hover:text-[#011E41] transition-colors duration-300 group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#011E41] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <button className="md:hidden flex flex-col gap-1.5 w-8" onClick={() => setMenuOpen(!menuOpen)}>
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-[#011E41]" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-full bg-[#011E41]" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-[#011E41]" />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.1 }} className="font-serif text-3xl text-[#011E41] hover:text-[#011E41]/70 transition-colors">
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
