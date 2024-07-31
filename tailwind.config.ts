import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "logo-y-up": "logoYUp 1s ease-in-out",
        "fade-in": "fadeIn 2s ease-in-out",
        "click-icon": "clickIcon 0.6s ease-in-out forwards",
      },
      keyframes: {
        logoYUp: {
          "0%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        clickIcon: {
          "0": { transform: "scale(1)" },
          "20%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
