const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    watchContentBase: true,
    liveReload: true,
    port: 3000,
  },
  target: 'web',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
};
