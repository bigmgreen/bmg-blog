import './author.css';
import React, {Component} from 'react';

export default class Author extends Component {
    constructor(props) {
        super(props);
    }

    _getInfoList(infoList) {
        return infoList.map((item, index)=> {
            return (
                <div key={index}>
                    <span>{item.name}：</span>
                    <span>{item.value}</span>
                </div>
            );
        });
    }

    render() {
        const author = this.props;
        return (
            <div>
                <h3>{author.title}</h3>
                <div>
                    <img src={author.src} alt={author.alt}/>
                </div>
                {this._getInfoList(author.infos)}
            </div>
        );
    }
}