const captchaPng = require('captchapng');
const Utils = require('../../interface/utils/utils');

exports.getNav = (fn)=> {
    Utils.getNav(fn);
};

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

/**
 * 设置登录状态
 * @param remember7Day
 * @param uuId
 * @param userId
 * @param req
 * @param res
 */
exports.setLogin = (remember7Day, uuId, userId, req, res)=> {

    const _cookie = req.cookies['session_id'];
    if (_cookie) {
        delete req.session[`user_${_cookie}`];
    }

    req.session[`user_${uuId}`] = userId;

    if (remember7Day) {
        res.cookie('session_id', uuId,
            {path: '/', expires: new Date(Date.now() + 604800000), httpOnly: true});
    } else {
        res.cookie('session_id', uuId,
            {path: '/', expires: new Date(Date.now() + 1800000), httpOnly: true});
    }
};

/**
 * 删除session，cookie
 * @param req
 * @param res
 */
exports.logout = (req, res)=> {
    delete req.session[`user_${req.cookies['session_id']}`];
    res.clearCookie('session_id');
};