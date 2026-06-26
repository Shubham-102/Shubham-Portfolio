"use client";

import { useEffect, useRef } from "react";

/**
 * A lightweight animated "neural constellation": nodes drift, connect to
 * nearby neighbors, and react to the cursor. Pure canvas + rAF — no deps.
 */
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = ref.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // explicitly-typed non-null copies so closures keep the narrowing
    const cv: HTMLCanvasElement = canvasEl;
    const c: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const LINK = 130; // neighbour link distance
    const MOUSE = 170; // cursor influence radius

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = w + "px";
      cv.style.height = h + "px";
      c.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(85, Math.floor((w * h) / 17000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function frame() {
      c.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE && dm > 0) {
          // gentle pull toward the cursor
          p.x += (dxm / dm) * 0.5;
          p.y += (dym / dm) * 0.5;
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            c.strokeStyle = `rgba(201,168,106,${(1 - d / LINK) * 0.34})`;
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(a.x, a.y);
            c.lineTo(b.x, b.y);
            c.stroke();
          }
        }

        const dxm = a.x - mouse.x;
        const dym = a.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE) {
          c.strokeStyle = `rgba(224,189,134,${(1 - dm / MOUSE) * 0.55})`;
          c.lineWidth = 1;
          c.beginPath();
          c.moveTo(a.x, a.y);
          c.lineTo(mouse.x, mouse.y);
          c.stroke();
        }
      }

      c.fillStyle = "rgba(216,189,134,0.9)";
      for (const p of pts) {
        c.beginPath();
        c.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        c.fill();
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    frame();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
