module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      keyframes: {
        swipeUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-8px)', opacity: '0' },
        },
      },
      animation: {
        swipeUp: 'swipeUp 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}