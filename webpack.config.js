const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
//  mode: 'development',
  entry: './src/index.js',
//  output: {
//    path: path.resolve(__dirname, 'dist'),
//    filename: 'bundle.js'
//  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
//      {
//        test: /\.css$/,
//        use: ["style-loader", "css-loader"]
//      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|jpg|svg|ico)$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['.js','.jsx'],
  },
};
