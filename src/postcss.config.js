const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss'),
    ...(process.env.NODE_ENV === "production" ? [cssnano] : [])
  ]
};
