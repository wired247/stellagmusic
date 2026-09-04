/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fbf8f4',
        blush: '#f7e9e4',
        coral: '#dc685b',
        ink: '#252321',
      },
      fontFamily: {
        display: ['"DM Sans"', 'Arial', 'sans-serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(37, 35, 33, 0.08)',
      },
    },
  },
  plugins: [],
}
