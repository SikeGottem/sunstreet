import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import RouteCurtain from "@/components/RouteCurtain";

const ddin = localFont({
  src: [
    { path: "../../public/fonts/D-DIN-Bold.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/D-DIN-Regular.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun Street — Consulting · Trading · Coaching",
  description:
    "Sun Street helps organisations develop strategy, distributes brands across Asia, and provides transformative life coaching.",
  metadataBase: new URL("https://sunstreet.vercel.app"),
  openGraph: {
    title: "Sun Street — Consulting · Trading · Coaching",
    description:
      "Strategy, distribution and personal transformation from Hong Kong to the wider APAC region.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ddin.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ScrollProgress />
        <SmoothScroll />
        <RouteCurtain />
        {children}
      </body>
    </html>
  );
}
