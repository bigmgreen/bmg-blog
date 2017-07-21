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
            <div className={author.anchorClassName}>
                <h3>{author.title}</h3>
                <img src={author.src} alt={author.alt}/>
                {this._getInfoList(author.infos)}
            </div>
        );
    }
}