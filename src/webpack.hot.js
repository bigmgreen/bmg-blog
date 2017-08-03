const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const C_PATH = path.resolve(ROOT_PATH, 'client');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const BUILD_PATH = path.resolve(C_PATH, 'dist');


//引入glob
const glob = require('glob')
//entries函数--自动检索js文件
const entries = (function () {
    const jsDir = path.resolve(C_PATH, 'view', '*.{js,jsx}');
    var entryFiles = glob.sync(jsDir)
    var map = {};

    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
})();

//根据js文件生产html文件
const plugins = Object.keys(entries).map((name) => {
    "use strict";

    return new HtmlWebpackPlugin({
        title: name,
        chunks: [name],
        filename: path.resolve(BUILD_PATH, `${name}.html`),
    });
});
plugins.push(new webpack.HotModuleReplacementPlugin()  /* 让 webpack 启动全局 HMR */);

module.exports = {
    entry: entries,
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
    plugins: plugins,
    devServer: {
        inline: true,
        contentBase: BUILD_PATH,
        openPage: 'index.html',
        hot: true,  // 让 dev-server 开启 HMR
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    }
};
