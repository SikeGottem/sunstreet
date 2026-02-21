import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ddin = localFont({
  src: [
    { path: "../../public/fonts/D-DIN-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/D-DIN-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun Street — Consulting · Trading · Coaching",
  description:
    "Sun Street helps organisations develop strategy, distributes brands across Asia, and provides transformative life coaching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ddin.variable}>
      <body className="bg-[#0F1C2E] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
