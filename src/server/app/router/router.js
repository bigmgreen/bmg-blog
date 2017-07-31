const express = require('express');
const router = express.Router();

// 简单打印访问时间
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.post('/index', function (req, res) {
    res.json({
        "header": {
            "userName": "zx",
            "nav": [
                {
                    "type": "index",
                    "text": "首页",
                    "href": "index.html?type=index"
                },
                {
                    "type": "html5",
                    "text": "html5",
                    "href": "index.html?type=html5"
                },
                {
                    "type": "angular",
                    "text": "angular",
                    "href": "index.html?type=angular"
                },
                {
                    "type": "react",
                    "text": "react",
                    "href": "index.html?type=react"
                }
            ]
        },
        "banner": {
            "href": "https://www.baidu.com/",
            "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
        },
        "article": {
            "items": [
                {
                    "anchorClassName": "article-style",
                    "figureClassName": "figure",
                    "footerClassName": "article-footer",
                    "href": "detail.html?id=1",
                    "type": "html5",
                    "title": "星球大战",
                    "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                    "alt": "bmg",
                    "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                    "dateStr": "2015-1-1",
                    "markCount": "2017",
                    "browserCount": "2017",
                    "commentCount": "2017"
                },
                {
                    "anchorClassName": "article-style",
                    "figureClassName": "figure",
                    "footerClassName": "article-footer",
                    "href": "detail.html?id=1",
                    "type": "html5",
                    "title": "星球大战",
                    "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                    "alt": "bmg",
                    "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                    "dateStr": "2015-1-1",
                    "markCount": "2017",
                    "browserCount": "2017",
                    "commentCount": "2017"
                },
                {
                    "anchorClassName": "article-style",
                    "figureClassName": "figure",
                    "footerClassName": "article-footer",
                    "href": "detail.html?id=1",
                    "type": "html5",
                    "title": "星球大战",
                    "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                    "alt": "bmg",
                    "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                    "dateStr": "2015-1-1",
                    "markCount": "2017",
                    "browserCount": "2017",
                    "commentCount": "2017"
                },
                {
                    "anchorClassName": "article-style",
                    "figureClassName": "figure",
                    "footerClassName": "article-footer",
                    "href": "detail.html?id=1",
                    "type": "html5",
                    "title": "星球大战",
                    "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                    "alt": "bmg",
                    "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                    "dateStr": "2015-1-1",
                    "markCount": "2017",
                    "browserCount": "2017",
                    "commentCount": "2017"
                },
                {
                    "anchorClassName": "article-style",
                    "figureClassName": "figure",
                    "footerClassName": "article-footer",
                    "href": "detail.html?id=1",
                    "type": "html5",
                    "title": "星球大战",
                    "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                    "alt": "bmg",
                    "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                    "dateStr": "2015-1-1",
                    "markCount": "2017",
                    "browserCount": "2017",
                    "commentCount": "2017"
                }
            ]
        },
        "author": {
            "title": "作者",
            "infos": [
                {
                    "name": "名称",
                    "value": "zxover"
                },
                {
                    "name": "专业",
                    "value": "web前端"
                },
                {
                    "name": "手机",
                    "value": 18388888888
                },
                {
                    "name": "邮箱",
                    "value": "1@163.com"
                },
                {
                    "name": "简介",
                    "value": "除了帅气以外再也没有拿得出手的技术了"
                }
            ]
        },
        "types": {
            "title": "分类",
            "items": [
                {
                    "type": "JavaScript",
                    "name": "JavaScript",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "css",
                    "name": "css",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "html5",
                    "name": "html5",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "nodeJs",
                    "name": "nodeJs",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "面试题",
                    "name": "面试题",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "其他",
                    "name": "其他",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                }
            ]
        }
    });
});

