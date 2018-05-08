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
    extensions: ['.js', '.js']
  }
}
