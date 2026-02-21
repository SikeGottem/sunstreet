"use client";

export default function Marquee({ children, speed = "normal", reverse = false, className = "" }: { children: React.ReactNode; speed?: "slow" | "normal" | "fast"; reverse?: boolean; className?: string }) {
  const animClass = reverse ? "animate-marquee-reverse" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animClass}`}>
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
}
