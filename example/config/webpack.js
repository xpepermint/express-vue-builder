const {join} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({mode}) => ({
  target: mode === 'client' ? 'web' : 'node',
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              loader: `css-loader`
            })
          }
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  entry: [
    join(__dirname, '..', 'app', `${mode}-entry.js`)
  ],
  output: {
    path: join(__dirname, '..', '..', 'dist', mode),
    filename: `bundle.js?[hash]`,
    publicPath: '/',
    libraryTarget: mode === 'client' ? 'var' : 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': JSON.stringify(mode)
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin(`bundle.css?[hash]`),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
