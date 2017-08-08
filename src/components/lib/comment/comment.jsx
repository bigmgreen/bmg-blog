import './comment.css';
import React, {Component} from'react';
import Spinner from '../spinner/spinner';
import Button from '../button/button';
import Fmt from '../fmt/fmt';
import Mark from '../mark/mark';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentId: '',
            commentCount: "",
            pageCount: "",
            commentItem: [],
            value: '',
            error: '',
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    _getComment(currentPage = 0) {
        Spinner.show();
        fetch(this.props.url.GET_COMMENT,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    id: this.state.contentId,
                    currentPage: currentPage
                })
            })
            .then((res)=> {
                return res.json();
            })
            .then((data)=> {
                this.setState(data);
                Spinner.hide();
            })
            .catch((err)=> {
                if (err) {
                    console.log(err);
                }
                Spinner.hide();
            });
    }

    _commit() {

        let val = this.state.value;

        if (this._validateValue(val) === false) {
            return;
        }

        Spinner.show();
        fetch(this.props.url.COMMENT,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    id: this.state.contentId,
                    value: val
                })
            })
            .then((res)=> {
                return res.json();
            })
            .then((data)=> {
                Spinner.hide();
                this.setState(data);
            })
            .catch((err)=> {
                Spinner.hide();
                if (err) {
                    console.log(err);
                }
            });
    }

    _validateValue(val) {
        const isValNull = (val === '');

        if (isValNull) {
            this.setState({
                error: '评论不能为空'
            });
            return false;
        }

        return true;
    }

    _getTextArea (isLogin) {
        if (isLogin) {
            return (
                <textarea
                    onChange={(e)=> {
                        this.setState({
                            value: e.target.value,
                            error: ''
                        })
                    }}
                    value={this.state.value}
                />
            );
        } else {
            return (<a className="text-area" href="login.html">去登录</a>);
        }
    }

    render() {
        var com = this.state;
        return (
            <section className={this.props.anchorClassName}>
                <h4>({com.commentCount})评论</h4>
                <div>
                    {this._getTextArea(this.props.isLogin)}
                    <Button
                        errorClassName="error"
                        error={this.state.error}
                        type="submit"
                        onClick={this._commit.bind(this)}
                        className="btn"
                        name="提交"
                    />
                </div>
                <CommentItem
                    commentItem={com.commentItem}
                    contentId={com.contentId}
                    isLogin={this.props.isLogin}
                    url={this.props.url}
                />
                <Page
                    anchorClassName={this.props.pageClassName}
                    pageCount={com.pageCount}
                    onChange={this._getComment.bind(this)}
                    url={this.props.url}
                />
            </section>
        );
    }
}

class CommentItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentItem: []
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    _getItem(items) {
        const contentId = this.props.contentId
        return items.map((_item, index)=> {
            return (
                <li key={index}>
                    <div>
                        <strong><i>{_item.critics}</i>在_<Fmt fmt={_item.dateStr}/>_说：</strong>
                        <span>
                            <Mark
                                className="mark"
                                markCount={_item.markCount}
                                markId={contentId}
                                isLogin={this.props.isLogin}
                                markUrl={this.props.url.COMMENT_MARK}
                            />
                        </span>
                    </div>
                    <p>{_item.content}</p>
                </li>
            );
        });
    }

    render() {
        return (
            <ul>{this._getItem(this.state.commentItem)}</ul>
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
                <select
                    onChange={(e)=> {
                        this.props.onChange(e.target.value);
                    }}
                >{this._getItem(this.props.pageCount)}</select>
                <span>页&gt;&gt;</span>
            </div>
        );
    }
}