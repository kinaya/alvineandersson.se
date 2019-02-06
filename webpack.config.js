const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/',
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|jpg|svg|webp)$/,
        use: [
					{
	          loader: 'file-loader',
						options: {
							name: '[name].[ext]',
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
    new WebpackCleanupPlugin({
      exclude: ["robots.txt","service-worker.js"],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('style.bundle.[hash].css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'Alvine Andersson',
      filename: 'service-worker.js',
      //staticFileGlobs: ['dist/**/*.{js,css}', '/'],
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      //maximumFileSizeToCacheInBytes: 5194304,
      //minify: true,
      navigateFallback: path.resolve(__dirname, 'dist') + 'index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new CopyWebpackPlugin([
      'pwa'
    ]),
/*    new ImageminWebpWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)/,
        options: {
          quality:  75
        }
      }],
      overrideExtension: false,
      detailedLogs: false,
      strict: true
    })*/
  ],
  resolve: {
    extensions: ['.js','.jsx'],
  },
};
