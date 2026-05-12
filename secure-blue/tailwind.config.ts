import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131722",
        "zinc-950": "#09090b",
        "secure-blue": "#3b82f6",
        "secure-green": "#34d399",
        "secure-cyan": "#22d3ee",
        "secure-purple": "#a855f7",
        "secure-amber": "#fbbf24",
      },
      letterSpacing: {
        "tighter-aggressive": "-0.05em",
        "widest-system": "0.2em",
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;