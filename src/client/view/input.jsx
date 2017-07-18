import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this._handleInput = this._handleInput.bind(this);
        this.state = {
            value: ''
        }

        this._oldValue = '';
    }

    _handleInput(e, pattern, chineseFilter) {
        let value = this._getValue(e.target.value, this._getRegExp(pattern), chineseFilter);
        this.setState({
            value: value
        });
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
                <input className={this.props.inputClassName}
                       value={this.state.value}
                       onInput={e=>this._handleInput(e, this.props.pattern, this.props.isChineseFilter)}
                       maxLength={this.props.maxLength}
                />
                <span className={this.props.errorClassName}/>
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