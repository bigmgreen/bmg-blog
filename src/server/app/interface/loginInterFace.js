let User = require('../model/User');
let Utils = require('./utils/utils');

//TODO
const _setRemember7Day = (userId)=> {
    return {
        userName: 'zx',
        pwd: 'aaaaaa'
    };
};

/**
 * 根据用户名和密码判断用户是否存在
 * @param userName
 * @param pwd
 * @param remember7Day
 * @returns {boolean}
 */
exports.getUser = function ({userName, pwd, remember7Day}, callBack) {

    Utils.getUser({userName, pwd}, (err, _user)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        if (_user.length > 0) {
            let {userName, userId} = _user[0];
            let user = new User(userId, userName);
            if (remember7Day) {
                _setRemember7Day(userId);
            }
            callBack(null, true, user);
            return;
        }
        callBack(null, false);
    });
};