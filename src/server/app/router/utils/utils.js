const captchaPng = require('captchapng');

/**
 * 生成图片验证码
 * @returns {{img: Buffer, code: string}}
 */
exports.getVerifyCode = ()=> {
    const _code = parseInt(Math.random() * 9000 + 1000);
    let p = new captchaPng(80, 30, _code);

    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    return {
        img: new Buffer(p.getBase64(), 'base64'),
        code: _code
    };
};

/**
 * 获取当前用户
 * @param req
 * @returns {*}
 */
exports.getUserId = (req)=> {
    return req.session[`user_${req.cookies['session_id']}`];
};
