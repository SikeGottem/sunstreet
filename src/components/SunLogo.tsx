export default function SunLogo({ className = "w-10 h-10" }: { className?: string }) {
  // Recreated from the original sunstreethk.com Framer logo
  // Semicircle sunrise on a horizon line with ~17 radiating rays
  const cx = 50;
  const cy = 55;
  const r = 35;
  const rayInner = r + 2;
  const rayOuter = r + 14;
  // 17 rays from 180° to 0° (left to right across the top)
  const rayCount = 17;
  const rays = [];
  for (let i = 0; i < rayCount; i++) {
    const angle = Math.PI - (i * Math.PI) / (rayCount - 1);
    const x1 = cx + Math.cos(angle) * rayInner;
    const y1 = cy + Math.sin(angle) * -rayInner;
    const x2 = cx + Math.cos(angle) * rayOuter;
    const y2 = cy + Math.sin(angle) * -rayOuter;
    rays.push({ x1, y1, x2, y2 });
  }

  return (
    <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Horizon line */}
      <line x1="2" y1={cy} x2="98" y2={cy} stroke="currentColor" strokeWidth="2.2" />
      {/* Semicircle arc */}
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Rays */}
      {rays.map((ray, i) => (
        <line
          key={i}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}
