import './check.css';
import React,{Component} from 'react';

export default class Check extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        var check = this.props;
        return (
            <label
                className={check.wrapClassName}
                htmlFor={check.id}>
                <input
                    className={check.inputClassName}
                    type="checkbox"
                    defaultChecked
                    id={check.id}
                    name={check.name || check.id}
                    onChange={(e)=>{
                        this.props.onChange(e.target.checked);
                    }}
                />
                <span className={check.textClassName}>{check.text}</span>
            </label>
        );
    }
}