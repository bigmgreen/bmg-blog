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

export default class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {
            header: {
                userName:'',
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

module.exports.Url = Url ={
    INDEX: '/api/index',
    INDEX_ARTICLE: '/api/article',
    DETAIL: '/api/detail',
    MARK: '/api/mark',
    GET_COMMENT: '/api/getComment',
    COMMENT: '/api/comment',
    COMMENT_MARK: '/api/commentMark',
    EXIT: '/api/exit',
    LOGIN: '/api/login',
    FIND_PWD: '/api/findPwd',
    FIND_PWD_VERIFY_CODE: '/api/findPwdVerifyCode',
    REGISTER_VERIFY_CODE: '/api/registerVerifyCode',
    REGISTER: '/api/register',
    PAGE_INFO: '/api/pageInfo',
};