/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{ts,js}',
    './nuxt.config.{ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6558e8',
        secondry: '#e35f88',
        danger: '#e34f65',
        success: '#22b38a',
        warning: '#f1ac3d',
        darkBackground: '#090d19',
        lightBackground: '#f6f7fb',
        darkText: '#171c31',
        lightText: '#edf0ff'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(120deg,#7760ef,#5d7df4)',
        'gradiant-success': 'linear-gradient(120deg,#18ad89,#51d5b8)'
      }
    }
  },
  plugins: []
}
