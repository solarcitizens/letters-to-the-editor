module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/../backend/public/javascript',
    publicPath: 'javascript',
    filename: 'ltte.bundle.js',
  },
  preLoaders: [
     {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|dist/
      }
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
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
  devServer: { 'hide-modules': true },
  eslint: {
    configFile: '.eslintrc.yml'
  }
};
