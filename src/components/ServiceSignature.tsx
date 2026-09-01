// Route-specific visual instruments give each Sun Street discipline its own spatial logic.
type ServiceVariant = "consulting" | "trading" | "coaching";

export default function ServiceSignature({ variant }: { variant: ServiceVariant }) {
  if (variant === "consulting") {
    return (
      <div className="signature signature--consulting" aria-hidden="true">
        <div className="decision-axis decision-axis--horizontal" />
        <div className="decision-axis decision-axis--vertical" />
        <div className="decision-orbit"><span /></div>
        <span className="decision-label decision-label--north">Direction</span>
        <span className="decision-label decision-label--east">Decisions</span>
        <span className="decision-label decision-label--south">Movement</span>
        <span className="decision-label decision-label--west">Systems</span>
        <strong>01</strong>
      </div>
    );
  }

  if (variant === "trading") {
    const nodes = [
      [18, 33, "HK"], [31, 20, "CN"], [58, 25, "JP"], [38, 56, "SG"],
      [66, 60, "ID"], [80, 38, "TW"], [74, 18, "KR"], [23, 72, "TH"],
    ];
    return (
      <div className="signature signature--trading" aria-hidden="true">
        <svg viewBox="0 0 100 78" preserveAspectRatio="none">
          <path d="M18 33 C31 6 43 58 58 25 S76 7 74 18 M18 33 C29 47 27 68 38 56 S54 54 66 60 M38 56 C22 54 20 64 23 72 M58 25 C69 32 73 34 80 38" />
        </svg>
        {nodes.map(([x, y, label]) => (
          <span key={label} className="market-node" style={{ left: `${x}%`, top: `${y}%` }}><i />{label}</span>
        ))}
        <p>Route / Asia Pacific</p>
      </div>
    );
  }

  return (
    <div className="signature signature--coaching" aria-hidden="true">
      <div className="belief-ring belief-ring--outer" />
      <div className="belief-ring belief-ring--middle" />
      <div className="belief-ring belief-ring--inner"><span /></div>
      <p><span>Pattern</span><i>→</i><strong>Possibility</strong></p>
    </div>
  );
}

export type { ServiceVariant };
