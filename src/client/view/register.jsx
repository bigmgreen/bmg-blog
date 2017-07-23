import '../static/common/css/reset.css';
import '../static/common/css/base.css';
import React from 'react';
import {render} from 'react-dom';
import Header from '../../components/lib/header/header';
import Footer from '../../components/lib/footer/footer';
import  Input from '../../components/lib/input/input';
import Button from '../../components/lib/button/button';
import VerifyCode from '../../components/lib/verifyCode/verifyCode';

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
                <header className="panel-title">注册</header>
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    placeholder="邀请码__请和站长联系_1043943494"
                />
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    placeholder="用户名__123aaa或者aaa123"
                />
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    placeholder="邮箱__bigmgreen@163.com"
                />
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    type="password"
                    placeholder="密码__123abc+-*/"
                />
                <Input
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    type="password"
                    placeholder="确认密码__123abc+-*/"
                />
                <VerifyCode
                    src="http://fanyi.baidu.com/static/translation/img/header/logo_cbfea26.png"
                    wrapClassName="input-wrap"
                    inputClassName="input"
                    errorClassName="error"
                    wrapImgClassName="verify-code-wrap"
                    imgClassName="verify-code"
                    placeholder="验证码"
                    maxLength="6"
                />
                <Button
                    type="submit"
                    onClick={()=> {
                        alert('你点击了按钮~')
                    }}
                    className="btn"
                    name="注册"
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