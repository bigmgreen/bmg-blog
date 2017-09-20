const express = require('express');
const router = express.Router();
const Utils = require('./utils/utils');
const loginRouter = require('./_router/loginRouter');

/**
 * 检查登录状态
 */
router.use('/api/*', (req, res, next)=> {
    if (Utils.isLogin(req)) {
        next();
    } else {
        res.json({
            code: -1,
            msg: '未登录'
        })
    }
});

/**
 * 简单打印访问时间
 */
router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use(loginRouter);

router.get('/exit', function (req, res) {
    Utils.logout(req, res);
    res.json({code: 1});
});

module.exports = router;