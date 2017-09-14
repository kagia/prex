const nodeExternals = require('webpack-node-externals')

const baseConfig = {
  output: {
    filename: '[name].js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      }
    ]
  }
}

const clientConfig = Object.assign({
  entry: {
    'public/js/client': './src/client.js'
  }
}, baseConfig)

const serverConfig = Object.assign({
  entry: {
    'bin/server': './src/server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: true
  }
}, baseConfig)

module.exports = [clientConfig, serverConfig]
