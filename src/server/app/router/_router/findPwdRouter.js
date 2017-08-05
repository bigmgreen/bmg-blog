const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const Utils = require('./../utils/utils');
let FindPwd = require('../../interface/findPwdInterFace');

// secure:true for port 465, secure:false for port 587
let transporter = nodeMailer.createTransport({
    host: 'smtp.163.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true,
    auth: {
        user: 'bigmgreen@163.com',
        pass: 'qsover2017'
    }
});

/**
 * 发送邮件
 */
router.post('/getEmailCode', (req, res)=> {
    "use strict";

    FindPwd.getUserByEmail(req.body.email, (err, HAS_USER, _user)=> {

        if (err) {
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
        }

        if (HAS_USER) {

            FindPwd.getEmailValidateCode(req.body.email, (err, code)=> {

                if (err) {
                    res.json({
                        code: 0,
                        error: '服务器正在维护...'
                    });
                    return;
                }

                let mailOptions = {
                    from: '"bmg:" <bigmgreen@163.com>',//发件人
                    to: req.body.email, // 收件人
                    subject: '找回密码', // 主题
                    text: `验证码是：${code}`, // 文本主题
                    html: `<h2>验证码是：${code}</h2>` // html body
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    res.json({
                        code: 1,
                        msg: '发送成功'
                    });
                    console.log('Message %s sent: %s', info.messageId, info.response);
                });
            });

        } else {
            res.json({
                code: 0,
                emailError: '此邮箱没有注册'
            });
        }

    });

});

/**
 * 发送图片验证码
 */
router.get('/findPwdVerifyCode', function (req, res) {
    const verifyCode = Utils.getVerifyCode();

    FindPwd.saveVerifyCode(verifyCode.code, (err)=> {

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
 * 找回操作
 */
router.post('/findPwd', function (req, res) {

    const {email, emailVerifyCode, pwd, userName, verifyCode} = req.body;

    FindPwd.checkVerifyCode(verifyCode, (err, IS_VERIFY_CODE_RIGHT)=> {
        if (err) {
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }

        if (IS_VERIFY_CODE_RIGHT) {
            FindPwd.checkUserByNameAndEmail(userName, (err, IS_NAME_RIGHT, user)=> {

                if (IS_NAME_RIGHT) {

                    if (email === user.email) {
                        FindPwd.checkEmailVerifyCode(email, emailVerifyCode, (err, IS_EMAIL_CODE_RIGHT)=> {
                            if (IS_EMAIL_CODE_RIGHT) {

                                FindPwd.findPwd(user.userId, pwd, (err)=> {
                                    if (err) {
                                        res.json({
                                            code: 0,
                                            error: '服务器正在维护...'
                                        });
                                        return;
                                    }
                                    FindPwd.removeEmailVerifyCode(email);
                                    res.json({code: 1});
                                });

                            } else {
                                res.json({
                                    code: 0,
                                    emailVerifyCodeError: '邮箱验证码错误'
                                });
                            }
                        });
                    } else {
                        res.json({
                            code: 0,
                            emailError: '邮箱没有注册'
                        });
                    }


                } else {
                    res.json({
                        code: 0,
                        userNameError: '用户名没有注册'
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