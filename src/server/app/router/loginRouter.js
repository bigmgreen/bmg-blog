const express = require('express');
const router = express.Router();
let Login = require('../interface/loginInterFace');

router.post('/login', function (req, res) {
    Login.getUser(req.body, (err, HAS_USER, _user)=> {
        "use strict";

        if (err) {
            res.json({
               code:0,
                error:'服务器正在维护...'
            });
        }

        if (HAS_USER) {
            req.session[`user_${_user.userId}`] = _user.userId;
            res.json({code: 1});
        } else {
            res.json({
                code: 0,
                error: '用户名或者密码错误'
            });
        }
    });
});

router.get('/exit', function (req, res) {
    //TODO 不确定req.session怎么删除比较好
    //delete req.session[`user_${_user.userId}`]
    res.json({code: 1});
});

module.exports = router;