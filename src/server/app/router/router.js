const express = require('express');
const router = express.Router();
const Utils = require('./utils/utils');
const loginRouter = require('./_router/loginRouter');
const findPwdRouter = require('./_router/findPwdRouter');
const indexRouter = require('./_router/indexRouter');
const registerRouter = require('./_router/registerRouter');
const detailRouter = require('./_router/detailRouter');

// 简单打印访问时间
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/exit', function (req, res) {
    Utils.logout(req, res);
    res.json({code: 1});
});

router.get('/pageInfo', function (req, res) {

    Utils.getNav((err, nav)=> {
        res.json({
            "header": {
                "nav": nav
            }
        });
    });

});

router.use(loginRouter);
router.use(registerRouter);
router.use(findPwdRouter);
router.use(indexRouter);
router.use(detailRouter);

module.exports = router;