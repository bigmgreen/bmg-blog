/*   跨域数据请求地址   */
const BASE_URL = 'http://127.0.0.1:3001/api';
window.Url = {
    GET_USER: BASE_URL + '/getUser',
    INDEX: BASE_URL + '/index',
    INDEX_ARTICLE: BASE_URL + '/article',
    VISITOR: BASE_URL + '/visitor',
    MARK: BASE_URL + '/mark',
    FROM: BASE_URL + '/from',
    INVITE: BASE_URL + '/invite',
    GET_INVITE: BASE_URL + '/getInviteCode',
    COMMENT: BASE_URL + '/comment',
    SHARE: BASE_URL + '/share',
    DELETE: BASE_URL + '/delete',
};

window.Url.LOGIN= 'http://127.0.0.1:3001' + '/login';
window.Url.EXIT= 'http://127.0.0.1:3001' + '/exit';

window.Url.CODE ={
    OK:1
};