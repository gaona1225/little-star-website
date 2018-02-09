var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = express();

/*new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(5000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listen at localhost:5000');
});*/

var compiler = webpack(config);

// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
});

app.use(devMiddleware)

// 路由
var engines = require('consolidate');
// 设置引擎解析html
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/index', function (req, res) {
  res.render('views/index.html');
});

app.get('/list', function (req, res) {
  res.render('views/list.html');
});

app.get('/about', function (req, res) {
  res.render('views/about.html');
});

app.get('/getRequest', function (req, res) {
  res.render('views/data/getRequest.html');
});

module.exports = app.listen(5000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:5000\n')
})