let Utils = require('./utils/utils');

exports.getFrom = function (currentPage, callBack) {

    Utils.getFrom(currentPage, (err, rows)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        const PAGE_COUNT = Math.ceil(rows[1][0]['count'] / Utils.PAGE_SIZE);

        // TODO 计算元素出现次数
        // let ips = rows[0];
        // let _ips = [];
        //
        // for (let ip of ips) {
        //
        // }

        let article = {
            items: rows[0],
            PAGE_COUNT: PAGE_COUNT,
            PAGE_SIZE: Utils.PAGE_SIZE
        };

        callBack(null, article);

    });
};