import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)",
          orange: "var(--brand-orange)",
          cream: "var(--brand-cream)",
          "navy-light": "var(--brand-navy-light)",
          "navy-dark": "var(--brand-navy-dark)",
          "glass-bg": "var(--brand-glass-bg)",
          "glass-border": "var(--brand-glass-border)",
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
