/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(85 81 227)',
        secondary: '#2b2d77',
        accent: '#ff6bcb',
        glow: '#a8edea',
      },
      fontFamily: {
        'hero-font': ['Sriracha', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px #5551e3, 0 0 20px #5551e3',
        glow: '0 0 15px #a8edea',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}