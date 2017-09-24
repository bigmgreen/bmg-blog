const express = require('express');
const router = express.Router();
let User = require('../../interface/userInterFace');

router.get('/getUser', function (req, res) {

    const _cookie = req.cookies['session_id'];
    const userId = parseInt(req.session[`user_${_cookie}`]);

    User.getUserById(userId, (err, HAS_USER, user)=> {
        res.json(Object.assign(user, {
            code: 1
        }));
    });
});

module.exports = router;