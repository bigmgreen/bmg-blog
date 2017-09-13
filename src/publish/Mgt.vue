<!--    入口模板文件    -->
<template>
    <div id="app" class="section">
        <com-header></com-header>
        <div class="main">
            <main>
                <div class="right">
                    <router-view></router-view>
                </div>
            </main>
            <div class="left">
                <com-menu></com-menu>
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
    }

    .left {
        width: 200px;
        float: left;
        margin-left: -100%;
    }
</style>