import type { IconType } from "react-icons";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiLangchain,
  SiHuggingface,
  SiMeta,
  SiAnthropic,
  SiMlflow,
  SiFastapi,
  SiDocker,
  SiDatabricks,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSnowflake,
} from "react-icons/si";
import { skills, personal } from "@/lib/data";
import Reveal from "./Reveal";
import Social from "./Social";
import Certificates from "./Certificates";

// 3–4 brand logos highlighted per stack group
const logos: Record<string, { Icon: IconType; label: string; color: string }[]> = {
  "ML / AI": [
    { Icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
    { Icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
    { Icon: SiScikitlearn, label: "scikit-learn", color: "#F7931E" },
    { Icon: SiKeras, label: "Keras", color: "#D00000" },
  ],
  "GenAI / LLM": [
    { Icon: SiLangchain, label: "LangChain", color: "#1C3C3C" },
    { Icon: SiHuggingface, label: "Hugging Face", color: "#FF9D00" },
    { Icon: SiMeta, label: "Llama", color: "#0866FF" },
    { Icon: SiAnthropic, label: "Anthropic", color: "#D97757" },
  ],
  "MLOps / Infra": [
    { Icon: SiMlflow, label: "MLflow", color: "#0194E2" },
    { Icon: SiFastapi, label: "FastAPI", color: "#009688" },
    { Icon: SiDocker, label: "Docker", color: "#2496ED" },
    { Icon: SiDatabricks, label: "Databricks", color: "#FF3621" },
  ],
  "Languages / Data": [
    { Icon: SiPython, label: "Python", color: "#3776AB" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
    { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
    { Icon: SiSnowflake, label: "Snowflake", color: "#29B5E8" },
  ],
};

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

              {/* 3–4 highlighted brand logos */}
              <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
                {logos[s.group]?.map(({ Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-6 w-6 shrink-0" style={{ color }} />
                    <span className="text-xs font-medium text-ink/75">{label}</span>
                  </div>
                ))}
              </div>

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
        <Certificates />
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
