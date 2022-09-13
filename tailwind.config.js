/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        typo: '#F7F9FE',
        back: '#EFF4FF',
        texture: '#A3B2D8',
        primary: '#0C145A',
        tertiary: '#F7A066',
        secondary: '#4658C4',
      },
    },
  },
  plugins: [],
};
