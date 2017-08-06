let User = require('../model/User');
let Utils = require('./utils/utils');

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
 * 验证邀请码
 * @param inviteCode
 * @param fn
 */
exports.checkInviteCode = (inviteCode, fn)=> {
    Utils.checkInviteCode(inviteCode, (err, rows)=> {
        if (err) {
            fn(err);
            return;
        }
        fn(null, rows[0].count > 0);
    });
};


/**
 * 验证用户名
 * @param userName
 * @param fn
 */
exports.checkUserByName = (userName, fn)=> {
    Utils.checkUserByName(userName, (err, user)=> {
        if (err) {
            fn(err);
            return;
        }
        fn(null, user.length <= 0);
    });
};

/**
 * 根据邮箱判断用户是否存在
 * @param email
 * @param callBack
 */
exports.checkUserByEmail = function (email, callBack) {

    Utils.getUserByEmail(email, (err, user)=> {

        if (err) {
            callBack(err);
            return;
        }

        callBack(null, user.length <= 0);
    });
};

/**
 * 注册操作
 * @param inviteCode
 * @param userName
 * @param email
 * @param pwd
 * @param fn
 */
exports.register = ({inviteCode, userName, email, pwd}, fn)=> {
    Utils.register(inviteCode, userName, email, pwd, (err)=> {

        if (err) {
            fn(err);
            return;
        }

        Utils.getUser({userName, pwd}, (err, user)=> {
            fn(err, user[0]);
        });
    });
};