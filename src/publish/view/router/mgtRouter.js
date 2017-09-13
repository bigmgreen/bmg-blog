/**
 * 页面路由
 */
import Vue from 'vue';
import Router from 'vue-router';
import ArticlePage from '../components/ArticlePage';
import VisitPage from '../components/VisitPage';
import MarkPage from '../components/MarkPage';
import SharePage from '../components/SharePage';
import CommentPage from '../components/CommentPage';
import FromPage from '../components/FromPage';
import InvitePage from '../components/InvitePage';
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
            name: 'articlePage',
            component: ArticlePage
        }
        , {
            path: '/articlePage',
            name: 'articlePage',
            component: ArticlePage
        }
        , {
            path: '/visitCountPage',
            name: 'visitCountPage',
            component: VisitPage
        }
        , {
            path: '/markCountPage',
            name: 'markCountPage',
            component: MarkPage
        }
        , {
            path: '/shareCountPage',
            name: 'shareCountPage',
            component: SharePage
        }
        , {
            path: '/commentCountPage',
            name: 'commentCountPage',
            component: CommentPage
        }
        , {
            path: '/fromCountPage',
            name: 'fromCountPage',
            component: FromPage
        }
        , {
            path: '/inviteCountPage',
            name: 'inviteCountPage',
            component: InvitePage
        }
        ,
    ]
})
