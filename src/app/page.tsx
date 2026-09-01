// Sun Street homepage presents the three practices through one horizon-led brand narrative.
import Link from "next/link";
import { AgeasLogo, BabcockBrownLogo, LionNathanLogo, VercoLogo } from "@/components/ClientLogos";
import PageFooter from "@/components/PageFooter";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import SolarHorizon from "@/components/SolarHorizon";

const practices = [
  {
    index: "01",
    href: "/consulting",
    title: "Consulting",
    description: "Strategy that survives contact with the real organisation — from operating model to implementation.",
  },
  {
    index: "02",
    href: "/trading",
    title: "Trading",
    description: "Market knowledge, distribution and retail strategy for brands ready to move across Asia.",
  },
  {
    index: "03",
    href: "/coaching",
    title: "Coaching",
    description: "Personal work that changes the subconscious beliefs shaping what happens next.",
  },
];

const stats = [
  { label: "Years of APAC experience", value: "15+" },
  { label: "Founded in Hong Kong", value: "2016" },
  { label: "Markets reached", value: "8+" },
];

export default function Home() {
  return (
    <main id="main-content">
      <PageNav tone="dark" />

      <section className="home-hero" aria-labelledby="home-title">
        <SolarHorizon />
        <div className="site-shell home-hero__content">
          <div className="home-hero__topline">
            <p className="eyebrow eyebrow--light">Hong Kong · Since 2016</p>
            <span className="home-hero__coordinates">22.3193° N · 114.1694° E</span>
          </div>

          <h1 id="home-title" className="home-hero__title">
            <span>SUN</span>
            <span>STREET</span>
          </h1>

          <div className="home-hero__footer">
            <p className="home-hero__descriptor">
              Strategy, distribution and personal transformation — three disciplines for moments when standing still is not an option.
            </p>
            <a className="hero-link" href="#practice">
              Explore the practice <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section id="practice" className="practice-intro" aria-labelledby="practice-title">
        <div className="site-shell practice-intro__grid">
          <Reveal>
            <h2 id="practice-title" className="practice-intro__title">
              Three disciplines.<br />
              One <em>point of view.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="practice-intro__copy">
              Sun Street works where change becomes practical: inside organisations, across markets and within people. The context changes. The standard does not.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="service-index" aria-label="Sun Street practices">
        <div className="site-shell">
          {practices.map((practice, index) => (
            <Reveal key={practice.href} delay={index * 0.06}>
              <Link className="service-row" href={practice.href}>
                <span className="service-row__index">{practice.index}</span>
                <h3 className="service-row__title">{practice.title}</h3>
                <p className="service-row__copy">{practice.description}</p>
                <span className="service-row__arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="site-shell proof-section__grid">
          <Reveal>
            <p className="eyebrow">Built for the decisive moment</p>
            <h2 id="proof-title" className="proof-section__statement">
              Experience without the <em>distance.</em>
            </h2>
          </Reveal>
          <div className="proof-section__aside">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="proof-stat">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="client-band" aria-labelledby="client-title">
        <div className="site-shell client-band__grid">
          <div>
            <p className="eyebrow">Selected experience</p>
            <h2 id="client-title" className="sr-only">Organisations Sun Street has worked with</h2>
          </div>
          <div className="client-band__logos">
            <VercoLogo className="h-10" />
            <LionNathanLogo className="h-10" />
            <BabcockBrownLogo className="h-10" />
            <AgeasLogo className="h-10" />
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
