const webpack = require ('webpack')
const { resolve } = require('path')

module.exports = {
  entry: [
    resolve(__dirname, "src") + "/index.js"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  }
}
