/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#0a0a23",
        "page-muted": "#8C8A96",
        "accent-pink": "#f9627d",
        "accent-orange": "#ff9a5a",
        "accent-green": "#38d996",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "soft-glow": "0 0 80px rgba(249, 98, 125, 0.25)",
        "soft-inner": "0 0 0 1px rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "hero-ring":
          "radial-gradient(circle at 30% 20%, rgba(249, 98, 125, 0.7), transparent 60%), radial-gradient(circle at 80% 80%, rgba(255, 154, 90, 0.7), transparent 55%)",
      },
      keyframes: {
        "orbit-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "label-slide": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-12px)" },
        },
        "rotate-category": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-90deg)" },
        },
      },
      animation: {
        "orbit-slow": "orbit-slow 22s linear infinite",
        "float-soft": "float-soft 6s ease-in-out infinite",
        "label-slide-slow": "label-slide 7s ease-in-out infinite",
        "rotate-category": "rotate-category 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
