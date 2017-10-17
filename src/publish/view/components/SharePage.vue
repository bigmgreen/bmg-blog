<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>分享人</th>
                    <th>分享文章标题</th>
                    <th>分享日期</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in items">
                    <td>{{++index}}</td>
                    <td>{{item.userName}}</td>
                    <td>{{item.title}}</td>
                    <td>{{fmtDate(item.dateTime)}}</td>
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
        name: 'SharePage',
        data () {
            return {
                items: [],
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
                $.get(Url.SHARE, {
                    currentPage: currentPage
                }, this).then(data=> {
                    this.items = data.items;
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
