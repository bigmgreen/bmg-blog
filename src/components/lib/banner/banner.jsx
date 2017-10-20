import './banner.css';
import React, {Component} from 'react';

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const banner = this.props;

        if (banner.src === '') {
            return null;
        }

        return (
            <div className={banner.anchorClassName}>
                <a href={banner.href}><img src={BASE_URL_IMG + banner.src} alt={banner.alt}/></a>
            </div>
        );
    }
}