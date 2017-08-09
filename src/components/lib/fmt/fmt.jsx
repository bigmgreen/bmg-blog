import React,{Component} from 'react';

export default class Text extends Component {
    constructor (props) {
        super(props);
    }

    _getText(text) {
        //TODO
    }

    render () {
        return (
            <span>{this._getText(this.props.fmt)}</span>
        );
    }
}