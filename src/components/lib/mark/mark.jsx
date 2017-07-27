import './web-font/iconfont.css';
import './mark.css';
import React,{Component} from 'react';

export default class Mark extends Component {
    constructor (props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);

        this.state = {
            checked: false,
            markCount: 0
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
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
            return <i className="iconfont icon-dianzan1"></i>;
        } else {
            return <i className="iconfont icon-dianzan"></i>;
        }
    }

    render() {
        var mark = this.state;
        console.log(mark)
        return (
            <label className={this.props.className} htmlFor={mark.id}>
                {this._showByState(mark.checked)}
                <input
                    type="checkbox"
                    id={mark.id}
                    name={mark.name || mark.id}
                    onChange={this._handleChange}
                    checked={mark.checked}
                />
                <span>({mark.markCount})</span>
            </label>
        );
    }
}