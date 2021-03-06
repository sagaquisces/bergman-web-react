const webpack = require ('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  // entry: './src/playground/hoc.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
        }
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', {"modules": false}],
            'react', 'stage-2'
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|woff2|eot)$/,
        use: [
          {loader: 'url-loader'}
        ]
      }
    ]
  }
}
