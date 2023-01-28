/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#31C3BD',
        'light-blue-hover': '#65E9E4',
        'light-yellow': '#F2B137',
        'light-yellow-hover': '#FFC860',
        'dark-navy': '#1A2A33',
        'semi-dark-navy': '#1F3641',
        silver: '#A8BFC9',
        'silver-hover': '#DBE8ED',
        dark: 'rgba(0, 0, 0, 0.5)'
      },
      boxShadow: {
        yellow: 'inset 0px -8px 0px #CC8B13',
        blue: 'inset 0px -8px 0px #118C87',
        'dark-blue': 'inset 0px -4px 0px #10212A',
        gray: 'inset 0px -4px 0px #6B8997',
        cell: ' inset 0px -8px 0px #10212A'
      }
    }
  },
  plugins: []
}
