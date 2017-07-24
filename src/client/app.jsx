import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/common/css/reset.css';
import './static/common/css/base.css';
import Logo from './static/common/img/logo.png';
import Header from '../components/lib/header/header';
import Footer from '../components/lib/footer/footer';
import LoginStatus from '../components/lib/loginStatus/loginStatus';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    <div className="section">
                        <LoginStatus
                            anchorClassName="login-status"
                            offLine={{
                                login: 'login.html',
                                loginText: '登录',
                                register: 'register.html',
                                registerText: '注册'
                            }}
                        />
                        <Header
                            anchorClassName='header'
                            logoClassName='logo'
                            navClassName='nav'
                            src={Logo}
                            item={[
                                {
                                    href: 'baidu.com',
                                    text: '首页'
                                },
                                {
                                    href: 'baidu.com',
                                    text: 'html5'
                                },
                                {
                                    href: 'baidu.com',
                                    text: 'angular'
                                },
                                {
                                    href: 'baidu.com',
                                    text: 'react'
                                }
                            ]}
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