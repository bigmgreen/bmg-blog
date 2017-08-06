const express = require('express');
const router = express.Router();
const uuidV1 = require('uuid/v1');
const Utils = require('../utils/utils');
let Login = require('../../interface/loginInterFace');

router.post('/login', function (req, res) {
    Login.getUser(req.body, (err, HAS_USER, user)=> {
        "use strict";

        if (err) {
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }

        if (HAS_USER) {
            Utils.setLogin(req.body.remember7Day, uuidV1(), user.userId, req, res);
            res.json({code: 1});
        } else {
            res.json({
                code: 0,
                error: '用户名或者密码错误'
            });
        }
    });
});

module.exports = router;