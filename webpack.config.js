var path = require('path');
var webpack = require('webpack');
var HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './app/common/js/main.js',
        index: './app/views/index/index.js',
        about: './app/views/about/about.js',
        list: './app/views/list/list.js'
    },
    output: {
        path: path.join(__dirname, 'views'),
        publicPath: '/views/',
        filename: 'static/js/[name]-[chunkhash].js'
    },
    plugins: [
        new HtmlWepackPlugin({
            template: './app/views/index/index.html',
            inject: 'body',
            filename: 'views/index.html',
            chunks: ['main', 'index'],
            chunksSortMode: 'manual' // 页面中引入js顺序按照chunks中配置的顺序
        }),
        new HtmlWepackPlugin({
            template: './app/views/about/about.html',
            inject: 'body',
            filename: 'views/about.html',
            chunks: ['main', 'about'],
            chunksSortMode: 'manual'
        }),
        new HtmlWepackPlugin({
            template: './app/views/list/list.html',
            inject: 'body',
            filename: 'views/list.html',
            chunks: ['main', 'list'],
            chunksSortMode: 'manual'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                },
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}