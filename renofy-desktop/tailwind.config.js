/* eslint-disable global-require */
module.exports = {
  purge: ['./src/renderer/**/*.{ts,tsx}', './src/renderer/index.ejs'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
