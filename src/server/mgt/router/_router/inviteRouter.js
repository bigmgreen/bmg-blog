const express = require('express');
const router = express.Router();
const Invite = require('../../interface/inviteInterFace');

router.get('/invite', function (req, res) {
    Invite.getInvite(req.query.currentPage, (err, data)=>{
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

router.post('/getInviteCode', function (req, res) {
    Invite.getInviteCode((err, data)=>{
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