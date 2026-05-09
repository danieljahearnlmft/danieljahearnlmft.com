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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
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
