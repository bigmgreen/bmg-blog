import './banner.css';
import React, {Component} from 'react';

export default class Banner extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const banner = this.props;
        return (
            <div>
                <a href={banner.href}><img src={banner.src} alt={banner.alt}/></a>
            </div>
        );
    }
}