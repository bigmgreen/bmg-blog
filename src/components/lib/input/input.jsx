import './input.css';
import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this._handleInput = this._handleInput.bind(this);
        this.state = {
            value: '',
            error: '',
            name: this.props.name || this.props.id
        };

        this._oldValue = '';
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    componentDidUpdate() {
        const _inputHasNoFocus = (document.activeElement.nodeName.toUpperCase() !== 'INPUT');
        if (_inputHasNoFocus) {
            const _input = this.refs[this.state.name];
            const isError = (this.state.error !== '');
            if (isError) {
                _input.focus();
            }
        }
    }

    _handleInput(e, pattern, chineseFilter) {
        let value = this._getValue(e.target.value, this._getRegExp(pattern), chineseFilter);
        this.props.onChange(value);
    }

    _getValue(value, reg, zh) {
        if (reg && (reg.test(value) === false)) {
            value = value.substring(0, value.length - 1);

            if (reg.test(value) === false) {
                return this._oldValue;
            }
        }

        if (zh) {
            value = value.replace(/[\u4e00-\u9fa5]/g, '');
        }

        this._oldValue = value;

        return value;
    }

    _getRegExp(reg) {
        if (reg instanceof RegExp) {
            return reg;
        } else if (typeof reg === 'string') {
            return new RegExp(reg);
        }
    }

    render() {
        return (
            <div className={this.props.wrapClassName}>
                <input
                    ref={this.state.name}
                    className={this.props.inputClassName}
                    id={this.props.id}
                    name={this.state.name}
                    type={this.props.type || 'text'}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onInput={e=>this._handleInput(e, this.props.pattern, this.props.isChineseFilter)}
                    maxLength={this.props.maxLength || 20}
                />
                <span className={this.props.errorClassName}>{this.state.error}</span>
            </div>
        );
    }
}

export class NumberInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let reg = null;
        let index = null;
        if (this.props.numberType === 'float') {
            index = [1, this.props.decimalPlaces || 15].join();
            reg = new RegExp('^\\d+\\.?(\\d{' + index + '})?$');
        } else {
            reg = /^(0|[1-9]\d*)$/;
        }

        return (
            <Input
                wrapClassName={this.props.wrapClassName}
                inputClassName={this.props.inputClassName}
                errorClassName={this.props.errorClassName}
                isChineseFilter={true}
                pattern={reg}
            />
        );
    }
}

export class EmailInput extends Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
        this.state = {
            time: props.time || 60,
            countDown: false,
            text: props.text || '获取验证码'
        };
        this.time = false;
    }

    _onClick(e) {

        if (this.props.validateEmail() === false) {
            return;
        }

        if (this.time) {
            return;
        }

        let {time, countDown} = this.state;
        if (countDown === false) {
            this.props.sendEmail(()=> {
                this.time = setInterval(()=> {
                    if (time <= 1) {
                        clearInterval(this.time);
                        this.time = false;
                        this.setState({
                            time: this.props.time || 60,
                            countDown: false,
                            text: this.props.text || '获取验证码'
                        });
                        return;
                    }

                    if (typeof this.props.sendEmail !== 'function') {
                        throw new ReferenceError('sendEmail函数没有定义~');
                    }
                    this.setState({
                        countDown: true,
                        time: --time,
                        text: `${time}s后重试`
                    });

                }, 1000);
            });
        } else {
            this.setState({
                countDown: true,
            });
        }
    }

    render() {

        /* TODO  需要一个过滤输入的正则表达式   */

        return (
            <div className="input-email">
                <Input
                    {...this.props}
                    isChineseFilter={true}
                />
                <button
                    onClick={e=>this._onClick(e)}
                    className="input-email-btn"
                    type="button">{this.state.text}
                </button>
            </div>
        );
    }
}