module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "index.js"
    },
    module: {
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
    }
};
