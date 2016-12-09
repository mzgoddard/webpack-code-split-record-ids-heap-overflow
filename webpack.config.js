var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    main: './src',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: 'dist',
    filename: '[name]-[hash].js',
  },
  // Save and use module and chunk id records from previous runs.
  recordsPath: __dirname + '/tmp/records.json',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve('node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new (require('code-split-component/webpack'))(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: '[name]-[hash].js'}),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        context: __dirname,
        babel: {
          presets: [['latest', {es2015: {modules: false}}], 'react'],
          plugins: ['code-split-component/babel'],
        },
      },
    }),
    new (require('html-webpack-plugin'))(),
  ],
};
