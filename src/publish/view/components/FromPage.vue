<template>
    <article>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>来源</th>
                    <th>来源数量</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>127.0.0.1</td>
                    <td>1</td>
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
        name: 'FromPage',
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
