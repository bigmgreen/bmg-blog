import './content.css';
import React, {Component} from 'react';
import Mark from '../mark/mark';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const con = this.props;
        return (
            <article className={con.anchorClassName}>
                <h3>{con.title}</h3>
                <div>
                    <p>{con.content}</p>
                </div>
                <footer>
                    <span>{con.dateTime}</span>
                    <span><Mark />（{con.markCount}）</span>
                    <span>（{con.browserCount}）浏览</span>
                </footer>
            </article>
        );
    }
}