/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'tetris-red': '#ff0000',
        'tetris-dark': '#1a0000',
        'tetris-green': '#00ff00',
        'tetris-blue': '#0066cc',
        'tetris-orange': '#ffaa00',
      },
      fontFamily: {
        'tetris': ['Arial', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideInUp 0.6s ease-out',
        'pulse-glow': 'glow 2s infinite',
      },
      keyframes: {
        slideInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' 
          },
        },
      },
    },
  },
  plugins: [],
}