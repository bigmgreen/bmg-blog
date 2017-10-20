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
            types:rows[1],
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

/**
 * 编辑文章
 * @param imgSrc
 * @param title
 * @param content
 * @param contentId
 * @param type
 * @param callBack
 */
exports.edit = function ({imgSrc, title, content, contentId, type}, callBack) {

    Utils.edit({imgSrc, title, content, contentId, type}, (err)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        callBack(null);

    });
};

/**
 * 增加文章
 * @param imgSrc
 * @param title
 * @param content
 * @param contentId
 * @param type
 * @param callBack
 */
exports.add = function ({imgSrc, title, content, contentId, type}, callBack) {

    Utils.add({imgSrc, title, content, type}, (err)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        callBack(null);

    });
};