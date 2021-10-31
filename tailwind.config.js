module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#494848"
      }
    },
  },
  variants: {
    extend: {},
    colors: {
      gray: {
        dark :"#494848"
      }
    }
  },
  plugins: [],
}
