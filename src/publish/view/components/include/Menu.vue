<template>
    <aside>
        <dl>
            <dt>您的位置:<b>{{pageName}}</b></dt>
            <dd><a href="javascript:void(0);" @click="setPageName('/articlePage','文章列表')">文章列表</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/visitCountPage','访客统计')">访客统计</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/markCountPage','点赞统计')">点赞统计</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/shareCountPage','分享统计')">分享统计</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/commentCountPage','评论管理')">评论管理</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/fromCountPage','来源统计')">来源统计</a></dd>
            <dd><a href="javascript:void(0);" @click="setPageName('/inviteCountPage','邀请码')">邀请码</a></dd>
        </dl>
    </aside>
</template>

<script>
    export default {
        name: 'menu',
        data () {
            return {
                pageName: '---'
            }
        },
        mounted () {
            this.setOnlyPageName();
        },
        methods: {
            setPageName: function (path, name) {
                this.pageName = name;
                this.$router.push(path);
            },
            setOnlyPageName: function () {
                const pages = [
                    {path: '/', name: '文章列表'},
                    {path: '/articlePage', name: '文章列表'},
                    {path: '/visitCountPage', name: '访客统计'},
                    {path: '/markCountPage', name: '点赞统计'},
                    {path: '/shareCountPage', name: '分享统计'},
                    {path: '/commentCountPage', name: '评论管理'},
                    {path: '/fromCountPage', name: '来源统计'},
                    {path: '/inviteCountPage', name: '邀请码'}
                ];

                const _path = this.$route.path;

                for (const item of pages) {
                    if (_path == item.path) {
                        this.pageName = item.name;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    dt {
        text-align: center;
        line-height: 4em;
        font-size: 12px;
        margin-bottom: -.3em;
    }

    dt b {
        font-size: 14px;
    }

    dd a {
        background-color: rgba(255, 255, 255, 0.53);
        display: block;
        line-height: 3em;
        margin-top: .3em;
        text-align: center;
        border-radius: 4em 1em;
    }
</style>
