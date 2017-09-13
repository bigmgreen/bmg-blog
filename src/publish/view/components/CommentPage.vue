<template>
  <div>
    <h1>bmg~~~{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CommentPage',
  data () {
    return {
      msg: '这是评论统计页面'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
