<!--    入口模板文件    -->
<template>
    <div id="app">
        <com-header></com-header>
        <router-view></router-view>
        <com-menu></com-menu>
        <com-footer></com-footer>
    </div>
</template>

<script>
    import Header from './view/components/Header';
    import Footer from './view/components/Footer';
    import Menu from './view/components/Menu';

    export default {
        name: 'mgt',
        components: {
            'com-header': Header
            , 'com-footer': Footer
            , 'com-menu': Menu
        }
    }
</script>

<link rel="stylesheet" href="./static/common/css/reset.css">
<link rel="stylesheet" href="./static/common/css/base.css">
<link rel="stylesheet" href="./static/common/css/animate.min.css">