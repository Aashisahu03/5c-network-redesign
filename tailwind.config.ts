import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue5c: {
          DEFAULT: "#1A6BF0",
          light: "#4A8FF5",
          dark: "#0D4FC8"
        },
        ink: {
          DEFAULT: "#0A0F1E",
          60: "rgba(10,15,30,0.6)",
          30: "rgba(10,15,30,0.3)",
          10: "rgba(10,15,30,0.08)"
        },
        surface: "#F8F9FC",
        offwhite: "#F4F6FB",
        green5c: "#00C48C",
        amber5c: "#F5A623"
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"]
      },
      boxShadow: {
        nav: "0 2px 24px rgba(10,15,30,0.08)",
        card: "0 10px 40px rgba(10,15,30,0.08)",
        cardHover: "0 20px 60px rgba(10,15,30,0.14)",
        blue: "0 14px 34px rgba(26,107,240,0.26)"
      },
      borderRadius: {
        ui: "16px",
        uiSm: "8px"
      }
    }
  },
  plugins: []
};

export default config;
