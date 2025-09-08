/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d8ff',
          300: '#a4baff',
          400: '#8096ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e3a8a',
          950: '#1e2a78',
        },
        gold: {
          50: '#fefbea',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};