router.post('/article', function (req, res) {
    res.send({
        "items": [
            {
                "anchorClassName": "article-style",
                "figureClassName": "figure",
                "footerClassName": "article-footer",
                "href": "detail.html?id=1",
                "type": "html5",
                "title": "星球大战",
                "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                "alt": "bmg",
                "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                "dateStr": "2015-1-1",
                "markCount": "2017",
                "browserCount": "2017",
                "commentCount": "2017"
            },
            {
                "anchorClassName": "article-style",
                "figureClassName": "figure",
                "footerClassName": "article-footer",
                "href": "detail.html?id=1",
                "type": "html5",
                "title": "星球大战",
                "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                "alt": "bmg",
                "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                "dateStr": "2015-1-1",
                "markCount": "2017",
                "browserCount": "2017",
                "commentCount": "2017"
            },
            {
                "anchorClassName": "article-style",
                "figureClassName": "figure",
                "footerClassName": "article-footer",
                "href": "detail.html?id=1",
                "type": "html5",
                "title": "星球大战",
                "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                "alt": "bmg",
                "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                "dateStr": "2015-1-1",
                "markCount": "2017",
                "browserCount": "2017",
                "commentCount": "2017"
            },
            {
                "anchorClassName": "article-style",
                "figureClassName": "figure",
                "footerClassName": "article-footer",
                "href": "detail.html?id=1",
                "type": "html5",
                "title": "星球大战",
                "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                "alt": "bmg",
                "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                "dateStr": "2015-1-1",
                "markCount": "2017",
                "browserCount": "2017",
                "commentCount": "2017"
            },
            {
                "anchorClassName": "article-style",
                "figureClassName": "figure",
                "footerClassName": "article-footer",
                "href": "detail.html?id=1",
                "type": "html5",
                "title": "星球大战",
                "src": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                "alt": "bmg",
                "content": "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                "dateStr": "2015-1-1",
                "markCount": "2017",
                "browserCount": "2017",
                "commentCount": "2017"
            }
        ]
    });
});

router.post('/detail', function (req, res) {
    res.send({
        "header": {
            "userName": "zx",
            "nav": [
                {
                    "type": "index",
                    "text": "首页",
                    "href": "index.html?type=index"
                },
                {
                    "type": "html5",
                    "text": "html5",
                    "href": "index.html?type=html5"
                },
                {
                    "type": "angular",
                    "text": "angular",
                    "href": "index.html?type=angular"
                },
                {
                    "type": "react",
                    "text": "react",
                    "href": "index.html?type=react"
                }
            ]
        },
        "comment": {
            "contentId": "1",
            "anchorClassName": "comment",
            "pageClassName": "page",
            "commentCount": "2017",
            "pageCount": "10",
            "commentItem": [
                {
                    "critics": "zx",
                    "dateStr": "2017-01-01",
                    "markCount": "2017",
                    "content": "abcdefg"
                },
                {
                    "critics": "zx",
                    "dateStr": "2017-01-01",
                    "markCount": "2017",
                    "content": "abcdefg"
                },
                {
                    "critics": "zx",
                    "dateStr": "2017-01-01",
                    "markCount": "2017",
                    "content": "abcdefg"
                }
            ]
        },
        "content": {
            "contentId": "1",
            "anchorClassName": "content",
            "title": "星球大战",
            "content": "星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战",
            "dateTime": "2017-01-01",
            "markCount": "2017",
            "browserCount": "2017",
            "prev": "detail.html?id=2",
            "prevTitle": "星球大战",
            "next": "detail.html?id=3",
            "nextTitle": "星球大战"
        },
        "author": {
            "title": "作者",
            "infos": [
                {
                    "name": "名称",
                    "value": "zxover"
                },
                {
                    "name": "专业",
                    "value": "web前端"
                },
                {
                    "name": "手机",
                    "value": 18388888888
                },
                {
                    "name": "邮箱",
                    "value": "1@163.com"
                },
                {
                    "name": "简介",
                    "value": "除了帅气以外再也没有拿得出手的技术了"
                }
            ]
        },
        "types": {
            "title": "分类",
            "items": [
                {
                    "type": "JavaScript",
                    "name": "JavaScript",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "css",
                    "name": "css",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "html5",
                    "name": "html5",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "nodeJs",
                    "name": "nodeJs",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "面试题",
                    "name": "面试题",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                },
                {
                    "type": "其他",
                    "name": "其他",
                    "count": 2017,
                    "href": "index.html?type=javascript"
                }
            ]
        }
    });
});

router.post('/mark', function (req, res) {
    res.send({
        "markCount": "2018"
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

router.get('/exit', function (req, res) {
    res.json({code: 1});
});

router.post('/login', function (req, res) {
    res.json({code: 1});
});

router.post('/findPwd', function (req, res) {
    res.json({code: 1});
});

router.get('/findPwdVerifyCode', function (req, res) {
    res.json({code: 1});
});

module.exports = router;