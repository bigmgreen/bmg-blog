const app = require('./server/app/app');
const mgt = require('./server/mgt/mgt');

app.listen(3000);
console.log('前台服务器启动~');

mgt.listen(3001);
console.log('后台台服务器启动~');
