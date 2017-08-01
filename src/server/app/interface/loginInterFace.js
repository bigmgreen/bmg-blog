let User = require('../models/User');

//TODO
const _getUser = (userName, pwd)=>{
    return {
        userName:'zx',
        userId:0
    };
};

//TODO
const _setRemember7Day = (userId)=>{
    return {
        userName:'zx',
        pwd:'aaaaaa'
    };
};

/**
 * 根据用户名和密码判断用户是否存在
 * @param userName
 * @param pwd
 * @param remember7Day
 * @returns {boolean}
 */
exports.getUser = function ({userName, pwd, remember7Day}) {
    const _user = _getUser(userName, pwd);
    if (_user != null) {
        if (remember7Day) {
            _setRemember7Day(_user.userId);
        }
        return true;
    }
    return false;
};