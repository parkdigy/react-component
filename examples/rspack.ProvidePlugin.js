const { rspack } = require('@rspack/core');

class MyProvidePlugin {
  apply(compiler) {
    new rspack.ProvidePlugin({
      styled: ['styled-components', 'default'],
      empty: ['@pdg/compare', 'empty'],
      notEmpty: ['@pdg/compare', 'notEmpty'],
      lv: ['@pdg/data', 'lv'],
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;
