// Persistent brand navigation adapts between immersive and editorial page headers.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import SunLogo from "./SunLogo";

const links = [
  { href: "/consulting", label: "Consulting", index: "01" },
  { href: "/trading", label: "Trading", index: "02" },
  { href: "/coaching", label: "Coaching", index: "03" },
];

type PageNavProps = {
  tone?: "light" | "dark";
};

export default function PageNav({ tone = "light" }: PageNavProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 56), []);
  const isInverted = menuOpen || (tone === "dark" && !scrolled);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const initialFrame = window.requestAnimationFrame(handleScroll);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`site-nav ${scrolled && !menuOpen ? "site-nav--scrolled" : ""} ${isInverted ? "site-nav--inverted" : ""}`}
        aria-label="Primary navigation"
      >
        <div className="site-shell site-nav__inner">
          <Link href="/" className="brand-lockup" aria-label="Sun Street home" onClick={() => setMenuOpen(false)}>
            <SunLogo className="brand-lockup__mark" />
            <span className="brand-lockup__name">SUN STREET</span>
          </Link>

          <div className="site-nav__links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="site-nav__link"
              >
                <span>{link.index}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="menu-toggle__label">{menuOpen ? "Close" : "Menu"}</span>
            <span className={`menu-toggle__icon ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`menu-panel ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-panel__sun" aria-hidden="true">
          <SunLogo className="menu-panel__sun-mark" />
        </div>
        <div className="site-shell menu-panel__body">
          <p className="eyebrow eyebrow--light">Navigate by discipline</p>
          <div className="menu-panel__links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={pathname === link.href ? "page" : undefined}
                className="menu-panel__link"
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.index}</span>
                <strong>{link.label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
          <a className="menu-panel__email" href="mailto:hello@sunstreethk.com" tabIndex={menuOpen ? 0 : -1}>
            hello@sunstreethk.com
          </a>
        </div>
      </div>
    </>
  );
}
