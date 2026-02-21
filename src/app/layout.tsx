import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
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
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#0F1C2E] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
