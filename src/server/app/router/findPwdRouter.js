const express = require('express');
const router = express.Router();
const captchaPng = require('captchapng');
const nodeMailer = require('nodemailer');

// secure:true for port 465, secure:false for port 587
let transporter = nodeMailer.createTransport({
    host: 'http://mail.163.com',
    port: 587,
    secure: true,
    auth: {
        user: 'bigmgreen@163.com',
        pass: 'zxover1992923'
    }
});

router.post('/getEmailCode', (req, res)=> {
    "use strict";
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
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

router.post('/findPwd', function (req, res) {
    res.json({code: 1});
});

router.get('/findPwdVerifyCode', function (req, res) {
    var p = new captchaPng(80, 30, parseInt(Math.random() * 9000 + 1000)); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
});

module.exports = router;