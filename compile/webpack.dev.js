const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        port: 7777,
        host: '0.0.0.0',
        hot: true,
        compress: true,
    },
    module: {
        rules: [{
            test: /\.(js|vue|ts|tsx)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre',
        }],
    },
});
