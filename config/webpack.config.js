const path = require("path");
const loader = require("sass-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
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
    devtool: "source-map", // For debugging
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        compress: true, // Enable gzip compression
        port: 3000, // The port the dev server will run on
        hot: true, // Enable hot module replacement (HMR)
        open: true, // Automatically open the browser when the server starts
        historyApiFallback: true, // For single-page apps (SPA) that use React Router
    },

}