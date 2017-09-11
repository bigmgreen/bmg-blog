<template>
    <header>
        <h3>blog发布端</h3>
        <span>
            欢迎<b>{{name}}</b>登录
            <a href="#">退出</a>
        </span>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                name: 'zx'
            }
        }
    }
</script>

<style scoped>
    header {
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        padding: 0 2em;
    }
    h3 {
        font-size: 20px;
        float: left;
        font-weight: normal;
    }
    span{
        float: right;
        position: relative;
        line-height: 50px;
    }
    a {
        margin-left: 1em;
        color: #0086b3;
    }
</style>
