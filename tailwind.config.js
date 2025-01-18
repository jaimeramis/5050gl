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
        "noticia-1": "url('/images/noticias/noticia1.jpg')",
        "noticia-2": "url('/images/noticias/noticia2.jpg')",
        "noticia-3": "url('/images/noticias/noticia3.jpg')",
        instagram: "var(--instagram)",
      },
      screens: {
        xs: "320px",
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
    require("@tailwindcss/line-clamp"),
  ],
};
