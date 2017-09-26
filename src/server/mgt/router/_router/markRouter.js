const express = require('express');
const router = express.Router();
const Mark = require('../../interface/markInterFace');

router.get('/mark', function (req, res) {
    Mark.getMark(req.query.currentPage, (err, data)=>{
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