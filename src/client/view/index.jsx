import React, {Component} from 'react';
import Main,{Url,bmgFetch} from '../app';
import UserImg from '../static/common/img/user.jpg';
import Spinner from '../../components/lib/spinner/spinner';
import Banner from '../../components/lib/banner/banner';
import Author from '../../components/lib/author/author';
import Types from '../../components/lib/types/types';
import Article from '../../components/lib/article/article';
import '../static/css/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                userName: '',
                nav: []
            },
            banner: {
                href: '',
                src: ''
            },
            article: {
                items: []
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
            page: {
                type: 0,
                currentPage: 0
            }
        };
    }

    _getData(type = 'all', currentPage = 0) {
        Spinner.show();
        bmgFetch.get(Url.INDEX,{
            type: type,
            currentPage: currentPage
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
        this._getData(location.search.split('=')[1]);
    }

    render() {
        return (
            <Main header={this.state.header} onNavClick={this._getData.bind(this)}>
                <div className="section">
                    <Banner
                        anchorClassName="banner"
                        href={this.state.banner.href}
                        src={this.state.banner.src}
                        alt="banner图片"
                    />
                    <div className="main">
                        <div className="left">
                            <Article
                                items={this.state.article.items}
                                page={this.state.page}
                                url={Url.INDEX_ARTICLE}
                                bmgFetch={bmgFetch}
                                text ="加载更多"
                                isGetData ={true}
                            />
                        </div>
                        <div className="right">
                            <Author
                                anchorClassName="author"
                                title={this.state.author.title}
                                src={UserImg}
                                alt="作者头像"
                                infos={this.state.author.infos}
                            />
                            <Types
                                anchorClassName="type"
                                title={this.state.types.title}
                                items={this.state.types.items}
                                onTypesClick={this._getData.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

Main.run(App);