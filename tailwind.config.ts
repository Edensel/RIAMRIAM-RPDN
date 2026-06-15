import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      colors: {
        ink: "#1A1A1A",
        graphite: "#2D2D2D",
        bone: "#F8F7F4",
        paper: "#F8F7F4",
        forest: "#0D2B45",
        teal: "#0F6E56",
        leaf: "#0F6E56",
        gold: "#D4860B",
        clay: "#D4860B",
        primary: "#0D2B45",
        accent: "#0F6E56",
        warm: "#D4860B",
        background: "#F8F7F4",
        text: "#1A1A1A"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 42, 46, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
