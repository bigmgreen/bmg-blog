<template>
    <div>
        <form class="text-left">
            <button class="btn" type="button" @click="getInviteCode">生成</button>
            <label>
                <span>邀请码是：</span>
                <output>{{inviteCode}}</output>
            </label>
        </form>
        <article>
            <div class="table-wrap">
                <table>
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>邀请码</th>
                        <th>邀请日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in items">
                        <td>{{++index}}</td>
                        <td>{{item.inviteCode}}</td>
                        <td>{{fmtDate(item.dateTime)}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pager v-bind:pageCount="pageCount" v-on:onPage="onPage"></pager>
        </article>
    </div>
</template>

<script>

    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'InvitePage',
        data () {
            return {
                items: [],
                pageCount: 0,
                inviteCode: '---'
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
                $.get(Url.INVITE, {
                    currentPage: currentPage
                }, this).then(data=> {
                    this.items = data.items;
                    this.pageCount = data.PAGE_COUNT;
                });
            },
            getInviteCode () {
                $.post(Url.GET_INVITE, false, this).then(data=> {
                    this.inviteCode = data.inviteCode;
                    this.onPage();
                });
            }
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
