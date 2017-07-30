const express = require('express');
const app = express();
const router = require('./router/router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var uuidV1 = require('uuid/v1');//TODO 登录控制

app.use(bodyParser());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10 //过期时间设置(单位毫秒)
    }
}));

/**
 * 防御xss
 */
app.use('*', function (req, res, next) {
    res.header("X-XSS-Protection", "1; mode=block");
    res.header("X-Frame-Options", "deny");
    res.header("X-Content-Type-Options", "nosniff");
    res.header("Content-Security-Policy", "default-src 'self' 'unsafe-eval'");
    next();
});

/**
 * 防御csrf
 */
app.use(['/add', '/del', '/update', '/recovery'], function (req, res, next) {
    if (req.body.token == req.session.uuid) {
        next();
    } else {
        res.send('可疑操作，服务器拒绝响应！');
    }
});

app.use('/api', router);

module.exports = app;