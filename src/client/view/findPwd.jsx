import React, {Component} from 'react';
import Main, {Url} from '../app';
import Spinner from '../../components/lib/spinner/spinner';
import Input from '../../components/lib/input/input';
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
            verifyCode: '',
            verifyCodeError: '',
        };
    }

    _getData() {
        Spinner.show();
        fetch(Url.PAGE_INFO)
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
                    <header className="panel-title"><a href="register.html">去注册</a>或<a href="login.html">登录</a></header>
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
                            const isValidatePass = this._validate(this.state);
                            if (isValidatePass) {

                                {/*     网络请求  start    */
                                }

                                const {userName, email, verifyCode} = this.state;

                                fetch(Url.FIND_PWD, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: {
                                        userName: userName,
                                        email: email,
                                        verifyCode: verifyCode
                                    }
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
                        name="找回"
                    />
                </form>
            </Main>
        );
    }

    _validate({userName, email, verifyCode}) {
        const userNameIsNull = (userName === '');
        const emailIsNull = (email === '');
        const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        const emailIsValid = (reg.test(email) === false);

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