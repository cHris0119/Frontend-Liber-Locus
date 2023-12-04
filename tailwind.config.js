/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './src/contador/pagesC/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'system-ui', 'sans-serif']
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
