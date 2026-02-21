"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import SunLogo from "./SunLogo";

const links = [
  { href: "/consulting", label: "Consulting" },
  { href: "/trading", label: "Trading" },
  { href: "/coaching", label: "Coaching" },
];

export default function PageNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#011E41]/10 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <SunLogo className="w-8 h-8 transition-transform duration-200 group-hover:scale-110" />
            <span className="font-sans text-sm tracking-[0.35em] uppercase text-[#011E41] group-hover:text-[#011E41]/70 transition-colors">
              SUN STREET
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-xs tracking-[0.3em] uppercase transition-colors hover-underline ${
                  pathname === l.href
                    ? "text-[#011E41] font-bold"
                    : "text-[#011E41]/40 hover:text-[#011E41]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#011E41]" />
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-[2px] bg-[#011E41] rounded transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[11px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#011E41] rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#011E41] rounded transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[11px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#011E41] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo at top */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <SunLogo className="w-12 h-12 text-white" />
        </div>

        <div className="flex flex-col items-center gap-10">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-white text-2xl tracking-[0.4em] uppercase transition-all duration-500 hover:opacity-70 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: menuOpen ? `${150 + i * 100}ms` : "0ms",
              }}
            >
              {l.label}
              {pathname === l.href && (
                <span className="block mx-auto mt-2 w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
