const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config');
const babelrc = require('./package.json').babel;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname),
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    setup(app) {
      app.use(config);
    },
  },
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  entry: {
    main: ['babel-polyfill', './src/index.tsx'],
  },
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelrc,
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=650000',
      },
    ],
  },
  optimization: {
    minimize: isProd,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
        },
      },
    },
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: false,
      chunksSortMode: 'dependency',
      favicon: 'src/assets/favicon.ico',
      template: 'src/index.html',
    }),
  ].concat(isProd ? [new UglifyJSPlugin({ sourceMap: true })] : []),
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
