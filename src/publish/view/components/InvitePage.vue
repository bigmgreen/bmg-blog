<template>
    <div>
        <form class="text-left">
            <button class="btn" type="button">生成</button>
            <label>
                <span>邀请码是：</span>
                <output>aaaa</output>
            </label>
        </form>
        <article>
            <div class="table-wrap">
                <table>
                    <thead>
                    <tr>
                        <th>邀请码</th>
                        <th>邀请日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>123</td>
                        <td>2017-8-24 00:00:00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pager></pager>
        </article>
    </div>
</template>

<script>

    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'InvitePage',
        data () {
            return {}
        },
        components: {
            'pager': Pager
        }
    }
</script>

<style scoped>
    form {
        padding: 1em;
    }
    label {
        margin-left: 1em;
    }
    output {
        font-weight: bold;
        font-size: 18px;
    }

</style>
