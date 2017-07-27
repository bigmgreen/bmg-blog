import React, {Component} from 'react';
import Main from '../app';
import Spinner from '../../components/lib/spinner/spinner';
import Author from '../../components/lib/author/author';
import Types from '../../components/lib/types/types';
import Crumbs from '../../components/lib/crumbs/crumbs';
import Content from '../../components/lib/content/content';
import Share from '../../components/lib/share/share';
import Comment from '../../components/lib/comment/comment';
import '../static/css/detail.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {
                userName: '',
                nav: []
            },
            author: {
                title: '',
                src: '',
                infos: []
            },
            types: {
                title: '',
                items: []
            },
            content: {
                contentId: '',
                anchorClassName: '',
                title: '',
                content: '',
                dateTime: '',
                markCount: '',
                browserCount: '',
                prev: '',
                prevTitle: '',
                next: '',
                nextTitle: '',
            },
            comment: {
                contentId: '',
                commentCount: "",
                pageCount: "",
                commentItem: [],
            }
        };
    }

    _getData(id) {
        Spinner.show();
        fetch('/detail',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    id: id
                }),
                cache: 'no-cache'
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

    componentDidMount() {
        this._getData();

        window._bd_share_config = {
            "common": {
                "bdSnsKey": {},
                "bdText": "",
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "",
                "bdStyle": "0",
                "bdSize": "16"
            },
            "slide": {"type": "slide", "bdImg": "0", "bdPos": "right", "bdTop": "100"},
            "image": {"viewList": ["qzone", "tsina", "tqq", "renren", "weixin"], "viewText": "分享到：", "viewSize": "16"},
            "selectShare": {"bdContainerClass": null, "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]}
        };
        (document.getElementsByTagName('head')[0] || document.body)
            .appendChild(document.createElement('script'))
            .src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
    }

    render() {
        return (
            <Main header={this.state.header} jump={true}>
                <div className="section">
                    <div className="main">
                        <Crumbs
                            anchorClassName="crumbs"
                            title="你现在的位置："
                            item={[
                                {
                                    name: '首页>',
                                    href: 'index.html'
                                },
                                {
                                    name: '详情页'
                                }
                            ]}
                        />
                        <div className="left">
                            <Content
                                {...this.state.content}
                                markClassName="mark"
                            />
                            <Comment {...this.state.comment} />
                        </div>
                        <div className="right">
                            <Author
                                anchorClassName="author"
                                title={this.state.author.title}
                                src={this.state.author.src}
                                alt="作者头像"
                                infos={this.state.author.infos}
                            />
                            <Types
                                anchorClassName="type"
                                title={this.state.types.title}
                                items={this.state.types.items}
                                jump={true}
                            />
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

Main.run(App);