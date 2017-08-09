let User = require('../model/User');
let Utils = require('./utils/utils');
let Detail = require('../model/Detail');

/**
 * 获取详情页信息
 * @param contentId
 * @param userId
 * @param callBack
 * @returns {boolean}
 */
exports.getDetail = function (contentId, userId, callBack) {

    Utils.getDetail(contentId, (err, detail)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        Utils.getUserById(userId, (err, user)=> {
            if (detail.length > 0) {
                let _header = {
                    nav: detail[0]
                };

                const HAS_LOGIN = user && user.length > 0;
                let isLogin = false;
                if (HAS_LOGIN) {
                    _header.userName = user[0].userName;
                    isLogin = true;
                }

                let _content = detail[1][0];
                let contentPrev = detail[6];
                let contentNext = detail[7];

                if (contentPrev.length > 0) {
                    _content.prev =
                        'detail.html?id=' + contentPrev[0]['contentId'];
                    _content.prevTitle = contentPrev[0]['title'];
                } else {
                    _content.prev = 'javascript:void(0);';
                    _content.prevTitle = '没有前一篇了';
                }


                if (contentNext.length > 0) {
                    _content.next =
                        'detail.html?id=' + contentNext[0]['contentId'];
                    _content.nextTitle = contentNext[0]['title'];
                } else {
                    _content.next = 'javascript:void(0);';
                    _content.nextTitle = '没有后一篇了';
                }

                if (HAS_LOGIN) {

                    let hasMark = _content['userMarked'];

                    let marked = hasMark && (hasMark.indexOf(userId) > -1);
                    _content['userMarked'] = marked;
                }


                let commentCount = detail[5][0]['count'];

                let _comment = {
                    contentId: _content['contentId'],
                    commentCount: commentCount,
                    pageCount: Math.ceil(commentCount / Utils.PAGE_SIZE),
                    PAGE_SIZE: Utils.PAGE_SIZE
                };

                let tempComment = detail[2];
                tempComment.forEach((item)=> {
                    let hasMark = item['userMarked'];
                    let marked = false;

                    if (hasMark && (hasMark.indexOf(userId) > -1)) {
                        marked = true;
                    }
                    item['userMarked'] = marked;
                });
                _comment.commentItem = tempComment;

                let _author = {
                    title: '作者',
                    infos: detail[3]
                };
                let _types = {
                    title: '分类',
                    items: detail[4]
                };
                let _detail = new Detail(_header, _content, _comment, _author, _types, isLogin);

                callBack(null, _detail);
                return;
            }
            callBack(null, false);
        });

    });
};

/**
 * 文章点赞
 * @param userId
 * @param contentId
 * @param checked
 * @param callBack
 */
exports.mark = function (userId, {contentId, checked}, callBack) {

    Utils.mark(userId, contentId, checked, (err, count)=> {
        callBack(err, count);
    });
};

/**
 * 获取详情页评论
 * @param contentId
 * @param currentPage
 * @param callBack
 * @returns {boolean}
 */
exports.getComment = function ({contentId, currentPage}, callBack) {

    Utils.getComment(contentId, currentPage, (err, comment)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        if (comment && comment.length > 0) {

            let commentCount = comment[1][0]['count'];

            let _comment = {
                contentId: contentId,
                commentCount: commentCount,
                pageCount: Math.ceil(commentCount / Utils.PAGE_SIZE),
                commentItem: comment[0],
                PAGE_SIZE: Utils.PAGE_SIZE
            };

            callBack(null, _comment);
            return;
        }
        callBack(null, false);

    });
};

/**
 * 提交评论
 * @param contentId
 * @param userId
 * @param dateStr
 * @param content
 * @param callBack
 */
exports.comment = function ({contentId, userId, dateStr, content}, callBack) {

    Utils.getUserById(userId, (err, user)=> {
        if (err) {
            callBack(err);
            return;
        }
        Utils.comment(contentId, user[0].userName, dateStr, content, (err, comment)=> {
            if (err) {
                callBack(err);
                return;
            }

            console.log(comment)

            if (comment && comment.length > 0) {

                let commentCount = comment[1][0]['count'];

                let _comment = {
                    contentId: contentId,
                    commentCount: commentCount,
                    pageCount: Math.ceil(commentCount / Utils.PAGE_SIZE),
                    commentItem: comment[0],
                    PAGE_SIZE: Utils.PAGE_SIZE
                };

                callBack(null, _comment);
                return;
            }
            callBack(null, false);
        });
    });

};

/**
 * 评论点赞点赞
 * @param userId
 * @param commentId
 * @param checked
 * @param callBack
 */
exports.commentMark = function (userId, {commentId, checked}, callBack) {

    Utils.commentMark(userId, commentId, checked, (err, count)=> {
        callBack(err, count);
    });
};