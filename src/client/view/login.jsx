import '../static/common/css/reset.css';
import '../static/common/css/base.css';
import React from 'react';
import {render} from 'react-dom';
import  Input from '../../components/lib/input/input';
import  Check from '../../components/lib/check/check';
import Button from '../../components/lib/button/button';
import '../static/css/login.css';

const App = () => {
    return (
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