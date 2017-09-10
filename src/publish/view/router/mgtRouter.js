/**
 * 页面路由
 */
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import World from '../components/World';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
        , {
            path: '/',
            name: 'Hello',
            component: Hello
        }
        , {
            path: '/world',
            name: 'World',
            component: World
        }
        ,
    ]
})
