const webpack = require('webpack');

class MyProvidePlugin {
  apply(compiler) {
    new webpack.ProvidePlugin({
      styled: ['styled-components', 'default'],
      empty: ['@pdg/compare', 'empty'],
      notEmpty: ['@pdg/compare', 'notEmpty'],
      lv: ['@pdg/data', 'lv'],
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;
