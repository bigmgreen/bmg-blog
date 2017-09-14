<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>用户编号</th>
                    <th>ip地址</th>
                    <th>分享数量</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>127.0.0.1</td>
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
        name: 'SharePage',
        data () {
            return {
                msg: '这是分享统计页面'
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
