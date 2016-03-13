var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|dist/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new FlowStatusWebpackPlugin()
  ],
  devServer: { 'hide-modules': true },
  eslint: {
    configFile: '.eslintrc.yml'
  }
};
