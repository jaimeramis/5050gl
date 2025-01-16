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

        "gr-red": "var(--gl-red)",

        facebook: "var(--facebook)",
        linkedin: "var(--linkedin)",
        tiktok: "var(--tiktok)",
        x: "var(--x)",
        youtube: "var(--youtube)",
      },
      backgroundImage: {
        "cabecera-home": "url('static/img/cabecera.jpg')",
        instagram: "var(--instagram)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
