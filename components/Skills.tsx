import { skills, certifications, personal } from "@/lib/data";
import Reveal from "./Reveal";
import Social from "./Social";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-baseline gap-4">
            <span className="label text-accent">04</span>
            <h2 className="font-display text-4xl font-medium sm:text-6xl">Stack</h2>
          </div>
          <span className="label hidden sm:block">tools · frameworks</span>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.04} className="h-full">
            <div className="h-full rounded-[1.75rem] border border-line bg-panel/40 p-7 shadow-soft transition-all duration-500 hover:border-accent/40 sm:p-8">
              <p className="label mb-4 accent-text">{s.group}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-panel/60 px-3 py-1 font-mono text-[12px] text-ink/75 transition hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <p className="label mb-4">Certifications</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-2xl border border-line bg-panel/40 px-5 py-4 text-sm text-muted shadow-soft">
                <span className="accent-text">✓</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* footer / contact */}
      <Reveal delay={0.15}>
        <footer id="contact" className="mt-28 border-t border-line pt-14">
          <p className="label mb-6 text-accent">Get in touch</p>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="italic text-accent">remarkable.</span>
          </h2>
          <a
            href={`mailto:${personal.email}`}
            className="mt-6 inline-block font-mono text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
          >
            {personal.email}
          </a>

          <div className="mt-10">
            <Social size={48} iconSize={22} />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] text-faint">
            <span className="uppercase">
              {personal.name} · {personal.location} · {new Date().getFullYear()}
            </span>
            <a href={personal.resumeUrl} className="uppercase hover:text-accent">
              CV ↓
            </a>
          </div>
        </footer>
      </Reveal>
    </section>
  );
}
