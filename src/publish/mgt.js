/**
 *  入口程序
 */
import Vue from 'vue';
import Mgt from './Mgt';
import router from './view/router/mgtRouter';
import './static/common/js/url';
import './static/common/js/fetch';
import './static/common/js/fmtDate';

Vue.config.productionTip = false;

((fn)=> {

    let doc = document;
    let body = doc.body;
    let article = doc.createElement('article');
    article.id = 'app';
    body.insertBefore(article, body.firstChild);
    fn();
})(()=> {

    Vue.directive('title', {
        inserted: function (el, binding) {
            document.title = el.innerText;
            el.remove();
        }
    });

    // 简化日志打印
    window.log = window.console.log;

    new Vue({
        el: '#app',
        router,
        template: '<Mgt/>',
        components: {Mgt}
    });
});