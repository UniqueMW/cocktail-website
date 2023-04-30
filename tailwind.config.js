/** @type {import('tailwindcss').Config} */

// default tailwind themes
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '2xs': '280px',

      xs: '360px',

      ...defaultTheme.screens
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        background: '#ffebed',
        heading: '#3d3335',
        paragraph: '#89797a',
        nav: '#334954',
        action: '#f63959',
        alt: '#b75c6d'
      },
      fontFamily: {
        heading: ['var(--font-fraunces)'],
        paragraph: ['var(--font-dm-sans)']
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
