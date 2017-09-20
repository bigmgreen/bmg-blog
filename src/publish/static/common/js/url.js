/*   跨域数据请求地址   */
const BASE_URL = 'http://127.0.0.1:3001/api';
window.Url = {
    INDEX: BASE_URL + '/index',
    INDEX_ARTICLE: BASE_URL + '/article',
    DETAIL: BASE_URL + '/detail',
    MARK: BASE_URL + '/api/mark',
    GET_COMMENT: BASE_URL + '/getComment',
    COMMENT: BASE_URL + '/comment',
    COMMENT_MARK: BASE_URL + '/commentMark',
    EXIT: BASE_URL + '/exit',
    LOGIN: 'http://127.0.0.1:3001' + '/login',
    FIND_PWD: BASE_URL + '/findPwd',
    FIND_PWD_VERIFY_CODE: BASE_URL + '/findPwdVerifyCode',
    REGISTER_VERIFY_CODE: BASE_URL + '/registerVerifyCode',
    REGISTER: BASE_URL + '/register',
    PAGE_INFO: BASE_URL + '/pageInfo',
    GET_EMAIL_CODE: BASE_URL + '/getEmailCode',
};