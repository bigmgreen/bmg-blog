import React from 'react';
import Main from '../app';
import Banner from '../../components/lib/banner/banner';
import Author from '../../components/lib/author/author';
import Types from '../../components/lib/types/types';
import Article from '../../components/lib/article/article';
import '../static/css/index.css';

const App = () => {
    return (
        <Main>
            <div className="section">
                <Banner
                    anchorClassName="banner"
                    href="https://www.baidu.com/"
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                    alt="banner图片"
                />
                <div className="main">
                    <div className="left">
                        <Article
                            item={[
                                {
                                    anchorClassName: 'article-style',
                                    figureClassName: "figure",
                                    footerClassName: "article-footer",
                                    href: "detail.html",
                                    type: "html5",
                                    title: "星球大战",
                                    src: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                                    alt: "bmg",
                                    content: "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                                    dateStr: "2015-1-1",
                                    markCount: "2017",
                                    browserCount: "2017",
                                    commentCount: "2017",
                                },
                                {
                                    anchorClassName: 'article-style',
                                    figureClassName: "figure",
                                    footerClassName: "article-footer",
                                    href: "detail.html",
                                    type: "html5",
                                    title: "星球大战",
                                    src: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                                    alt: "bmg",
                                    content: "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                                    dateStr: "2015-1-1",
                                    markCount: "2017",
                                    browserCount: "2017",
                                    commentCount: "2017",
                                },
                                {
                                    anchorClassName: 'article-style',
                                    figureClassName: "figure",
                                    footerClassName: "article-footer",
                                    href: "detail.html",
                                    type: "html5",
                                    title: "星球大战",
                                    src: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                                    alt: "bmg",
                                    content: "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                                    dateStr: "2015-1-1",
                                    markCount: "2017",
                                    browserCount: "2017",
                                    commentCount: "2017",
                                },
                                {
                                    anchorClassName: 'article-style',
                                    figureClassName: "figure",
                                    footerClassName: "article-footer",
                                    href: "detail.html",
                                    type: "html5",
                                    title: "星球大战",
                                    src: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
                                    alt: "bmg",
                                    content: "星球大战星球大战球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大",
                                    dateStr: "2015-1-1",
                                    markCount: "2017",
                                    browserCount: "2017",
                                    commentCount: "2017",
                                },
                            ]}
                        />
                    </div>
                    <div className="right">
                        <Author
                            anchorClassName="author"
                            title="作者"
                            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
                            alt="作者头像"
                            infos={[
                                {
                                    name: '名称',
                                    value: 'zxover'
                                },
                                {
                                    name: '专业',
                                    value: 'web前端'
                                },
                                {
                                    name: '手机',
                                    value: '18388888888'
                                },
                                {
                                    name: '邮箱',
                                    value: '1@163.com'
                                },
                                {
                                    name: '简介',
                                    value: '除了帅气以外再也没有拿得出手的技术了'
                                }
                            ]}
                        />
                        <Types
                            anchorClassName="type"
                            title="分类"
                            items={[
                                {
                                    href: '#',
                                    name: 'JavaScript',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name: 'css',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name: 'html5',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name: 'nodeJs',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name: '面试题',
                                    count: 2017
                                },
                                {
                                    href: '#',
                                    name: '其他',
                                    count: 2017
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </Main>
    );
};

Main.run(App);