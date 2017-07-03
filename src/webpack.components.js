const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const C_PATH = path.resolve(ROOT_PATH, 'components');
const LIB_PATH = path.resolve(C_PATH, 'lib');
const BUILD_PATH = path.resolve(C_PATH, 'dist');

module.exports = {
    entry: {
        button: path.resolve(C_PATH, LIB_PATH, 'button/button.jsx'),
        example: path.resolve(C_PATH, 'example.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name][hash:5].js'
    },
    resolve: {
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
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '组件展示列表',
            filename: 'example.html',
            template: path.resolve(C_PATH, 'example.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeAttributeQuotes: true
            }
        })
    ],
    devServer: {
        contentBase: [path.join(BUILD_PATH, "dist"), path.resolve(ROOT_PATH, 'node_modules')],
        open: true,
        hot: true
    }
};
