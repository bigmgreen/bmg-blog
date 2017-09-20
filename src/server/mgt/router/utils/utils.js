const Utils = require('../../interface/utils/utils');

exports.getNav = (fn)=> {
    Utils.getNav(fn);
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
 * @param uuId
 * @param userId
 * @param req
 * @param res
 */
exports.setLogin = (uuId, userId, req, res)=> {

    const _cookie = req.cookies['session_id'];
    if (_cookie) {
        delete req.session[`user_${_cookie}`];
    }

    req.session[`user_${uuId}`] = userId;

    res.cookie('session_id', uuId,
        {path: '/', expires: new Date(Date.now() + 1800000), httpOnly: true});
};

/**
 * 检查登录状态
 * @param req
 */
exports.isLogin = (req)=> {
    const _cookie = req.cookies['session_id'];
    return !!req.session[`user_${_cookie}`];
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