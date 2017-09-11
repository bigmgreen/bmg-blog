<template>
    <aside>
        <dl>
            <dt><a href="#">首页</a>&gt;&gt;{{pageName}}</dt>
            <dd><a href="#">文章列表</a></dd>
            <dd><a href="#">访客统计</a></dd>
            <dd><a href="#">点赞统计</a></dd>
            <dd><a href="#">分享统计</a></dd>
            <dd><a href="#">评论管理</a></dd>
            <dd><a href="#">来源统计</a></dd>
            <dd><a href="#">邀请码生成</a></dd>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
