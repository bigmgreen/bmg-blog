let User = require('../model/User');
let Utils = require('./utils/utils');

/**
 * 根据用户名id判断用户是否存在
 * @param userId
 * @param callBack
 * @returns {boolean}
 */
exports.getUserById = function (userId, callBack) {

    Utils.getUserById(userId, (err, _user)=> {

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