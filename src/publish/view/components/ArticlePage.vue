<template>
    <article>
        <header class="text-right">
            <button class="btn" type="button">增加文章</button>
        </header>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>文章编号</th>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>文章类型</th>
                    <th>文章链接</th>
                    <th>文章图片路径</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>zx</td>
                    <td>contentId</td>
                    <td>html5</td>
                    <td>detail.html?id=1</td>
                    <td>imgSrc</td>
                    <td>
                        <button class="btn" type="button">编辑</button>
                        <button class="btn" type="button">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <pager></pager>
    </article>
</template>

<script>
    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'ArticlePage',
        data () {
            return {
                msg: '这是文章统计页面'
            }
        },
        components: {
            'pager': Pager
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
