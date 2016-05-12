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
      module: webpackConfig.module,
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      quiet: true
    }
  });
};
