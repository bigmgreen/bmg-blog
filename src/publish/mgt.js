/**
 *  入口程序
 */
import Vue from 'vue';
import Mgt from './Mgt';
import router from './view/router/mgtRouter';

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

    new Vue({
        el: '#app',
        router,
        template: '<Mgt/>',
        components: {Mgt}
    });
});
