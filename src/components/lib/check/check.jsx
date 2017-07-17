import './check.css';
import React,{Component} from 'react';

export default class Check extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        var check = this.props;
        return (
            <label htmlFor={check.id}>
                <input
                    type="checkbox"
                    id={check.id}
                    name={check.name || check.id}
                    value="on"
                />
                <span>{check.text}</span>
            </label>
        );
    }
}