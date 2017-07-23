import '../static/common/css/reset.css';
import '../static/common/css/base.css';
import React from 'react';
import {render} from 'react-dom';
import Header from '../../components/lib/header/header';
import Footer from '../../components/lib/footer/footer';
import  Input from '../../components/lib/input/input';
import  Check from '../../components/lib/check/check';
import Button from '../../components/lib/button/button';

const App = () => {
    return (
        <div>
            <div className="top">
                <div className="section">
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
            <form className="panel"
            >
                <header className="panel-title">登录</header>
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    placeholder="请输入用户名"
                />
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    type="password"
                    placeholder="请输入密码"
                />
                <Check
                    wrapClassName="check-wrap"
                    inputClassName="check"
                    textClassName="text"
                    text="记住登录七天"
                    name="check"
                    id="check"
                />
                <Button
                    type="submit"
                    onClick={()=> {
                        alert('你点击了按钮~')
                    }}
                    className="btn"
                    name="登录"
                />
            </form>
            <Footer
                anchorClassName="footer"
                desc="2017 bmg 未知备案号"
            />
        </div>
    );
};

((doc)=> {
    "use strict";

    let body = doc.body;
    let article = doc.createElement('article');
    article.id = 'app';
    body.insertBefore(article, body.firstChild);

})(document);

const app = document.getElementById('app');

render(<App />, app);