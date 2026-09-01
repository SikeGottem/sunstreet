// Service-page heading preserves D-DIN as a clean editorial anchor beside each route instrument.
import type { ReactNode } from "react";

export default function KineticHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h1 id={id} className="service-hero__heading">
      {children}
    </h1>
  );
}
