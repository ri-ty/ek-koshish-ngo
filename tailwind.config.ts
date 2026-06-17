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
        ivory: "#FDFAF5",
        surface: "#F5F0E8",
        primary: "#E8632A",
        gold: "#F5A623",
        foreground: "#1C1917",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
