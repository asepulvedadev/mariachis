/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mariachi: {
          primary: '#E63946',    // Rojo mexicano
          secondary: '#1D3557',  // Azul oscuro
          accent: '#F8C630',     // Dorado/amarillo
          light: '#F1FAEE',      // Blanco hueso
          dark: '#2B2D42',       // Casi negro
        },
        'mariachi-green': '#006341', // Verde mexicano
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'mariachi-pattern': "url('/src/assets/pattern.svg')",
      },
    },
  },
  plugins: [],
} 