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
                        <button class="btn" type="button">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <pager v-bind:pageCount="pageCount" v-on:onPage="onPage"></pager>
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
</style>
