import './header.css';
import React, {Component} from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const header = this.props;
        return (
            <div className={header.anchorClassName}>
                <Logo anchorClassName={header.logoClassName}
                      href={header.href}
                      src={header.src}
                      alt={header.alt}
                />
                <Nav anchorClassName={header.navClassName} item={header.item}/>
            </div>
        );
    }
}