const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: '/static/ts/login.ts',
    output: {
        filename: 'login.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 5500,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Login page',
            template: 'pages/login/login.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "static/img", to: "img"}]
        }),
    ],
    devtool: 'source-map'
}