const express = require('express');
const router = express.Router();
const Index = require('../../interface/indexInterFace');

router.get('/index', function (req, res) {
    Index.getArticle(req.query, (err, article)=>{
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json(article);
    });
});

module.exports = router;