/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c0c0ff',
          300: '#a0a0ff',
          400: '#8080ff',
          500: '#6C63FF',
          600: '#5a52e0',
          700: '#4842c0',
          800: '#3631a0',
          900: '#242180',
        },
        accent: {
          50: '#e0faff',
          100: '#b3f5ff',
          200: '#80eeff',
          300: '#4de8ff',
          400: '#1ae2ff',
          500: '#00D1FF',
          600: '#00a8cc',
          700: '#008099',
          800: '#005766',
          900: '#002d33',
        },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-x': 'scrollX 35s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
