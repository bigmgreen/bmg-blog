import React, {Component} from 'react';
import Main from '../app';
import Input from '../../components/lib/input/input';
import Button from '../../components/lib/button/button';
import VerifyCode from '../../components/lib/verifyCode/verifyCode';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inviteCode: '',
            inviteCodeError: '',
            userName: '',
            userNameError: '',
            email: '',
            emailError: '',
            pwd: '',
            pwdError: '',
            confirmPwd: '',
            confirmPwdError: '',
            verifyCode: '',
            verifyCodeError: '',
        };
    }

    render() {
        return (
            <Main>
                <form className="panel"
                >
                    <header className="panel-title"><a href="login.html">去登录</a>或<a href="findPwd.html">找回密码</a>
                    </header>
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="邀请码__请和站长联系_1043943494"
                        value={this.state.inviteCode}
                        error={this.state.inviteCodeError}
                        name="inviteCode"
                        onChange={(value)=> {
                            this.setState({
                                inviteCode: value,
                                inviteCodeError: ''
                            })
                        }}
                    />
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="用户名__123aaa或者aaa123"
                        value={this.state.userName}
                        error={this.state.userNameError}
                        name="userName"
                        onChange={(value)=> {
                            this.setState({
                                userName: value,
                                userNameError: ''
                            })
                        }}
                    />
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="邮箱__bigmgreen@163.com"
                        value={this.state.email}
                        error={this.state.emailError}
                        name="email"
                        onChange={(value)=> {
                            this.setState({
                                email: value,
                                emailError: ''
                            })
                        }}
                    />
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        error={this.state.pwdError}
                        name="pwd"
                        onChange={(value)=> {
                            this.setState({
                                pwd: value,
                                pwdError: ''
                            })
                        }}
                    />
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        type="password"
                        placeholder="确认密码__123abc+-*/"
                        value={this.state.confirmPwd}
                        error={this.state.confirmPwdError}
                        name="confirmPwd"
                        onChange={(value)=> {
                            this.setState({
                                confirmPwd: value,
                                confirmPwdError: ''
                            })
                        }}
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
                        value={this.state.verifyCode}
                        error={this.state.verifyCodeError}
                        name="verifyCode"
                        onChange={(value)=> {
                            this.setState({
                                verifyCode: value,
                                verifyCodeError: ''
                            })
                        }}
                    />
                    <Button
                        type="button"
                        onClick={()=> {
                            const isValidatePass = this._validate(this.state);
                            if (isValidatePass) {

                                {/*     网络请求  start    */
                                }
                                fetch('/register', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: new FormData(document.querySelector('form'))
                                }).then((res)=> {
                                    return res.json();
                                }).then((data)=> {
                                    if (data.code === 0) {
                                        window.location.href = 'index.html';
                                    } else {
                                        this.setState(data);
                                    }
                                }).catch((err)=> {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                {/*     网络请求  end    */
                                }
                            }
                        }}
                        className="btn"
                        name="注册"
                    />
                </form>
            </Main>
        );
    }

    _validate({inviteCode, userName, email, pwd, confirmPwd, verifyCode}) {

        /*   邀请码验证   start   */
        const inviteCodeIsNull = (inviteCode === '');
        if (inviteCodeIsNull) {
            this.setState({
                inviteCodeError: '邀请码不能为空'
            });
            return false;
        }
        /*   邀请码验证   end   */

        /*   用户名验证   start   */
        const userNameIsNull = (userName === '');
        if (userNameIsNull) {
            this.setState({
                userNameError: '用户名不能为空'
            });
            return false;
        }
        /*   用户名验证   end   */

        /*   邮箱验证   start   */
        const emailIsNull = (email === '');
        const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        const emailIsValid = (reg.test(email) === false);
        if (emailIsNull) {
            this.setState({
                emailError: '邮箱不能为空'
            });
            return false;
        } else if (emailIsValid) {
            this.setState({
                emailError: '邮箱格式错误'
            });
            return false;
        }
        /*   邮箱验证   end   */

        /*   密码验证   start   */
        const pwdIsNull = (pwd === '');
        if (pwdIsNull) {
            this.setState({
                pwdError: '密码不能为空'
            });
            return false;
        }
        const pwdTooShort = (pwd.length < 6);
        if (pwdTooShort) {
            this.setState({
                pwdError: '密码最小长度为6'
            });
            return false;
        }
        /*   密码验证   end   */

        /*   确认密码验证   start   */
        const confirmPwdIsNull = (confirmPwd === '');
        if (confirmPwdIsNull) {
            this.setState({
                confirmPwdError: '确认密码不能为空'
            });
            return false;
        }
        const confirmPwdIsRight = (confirmPwd !== pwd);
        if (confirmPwdIsRight) {
            this.setState({
                confirmPwdError: '确认密码和密码不一致'
            });
            return false;
        }
        /*   确认密码验证   end   */

        /*   验证码验证   start   */
        const verifyCodeIsNull = (verifyCode === '');
        if (verifyCodeIsNull) {
            this.setState({
                verifyCodeError: '验证码不能为空'
            });
            return false;
        }
        /*   验证码验证   end   */

        return true;
    }
}

Main.run(App);