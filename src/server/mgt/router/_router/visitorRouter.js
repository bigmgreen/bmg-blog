const express = require('express');
const router = express.Router();
const Visitor = require('../../interface/visitorInterFace');

router.get('/visitor', function (req, res) {
    Visitor.getVisitor(req.query.currentPage, (err, visitor)=>{
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json(visitor);
    });
});


module.exports = router;