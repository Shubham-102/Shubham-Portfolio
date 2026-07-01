"use client";

import { useEffect, useState } from "react";
import { certifications } from "@/lib/data";

type Cert = (typeof certifications)[number];

export default function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="mt-12">
      <p className="label mb-4">Certifications</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c)}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-panel/40 px-5 py-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={c.issuer}
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-ink/90">
                {c.name}
              </span>
              <span className="label normal-case tracking-normal text-faint">
                {c.issuer}
              </span>
            </span>
            <span className="label shrink-0 whitespace-nowrap text-accent opacity-0 transition group-hover:opacity-100">
              View →
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative z-10 flex h-full max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <div className="flex min-w-0 items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.logo}
                  alt={active.issuer}
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-lg leading-tight text-ink">
                    {active.name}
                  </p>
                  <p className="label mt-0.5 normal-case tracking-normal text-faint">
                    {active.issuer}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={encodeURI(active.image)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted transition hover:border-accent hover:text-accent"
                >
                  Open ↗
                </a>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* full certificate image — scrolls if tall */}
            <div className="flex-1 overflow-auto bg-neutral-100 p-4 sm:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={encodeURI(active.image)}
                alt={active.name}
                className="mx-auto h-auto w-full max-w-3xl rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
