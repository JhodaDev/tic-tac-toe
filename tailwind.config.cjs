/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: '#192A32',
        cells: '#1F3540',
        modal: 'rgba(13, 21, 25, 0.25)',
        primaryButton: '#A8BFC9',
        yellow: '#F2B137',
        select: '#A8BFC9',
        blue: '#31C3BD'
      },
      textColor: {
        yellow: '#F2B137',
        gray: '#A8BFC9',
        blue: '#31C3BD'
      }
    }
  },
  plugins: []
}
