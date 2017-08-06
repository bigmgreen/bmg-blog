let User = require('../model/User');
let Utils = require('./utils/utils');
let Index = require('../model/Index');

/**
 * 获取首页信息
 * @param type
 * @param currentPage
 * @param userId
 * @param callBack
 * @returns {boolean}
 */
exports.getIndex = function ({type, currentPage}, userId, callBack) {

    Utils.getIndex(type, currentPage, (err, _index)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        Utils.getUserById(userId, (err, user)=> {
            if (_index.length > 0) {
                let _header = {
                    nav: _index[0]
                };

                if (user && user.length > 0) {
                    _header.userName = user[0].userName;
                }

                let _banner = _index[1][0];

                let _article = {
                    items: _index[2],
                    PAGE_SIZE: Utils.PAGE_SIZE
                };
                let _author = {
                    title: '作者',
                    infos: _index[3]
                };
                let _types = {
                    title: '分类',
                    items: _index[4]
                };
                let index = new Index(_header, _banner, _article, _author, _types);

                callBack(null, index);
                return;
            }
            callBack(null, false);
        });

    });
};

/**
 * 获取首页文章列表信息
 * @param type
 * @param currentPage
 * @param callBack
 * @returns {boolean}
 */
exports.getArticle = function ({type, currentPage}, callBack) {

    Utils.getArticle(type, currentPage, (err, rows)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        let article = {
            items:rows,
            PAGE_SIZE: Utils.PAGE_SIZE
        };

        callBack(null, article);

    });
};