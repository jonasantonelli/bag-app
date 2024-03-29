const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    //TODO: remover
    mode: 'development',
    devtool: 'inline-source-map',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                    },
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'My Bag',
            template: './src/index.html'
        }),
    ],
};
