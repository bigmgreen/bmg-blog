import './button.css';
import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.className = 'btn ' + props.className;
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <button
                onClick={(e) => this.handleClick(e)}
                type={this.props.type}
                className={this.className}
            >
                {this.props.name}
            </button>
        );
    }
}