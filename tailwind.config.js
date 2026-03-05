/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'serif': ['DM Serif Display', 'serif'],
      },
      colors: {
        cream: '#F5F0E8',
        ink: '#1A1714',
        terracotta: '#C4622D',
        sage: '#7A8C6E',
        'custom-slate': '#5C7A8C',
        brown: '#8B7355',
        'warm-gray': '#8C8479',
        'card-bg': '#EEEAE0',
        border: '#D4CFC4',
        'border-light': '#E4DFD4',
      },
    },
  },
  plugins: [],
}
