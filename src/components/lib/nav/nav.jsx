import './nav.css';
import React,{Component} from 'react';

export default class Nav extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ul>
                {this.props.item.map((item, index)=> {
                    return (
                        <li key={index}>
                            <a href={item.url}>{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}