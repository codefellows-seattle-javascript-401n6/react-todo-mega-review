'use strict';

const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/app.jsx',
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;
