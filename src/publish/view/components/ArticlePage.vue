<template>
    <article>
        <header class="text-right">
            <button class="btn" type="button">增加文章</button>
        </header>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>文章编号</th>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>文章类型</th>
                    <th>文章链接</th>
                    <th>文章图片路径</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in articles">
                    <td>{{++index}}</td>
                    <td>{{item.contentId}}</td>
                    <td :title="item.title"><p class="em-4">{{item.title}}</p></td>
                    <td>{{fmtDate(item.dateTime)}}</td>
                    <td>{{item.type}}</td>
                    <td :title="item.href"><p class="em-4">{{item.href}}</p></td>
                    <td :title="item.src"><p class="em-8">{{item.src}}</p></td>
                    <td>
                        <button class="btn" type="button">编辑</button>
                        <button class="btn" type="button" @click="showDelModal(item.contentId)">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <pager v-bind:pageCount="pageCount" v-on:onPage="onPage"></pager>
        <div v-if="isShowDelModal" class="modal">
            <div class="modal-content">
                <p>确定删除这篇文章吗？</p>
                <div>
                    <button type="button" @click="deleteArticle" class="modal-btn modal-btn-yes">删除</button>
                    <button type="button" @click="isShowDelModal=false" class="modal-btn modal-btn-no">取消</button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'ArticlePage',
        data () {
            return {
                articles: [],
                pageCount: 0,
                isShowDelModal:false,
                contentId: -1
            }
        },
        components: {
            'pager': Pager
        },
        mounted () {
            this.onPage();
        },
        methods: {
            fmtDate(millisecond) {
                return fmtDate(millisecond);
            },
            showDelModal(contentId) {
                this.isShowDelModal = true;
                this.contentId = contentId;
            },
            deleteArticle () {
                $.post(Url.DELETE, {
                    contentId: this.contentId
                }, this).then(()=> {
                    this.onPage();
                    this.isShowDelModal = false;
                });
            },
            onPage (currentPage = 0) {

                $.get(Url.INDEX, {
                    type: 'all',
                    currentPage: currentPage
                }, this).then(data=> {
                    this.articles = data.items;
                    this.pageCount = data.PAGE_COUNT;
                });
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .modal:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal .modal-content {
        position: absolute;
        z-index: 10;
        width: 300px;
        height: 140px;
        background-color: #fff;
        text-align: center;
        border-radius: 10px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .modal p {
        line-height: 7;
    }

    .modal .modal-btn {
        border: 0 none;
        outline: 0 none;
        color: #fff;
        padding: 7px 18px;
        border-radius: 40%;
        cursor: pointer;
    }

    .modal .modal-btn-yes {
        background-color: rgba(222, 15, 15, 0.8);
    }

    .modal .modal-btn-no {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
