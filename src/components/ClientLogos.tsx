import Image from "next/image";

interface LogoProps {
  className?: string;
}

/* Real logos from company websites, rendered as images with navy CSS filter */
const logoStyle = {
  filter: "brightness(0) saturate(100%)", // makes any logo solid black
  opacity: 0.25,
  transition: "opacity 0.3s ease",
};

const logoClass = "relative";

export function VercoLogo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`${className} ${logoClass}`} style={{ aspectRatio: "3/1" }}>
      <Image
        src="/images/verco-logo.svg"
        alt="Verco"
        fill
        sizes="(max-width: 640px) 40vw, 18vw"
        className="object-contain"
        style={logoStyle}
      />
    </div>
  );
}

export function LionNathanLogo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`${className} ${logoClass}`} style={{ aspectRatio: "2.5/1" }}>
      <Image
        src="/images/lion-logo.svg"
        alt="Lion Nathan"
        fill
        sizes="(max-width: 640px) 40vw, 18vw"
        className="object-contain"
        style={logoStyle}
      />
    </div>
  );
}

export function BabcockBrownLogo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`${className} ${logoClass}`} style={{ aspectRatio: "11.33/1" }}>
      <Image
        src="/images/babcock-brown-logo.svg"
        alt="Babcock & Brown"
        fill
        sizes="(max-width: 640px) 40vw, 18vw"
        className="object-contain"
        style={logoStyle}
      />
    </div>
  );
}

export function AgeasLogo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`${className} ${logoClass}`} style={{ aspectRatio: "3/1" }}>
      <Image
        src="/images/ageas-logo.svg"
        alt="Ageas"
        fill
        sizes="(max-width: 640px) 40vw, 18vw"
        className="object-contain"
        style={logoStyle}
      />
    </div>
  );
}
