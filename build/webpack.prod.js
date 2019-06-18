const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base.js/index.js');

const prodConfig = {
  mode: "production",
  // devtool: 'cheap-module-eval-source-map',  // development
  devtool: 'cheap-module-source-map',   // production
  // devServer: {
  //   contentBase: "./dist",
  //   open: true,
  //   hot: true,
  //   hotOnly: true
  // },
  // optimization: {
  //   usedExports: true
  // },
};

module.exports = merge(baseConfig, prodConfig);
