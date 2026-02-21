export default function SunLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Horizon line */}
      <line x1="8" y1="40" x2="56" y2="40" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Sun arc */}
      <path
        d="M18 40C18 32.268 24.268 26 32 26C39.732 26 46 32.268 46 40"
        stroke="#C9A84C"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Sun rays */}
      <line x1="32" y1="18" x2="32" y2="23" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="20.2" y1="22.2" x2="23.4" y2="25.4" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="43.8" y1="22.2" x2="40.6" y2="25.4" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="14" y1="33" x2="19" y2="33" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="45" y1="33" x2="50" y2="33" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Reflection lines */}
      <line x1="22" y1="44" x2="42" y2="44" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="47" x2="38" y2="47" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
