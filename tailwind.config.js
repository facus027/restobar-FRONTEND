/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet:"#3B225E",
         fuchsia: "#FF00FF",       // Rosa intenso
          magenta: "#FF0090",       // Rosa brillante
          lightPink: "#FFC0CB",     // Rosa claro
          cherryRed: "#DE3163",     // Rojo cereza
          dark: "#1E1E1E",          // Fondo oscuro posible
          white: "#FFFFFF",
      },
      fontFamily: {
          sans: ["'Montserrat'", "sans-serif"], // Fuente principal
        poppins: ["'Poppins'", "sans-serif"], // Alternativa si lo prefieres
  },
      screens: {
        'xs': '480px',  // Nuevo punto de interrupción
      },
      backgroundImage: {
        'hero-eventos': "url('/bg/seccion1-eventos.png')",
        'hero-nosotros': "url('/bg/seccion3-nosotros.png')",
      },
    },
  },
  plugins: [],
}

