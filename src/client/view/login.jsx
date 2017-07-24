import React, {Component} from 'react';
import Main from '../app';
import  Input from '../../components/lib/input/input';
import  Check from '../../components/lib/check/check';
import Button from '../../components/lib/button/button';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nameError: '',
            pwd: '',
            pwdError: '',
            remember7Day: true
        };
    }

    render() {

        return (
            <Main>
                <form className="panel"
                >
                    <header className="panel-title"><a href="register.html">去注册</a>或<a href="findPwd.html">找回密码</a>
                    </header>
                    <Input
                        wrapClassName="input-wrap"
                        inputClassName="input"
                        errorClassName="error"
                        placeholder="请输入用户名"
                        value={this.state.name}
                        error={this.state.nameError}
                        name="userName"
                        onChange={(value)=> {
                            this.setState({
                                name: value,
                                nameError: ''
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
                        name="password"
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
                        type="button"
                        onClick={()=> {
                            const isValidatePass = this._validate(this.state);
                            if (isValidatePass) {

                                {/*     网络请求  start    */}
                                fetch('/login', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: new FormData(document.querySelector('form'))
                                });
                                {/*     网络请求  end    */}
                            }
                        }}
                        className="btn"
                        name="登录"
                    />
                </form>
            </Main>
        );
    }

    _validate({name, pwd}) {
        const nameIsNull = (name === '');
        const pwdIsNull = (pwd === '');

        if (nameIsNull) {
            this.setState({
                nameError: '用户名不能为空'
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