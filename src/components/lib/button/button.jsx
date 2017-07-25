import './button.css';
import React, {Component} from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.classNameText = 'btn ' + props.className;
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <div className={this.props.anchorClassName + ' btn-wrap'}>
                <span className={this.props.errorClassName}>{this.props.error}</span>
                <button
                    onClick={(e) => this.handleClick(e)}
                    type={this.props.type}
                    className={this.classNameText}
                >
                    {this.props.name}
                </button>
            </div>
        );
    }
}