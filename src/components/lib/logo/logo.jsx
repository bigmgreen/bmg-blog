import './logo.css';
import React, {Component} from 'react';

export  default class Logo extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <a href={this.props.href}><img src={this.props.src} alt={this.props.alt}/></a>
            </div>
        );
    }
}