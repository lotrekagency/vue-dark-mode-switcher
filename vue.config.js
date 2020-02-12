const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  outputDir: path.resolve(__dirname, "dist/demo"),
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-dark-mode-switcher/'
  : '/'
}