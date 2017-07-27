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

        this._markChange = this._markChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    _markChange(checked) {
        fetch('/mark', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                contentId: this.state.contentId,
                checked: checked
            }),
            cache: 'no-cache'
        }).then((res)=> {
            return res.json();
        }).then((data)=> {
            this.setState(data);
        }).catch((err)=> {
            if (err) {
                console.log(err);
            }
        });
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
                            onChange={this._markChange}
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