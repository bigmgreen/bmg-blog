import './crumbs.css';
import React,{Component} from 'react';
export default class Crumbs extends Component {
    constructor(props) {
        super(props);
    }

    _getDd (item) {
        return item.map((_item, index)=> {
           return (
               <dd key={index}><a href={_item.href}>{_item.name}</a></dd>
           );
        });
    }

    render () {
        const crumbs = this.props;
        return (
            <dl className={crumbs.anchorClassName}>
                <dt>{crumbs.title}</dt>
                {this._getDd(crumbs.item)}
            </dl>
        );
    }
}