<!--    入口模板文件    -->
<template>
    <div id="app" class="section">
        <com-header v-bind:userName="userName" ref="header"></com-header>
        <div class="main">
            <main>
                <div class="right">
                    <router-view v-on:event="setUserName"></router-view>
                </div>
            </main>
            <div class="left">
                <com-menu ref="menu"></com-menu>
            </div>
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
    import Header from './view/components/include/Header';
    import Footer from './view/components/include/Footer';
    import Menu from './view/components/include/Menu';

    export default {
        name: 'mgt',
        components: {
            'com-header': Header
            , 'com-footer': Footer
            , 'com-menu': Menu
        },
        data () {
            return {
                userName: '',
                crumbs: ''
            }
        },
        mounted () {
            if (this.userName == '') {
                $.get(Url.GET_USER, false, this).then(user=> {
                    if (Url.CODE.OK == user.code) {
                        this.userName = user.userName;
                    }
                });
            }
        },
        methods: {
            setUserName (userName) {
                this.userName = userName;
                this.$refs.menu.setOnlyPageName();
                this.$refs.header.show();
            }
        }
    }
</script>

<style scoped>
    @import "./static/common/css/reset.css";
    @import "./static/common/css/base.css";
    @import "./static/common/css/animate.min.css";

    .main {
        margin: 0 auto 20px;
    }

    .main::after {
        content: '';
        overflow: hidden;
        clear: both;
        display: block;
        visibility: hidden;
        font-size: 0;
        height: 0;
    }

    main {
        width: 100%;
        float: left;
    }

    .right {
        width: 990px;
        margin-left: 210px;
        padding: 2em;
    }

    .left {
        width: 200px;
        float: left;
        margin-left: -100%;
    }
</style>