import './mark.css';
import React,{Component} from 'react';

export default class Mark extends Component {
    constructor (props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);

        this.state = {
            checked: props.checked || false
        }
    }

    _handleChange (e) {
        this.setState({
            checked: !this.state.checked
        }, ()=> {
            this.props.onChange(this.state.checked);
        })
    }

    _showByState (state) {
        if (state) {
            return '已点赞';
        } else {
            return '点赞';
        }
    }

    render() {
        var mark = this.props;
        return (
            <label htmlFor={mark.id}>
                <input
                    type="checkbox"
                    id={mark.id}
                    name={mark.name || mark.id}
                    onChange={this._handleChange}
                    checked={this.state.checked}
                />
                <span>{this._showByState(this.state.checked)}</span>
            </label>
        );
    }
}