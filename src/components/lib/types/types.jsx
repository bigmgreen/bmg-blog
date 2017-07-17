import './types.css';
import React, {Component} from 'react';

export default class Types extends Component {
    constructor (props) {
        super(props);
    }

    _getTypesByItems (items) {
        return items.map((item, index)=>{
            return (
                <dd key={index}><a href={item.href}>{item.name}({item.count})</a></dd>
            );
        })
    }

    render () {
        const types = this.props;
        return (
            <div>
                <dl>
                    <dt>{types.title}：</dt>
                    {this._getTypesByItems(types.items)}
                </dl>
            </div>
        );
    }
}