/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',      // Jet black
        secondary: '#1a1a1a',    // Charcoal gray
        accent: '#facc15',       // Yellow glow
      },

      boxShadow: {
        neon: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(85, 81, 227, 0.6)',
        glow: '0 0 15px rgba(255, 255, 0, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)',
      },

      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',      // 👈 new float animation
        'glow': 'glow 3s ease-in-out infinite',        // 👈 optional glow animation
      },

      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'slide-up': {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
};
