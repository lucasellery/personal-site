module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#837E9F',
          500: '#302F3D',
          700: '#22212C',
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
