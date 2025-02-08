const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // ✅ Import CopyWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for final build
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource', // ✅ Ensures Webpack handles assets
        generator: {
          filename: 'assets/[name][ext]', // ✅ Keeps the asset structure
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({ // ✅ Copy static assets
      patterns: [
        { from: 'src/assets', to: 'assets' }, // ✅ Copies everything in src/assets to dist/assets
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 9003,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.scss', '.pug'],
  },
};
