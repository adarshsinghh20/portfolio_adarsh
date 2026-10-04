/** @type {import('tailwindcss').Config} */
export default {
  // Class on <html> — pair with html.dark CSS variables + dark: utilities in JSX
  darkMode: ['selector', '.dark'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f4f6f8',
          100: '#e8ecf0',
          200: '#c5ced8',
          300: '#9aa8b8',
          400: '#6b7d92',
          500: '#4d6178',
          600: '#3d4d60',
          700: '#2f3b4a',
          800: '#1e2836',
          900: '#0f1419',
          950: '#080b0f',
        },
        accent: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0f766e',
        },
      },
    },
  },
  plugins: [],
}
