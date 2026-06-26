import { personal } from "@/lib/data";
import Social from "./Social";

const tabs = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        {/* left: chat pill + socials */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-glow transition hover:opacity-90"
          >
            Let&apos;s Chat
            <span className="h-2 w-2 rounded-full bg-white" />
          </a>
          <div className="hidden lg:block">
            <Social size={34} iconSize={16} />
          </div>
        </div>

        {/* center: monogram */}
        <a
          href="#top"
          className="hidden font-display text-xl tracking-wide text-ink transition hover:text-accent md:block"
        >
          SM<span className="text-accent">.</span>
        </a>

        {/* right: nav pills + CV */}
        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 lg:flex">
            {tabs.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="rounded-full border border-line px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                {t.label}
              </a>
            ))}
          </div>
          <a
            href={personal.resumeUrl}
            className="rounded-full border border-ink px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:bg-ink hover:text-white"
          >
            CV ↓
          </a>
        </div>
      </nav>
    </header>
  );
}
