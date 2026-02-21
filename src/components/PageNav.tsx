"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SunLogo from "./SunLogo";

const links = [
  { href: "/consulting", label: "Consulting" },
  { href: "/trading", label: "Trading" },
  { href: "/coaching", label: "Coaching" },
];

export default function PageNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#011E41]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <SunLogo className="w-8 h-8" />
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-[#011E41]/60 group-hover:text-[#011E41] transition-colors">Sun Street</span>
        </Link>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs tracking-[0.3em] uppercase transition-colors ${
                pathname === l.href
                  ? "text-[#011E41] font-bold"
                  : "text-[#011E41]/40 hover:text-[#011E41]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
