const express = require('express');
const router = express.Router();
const Comment = require('../../interface/commentInterFace');

router.get('/comment', function (req, res) {
    Comment.getComment(req.query.currentPage, (err, data)=>{
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json(data);
    });
});


module.exports = router;