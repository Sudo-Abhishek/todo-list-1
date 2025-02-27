const { default: merge } = require("webpack-merge");
const common = require('../config/webpack.common');
const path = require("path");


module.exports = merge(common,{
    mode: "development",
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
})