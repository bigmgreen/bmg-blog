import './nav.css';
import React, {Component} from 'react';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    _getNav(items) {
        if (this.props.jump) {
            return this._getJumpItem(items);
        }
        return this._getItem(items);
    }

    _getJumpItem(items) {
        return items.map((item, index)=> {
            return (
                <li key={index}>
                    <a href={item.href}>{item.text}</a>
                </li>
            );
        })
    }

    _getItem(items) {
        return items.map((item, index)=> {
            return (
                <li onClick={e=> {
                    this.props.onNavClick(item.type, 0)
                }} key={index}>
                    <a href="javascript:void(0);">{item.text}</a>
                </li>
            );
        })
    }

    render() {
        return (
            <ul className={this.props.anchorClassName}>{this._getNav(this.props.items)}</ul>
        );
    }
}