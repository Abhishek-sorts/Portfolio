/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"] },
      colors: {
        violet1: "#6C5CE7",
        purple1: "#8A2BE2",
        cyan1: "#00CECE",
        navy: "#0F172A",
        paper: "#F8F9FD",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#6C5CE7 0%,#8A2BE2 100%)",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,197,94,.6)" },
          "50%": { boxShadow: "0 0 0 8px rgba(34,197,94,0)" },
        },
      },
      animation: { pulseDot: "pulseDot 2s infinite" },
    },
  },
  plugins: [],
};
