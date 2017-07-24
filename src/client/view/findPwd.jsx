import React from 'react';
import Main from '../app';
import  Input from '../../components/lib/input/input';
import Button from '../../components/lib/button/button';
import VerifyCode from '../../components/lib/verifyCode/verifyCode';

const App = () => {
    return (
        <Main>
            <form className="panel"
            >
                <header className="panel-title"><a href="register.html">去注册</a>或<a href="login.html">登录</a></header>
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
                    name="找回"
                />
            </form>
        </Main>
    );
}

Main.run(App);