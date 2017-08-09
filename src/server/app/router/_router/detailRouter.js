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

router.get('/getComment', function (req, res) {

    Detail.getComment(req.query, (err, comments)=>{
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json(comments);
    });

});

router.post('/comment', function (req, res) {

    let comment = {};
    comment.contentId = req.body.contentId;
    comment.content = req.body.content;
    comment.dateStr = (new Date()).toString();
    comment.userId = Utils.getUserId(req);

    Detail.comment(comment, (err, comments)=>{
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }

        res.json(comments);
    });

});

router.post('/commentMark', function (req, res) {
    Detail.commentMark(Utils.getUserId(req), req.body, (err, count)=> {
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

module.exports = router;