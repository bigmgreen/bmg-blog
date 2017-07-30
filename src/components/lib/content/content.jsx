import './content.css';
import React, {Component} from 'react';
import Mark from '../mark/mark';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            dateTime: '',
            markCount: '',
            browserCount: '',
            prev: '',
            prevTitle: '',
            next: '',
            nextTitle: '',
            contentId: '',
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    render() {
        const con = this.state;
        return (
            <article className={this.props.anchorClassName}>
                <h3>{con.title}</h3>
                <div>
                    <p>{con.content}</p>
                </div>
                <footer>
                    <span>{con.dateTime}</span>
                    <span>
                        <Mark
                            className={this.props.markClassName}
                            markCount={con.markCount}
                            markId={con.contentId}
                            markUrl={this.props.url.MARK}
                        />
                    </span>
                    <span>({con.browserCount})浏览</span>
                    <ul>
                        <li><a href={con.prev}>上一篇：{con.prevTitle}</a></li>
                        <li><a href={con.next}>下一篇：{con.nextTitle}</a></li>
                    </ul>
                </footer>
            </article>
        );
    }
}