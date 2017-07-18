const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const C_PATH = path.resolve(ROOT_PATH, 'client');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const BUILD_PATH = path.resolve(C_PATH, 'dist');

module.exports = {
    entry: {
        login: path.resolve(C_PATH, 'view', 'login.jsx')
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
                /*
                 * include 这个属性是用来划定需要编译的范围
                 * 2017-7-18就是忘记加新路径
                 * 结果一直报错：
                 *      You may need an appropriate loader to handle this file type.
                 */
                include: [C_PATH, path.resolve(ROOT_PATH, 'components')],
                exclude: NODE_MODULES_PATH
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
            title: '登录',
            filename: 'login.html'
        })
    ],
    devServer: {
        inline: true,
        contentBase: BUILD_PATH,
        openPage: 'login.html',
        open: true
    }
};
