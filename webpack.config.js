/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'App.jsx'),
  output: {
    path: dir_build,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dir_build,
  },
  module: {
    loaders: [
      {
        test: dir_js,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dir_html }, // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
