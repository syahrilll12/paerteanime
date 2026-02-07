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
        background: "#050505", // Deep Obsidian
        foreground: "#f5f5f5",
        brand: {
          primary: "#0062ff", // Electric Cobalt
          accent: "#ff004c", // Neon Crimson
        },
        surface: {
          low: "#0a0a0a",
          medium: "#121212",
          high: "#1a1a1a",
        }
      },
      fontFamily: {
        display: ["var(--font-clash)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "grain": "grain 8s steps(10) infinite",
        "scanline": "scanline 6s linear infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 15%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(15%, 0)" },
          "70%": { transform: "translate(0, 10%)" },
          "80%": { transform: "translate(-15%, 0)" },
          "90%": { transform: "translate(10%, 5%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
