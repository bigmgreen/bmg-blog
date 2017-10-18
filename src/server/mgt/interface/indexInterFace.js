let Utils = require('./utils/utils');

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

        const PAGE_COUNT = Math.ceil(rows[1][0]['count']/Utils.PAGE_SIZE);

        let article = {
            items:rows[0],
            PAGE_COUNT: PAGE_COUNT,
            PAGE_SIZE: Utils.PAGE_SIZE
        };

        callBack(null, article);

    });
};

/**
 * 删除文章
 * @param contentId
 * @param callBack
 * @returns {boolean}
 */
exports.deleteArticle = function (contentId, callBack) {

    Utils.deleteArticle(contentId, (err)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        callBack(null);

    });
};