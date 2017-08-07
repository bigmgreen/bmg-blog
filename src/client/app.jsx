import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/common/css/reset.css';
import './static/common/css/base.css';
import './static/common/css/animate.min.css';
import Logo from './static/common/img/logo.png';
import Header from '../components/lib/header/header';
import Footer from '../components/lib/footer/footer';
import LoginStatus from '../components/lib/loginStatus/loginStatus';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';

let Url = null;
let bmgFetch = null;

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {
                userName: '',
                nav: []
            }
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    _getTop(isTopShow) {
        if (isTopShow === false) {
            return null;
        }
        return (
            <LoginStatus
                anchorClassName="login-status"

                offLine={{
                    login: 'login.html',
                    loginText: '登录',
                    register: 'register.html',
                    registerText: '注册'
                }}
                onLine={{
                    welcome: '欢迎您',
                    exit: Url.EXIT,
                    exitText: '退出',
                    userName: this.state.header.userName
                }}
                bmgFetch={bmgFetch}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="top">
                    <div className="section">
                        {this._getTop(this.props.top)}
                        <Header
                            anchorClassName='header'
                            logoClassName='logo'
                            navClassName='nav'
                            src={Logo}
                            items={this.state.header.nav}
                            onNavClick={this.props.onNavClick}
                            jump={this.props.jump}
                        />
                    </div>
                </div>
                {this.props.children}
                <Footer
                    anchorClassName="footer"
                    desc="2017 bmg 未知备案号"
                />
            </div>
        );
    }

    static run(App) {
        /*   兼容性处理  start */
        if (!window.Promise) {
            window.Promise = Promise;
        }
        /*   兼容性处理  end   */

        let doc = document;
        let body = doc.body;
        let article = doc.createElement('article');
        article.id = 'app';
        body.insertBefore(article, body.firstChild);
        render(<App />, document.getElementById('app'));
    }
}

/*   异步请求地址   */
const BASE_URL = 'http://127.0.0.1:3000';
module.exports.Url = Url = {
    INDEX: BASE_URL + '/api/index',
    INDEX_ARTICLE: BASE_URL + '/api/article',
    DETAIL: BASE_URL + '/api/detail',
    MARK: BASE_URL + '/api/mark',
    GET_COMMENT: BASE_URL + '/api/getComment',
    COMMENT: BASE_URL + '/api/comment',
    COMMENT_MARK: BASE_URL + '/api/commentMark',
    EXIT: BASE_URL + '/api/exit',
    LOGIN: BASE_URL + '/api/login',
    FIND_PWD: BASE_URL + '/api/findPwd',
    FIND_PWD_VERIFY_CODE: BASE_URL + '/api/findPwdVerifyCode',
    REGISTER_VERIFY_CODE: BASE_URL + '/api/registerVerifyCode',
    REGISTER: BASE_URL + '/api/register',
    PAGE_INFO: BASE_URL + '/api/pageInfo',
    GET_EMAIL_CODE: BASE_URL + '/api/getEmailCode',
};

/*   请求方法封装   */
module.exports.bmgFetch = bmgFetch = {

    post (url, data, config) {

        let option = Object.assign({
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }, config, {
            body: JSON.stringify(data)
        });

        return fetch(url, option);
    },

    get (url, data, config) {
        let option = Object.assign({
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }, config);

        url += '?';
        if (typeof data === 'object') {
            for (let key of Object.keys(data)) {
                url += `${key}=${data[key]}&`
            }
        }

        url += Date.now();

        return fetch(url, option);
    }

};