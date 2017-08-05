import React, {Component} from 'react';
import Main, {Url, bmgFetch} from '../app';
import Spinner from '../../components/lib/spinner/spinner';
import Input from '../../components/lib/input/input';
import Check from '../../components/lib/check/check';
import Button from '../../components/lib/button/button';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {
                userName: '',
                nav: []
            },
            userName: '',
            userNameError: '',
            pwd: '',
            pwdError: '',
            remember7Day: true,
            error: ''
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
                <form className="panel">
                    <header className="panel-title">
                        <a href="register.html">去注册</a>或<a href="findPwd.html">重置密码</a>
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

                                bmgFetch.post(Url.LOGIN, {
                                    userName: userName,
                                    pwd: pwd,
                                    remember7Day: remember7Day
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