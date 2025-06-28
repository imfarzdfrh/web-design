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
        primary: '#15616d',
        secondry: '#d1495b',
        danger: '#e71d36',
        success: '#38b000',
        warning: '#ffba08',
        darkBackground: '#121420',
        lightBackground: '#f8f9fa',
        darkText: '#212529',
        lightText: '#fdfffc'
      }
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #005C97, #363795)',
      'gradiant-success': 'linear-gradient(to right , #11998e,#38ef7d)'
    }
  },
  plugins: []
}
