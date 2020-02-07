const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./config')

const devConfig = {
  entry: './src/guide/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"development"',
        },
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Web App',
      template: './src/guide/index.html',
    }),
  ],
  devServer: {
    port: 8090,
    historyApiFallback: true,
    contentBase: './src/public',
    hot: true,
  },
}

module.exports = {
  ...baseConfig,
  ...devConfig,
}
