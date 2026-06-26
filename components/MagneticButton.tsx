"use client";

import { ReactNode, useRef } from "react";

export default function MagneticButton({
  href,
  children,
  primary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const look = primary
    ? "border-accent bg-accent text-base hover:bg-transparent hover:text-accent"
    : "border-line text-ink hover:border-accent hover:text-accent";

  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block rounded-full border px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 will-change-transform ${look}`}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), color 0.3s, background-color 0.3s, border-color 0.3s" }}
    >
      {children}
    </a>
  );
}
