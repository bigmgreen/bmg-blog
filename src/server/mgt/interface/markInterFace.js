let Utils = require('./utils/utils');

exports.getMark = function (currentPage, callBack) {

    Utils.getMark(currentPage, (err, rows)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        const PAGE_COUNT = Math.ceil(rows[1][0]['count'] / Utils.PAGE_SIZE);

        let data = {
            items: rows[0],
            PAGE_COUNT: PAGE_COUNT,
            PAGE_SIZE: Utils.PAGE_SIZE
        };

        callBack(null, data);

    });
};