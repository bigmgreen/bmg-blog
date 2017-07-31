import './loginStatus.css';
import React, {Component} from 'react';

export default class LoginStatus extends Component {
    constructor(props) {
        super(props);
    }

    _showByState(props) {
        const USER_NAME_NOT_NULL = (typeof props.onLine === 'object')
            && (typeof props.onLine.userName === 'string')
            && props.onLine.userName.length > 0;
        if (USER_NAME_NOT_NULL) {
            return (
                <OnLine
                    welcome={props.onLine.welcome}
                    exit={props.onLine.exit}
                    exitText={props.onLine.exitText}
                    userName={props.onLine.userName}
                />
            );
        } else {
            return (
                <OffLine
                    login={props.offLine.login}
                    loginText={props.offLine.loginText}
                    register={props.offLine.register}
                    registerText={props.offLine.registerText}
                />
            );
        }
    }

    render() {
        return (
            <div className={this.props.anchorClassName}>{this._showByState(this.props)}</div>
        );
    }
}

/**
 * OffLine 未登录显示
 *
 * login 登录页面地址
 * loginText 登录显示字样
 * register 注册页面地址
 * registerText 注册显示字样
 *
 */
class OffLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var off = this.props;
        return (
            <div>
                <a href={off.login}>{off.loginText || '登录'}</a>
                <a href={off.register}>{off.registerText || '注册'}</a>
            </div>
        );
    }
}


/**
 * OnLine 登录显示
 *
 * welcome 登录欢迎显示字样
 * userName 用户名
 * exit 退出地址
 * exitText 退出显示字样
 *
 */
class OnLine extends Component {
    constructor(props) {
        super(props);
    }

    _exit (url, e) {
        e.preventDefault();
        fetch(url, {
            method:"GET"
        }).then((res)=> {
            return res.json();
        }).then((data)=> {
            const EXIT_SUCCESS = 1;
            if (data.code === EXIT_SUCCESS) {
                location.href = 'login.html'
            }
        }).catch((err)=> {
            if (err) {
                console.log(err);
            }
        })
    }

    render() {
        var on = this.props;
        return (
            <div>
                <span>{on.welcome}</span>
                <strong>{this.props.userName}</strong>
                <a href={on.exit} onClick={this._exit.bind(this, on.exit)}>{on.exitText}</a>
            </div>
        );
    }
}