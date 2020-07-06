const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const PUBLIC_PATH = 'https://alvineandersson.se/';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js',
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader"
        }, 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|webp)$/,
        use: [
					{
	          loader: 'file-loader',
						options: {
							name: '[name].[ext]',
              esModule: false
						},
					},
        ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin('style.bundle.[hash].css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/robots.txt', to: 'robots.txt'},
        { from: 'src/site.webmanifest', to: 'site.webmanifest'},
        { from: 'src/browserconfig.xml', to: 'browserconfig.xml'},
        { from: 'src/android-chrome-192x192.png', to: 'android-chrome-192x192.png'},
        { from: 'src/android-chrome-512x512.png', to: 'android-chrome-512x512.png'},
        { from: 'src/apple-touch-icon.png', to: 'apple-touch-icon.png'},
        { from: 'src/favicon-16x16.png', to: 'favicon-16x16.png'},
        { from: 'src/favicon-32x32.png', to: 'favicon-32x32.png'},
        { from: 'src/favicon.ico', to: 'favicon.ico'},
        { from: 'src/mstile-150x150.png', to: 'mstile-150x150.png'},
        { from: 'src/safari-pinned-tab.svg', to: 'safari-pinned-tab.svg'}
      ]
    })
  ],
  resolve: {
    extensions: ['.js','.jsx'],
  },
};
