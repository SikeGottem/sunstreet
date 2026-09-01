// Data-driven service canvas keeps each discipline distinct inside one editorial system.
import { AgeasLogo, BabcockBrownLogo, LionNathanLogo, VercoLogo } from "./ClientLogos";
import type { ReactNode } from "react";
import PageFooter from "./PageFooter";
import PageNav from "./PageNav";
import Reveal from "./Reveal";

export type ServiceOffer = {
  title: string;
  description: string;
};

export type ServiceEvidence = {
  label: string;
  title: string;
  description: string;
};

type ServicePageProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro: string;
  actionLabel: string;
  chapterTitle: ReactNode;
  offers: ServiceOffer[];
  evidenceTitle: ReactNode;
  evidence: ServiceEvidence[];
  regions?: string[];
  showClients?: boolean;
};

export default function ServicePage({
  index,
  label,
  title,
  intro,
  actionLabel,
  chapterTitle,
  offers,
  evidenceTitle,
  evidence,
  regions = [],
  showClients = false,
}: ServicePageProps) {
  return (
    <main id="main-content" className="service-page">
      <PageNav />

      <section className="service-hero" data-index={index} aria-labelledby="service-title">
        <div className="site-shell service-hero__inner">
          <p className="eyebrow">{index} · {label}</p>
          <h1 id="service-title" className="service-hero__heading">{title}</h1>
          <div className="service-hero__bottom">
            <p className="service-hero__intro">{intro}</p>
            <a className="service-hero__action" href="#services">
              {actionLabel} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="service-chapter" aria-labelledby="services-title">
        <div className="site-shell">
          <div className="service-chapter__header">
            <Reveal>
              <p className="eyebrow">{index}.1 · The work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="services-title" className="service-chapter__title">{chapterTitle}</h2>
            </Reveal>
          </div>

          <div className="offer-list">
            {offers.map((offer, offerIndex) => (
              <Reveal key={offer.title} delay={offerIndex * 0.06}>
                <article className="offer-item">
                  <span className="offer-item__number">0{offerIndex + 1}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section" aria-labelledby="evidence-title">
        <div className="site-shell evidence-section__grid">
          <Reveal>
            <p className="eyebrow eyebrow--light">{index}.2 · In practice</p>
            <h2 id="evidence-title" className="evidence-section__title">{evidenceTitle}</h2>
          </Reveal>

          <div className="evidence-list">
            {evidence.map((item, evidenceIndex) => (
              <Reveal key={item.title} delay={evidenceIndex * 0.08}>
                <article className="evidence-item">
                  <span className="evidence-item__label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
            {regions.length > 0 && (
              <Reveal delay={evidence.length * 0.08}>
                <div className="region-list" aria-label="Markets supported">
                  {regions.map((region) => <span key={region}>{region}</span>)}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {showClients && (
        <section className="trusted-strip" aria-labelledby="trusted-title">
          <div className="site-shell trusted-strip__inner">
            <div>
              <p className="eyebrow">Selected experience</p>
              <h2 id="trusted-title" className="sr-only">Selected client organisations</h2>
            </div>
            <div className="trusted-strip__logos">
              <VercoLogo className="h-10" />
              <LionNathanLogo className="h-10" />
              <BabcockBrownLogo className="h-10" />
              <AgeasLogo className="h-10" />
            </div>
          </div>
        </section>
      )}

      <PageFooter />
    </main>
  );
}
