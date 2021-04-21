const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
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
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: false,
        watchContentBase: true,
        liveReload: true,
        port: 9000,
      },
      target: 'web',
    plugins: [new HtmlWebpackPlugin({template: "public/index.html"})],
    // plugins: [new BundleAnalyzerPlugin()],
};