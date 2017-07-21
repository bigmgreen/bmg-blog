import './nav.css';
import React,{Component} from 'react';

export default class Nav extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ul className={this.props.anchorClassName}>
                {this.props.item.map((item, index)=> {
                    return (
                        <li key={index}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}