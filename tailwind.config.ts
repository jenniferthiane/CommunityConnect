/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#28a745',
        secondary: '#6c757d',
        discord: '#5865F2',
        dark: '#111111',
      },
    },
  },
  plugins: [],
};
