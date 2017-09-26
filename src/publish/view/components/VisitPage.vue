<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>用户姓名</th>
                    <th>ip地址</th>
                    <th>访问时间</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in visitors">
                    <td>{{++index}}</td>
                    <td>{{item.userName}}</td>
                    <td>{{item.ip}}</td>
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
        name: 'VisitPage',
        data () {
            return {
                visitors: [],
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

                $.get(Url.VISITOR, {
                    currentPage: currentPage
                }, this).then(data=> {
                    this.visitors = data.items;
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
