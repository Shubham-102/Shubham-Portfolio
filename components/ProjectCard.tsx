"use client";

import { useRef, useState } from "react";
import type { Project } from "@/lib/data";
import ProjectEmbed from "./ProjectEmbed";

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  const hasImage = p.preview && !imgError;

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-[2rem] border border-line bg-panel/40 shadow-soft transition-colors duration-300 hover:border-accent/50"
    >
      {/* screenshot bleeding into the background on the right */}
      {hasImage && (
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.preview}
            alt=""
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute right-0 top-0 h-full w-[64%] object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* fade the image into the card so it reads as background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 34%, rgba(255,255,255,0.86) 46%, rgba(255,255,255,0.25) 72%, rgba(255,255,255,0.08) 100%)",
            }}
          />
        </div>
      )}

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx) var(--my), rgba(15,190,207,0.12), transparent 60%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 max-w-xl p-8 sm:p-10">
        <div className="flex items-baseline gap-4">
          <span className="label text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs accent-text">{p.metric}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-medium transition-colors duration-300 group-hover:text-accent sm:text-4xl">
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
              className="rounded-full border border-line bg-white/70 px-3 py-1 font-mono text-[11px] text-ink/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-glow transition hover:opacity-90"
            >
              Live Demo
              <span aria-hidden>↗</span>
            </a>
          )}
          {p.demo && <ProjectEmbed demo={p.demo} name={p.name} />}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-line bg-white/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
            >
              Code ↗
            </a>
          )}
          {!p.demo && !p.repo && (
            <span className="text-[11px] uppercase tracking-[0.18em] text-faint">
              Case study on request
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
