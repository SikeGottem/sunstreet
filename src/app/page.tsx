// Sun Street homepage is a single-screen horizontal director to the three practices.
import Link from "next/link";
import PageNav from "@/components/PageNav";

const directions = [
  {
    index: "01",
    href: "/consulting",
    title: "Consulting",
    signal: "Direction",
    statement: "Develop strategy and turn it into operating reality.",
  },
  {
    index: "02",
    href: "/trading",
    title: "Trading",
    signal: "Reach",
    statement: "Move global brands through Asian markets.",
  },
  {
    index: "03",
    href: "/coaching",
    title: "Coaching",
    signal: "Belief",
    statement: "Change the patterns shaping what comes next.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="home-directory-page">
      <PageNav tone="dark" />

      <section className="home-directory" aria-labelledby="directory-title">
        <header className="site-shell home-directory__intro">
          <div>
            <p className="eyebrow eyebrow--light">Welcome to Sun Street</p>
            <h1 id="directory-title">Three directions.<br /><span>Choose yours.</span></h1>
          </div>
          <div className="home-directory__intro-copy">
            <p>Strategy, distribution and personal transformation from Hong Kong across APAC.</p>
            <a href="mailto:hello@sunstreethk.com">hello@sunstreethk.com <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <nav className="home-directory__routes" aria-label="Sun Street practices">
          {directions.map((direction) => (
            <Link key={direction.href} href={direction.href} className="home-direction">
              <div className="home-direction__meta">
                <span>{direction.index}</span>
                <span>{direction.signal}</span>
              </div>
              <h2>{direction.title}</h2>
              <p>{direction.statement}</p>
              <span className="home-direction__enter">Enter <i aria-hidden="true">↗</i></span>
            </Link>
          ))}
          <div className="home-directory__sun" aria-hidden="true"><span /></div>
          <div className="home-directory__horizon" aria-hidden="true" />
        </nav>
      </section>
    </main>
  );
}
