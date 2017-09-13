<template>
    <div>
        <h1>bmg~~~{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'ArticlePage',
        data () {
            return {
                msg: '这是文章统计页面'
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
