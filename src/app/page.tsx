// Sun Street homepage presents the three practices through one horizon-led brand narrative.
import { AgeasLogo, BabcockBrownLogo, LionNathanLogo, VercoLogo } from "@/components/ClientLogos";
import KineticHero from "@/components/KineticHero";
import PageFooter from "@/components/PageFooter";
import PageNav from "@/components/PageNav";
import PracticeConstellation from "@/components/PracticeConstellation";
import Reveal from "@/components/Reveal";

const stats = [
  { label: "Years of APAC experience", value: "15+" },
  { label: "Founded in Hong Kong", value: "2016" },
  { label: "Markets reached", value: "8+" },
];

export default function Home() {
  return (
    <main id="main-content">
      <PageNav tone="dark" />
      <KineticHero />

      <section className="motion-manifesto" aria-labelledby="manifesto-title">
        <div className="site-shell motion-manifesto__inner">
          <p className="eyebrow">The point of view</p>
          <h2 id="manifesto-title">
            <span className="motion-line motion-line--left">Change is never</span>
            <span className="motion-line motion-line--right">one thing.</span>
            <em className="motion-line motion-line--left">It is a field of forces.</em>
          </h2>
          <p className="motion-manifesto__copy">
            Sun Street works where direction, reach and belief become practical movement.
          </p>
        </div>
      </section>

      <PracticeConstellation />

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
