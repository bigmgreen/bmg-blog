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
                      href='index.html'
                      src={header.src}
                      alt='logo图片'
                />
                <Nav
                    onNavClick={this.props.onNavClick}
                    anchorClassName={header.navClassName}
                    item={header.item}
                />
            </div>
        );
    }
}