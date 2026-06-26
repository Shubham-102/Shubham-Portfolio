"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value up from 0 when scrolled into view.
 * Handles prefixes/suffixes like "176K", "96.6%", "<100ms", "0.74".
 */
export default function CountUp({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  // split "<100ms" -> prefix "<", number "100", suffix "ms"
  const match = value.match(/^([^\d.]*)([\d.]+)([^\d.]*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  useEffect(() => {
    if (!match || isNaN(target)) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setDisplay(prefix + "0".padStart(1) + (decimals ? "." + "0".repeat(decimals) : "") + suffix);

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (done.current) return;
      done.current = true;
      if (reduce) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        const cur = (target * eased).toFixed(decimals);
        setDisplay(prefix + cur + suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
