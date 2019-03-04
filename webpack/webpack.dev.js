const jsLoaders = require('./loaders/js-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [path.join(__dirname, '../src/app.jsx')],
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '/src': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        enforce: 'pre',
        use: jsLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('index.html')
    })
  ],
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    publicPath: '/',
    contentBase: path.resolve('./src'),
    historyApiFallback: true
  }
};
