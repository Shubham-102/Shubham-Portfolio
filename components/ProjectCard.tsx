"use client";

import { useRef } from "react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    // spotlight position
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    // subtle 3D tilt (max ~6deg)
    const rx = (0.5 - y / r.height) * 8;
    const ry = (x / r.width - 0.5) * 8;
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-panel/40 p-7 shadow-soft transition-[transform,border-color] duration-300 ease-out hover:border-accent/50 sm:p-8"
    >
      {/* cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(15,190,207,0.18), transparent 65%)",
        }}
      />

      <div className="flex items-baseline justify-between">
        <span className="label text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs accent-text">{p.metric}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-medium transition-colors duration-300 group-hover:text-accent sm:text-3xl">
        {p.name}
      </h3>
      <p className="label mt-2">{p.kind}</p>

      <ul className="mt-5 space-y-2.5">
        {p.bullets.slice(0, 2).map((b, bi) => (
          <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="rounded-full border border-line bg-panel/60 px-3 py-1 font-mono text-[11px] text-ink/70"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {p.repo || p.demo ? (
          <div className="flex gap-5 text-[11px] uppercase tracking-[0.18em]">
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="accent-text transition hover:underline"
              >
                Code ↗
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="accent-text transition hover:underline"
              >
                Live ↗
              </a>
            )}
          </div>
        ) : (
          <span className="text-[11px] uppercase tracking-[0.18em] text-faint">
            Case study on request
          </span>
        )}
      </div>
    </article>
  );
}
