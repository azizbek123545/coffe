/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#483224',
          900: '#362517',
        },
      },
    },
  },
  plugins: [],
};