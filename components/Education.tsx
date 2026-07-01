import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-baseline gap-4">
            <span className="label text-accent">03</span>
            <h2 className="font-display text-4xl font-medium sm:text-6xl">Education</h2>
          </div>
          <span className="label hidden sm:block">degrees · coursework</span>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={i} delay={i * 0.05} className="h-full">
            <div className="h-full rounded-[1.75rem] border border-line bg-panel/40 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 sm:p-8">
              <div className="mb-4 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.logo}
                  alt={e.school}
                  className="h-12 w-12 shrink-0 rounded-xl border border-line bg-white object-contain p-1.5"
                />
                <p className="label accent-text">{e.period}</p>
              </div>
              <h3 className="font-display text-xl font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm text-ink/70">{e.degree}</p>
              <p className="label mt-1 normal-case tracking-normal text-faint">{e.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
