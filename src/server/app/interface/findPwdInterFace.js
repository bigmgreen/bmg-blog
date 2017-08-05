let User = require('../model/User');
let Utils = require('./utils/utils');

/**
 * 根据邮箱判断用户是否存在
 * @param email
 * @param callBack
 */
exports.getUserByEmail = function (email, callBack) {

    Utils.getUserByEmail(email, (err, _user)=> {

        if (err) {
            callBack(err);
            return;
        }

        if (_user.length > 0) {
            let {userName, userId, email} = _user[0];
            let user = new User(userId, userName, email);
            callBack(null, true, user);
            return;
        }
        callBack(null, false);
    });
};

/**
 * 获取邮箱验证码
 * @param email
 * @param fn
 * @returns {string}
 */
exports.getEmailValidateCode = (email, fn)=> {

    const _code = Date.now().toString().substr(7, 12);
    Utils.saveEmailValidateCode(email, _code, (err)=> {
        console.log(err)
        if (err) {
            fn(err);
            return;
        }
        fn(null, _code);
    });
};

/**
 * 保存生成的图片验证码
 * @param code
 * @param fn
 */
exports.saveVerifyCode = (code, fn)=> {
    Utils.saveVerifyCode(code, fn);
};

/**
 * 验证图片验证码
 * @param code
 * @param fn
 */
exports.checkVerifyCode = (code, fn)=> {
    Utils.checkVerifyCode(code, (err, rows)=> {
        if (err) {
            fn(err);
            return;
        }
        fn(null, rows[0].count > 0);
    });
};

/**
 * 验证用户名和邮箱
 * @param userName
 * @param fn
 */
exports.checkUserByNameAndEmail = (userName, fn)=> {
    Utils.checkUserByName(userName, (err, user)=> {
        if (err) {
            fn(err);
            return;
        }

        fn(null, user.length > 0, user[0]);
    });
};

/**
 * 验证邮箱验证码
 * @param email
 * @param emailVerifyCode
 * @param fn
 */
exports.checkEmailVerifyCode = (email, emailVerifyCode,fn)=>{
    Utils.checkEmailVerifyCode(email, emailVerifyCode, (err, rows)=> {
        if (err) {
            fn(err);
            return;
        }

        fn(null, rows[0].count > 0);
    });
};

/**
 * 删除验证过的邮箱验证码
 * @param email
 */
exports.removeEmailVerifyCode = (email)=>{
    Utils.removeEmailVerifyCode(email);
};
/**
 * 重置密码
 * @param userId
 * @param pwd
 * @param fn
 */
exports.findPwd = (userId, pwd,fn)=>{
    Utils.findPwd(userId, pwd, fn);
};