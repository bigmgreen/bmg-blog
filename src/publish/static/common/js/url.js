/*   跨域数据请求地址   */
const BASE_URL = 'http://127.0.0.1:3001/api';
window.Url = {
    GET_USER: BASE_URL + '/getUser',
    INDEX: BASE_URL + '/index',
    INDEX_ARTICLE: BASE_URL + '/article',
    VISITOR: BASE_URL + '/visitor',
    MARK: BASE_URL + '/mark',

    DETAIL: BASE_URL + '/detail',
    GET_COMMENT: BASE_URL + '/getComment',
    COMMENT: BASE_URL + '/comment',
    COMMENT_MARK: BASE_URL + '/commentMark',
    FIND_PWD: BASE_URL + '/findPwd',
    FIND_PWD_VERIFY_CODE: BASE_URL + '/findPwdVerifyCode',
    REGISTER_VERIFY_CODE: BASE_URL + '/registerVerifyCode',
    REGISTER: BASE_URL + '/register',
    PAGE_INFO: BASE_URL + '/pageInfo',
    GET_EMAIL_CODE: BASE_URL + '/getEmailCode',
};

window.Url.LOGIN= 'http://127.0.0.1:3001' + '/login';
window.Url.EXIT= 'http://127.0.0.1:3001' + '/exit';

window.Url.CODE ={
    OK:1
};