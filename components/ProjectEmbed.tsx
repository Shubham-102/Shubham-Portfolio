"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** Turn a public demo URL into an embeddable one. */
function embedUrl(demo: string): string {
  // Hugging Face Space -> the embeddable *.hf.space subdomain
  const hf = demo.match(/huggingface\.co\/spaces\/([^/]+)\/([^/?#]+)/);
  if (hf) {
    const slug = `${hf[1]}-${hf[2]}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return `https://${slug}.hf.space`;
  }
  // Streamlit Community Cloud -> embed mode
  if (demo.includes("streamlit.app")) {
    return demo.includes("?") ? demo : demo.replace(/\/?$/, "/") + "?embed=true";
  }
  return demo;
}

export default function ProjectEmbed({
  demo,
  name,
}: {
  demo: string;
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
      >
        Preview
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
              className="relative z-10 flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg leading-tight text-ink">
                    {name}
                  </p>
                  <p className="label mt-0.5 normal-case tracking-normal text-faint">
                    Live app — may take a few seconds to wake up
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted transition hover:border-accent hover:text-accent"
                  >
                    Open ↗
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <iframe
                src={embedUrl(demo)}
                title={name}
                className="w-full flex-1 bg-white"
                loading="lazy"
                allow="fullscreen; clipboard-write"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
