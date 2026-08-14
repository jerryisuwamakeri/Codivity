/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#e0ebff',
          200: '#c7d9ff',
          300: '#a3bfff',
          400: '#7398ff',
          500: '#4a72fb',
          600: '#2f5aef',
          700: '#2445d1',
          800: '#2138a8',
          900: '#213485',
        },
        ink: {
          50: '#f3f5fb',
          100: '#e6e9f4',
          200: '#c6cce3',
          300: '#9aa5c8',
          400: '#6a76a6',
          500: '#4b5687',
          600: '#39416a',
          700: '#2b3153',
          800: '#1b1f38',
          900: '#0d1024',
          950: '#080a19',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(13, 16, 36, 0.04), 0 8px 24px -8px rgba(13, 16, 36, 0.10)',
        panel: '0 30px 60px -20px rgba(13, 16, 36, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
