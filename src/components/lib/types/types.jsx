import './types.css';
import React, {Component} from 'react';

export default class Types extends Component {
    constructor (props) {
        super(props);
    }

    _getTypesByItems (items) {
        return items.map((item, index)=>{
            return (
                <dd
                    onClick={e=>{this.props.onTypesClick(item.type, 0)}}
                    key={index}
                >
                    <a href="javascript:void(0);">{item.name}({item.count})</a>
                </dd>
            );
        })
    }

    render () {
        const types = this.props;
        return (
            <div className={types.anchorClassName}>
                <dl>
                    <dt>{types.title}：</dt>
                    {this._getTypesByItems(types.items)}
                </dl>
            </div>
        );
    }
}