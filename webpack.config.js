// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { main: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.ejs',
      filename: 'index.html',
    })
  ]
};
