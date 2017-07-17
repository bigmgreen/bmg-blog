import './notice.css';
import React, {Component} from 'react';

export default class Notice extends Component {
    constructor(props) {
        super(props);
    }

    _getNotices(items) {
        return items.map((item, index)=> {
            return (
                <li key={index}>
                    <p><span>{index + 1}.</span>{item}</p>
                </li>
            );
        });
    }

    render() {
        return (
            <article>
                <ul>{this._getNotices(this.props.items)}</ul>
            </article>
        );
    }
}