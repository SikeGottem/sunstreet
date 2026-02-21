"use client";

export default function Marquee({ text }: { text: string }) {
  const repeated = `${text} `.repeat(10);
  return (
    <div className="overflow-hidden border-y border-white/10 py-4">
      <div className="marquee-track">
        <span className="text-sm tracking-[0.3em] uppercase text-white/20 whitespace-nowrap">
          {repeated}
        </span>
        <span className="text-sm tracking-[0.3em] uppercase text-white/20 whitespace-nowrap">
          {repeated}
        </span>
      </div>
    </div>
  );
}
