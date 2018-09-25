const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.join(__dirname, '../'),
  cache: true,
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  target: 'web',
  entry: {
    client: [
      'webpack-hot-middleware/client?timeout=2000&overlay=false&reload=true',
      './src/index'
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/public/static/',
    libraryTarget: 'var',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    modules: [path.resolve(__dirname, './src'), './node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        include: path.resolve('./src'),
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader?name=fonts/[name].[ext]"
      }
    ]
  },
}