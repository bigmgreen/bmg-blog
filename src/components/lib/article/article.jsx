import './article.css';
import React, {Component} from 'react';
import Fmt from '../fmt/fmt';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    getItem (item) {
        return item.map((article, index)=> {
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

    render() {
        const article = this.props;
        return (
            <div>{this.getItem(article.item)}</div>
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
