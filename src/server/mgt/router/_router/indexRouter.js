const express = require('express');
const router = express.Router();
const Index = require('../../interface/indexInterFace');
const multiparty = require('multiparty');
const path = require('path');

const BASE_PATH = 'server/uploads/';

/**
 * 把参数转换成需要的格式
 * @param fields
 * @param files
 */
const getParam = (fields, files)=> {
    "use strict";

    let imgSrc = files['imgSrc'][0].path;
    if (path.sep === '\\') {
        imgSrc = imgSrc.split('\\').pop();
    }

    let title = fields['title'][0];
    let content = fields['content'][0];
    let contentId = fields['contentId'] ? fields['contentId'][0] : '';
    let type = fields['type'][0];

    return {imgSrc, title, content, contentId, type};

};

router.get('/index', function (req, res) {
    Index.getArticle(req.query, (err, article)=> {
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

router.post('/delete', function (req, res) {
    Index.deleteArticle(req.body.contentId, (err)=> {
        if (err) {
            console.log(err);
            res.json({
                code: 0,
                error: '服务器正在维护...'
            });
            return;
        }
        res.json({
            code: '0',
            msg: '删除成功'
        });
    });
});

router.post('/add', function (req, res) {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: BASE_PATH});
    //上传完成后处理
    form.parse(req, function (err, fields, files) {

        if (err) {
            console.log('parse error: ' + err);
        } else {
            Index.add(getParam(fields, files), (err)=> {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        code: '0',
                        msg: '增加成功'
                    });
                }
            });
        }

    });
});

router.post('/edit', function (req, res) {

    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: BASE_PATH});
    //上传完成后处理
    form.parse(req, function (err, fields, files) {

        if (err) {
            console.log('parse error: ' + err);
        } else {
            Index.edit(getParam(fields, files), (err)=> {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        code: '0',
                        msg: '编辑成功'
                    });
                }
            });
        }

    });

});

module.exports = router;