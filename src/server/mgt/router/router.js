const express = require('express');
const router = express.Router();
const Utils = require('./utils/utils');
const loginRouter = require('./_router/loginRouter');
const userRouter = require('./_router/userRouter');
const indexRouter = require('./_router/indexRouter');
const visitorRouter = require('./_router/visitorRouter');
const markRouter = require('./_router/markRouter');
const fromRouter = require('./_router/fromRouter');

/**
 * 简单打印访问时间
 */
router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/exit', function (req, res) {
    Utils.logout(req, res);
    res.json({code: 1});
});

/**
 * 检查登录状态
 */
router.use('/api/*', (req, res, next)=> {
    if (Utils.isLogin(req) || req.method.toUpperCase() == 'OPTIONS') {
        next();
    } else {
        res.json({
            code: -1,
            msg: '未登录'
        });
    }
});

router.use(loginRouter);
router.use('/api', userRouter);
router.use('/api', indexRouter);
router.use('/api', visitorRouter);
router.use('/api', markRouter);
router.use('/api', fromRouter);

module.exports = router;