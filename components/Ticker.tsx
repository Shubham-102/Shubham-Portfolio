import { ticker } from "@/lib/data";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ticker.map((t, i) => (
        <div key={i} className="flex items-center whitespace-nowrap px-6 py-3">
          <span
            className={`mr-2 text-[10px] ${
              t.trend === "up" ? "accent-text" : "text-faint"
            }`}
          >
            {t.trend === "up" ? "▲" : "■"}
          </span>
          <span className="text-[13px] tracking-wide text-ink/80">
            {t.label}
          </span>
          <span className="ml-6 text-line">/</span>
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/40">
      <div className="flex w-max animate-ticker font-mono">
        <Row />
        <Row />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent" />
    </div>
  );
}
