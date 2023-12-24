/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],

  theme: {
    screens: {
      "mobile": "375px",
      "wallpaper-breakpoint": "750px",
      "desktop": "1440px",
    },
    colors: {
      "primary-blue": "	#2d314d",
      "button-green": "	#31d35c",
      "button-cyan": "#2bb7da",
      "shadow-blue": "#9698a6",
      "mid-section-bg": "#f3f4f6",
      "bottom-section-bg": "#fafafa",
      "white": "#ffffff",
    },
    fontFamily: { "sans": ['Public Sans', 'sans-serif'] },
    fontSize: {
      "first-header": "2rem",
      "second-header": "1.75rem",
      "secondary-header": "1.5rem",
      "normal-text": "1rem",
      "quotes": "0.8125rem",
    },
    extend: {},
  },
  plugins: [],
}
