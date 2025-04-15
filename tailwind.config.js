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
        darkBackground: '#121420',
        lightBackground: '#f8f9fa',
        darkText: '#212529',
        lightText: '#fdfffc'
      }
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #005C97, #363795)'
    }
  },
  plugins: []
}
