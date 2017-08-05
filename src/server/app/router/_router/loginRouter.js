const express = require('express');
const router = express.Router();
let Login = require('../../interface/loginInterFace');
const uuidV1 = require('uuid/v1');

const _setRemember7Day = (remember7Day, uuId, res)=> {

    if (remember7Day) {
        res.cookie('session_id', uuId,
            {path: '/', expires: new Date(Date.now() + 604800000), httpOnly: true});
    } else {
        res.cookie('session_id', uuId,
            {path: '/', expires: new Date(Date.now() + 1800000), httpOnly: true});
    }

};

router.post('/login', function (req, res) {
    Login.getUser(req.body, (err, HAS_USER, _user)=> {
        "use strict";

        if (err) {
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
        }

        if (HAS_USER) {
            let uuId = uuidV1();

            const _cookie = req.cookies['session_id'];
            if (_cookie) {
                delete req.session[`user_${_cookie}`];
            }

            req.session[`user_${uuId}`] = _user.userId;
            _setRemember7Day(req.body.remember7Day, uuId, res);

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
    //删除session，cookie
    delete req.session[`user_${req.cookies['session_id']}`];
    res.clearCookie('session_id');
    res.json({code: 1});
});

module.exports = router;