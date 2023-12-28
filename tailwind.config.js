/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],

  theme: {
    screens: {
      "mobile": "375px",
      "wallpaper-breakpoint": "750px",
      "soft-cap": "1150px",
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

      "first-header": "var(--first-header-size)",
      "second-header": "var(--second-header-size)",
      "secondary-header": "var(--secondary-header-size)",
      "normal-text": "var(--normal-text-size)",
      "quotes": "0.8125rem",
    },
    extend: {},
  },
  plugins: [],
}
