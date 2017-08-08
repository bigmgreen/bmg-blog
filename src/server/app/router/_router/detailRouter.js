const express = require('express');
const router = express.Router();
const Utils = require('../utils/utils');
const Detail = require('../../interface/detailInterFace');

router.get('/detail', function (req, res) {

    Detail.getDetail(req.query.contentId, Utils.getUserId(req), (err, detail)=> {
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json(detail);
    });

});

router.post('/mark', function (req, res) {

    Detail.mark(Utils.getUserId(req), req.body, (err, count)=> {
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json({
            markCount: count
        });
    });

});

router.post('/getComment', function (req, res) {
    res.send({
        "contentId": "1",
        "commentCount": "2017",
        "pageCount": "10",
        "error": "",
        "commentItem": [
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "aaaaa"
            },
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "dddd"
            },
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            }
        ]
    });
});

router.post('/comment', function (req, res) {
    res.send({
        "contentId": "1",
        "commentCount": "2017",
        "pageCount": "10",
        "error": "",
        "commentItem": [
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "aaaaa"
            },
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "dddd"
            },
            {
                "critics": "zx",
                "dateStr": "2017-01-01",
                "markCount": "2017",
                "content": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            }
        ]
    });
});

router.post('/commentMark', function (req, res) {
    res.send({
        "markCount": "2018"
    });
});

module.exports = router;