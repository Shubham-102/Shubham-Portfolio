const dots = [
  { left: "8%", delay: "0s", dur: "22s", size: 5 },
  { left: "20%", delay: "-6s", dur: "28s", size: 4 },
  { left: "33%", delay: "-12s", dur: "24s", size: 6 },
  { left: "48%", delay: "-3s", dur: "30s", size: 4 },
  { left: "62%", delay: "-9s", dur: "26s", size: 5 },
  { left: "75%", delay: "-15s", dur: "32s", size: 4 },
  { left: "88%", delay: "-5s", dur: "27s", size: 6 },
];

export default function BackgroundOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      {/* panning blueprint grid */}
      <div className="grid-bg animate-gridpan absolute inset-0 opacity-70" />

      {/* slowly rotating aurora behind the hero */}
      <div
        className="absolute -top-[28rem] left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 rounded-full opacity-60 animate-[spin_48s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(15,190,207,0.18) 70deg, transparent 150deg, rgba(99,102,241,0.14) 230deg, transparent 320deg)",
          filter: "blur(60px)",
        }}
      />

      {/* drifting cyan glows */}
      <div
        className="absolute -top-40 left-1/4 h-[42rem] w-[42rem] rounded-full animate-floaty"
        style={{
          background:
            "radial-gradient(circle, rgba(15,190,207,0.16) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute top-1/3 right-0 h-[36rem] w-[36rem] rounded-full animate-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(15,190,207,0.12) 0%, transparent 65%)",
          filter: "blur(70px)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full animate-floaty"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
          animationDelay: "-14s",
        }}
      />

      {/* gently rising particles */}
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-[rise2_linear_infinite] absolute bottom-[-10vh] rounded-full bg-accent/40"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            animationDuration: d.dur,
            animationDelay: d.delay,
          }}
        />
      ))}

      {/* fade so content reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
    </div>
  );
}
