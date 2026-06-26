import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        panel: "#f4f5f6",
        dark: "#111214",
        accent: "#0fbecf",
        ink: "#111214",
        muted: "#6b7280",
        faint: "#9aa0a8",
        line: "rgba(0,0,0,0.10)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-oswald)", "system-ui", "sans-serif"],
        mono: ["var(--font-oswald)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 16px 50px -20px rgba(0,0,0,0.25)",
        glow: "0 0 60px -12px rgba(15,190,207,0.45)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.97)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(60px, -50px) scale(1.08)" },
          "50%": { transform: "translate(-40px, 40px) scale(0.95)" },
          "75%": { transform: "translate(35px, 55px) scale(1.04)" },
        },
        gridpan: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "80px 80px" },
        },
        rise2: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-120vh)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        drift: "drift 22s ease-in-out infinite",
        floaty: "floaty 26s ease-in-out infinite",
        gridpan: "gridpan 24s linear infinite",
        blink: "blink 1.05s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
