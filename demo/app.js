var express = require('express');
let app = express();

app.post('/api/data', function (req, res) {
   res.send('aaa');
});

app.listen(3000);