const HtmlPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: `${__dirname}/src/App.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].js'
  },
  plugins : [ 
    new HtmlPlugin( { template: `${__dirname}/src/index.html`})
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;