<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>文章编号</th>
                    <th>文章标题</th>
                    <th>评论人</th>
                    <th>评论内容</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>title</td>
                    <td>zx</td>
                    <td>评论内容</td>
                </tr>
                </tbody>
            </table>
        </div>
        <pager></pager>
    </article>
</template>

<script>
    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'CommentPage',
        data () {
            return {}
        },
        components: {
            'pager': Pager
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
