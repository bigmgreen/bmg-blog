const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const C_PATH = path.resolve(ROOT_PATH, 'components');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const BUILD_PATH = path.resolve(C_PATH, 'dist');

module.exports = {
    entry: {
        example: path.resolve(C_PATH, 'example.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        modules: [NODE_MODULES_PATH],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: C_PATH,
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|git)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '组件展示列表',
            filename: 'example.html'
        })
    ],
    devServer: {
        inline:true,
        contentBase: BUILD_PATH,
        open: true
    }
};
