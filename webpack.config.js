module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'client.js',
    path: `${__dirname}/public/js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['preact', 'es2015']
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
}