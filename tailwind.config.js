module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
