<template>
    <aside>
        <dl>
            <dt>您的位置:<b>{{pageName}}</b></dt>
            <dd><a href="#">文章列表</a></dd>
            <dd><a href="#">访客统计</a></dd>
            <dd><a href="#">点赞统计</a></dd>
            <dd><a href="#">分享统计</a></dd>
            <dd><a href="#">评论管理</a></dd>
            <dd><a href="#">来源统计</a></dd>
            <dd><a href="#">邀请码</a></dd>
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
