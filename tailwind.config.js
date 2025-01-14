/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        
        animation: {
          'bounce-effect': 'bounce-scale 0.6s ease-out', // Custom animation name
        },
        keyframes: {
          'bounce-scale': {
            '0%': { transform: 'scale(0)' },
            '50%': { transform: 'scale(1.1)' },
            '70%': { transform: 'scale(0.95)' },
            '100%': { transform: 'scale(1)' },
          },
      colors: {
        customGray: "#0e0e0e17", // Name it as you like
      },
      
    },}}
  },
  plugins: [],
}