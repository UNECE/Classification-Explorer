var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssGradientFixer = require('postcss-gradientfixer')
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/', //inline mode for
                                                        //webpack-dev-server
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/js/main.js'
  ],
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      //{ test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader?sourceMap' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //loaders: ['react-hot', 'babel']
        loader: ['babel'],
        query: {
          'presets': ['react', 'es2015'],
          'plugins': ['transform-object-rest-spread']
        }
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer({ browsers: ['> 5%'] }), postcssGradientFixer]
  },
  plugins: [
    new TransferWebpackPlugin([
        { from: 'img', to: 'img' }
    ], path.join(__dirname, 'src'))
  ],  
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/classification.js'
  }
}
