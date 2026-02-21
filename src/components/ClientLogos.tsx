import React from "react";

interface LogoProps {
  className?: string;
}

/* Clean wordmark SVGs using currentColor for flexible styling */

export function VercoLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="30"
        fontFamily="'Arial', 'Helvetica', sans-serif"
        fontWeight="700"
        fontSize="32"
        letterSpacing="3"
        fill="currentColor"
      >
        VERCO
      </text>
    </svg>
  );
}

export function LionNathanLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lion icon mark - simplified lion head */}
      <g fill="currentColor">
        <path d="M8 28V8h3v20H8Z" /> {/* Simplified mane element */}
        <circle cx="18" cy="18" r="8" opacity="0.15" />
        <circle cx="18" cy="17" r="5" />
        <ellipse cx="18" cy="20" rx="3" ry="2" fill="currentColor" opacity="0.6" />
      </g>
      <text
        x="32"
        y="22"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="400"
        fontSize="20"
        letterSpacing="2"
        fill="currentColor"
      >
        LION NATHAN
      </text>
    </svg>
  );
}

export function BabcockBrownLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="22"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="1.5"
        fill="currentColor"
      >
        BABCOCK &amp; BROWN
      </text>
      <line x1="0" y1="30" x2="258" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function AgeasLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ageas uses a distinctive rounded wordmark with a swoosh-like element */}
      <text
        x="0"
        y="30"
        fontFamily="'Arial', 'Helvetica', sans-serif"
        fontWeight="700"
        fontSize="30"
        letterSpacing="2"
        fill="currentColor"
      >
        ageas
      </text>
      {/* Characteristic dot/element above */}
      <circle cx="135" cy="10" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
