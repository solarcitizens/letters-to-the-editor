var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'src/testIndex.js'
    ],
    preprocessors: {
      'src/testIndex.js': ['webpack', 'sourcemap']
    },
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: webpackConfig.module
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      quiet: true
    }
  });
};
