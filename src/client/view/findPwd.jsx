import React, {Component} from 'react';
import Main, {Url, bmgFetch} from '../app';
import Spinner from '../../components/lib/spinner/spinner';
import Input, {EmailInput} from '../../components/lib/input/input';
import Button from '../../components/lib/button/button';
import VerifyCode from '../../components/lib/verifyCode/verifyCode';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userNameError: '',
            email: '',
            emailError: '',
            emailVerifyCode: '',
            emailVerifyCodeError: '',
            pwd: '',
            pwdError: '',
            confirmPwd: '',
            confirmPwdError: '',
            verifyCode: '',
            verifyCodeError: '',
        };
    }

    _getData() {
        Spinner.show();
        bmgFetch.get(Url.PAGE_INFO)
            .then((res)=> {
                return res.json();
            })
            .then((data)=> {
                this.setState(data);
                Spinner.hide();
            })
            .catch((err)=> {
                if (err) {
                    console.log(err);
                }
                Spinner.hide();
            });
    }

    componentDidMount() {
        this._getData();
    }

    render() {
        return (
            <Main
                top={false}
                header={this.state.header}
                onNavClick={this._getData.bind(this)}
                jump={true}
            >
                <form className="panel"
                >
                    <header className="panel-title">
                        <a href="register.html">去注册</a>或<a href="login.html">登录</a>
                    </header>
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
                    <EmailInput
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
                        validateEmail={()=> {
                            const email = this.state.email;
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
                        }}
                        sendEmail={(func)=> {
                            bmgFetch.post(Url.GET_EMAIL_CODE, {
                                email: this.state.email
                            }).then((res)=> {
                                return res.json();
                            }).then((data)=> {
                                const SEND_SUCCESS = 1;
                                if (data.code === SEND_SUCCESS) {
                                    func();
                                } else {
                                    this.setState(data);
                                }
                            }).catch((err)=> {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        }}
                    />
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="邮箱验证码"
                        value={this.state.emailVerifyCode}
                        error={this.state.emailVerifyCodeError}
                        name="emailVerifyCode"
                        onChange={(value)=> {
                            this.setState({
                                emailVerifyCode: value,
                                emailVerifyCodeError: ''
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
                        src={Url.FIND_PWD_VERIFY_CODE}
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
                            this.setState({
                                userNameError: '',
                                emailError: '',
                                emailVerifyCodeError: '',
                                pwdError: '',
                                confirmPwdError: '',
                                verifyCodeError: ''
                            });
                            const isValidatePass = this._validate(this.state);
                            if (isValidatePass) {

                                {/*     网络请求  start    */
                                }

                                const {userName, email, emailVerifyCode, pwd, verifyCode} = this.state;

                                bmgFetch.post(Url.FIND_PWD, {
                                    userName: userName,
                                    email: email,
                                    emailVerifyCode: emailVerifyCode,
                                    pwd: pwd,
                                    verifyCode: verifyCode
                                }).then((res)=> {
                                    return res.json();
                                }).then((data)=> {
                                    const FIND_SUCCESS = 1;
                                    if (data.code === FIND_SUCCESS) {
                                        window.location.href = 'login.html';
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
                        name="重置"
                    />
                </form>
            </Main>
        );
    }

    _validate({userName, email, emailVerifyCode, pwd, confirmPwd, verifyCode}) {
        const userNameIsNull = (userName === '');
        const emailIsNull = (email === '');
        const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        const emailIsValid = (reg.test(email) === false);
        const emailVerifyCodeIsNull = (emailVerifyCode === '');
        const verifyCodeIsNull = (verifyCode === '');

        if (userNameIsNull) {
            this.setState({
                userNameError: '用户名不能为空'
            });
            return false;
        }

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

        if (emailVerifyCodeIsNull) {
            this.setState({
                emailVerifyCodeError: '邮箱验证码不能为空'
            });
            return false;
        }

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

        if (verifyCodeIsNull) {
            this.setState({
                verifyCodeError: '验证码不能为空'
            });
            return false;
        }

        return true;
    }
}

Main.run(App);