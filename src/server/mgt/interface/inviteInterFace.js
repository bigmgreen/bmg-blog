let Utils = require('./utils/utils');
const uuidV1 = require('uuid/v1');

exports.getInvite = function (currentPage, callBack) {

    Utils.getInvite(currentPage, (err, rows)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }

        const PAGE_COUNT = Math.ceil(rows[1][0]['count'] / Utils.PAGE_SIZE);

        let article = {
            items: rows[0],
            PAGE_COUNT: PAGE_COUNT,
            PAGE_SIZE: Utils.PAGE_SIZE
        };

        callBack(null, article);

    });
};

exports.getInviteCode = function (callBack) {

    let code = uuidV1().substr(0, 6);

    Utils.getInviteCode(code, (err, rows)=> {
        "use strict";

        if (err) {
            callBack(err);
            return;
        }
        callBack(null, {
            inviteCode: code
        });

    });
};