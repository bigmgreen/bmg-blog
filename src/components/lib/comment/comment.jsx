import './comment.css';
import React, {Component} from'react';
import Button from '../button/button';
import Fmt from '../fmt/fmt';
import Mark from '../mark/mark';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var com = this.props;
        return (
            <section className={com.anchorClassName}>
                <h4>({com.commentCount})评论</h4>
                <div>
                    <textarea />
                    <Button
                        type="submit"
                        onClick={()=> {
                            alert('你点击了按钮~')
                        }}
                        className="btn"
                        name="提交"
                    />
                </div>
                <CommentItem
                    commentItem={com.commentItem}
                />
                <Page
                    anchorClassName={com.pageClassName}
                    pageCount={com.pageCount}
                />
            </section>
        );
    }
}

class CommentItem extends Component {
    constructor(props) {
        super(props);
    }

    _getItem(item) {
        return item.map((_item, index)=> {
            return (
                <li key={index}>
                    <div>
                        <strong><i>{_item.critics}</i>在_<Fmt fmt={_item.dateStr}/>_说：</strong>
                        <span>
                            <Mark />（{_item.ok}）赞
                            <Mark />（{_item.no}）砖
                        </span>
                    </div>
                    <p>{_item.content}</p>
                </li>
            );
        });
    }

    render() {
        return (
            <ul>{this._getItem(this.props.commentItem)}</ul>
        );
    }
}

class Page extends Component {
    constructor(props) {
        super(props);
    }

    _getItem(len) {
        let arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(<option key={i} value={i}>{i + 1}</option>);
        }
        return arr;
    }

    render() {
        return (
            <div className={this.props.anchorClassName}>
                <span>&lt;&lt;第</span>
                <select>
                    {this._getItem(this.props.pageCount)}
                </select>
                <span>页&gt;&gt;</span>
            </div>
        );
    }
}