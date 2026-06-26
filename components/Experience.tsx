import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-baseline gap-4">
            <span className="label text-accent">02</span>
            <h2 className="font-display text-4xl font-medium sm:text-6xl">Experience</h2>
          </div>
          <span className="label hidden sm:block">work history</span>
        </div>
      </Reveal>

      <div className="relative pl-8 sm:pl-10">
        {/* the glowing connector line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/80 via-line to-transparent" />

        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="relative pb-6">
              <span className="absolute -left-[33px] top-7 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_#0fbecf] ring-4 ring-base sm:-left-[41px]" />
              <div className="rounded-[1.75rem] border border-line bg-panel/40 p-7 shadow-soft transition-all duration-500 hover:border-accent/40">
                <p className="label mb-2">{job.period}</p>
                <h3 className="font-display text-xl font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="label mt-1 normal-case tracking-normal text-faint">
                  {job.location}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
