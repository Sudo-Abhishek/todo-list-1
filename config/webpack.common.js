const path = require("path");
const loader = require("sass-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],  // Make sure Webpack resolves .tsx, .ts, and .js files
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],

                    }
                }
            },
            {
                test: /\.svg$/,
                use: ['svg-url-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public', 'index.html'),  // Ensure index.html exists in 'public'
        }),
    ],


}