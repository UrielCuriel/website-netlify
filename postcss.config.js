const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})
const cssnano = require('cssnano')
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-scrollbar'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
}
