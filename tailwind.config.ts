import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(150%) skewX(-20deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      colors: {
        brand: {
          navy: "#012787",
          orange: "#ff6a00",
          cream: "#fdf6ec",
          white: "#ffffff",
          "navy-light": "#1a3fa8",
          "navy-dark": "#011a5e",
          "glass-bg": "rgba(255, 255, 255, 0.08)",
          "glass-border": "rgba(255, 255, 255, 0.15)",
        },
      },
      fontFamily: {
        primary: "var(--font-primary)",
        display: "var(--font-display)",
      },
    },
  },
  plugins: [],
};
export default config;
