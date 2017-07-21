import '../static/common/css/reset.css';
import '../static/common/css/base.css';
import '../static/css/index.css';
import React from 'react';
import {render} from 'react-dom';
import Header from '../../components/lib/header/header';
import Footer from '../../components/lib/footer/footer';
import LoginStatus from '../../components/lib/loginStatus/loginStatus';
import Banner from '../../components/lib/banner/banner';
import Author from '../../components/lib/author/author';
import Types from '../../components/lib/types/types';

const App = () => {
    return (
        <div>
            <div className="top">
                <div className="section">
                    <LoginStatus
                        anchorClassName="login-status"
                        offLine={{
                            login: 'baidu.com',
                            loginText: '登录',
                            register: 'register',
                            registerText: '注册'
                        }}
                    />
                    <Header
                        anchorClassName='header'
                        logoClassName='logo'
                        navClassName='nav'
                        href="https://www.baidu.com/"
                        src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                        alt="logo图片"
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
            <div className="section">
                <Banner
                    anchorClassName="banner"
                    href="https://www.baidu.com/"
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                    alt="banner图片"
                />
                <div className="main">
                    <div className="left"></div>
                    <div className="right">
                        <Author
                            anchorClassName="author"
                            title="作者"
                            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                            alt="作者头像"
                            infos={[
                                {
                                    name: '名称',
                                    value: 'zxover'
                                },
                                {
                                    name: '专业',
                                    value:'web前端'
                                },
                                {
                                    name:'手机',
                                    value:'18388888888'
                                },
                                {
                                    name:'邮箱',
                                    value:'1@163.com'
                                },
                                {
                                    name:'简介',
                                    value:'除了帅气以外再也没有拿得出手的技术了'
                                }
                            ]}
                        />
                        <Types
                            anchorClassName="type"
                            title="分类"
                            items={[
                                {
                                    href: '#',
                                    name:'JavaScript',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name:'css',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name:'html5',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name:'nodeJs',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name:'面试题',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name:'其他',
                                    count: 2017
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <Footer
                anchorClassName="footer"
                desc="2017 bmg 未知备案号"
            />
        </div>
    );
}

((doc)=> {
    "use strict";

    let body = doc.body;
    let article = doc.createElement('article');
    article.id = 'app';
    body.insertBefore(article, body.firstChild);

})(document);

const app = document.getElementById('app');

render(<App />, app);