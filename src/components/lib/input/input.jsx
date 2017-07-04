import './input.css';
import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.wrapClassName = props.wrapClassName;
        this.inputClassName = props.inputClassName;
        this.errorClassName = props.errorClassName;

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            value:''
        }
    }

    handleInput(e, pattern) {

        let value = e.target.value;
        let reg = new RegExp(pattern);

        if (reg.test(value) === false) {
            value = value.substring(0, value.length - 1);
        }
        value = value.replace(/[\u4e00-\u9fa5]/g,'');

        this.setState({
            value: value
        });
    }

    render() {
        return (
            <div className={this.wrapClassName}>
                <input className={this.inputClassName}
                       value={this.state.value}
                       onInput={e=>this.handleInput(e, this.props.pattern)}/>
                <span className={this.errorClassName}/>
            </div>
        );
    }
}