import React from 'react';
import {render} from 'react-dom';
import Button from './lib/button/button';
import Input, {NumberInput} from './lib/input/input';
import Share from './lib/share/share';
import Check from './lib/check/check';
import Mark from './lib/mark/mark';
import Nav from './lib/nav/nav';
import Logo from './lib/logo/logo';
import LoginStatus from './lib/loginStatus/loginStatus';
import Banner from './lib/banner/banner';
import Author from './lib/author/author';
import Types from './lib/types/types';
import Notice from './lib/notice/notice';

const App = () => {
    return (
        <ul>
            {/*  其他组件依次向下罗列   */}
            <li>
                <Button
                    type="submit"
                    onClick={()=> {
                        alert('你点击了按钮~')
                    }}
                    className="hello"
                    name="提交"
                />
                <p>点击事件绑定</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    maxLength="5"
                />
                <p>使用maxLength属性</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                />
                <p>不使用pattern属性</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    pattern={/^\d+$/g}
                />
                <p>使用pattern属性（只能输入数字），不进行汉字过滤</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    pattern={/^\d+$/g}
                    isChineseFilter={true}
                />
                <p>使用pattern属性（只能输入数字），进行汉字过滤</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                />
                <p>整数：只能输入多个数字，或者一个0</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    numberType="float"
                />
                <p>小数：可以输入小数，但没有指定小数位数decimalPlaces的值，默认为15</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    numberType="float"
                    decimalPlaces="2"
                />
                <p>小数：可以输入小数，指定小数位数decimalPlaces的值为大于等于1</p>
            </li>
            <li>
                <h3>分享组件</h3>
                <Share
                    item={
                        [
                            {
                                text: '微信好友',
                                url: 'baidu.com'
                            },
                            {
                                text: '微博',
                                url: 'baidu.com'
                            },
                            {
                                text: 'QQ好友',
                                url: 'baidu.com'
                            },
                            {
                                text: '微信朋友圈',
                                url: 'baidu.com'
                            }
                        ]
                    }
                />
            </li>
            <li>
                <h3>记住登录七天组件</h3>
                <Check
                    text="记住登录七天"
                    name="check"
                    id="check"
                />
            </li>
            <li>
                <Mark
                    onChange={(checked)=> {
                        console.log(checked);
                    }}
                    checked={true}
                />
                <h3>点赞组件</h3>
            </li>
            <li>
                <Nav
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
                <h3>导航组件</h3>
            </li>
            <li>
                <Logo
                    href="https://www.baidu.com/"
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                    alt="logo图片"
                />
                <h3>logo组件</h3>
            </li>
            <li>
                <LoginStatus
                    onLine={{
                        welcome: '欢迎您',
                        exit: 'baidu.com',
                        exitText: '退出',
                        userName: 'bmg'
                    }}
                />
                <h3>登录组件-登录</h3>
                <LoginStatus
                    offLine={{
                        login: 'baidu.com',
                        loginText: '登录',
                        register: 'register',
                        registerText: '注册'
                    }}
                />
                <h3>登录组件-未登录</h3>
            </li>
            <li>
                <Banner
                    href="点击跳转地址"
                    src="图片地址"
                    alt="图片不显示时显示的文字"
                />
                <h3>banner组件</h3>
            </li>
            <li>
                <Author
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
                <h3>作者简介组件</h3>
            </li>
            <li>
                <Types
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
                <h3>分类列表组件</h3>
            </li>
            <li>
                <Notice
                    items={[
                        '字数多了，谁举报，我罚钱',
                        '付费问答，一次一块，包你满意',
                        '问的太难了，我可是要提价的哦~'
                    ]}
                />
                <h3>公告栏组件</h3>
            </li>
        </ul>
    )
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