/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': {
            transform: 'translate(-120%, 120%) rotate(-35deg)',
          },
          '100%': {
            transform: 'translate(120%, -120%) rotate(-35deg)',
          },
        },
      },
      animation: {
        shine: 'shine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};