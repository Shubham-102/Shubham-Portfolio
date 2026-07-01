import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-baseline gap-4">
            <span className="label text-accent">01</span>
            <h2 className="font-display text-4xl font-medium sm:text-6xl">Projects</h2>
          </div>
          <span className="label hidden sm:block">{projects.length} selected</span>
        </div>
      </Reveal>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
