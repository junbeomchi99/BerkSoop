/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'berkeley-blue': '#003262',
      'berkeley-yellow': '#FDB515',
      'berkeley-skyblue': '#3B7EA1',
      'slate': '#f8fafc',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    fontSize: {
      h1: '40px',
      h2: '24px',
      h3: '20px',
      h4: '18px',
      lg: '14px',
      base: '12px',
      sm: '10px'
    },
    borderRadius: {
      DEFAULT: '6px'
    },
    opacity: {
      '2': '0.02',
      '10': '0,1',
      '20': '0.2',
      '60': '0.6',
      '90': '0.9'
    },
    extend: {},
  },
  plugins: [],
}
