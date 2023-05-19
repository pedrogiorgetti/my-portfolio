/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: '#09090A',
        blue: {
          secondary: '#115d96',
          primary: '#094e82',
        },
        white: '#FFFFFF',
        gray: {
          text: '#555555',
          textLight: '#666666',
          dark: '#2b2a2a',
        },
      },
    },
  },
  plugins: [],
};
