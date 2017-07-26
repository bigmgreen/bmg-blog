import './article.css';
import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import Fmt from '../fmt/fmt';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            page: {
                type: 0,
                currentPage: 0
            },
            text: '加载更多',
            isGetData: true
        };

    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    _getItem(items) {
        return items.map((article, index)=> {
            return (
                <a key={index} href={article.href} className={article.anchorClassName}>
                    <Figure
                        anchorClassName={article.figureClassName}
                        type={article.type}
                        title={article.title}
                        src={article.src}
                        alt={article.alt}
                    />
                    <div>
                        <p>{article.content}</p>
                        <div className={article.footerClassName}>
                            <Fmt fmt={article.dateStr}/>
                            <span>（{article.markCount}）个赞</span>
                            <span>（{article.browserCount}）浏览</span>
                            <span>（{article.commentCount}）评论</span>
                        </div>
                    </div>
                </a>
            );
        });
    }

    _getData(url, param) {
        if (this.state.isGetData === false) {
            return false;
        }

        Spinner.show();
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(param),
                cache: 'no-cache'
            })
            .then((res)=> {
                return res.json();
            })
            .then((data)=> {
                let items = data.items;
                const dataIsNull = (items.length === 0);
                if (dataIsNull) {
                    this.setState({
                        text: '没有更多数据了',
                        isGetData: false
                    });
                } else {
                    this.setState({
                        items: this.state.items.concat(data.items)
                    });
                }
                Spinner.hide();
            })
            .catch((err)=> {
                if (err) {
                    console.log(err);
                }
                Spinner.hide();
            });
    }

    render() {
        return (
            <div>
                {this._getItem(this.state.items)}
                <span ref="loadData"
                      className="load"
                      onClick={this._getData.bind(this, this.props.url, this.state.page)}
                >{this.state.text}</span>
            </div>
        );
    }
}

/**
 * Figure 带标题组件
 *
 * type 文章类型
 * title 文章标题
 * src 图片地址
 * alt 图片未显示文字
 */
class Figure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const figure = this.props;
        return (
            <div className={this.props.anchorClassName}>
                <h4><span>{figure.type}</span>{figure.title}</h4>
                <div>
                    <img src={figure.src} alt={figure.alt}/>
                </div>
            </div>
        );
    }
}
