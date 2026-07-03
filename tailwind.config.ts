import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ink: "#0b0b0c",
        graphite: "#1c1c1e",
        ash: "#8a8a8e",
        smoke: "#c7c7cc",
        bone: "#f2f2f0",
        silver: "#d8d9db",
        "silver-dim": "#9a9ba0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
