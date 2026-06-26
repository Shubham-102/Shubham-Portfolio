"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

export default function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: personal.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Render a stable placeholder on the server to avoid hydration mismatch.
  return (
    <span className="tabular-nums accent-text">
      {time ?? "--:--:--"}
    </span>
  );
}
