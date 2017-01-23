const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
