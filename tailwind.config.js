/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        parch: {
          50:  '#FBF9F5',
          100: '#F4F0EA',
          200: '#EAE4DA',
          300: '#D9D1C3',
          400: '#C9A96A',
          500: '#3F6E4B',
          600: '#46503F',
          700: '#3A4636',
          800: '#24372A',
          900: '#1C2B1E',
        },
        cream: {
          50:  '#fdfbf7',
          100: '#faf7f2',
          200: '#f0ebe0',
          300: '#e0d5c0',
          400: '#c8a87a',
          500: '#a07850',
          600: '#8a6540',
          700: '#6b5035',
          800: '#4d3520',
          900: '#2d1f0e',
        },
      },
    },
  },
  plugins: [],
}
