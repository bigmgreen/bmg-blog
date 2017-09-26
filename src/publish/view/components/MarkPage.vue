<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>文章编号</th>
                    <th>文章标题</th>
                    <th>点赞数量</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in items">
                    <td>{{++index}}</td>
                    <td>{{item.contentId}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.count}}</td>
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
        name: 'MarkPage',
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
            onPage (currentPage = 0) {

                $.get(Url.MARK, {
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
