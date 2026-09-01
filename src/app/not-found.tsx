// Branded fallback keeps lost visitors inside Sun Street's visual and navigation system.
import Link from "next/link";
import PageNav from "@/components/PageNav";
import SolarHorizon from "@/components/SolarHorizon";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <PageNav tone="dark" />
      <div className="site-shell not-found__inner">
        <p className="eyebrow eyebrow--light">404 · Beyond the map</p>
        <div>
          <h1>
            This street ends <em>here.</em>
          </h1>
          <p>The page you were looking for has moved, or never existed.</p>
          <Link className="hero-link" href="/">
            Return to Sun Street <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <SolarHorizon variant="quiet" className="not-found__horizon" />
    </main>
  );
}
