<template>
    <div class="login">
        <div v-title>登录页</div>
        <form id="loginForm">
            <div>
                <input type="text" placeholder="用户名" maxlength="10">
            </div>
            <div>
                <input type="password" placeholder="密码" maxlength="30">
            </div>
            <button type="submit">登录</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<style scoped>
    form {
        text-align: center;
        background-color: #fff;
        border-radius: 50px;
        padding: 1em;
    }
    div{
        height: 30px;
        margin: 10px 0;
    }
</style>
