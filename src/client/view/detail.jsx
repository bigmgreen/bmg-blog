import React from 'react';
import Main from '../app';
import Author from '../../components/lib/author/author';
import Types from '../../components/lib/types/types';
import Crumbs from '../../components/lib/crumbs/crumbs';
import Content from '../../components/lib/content/content';
import Share from '../../components/lib/share/share';
import Comment from '../../components/lib/comment/comment';
import '../static/css/detail.css';

const App = () => {
    return (
        <Main>
            <div className="section">
                <div className="main">
                    <div className="left">
                        <Crumbs
                            anchorClassName="crumbs"
                            title="你现在的位置："
                            item={[
                                {
                                    name: '首页',
                                    href: '#'
                                },
                                {
                                    name: '详情页',
                                    href: '#'
                                }
                            ]}
                        />
                        <Content
                            anchorClassName="content"
                            title="星球大战"
                            content="星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战"
                            dateTime="2017-01-01"
                            markCount="2017"
                            browserCount="2017"
                            prev="#"
                            prevTitle="星球大战"
                            next="#"
                            nextTitle="星球大战"
                        />
                        <Share
                            anchorClassName="share"
                            item={
                                [
                                    {
                                        text: '微信好友',
                                        url: 'baidu.com'
                                    },
                                    {
                                        text: '微博',
                                        url: 'baidu.com'
                                    },
                                    {
                                        text: 'QQ好友',
                                        url: 'baidu.com'
                                    },
                                    {
                                        text: '微信朋友圈',
                                        url: 'baidu.com'
                                    }
                                ]
                            }
                        />
                        <Comment
                            anchorClassName="comment"
                            pageClassName="page"
                            commentCount="2017"
                            pageCount="10"
                            commentItem={[
                                {
                                    critics:'zx',
                                    dateStr:'2017-01-01',
                                    ok:2017,
                                    no:2017,
                                    content:'abcdefg'
                                },
                                {
                                    critics:'zx',
                                    dateStr:'2017-01-01',
                                    ok:2017,
                                    no:2017,
                                    content:'abcdefg'
                                }
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