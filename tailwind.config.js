/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#15616d',
        danger: '#e71d36',
        success: '#38b000',
        warning: '#ffba08',
        darkBackground: '#0d1b2a',
        lightBackground: '#f8f9fa',
        darkText: '#fdfffc',
        lightText: '#212529'
      }
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #005C97, #363795)'
    }
  },
  plugins: []
}
