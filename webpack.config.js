const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'aud/',
                    publicPath: 'aud/',
                },
            },
            {
                test: /\.(png|jpe?g|gif|mp4|mp3|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                    outputPath: 'assets/',
                    publicPath: 'assets/',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};
