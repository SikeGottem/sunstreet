"use client";
import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export default function TextScramble({ text, className = "", duration = 500 }: { text: string; className?: string; duration?: number }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const length = text.length;
    const steps = Math.ceil(duration / 30);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const resolved = Math.floor(progress * length);
      let result = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " ") { result += " "; continue; }
        result += i < resolved ? text[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(result);
      if (step >= steps) { setDisplay(text); clearInterval(interval); }
    }, 30);
    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
}
