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
                        <li onClick={e=>{this.props.onNavClick(item.type, 0)}} key={index}>
                            <a href="javascript:void(0);">{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}