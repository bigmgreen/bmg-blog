const express = require('express');
const app = express();
const router = require('./router/router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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
 * 允许跨域的域名
 * @type {string[]}
 */
const origins = [
    'http://127.0.0.1:8082',
    'http://localhost:8082'
];

/**
 * 防御xss
 */
app.use('*', function (req, res, next) {
    res.header("X-XSS-Protection", "1; mode=block");
    res.header("X-Frame-Options", "deny");
    res.header("X-Content-Type-Options", "nosniff");
    res.header("Content-Security-Policy", "default-src 'self' 'unsafe-eval'");
    res.header("Content-Type", "application/json;charset=utf-8");

    if (origins.indexOf(req.headers.origin) > -1) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie");
        res.header("Access-Control-Allow-Credentials", true);
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }

    next();
});

app.use(router);

module.exports = app;