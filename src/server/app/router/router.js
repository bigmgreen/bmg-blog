const express = require('express');
const router = express.Router();

// 简单打印访问时间
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.post('/index', function(req, res) {
    res.json({
        a:1
    });
});


router.post('/article', function(req, res) {
    res.send({
        a:1
    });
});

router.post('/detail', function(req, res) {
    res.send({
        a:1
    });
});

router.post('/mark', function(req, res) {
    res.send({
        a:1
    });
});

router.post('/comment', function(req, res) {
    res.send({
        a:1
    });
});

module.exports = router;