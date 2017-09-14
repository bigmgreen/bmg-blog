<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>用户编号</th>
                    <th>ip地址</th>
                    <th>访问时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>zx</td>
                    <td>127.0.0.1</td>
                    <td>2017-8-24</td>
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
        name: 'VisitPage',
        data () {
            return {

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
