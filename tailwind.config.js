/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Incluye el archivo HTML en la raíz
    "./src/**/*.{html,js,ts,jsx,tsx}", // Incluye archivos dentro de `src` y sus subcarpetas
  ],
  theme: {
    extend: {
      colors: {
        "gl-purple": "var(--gl-purple)",
        "gl-purple1": "var(--gl-purple1)",
        "gl-purple2": "var(--gl-purple2)",
        "gl-purple3": "var(--gl-purple3)",

        "gl-pink": "var(--gl-pink)",
        "gl-pink1": "var(--gl-pink1)",

        "gl-blue": "var(--gl-blue)",
        "gl-blue1": "var(--gl-blue1)",

        "gl-sky": "var(--gl-sky)",
        "gl-sky1": "var(--gl-sky1)",

        "gl-red": "var(--gl-red)",

        facebook: "var(--facebook)",
        instagram: "var(--instagram)",
        linkedin: "var(--linkedin)",
        tiktok: "var(--tiktok)",
        x: "var(--x)",
        youtube: "var(--youtube)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "cabecera-home": "url('/images/cabecera.jpg')",
        "cabecera-liderazgo": "url('/images/liderazgo/cabecera.png')",
        "quote-1": "url('/images/image1.jpg')",
        gloria: "url('/images/quienes/gloria.png')",
        "quienes-fondo": "url('/images/quienes/quienes-bg.jpg')",
      },
      screens: {
        supra: "1920px",
        hd: "1536px",
        xs: "320px",
      },
      keyframes: {
        expand: {
          from: { height: "0" },
          to: { height: "1.2em" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(1rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInOpacity: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        expand: "expand 0.5s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        scroll: "scroll 50s linear infinite",
        scrollMobile: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
