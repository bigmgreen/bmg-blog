const express = require('express');
const router = express.Router();
const uuidV1 = require('uuid/v1');
const Utils = require('../utils/utils');
let Register = require('../../interface/registerInterFace');

/**
 * 发送图片验证码
 */
router.get('/registerVerifyCode', function (req, res) {
    const verifyCode = Utils.getVerifyCode();

    Register.saveVerifyCode(verifyCode.code, (err)=> {

        if (err) {
            res.end('error');
            return;
        }

        let _img = verifyCode.img;
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(_img);
    });

});

/**
 * 注册操作
 */
router.post('/register', function (req, res) {

    const {inviteCode, userName, email, verifyCode} = req.body;

    Register.checkVerifyCode(verifyCode, (err, IS_VERIFY_CODE_RIGHT)=> {
        if (err) {
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }

        if (IS_VERIFY_CODE_RIGHT) {
            Register.checkInviteCode(inviteCode, (err, IS_INVITE_CODE_RIGHT)=> {
                if (IS_INVITE_CODE_RIGHT) {
                    Register.checkUserByName(userName, (err, HAS_NAME_REGISTER)=> {

                        if (HAS_NAME_REGISTER) {

                            Register.checkUserByEmail(email, (err, HAS_EMAIL_REGISTER)=> {
                                if (HAS_EMAIL_REGISTER) {
                                    Register.register(req.body, (err,user)=> {
                                        if (err) {
                                            res.json({
                                                code: 0,
                                                error: '服务器正在维护...'
                                            });
                                            return;
                                        }

                                        Utils.setLogin(req.body.remember7Day, uuidV1(), user.userId, req, res);

                                        res.json({code: 1});
                                    });
                                } else {
                                    res.json({
                                        code: 0,
                                        emailError: '邮箱已注册'
                                    });
                                }
                            });

                        } else {
                            res.json({
                                code: 0,
                                userNameError: '用户名已注册'
                            });
                        }

                    });
                } else {
                    res.json({
                        code: 0,
                        inviteCodeError: '邀请码不正确或者已被使用'
                    });
                }
            });
        } else {
            res.json({
                code: 0,
                verifyCodeError: '验证码错误'
            });
        }

    });
});


module.exports = router;