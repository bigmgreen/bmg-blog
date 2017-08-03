let User = require('../model/User');
let Utils = require('./utils/utils');

/**
 * 根据用户名和密码判断用户是否存在
 * @param userName
 * @param pwd
 * @param callBack
 * @returns {boolean}
 */
exports.getUser = function ({userName, pwd}, callBack) {

    Utils.getUser({userName, pwd}, (err, _user)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        if (_user.length > 0) {
            let {userName, userId} = _user[0];
            let user = new User(userId, userName);
            callBack(null, true, user);
            return;
        }
        callBack(null, false);
    });
};