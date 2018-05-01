'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/app.jsx',
  plugins: [new HtmlWebpackPlugin({template: __dirname + '/src/index.html'})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: [
          'style-loader', 'css-loader', 'sass-loader'
        ]}
    ]
  }
};
module.exports = config;