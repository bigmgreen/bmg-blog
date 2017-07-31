import React, {Component} from 'react';
import Main, {Url} from '../app';
import Input from '../../components/lib/input/input';
import Check from '../../components/lib/check/check';
import Button from '../../components/lib/button/button';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            userNameError: '',
            pwd: '',
            pwdError: '',
            remember7Day: true,
            error: ''
        };
    }

    render() {

        return (
            <Main top={false}>
                <form className="panel"
                >
                    <header className="panel-title"><a href="register.html">去注册</a>或<a href="findPwd.html">找回密码</a>
                    </header>
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="请输入用户名"
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
                    <Check
                        wrapClassName="check-wrap"
                        inputClassName="check"
                        textClassName="text"
                        text="记住登录七天"
                        name="remember7Day"
                        onChange={(value)=> {
                            this.setState({
                                remember7Day: value,
                            })
                        }}
                    />
                    <Button
                        error={this.state.error}
                        type="button"
                        onClick={(e)=> {
                            e.preventDefault();
                            const isValidatePass = this._validate(this.state);
                            if (isValidatePass) {

                                {/*     网络请求  start    */
                                }

                                const {userName, pwd, remember7Day} = this.state;

                                fetch(Url.LOGIN, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: {userName: userName, pwd: pwd, remember7Day: remember7Day,}
                                }).then((res)=> {
                                    return res.json();
                                }).then((data)=> {
                                    const LOGIN_SUCCESS = 1;
                                    if (data.code === LOGIN_SUCCESS) {
                                        location.href = 'index.html';
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
                        name="登录"
                    />
                </form>
            </Main>
        );
    }

    _validate({userName, pwd}) {
        const userNameIsNull = (userName === '');
        const pwdIsNull = (pwd === '');

        if (userNameIsNull) {
            this.setState({
                userNameError: '用户名不能为空'
            });
            return false;
        }

        if (pwdIsNull) {
            this.setState({
                pwdError: '密码不能为空'
            });
            return false;
        }

        return true;
    }
}
Main.run(App);