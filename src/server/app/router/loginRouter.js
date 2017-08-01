const express = require('express');
const router = express.Router();
let Login = require('../interface/loginInterFace');

router.post('/login', function (req, res) {
    const HAS_USER = Login.getUser(req.body);
    if (HAS_USER) {
        res.json({code: 1});
    } else {
        res.json({
            code: 0,
            error: '用户名或者密码错误'
        });
    }
});

module.exports = router;