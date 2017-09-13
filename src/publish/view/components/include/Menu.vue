<template>
    <aside>
        <dl>
            <dt>您的位置:<b>{{pageName}}</b></dt>
            <dd><router-link to="/articlePage">文章列表</router-link></dd>
            <dd><router-link to="/visitCountPage">访客统计</router-link></dd>
            <dd><router-link to="/markCountPage">点赞统计</router-link></dd>
            <dd><router-link to="/shareCountPage">分享统计</router-link></dd>
            <dd><router-link to="/commentCountPage">评论管理</router-link></dd>
            <dd><router-link to="/fromCountPage">来源统计</router-link></dd>
            <dd><router-link to="/inviteCountPage">邀请码</router-link></dd>
        </dl>
    </aside>
</template>

<script>
    export default {
        name: 'menu',
        data () {
            return {
                pageName: '文章列表'
            }
        }
    }
</script>

<style scoped>
    dt {
        text-align: center;
        line-height: 4em;
        font-size: 12px;
    }

    dt b {
        font-size: 14px;
    }

    dd a {
        background-color: rgba(255, 255, 255, 0.53);
        display: block;
        line-height: 3em;
        margin-top: .3em;
        text-align: center;
        border-radius: 4em 1em;
    }
</style>
