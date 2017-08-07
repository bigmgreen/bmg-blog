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

                if (user && user.length > 0) {
                    _header.userName = user[0].userName;
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

                let commentCount = detail[5][0]['count'];

                let _comment = {
                    contentId: _content['contentId'],
                    commentCount: commentCount,
                    pageCount: Math.ceil(commentCount / Utils.PAGE_SIZE),
                    commentItem: detail[2],
                    PAGE_SIZE: Utils.PAGE_SIZE
                };
                let _author = {
                    title: '作者',
                    infos: detail[3]
                };
                let _types = {
                    title: '分类',
                    items: detail[4]
                };
                let _detail = new Detail(_header, _content, _comment, _author, _types);

                callBack(null, _detail);
                return;
            }
            callBack(null, false);
        });

    });
};