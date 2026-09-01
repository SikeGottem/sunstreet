// Editorial contact close turns the brand horizon into the site's final conversion moment.
import Link from "next/link";
import Reveal from "./Reveal";
import SolarHorizon from "./SolarHorizon";
import SunLogo from "./SunLogo";

const footerLinks = [
  { href: "/consulting", label: "Consulting" },
  { href: "/trading", label: "Trading" },
  { href: "/coaching", label: "Coaching" },
];

export default function PageFooter() {
  return (
    <footer className="site-footer">
      <section className="contact-horizon" aria-labelledby="contact-title">
        <SolarHorizon variant="quiet" />
        <div className="site-shell contact-horizon__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Hong Kong · Working across APAC</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="contact-title" className="contact-horizon__title">
              A good next move<br />
              starts with <em>hello.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <a className="contact-horizon__email" href="mailto:hello@sunstreethk.com">
              <span>hello@sunstreethk.com</span>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="site-footer__base">
        <div className="site-shell site-footer__grid">
          <Link href="/" className="site-footer__brand" aria-label="Sun Street home">
            <SunLogo className="site-footer__mark" />
            <span>
              <strong>Sun Street</strong>
              <small>Hong Kong · Since 2016</small>
            </span>
          </Link>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__meta">
            <span>© {new Date().getFullYear()} Sun Street</span>
            <span>Strategy · Distribution · Transformation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
