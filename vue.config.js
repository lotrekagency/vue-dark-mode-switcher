const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "dist/demo"),
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-dark-mode-switcher/'
  : '/'
}