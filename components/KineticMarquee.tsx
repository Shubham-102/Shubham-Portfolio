const words = [
  "Machine Learning",
  "Data Science",
  "GenAI",
  "RAG Pipelines",
  "MLOps",
  "Deep Learning",
  "LLM Systems",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-xl italic text-ink/85 sm:text-3xl">
            {w}
          </span>
          <span className="text-base text-accent sm:text-xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function KineticMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-line py-3.5">
      <div className="flex w-max animate-ticker">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base to-transparent" />
    </div>
  );
}
