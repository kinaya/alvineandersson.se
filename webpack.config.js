const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/'
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
        test: /\.(png|jpg|svg)$/,
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('style.bundle.[hash].css')
  ],
  resolve: {
    extensions: ['.js','.jsx'],
  },
};
