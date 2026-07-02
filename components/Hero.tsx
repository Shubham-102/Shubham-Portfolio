import { personal } from "@/lib/data";
import Social from "./Social";
import MagneticButton from "./MagneticButton";
import HeroHeadline from "./HeroHeadline";
import CountUp from "./CountUp";

const stats = [
  { n: "0.74", l: "AUC credit model" },
  { n: "96.6%", l: "multi-modal acc." },
  { n: "3", l: "live AI demos" },
  { n: "<100ms", l: "FastAPI inference" },
];

export default function Hero() {
  // two big words for the headline (the photo sits between them)
  const wordA = "AI/ML";
  const wordB = "ENGINEER";

  return (
    <section className="relative px-6 pt-8 pb-12 sm:px-10">
      <div className="relative mx-auto max-w-6xl border-x border-line">
        {/* blueprint corner markers */}
        <span className="plus-marker absolute left-0 top-0" />
        <span className="plus-marker absolute right-0 top-0" />
        <span className="plus-marker absolute bottom-0 left-0" />
        <span className="plus-marker absolute bottom-0 right-0" />

        <div className="px-4 py-14 text-center sm:py-20">
          {/* medium name tagline */}
          <div
            className="rise flex items-center justify-center gap-2.5"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-3xl font-semibold tracking-wide text-ink sm:text-5xl">
              {personal.name}
            </span>
          </div>

          {/* huge headline with photo between the words */}
          <HeroHeadline
            wordA={wordA}
            wordB={wordB}
            photo={personal.photo}
            alt={personal.name}
          />

          {/* subtitle */}
          <p
            className="rise mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            {personal.tagline}
          </p>

          {/* CTAs */}
          <div
            className="rise mt-9 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.52s" }}
          >
            <MagneticButton href={`mailto:${personal.email}`} primary>
              Let&apos;s Talk ●
            </MagneticButton>
            <MagneticButton href="#projects">View Work</MagneticButton>
          </div>

          <div
            className="rise mt-8 flex justify-center"
            style={{ animationDelay: "0.62s" }}
          >
            <Social size={42} iconSize={18} />
          </div>

          {/* stat strip */}
          <div
            className="rise mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4"
            style={{ animationDelay: "0.72s" }}
          >
            {stats.map((s) => (
              <div key={s.l} className="bg-base px-5 py-6">
                <div className="font-display text-3xl text-ink sm:text-4xl">
                  <CountUp value={s.n} />
                </div>
                <div className="label mt-2 normal-case tracking-normal">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
