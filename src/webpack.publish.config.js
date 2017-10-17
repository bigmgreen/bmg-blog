const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const C_PATH = path.resolve(ROOT_PATH, 'publish');
const BUILD_PATH = path.resolve(C_PATH, 'dist');

module.exports = {
    entry: path.resolve(C_PATH, 'mgt.js'),
    output: {
        path: BUILD_PATH,
        filename: 'mgt.js'
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: C_PATH,
                query: {
                    "presets": ["es2015", "flow-vue", "stage-0", "stage-2"],
                    "plugins": ["transform-vue-jsx"],
                    "comments": false,
                    "env": {
                        "production": {
                            "plugins": [
                                ["transform-runtime", {"polyfill": false, "regenerator": false}]
                            ]
                        }
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: C_PATH
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: path.resolve(BUILD_PATH, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        contentBase: BUILD_PATH,
        openPage: 'index.html',
        port: 8082,
        hot: true,  // 让 dev-server 开启 HMR
        open: true
    }
};
