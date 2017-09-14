<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>文章编号</th>
                    <th>文章标题</th>
                    <th>点赞数量</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>zx</td>
                    <td>50</td>
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
        name: 'MarkPage',
        data () {
            return {
                msg: '这是点赞统计页面'
            }
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
