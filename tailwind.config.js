/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundColor: {
        "dark-mode": "#000000", // Custom dark mode background
        "light-mode": "#ffffff", // Custom light mode background
      },
    },
  },
  plugins: [],
};
