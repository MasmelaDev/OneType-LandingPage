/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [
      'col-span-1', 'col-span-2', 'row-span-1','row-span-2'
    ],
  },
  theme: {
    extend: {
      colors:{
        OneTypeRed:"#e12a35",
        OneTypeBlue:"#27398F",
        OneTypeDark:"#151228",

      },
      screens: {
        'xs': '460px',
      },
      keyframes: {
        moveRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
      animation: {
        'move-right': 'moveRight .6s ease-in-out infinite alternate',
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(0, 0, 0, 0.7)'
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}